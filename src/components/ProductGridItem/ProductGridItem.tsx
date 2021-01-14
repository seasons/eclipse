import { Flex, Sans, Spacer } from "@/elements"
import { Box } from "@/elements/Box"
import { PRODUCT_ASPECT_RATIO } from "@/helpers/constants"
import { TrackSchema, useTracking } from "@/helpers/track"
import { useNavigation } from "@react-navigation/native"
import React, { RefObject } from "react"
import { Dimensions, TouchableWithoutFeedback } from "react-native"
import { FadeInImage } from "../FadeInImage"
import { VariantSizes } from "../VariantSizes"

const ProductGridItemComponent: React.FC<{
  flatListRef?: RefObject<any>
  product: any
  addLeftSpacing?: boolean
  showBrandName?: boolean
}> = ({ flatListRef, product, addLeftSpacing, showBrandName }) => {
  const tracking = useTracking()
  const navigation = useNavigation()

  const itemWidth = Dimensions.get("window").width / 2 - 2
  const imageHeight = itemWidth * PRODUCT_ASPECT_RATIO
  const image = product?.images?.[0]?.url
  const productName = product?.name
  const brandName = product?.brand?.name

  return (
    <TouchableWithoutFeedback
      key={product.id}
      onPress={() => {
        tracking.trackEvent({
          actionName: TrackSchema.ActionNames.ProductTapped,
          actionType: TrackSchema.ActionTypes.Tap,
          productSlug: product.slug,
          productId: product.id,
          productName,
        })
        navigation.navigate("Product", {
          id: product.id,
          slug: product.slug,
          name: product.name,
        })
        if (!!flatListRef?.current) {
          // If the flatList is passed down we scroll to the top when the page is reloaded
          // this is used for when the product view is being reloaded with a new product
          flatListRef?.current?.scrollToOffset?.({ animated: true, offset: 0 })
        }
      }}
    >
      <Box mr={addLeftSpacing ? 0.5 : 0} mb={0.5} width={itemWidth}>
        <FadeInImage
          source={{ uri: image }}
          style={{ width: itemWidth, height: imageHeight }}
        />
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Box my={0.5} mx={1}>
            {(!!productName || !!brandName) && (
              <Sans size="2" style={{ maxWidth: itemWidth - 50 }}>
                {!!showBrandName && brandName !== "Vintage"
                  ? brandName
                  : productName}
              </Sans>
            )}
            <VariantSizes size="2" variants={product?.variants} />
          </Box>
          <Box mt={0.5}>
            <SaveProductButton
              grayStroke
              height={16}
              width={12}
              product={product}
              onPressSaveButton={() => {
                tracking.trackEvent({
                  actionName: TrackSchema.ActionNames.SaveProductButtonTapped,
                  actionType: TrackSchema.ActionTypes.Tap,
                })
              }}
            />
          </Box>
        </Flex>
        <Spacer mb={0.5} />
      </Box>
    </TouchableWithoutFeedback>
  )
}

export const ProductGridItem = React.memo(ProductGridItemComponent)
