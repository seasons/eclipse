import React, { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import {
  Dimensions,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native"
import { Box, Flex, Sans, Spacer } from "@/elements"
import { TrackSchema, useTracking } from "@/helpers/track"
import { space } from "@/helpers/space"
import * as Animatable from "react-native-animatable"
import { PRODUCT_ASPECT_RATIO } from "@/helpers/constants"
import { VariantSizes } from "../VariantSizes"
import { ProgressiveImage } from "../Image/ProgressiveImage"

export const ProductsRail: React.FC<{
  items: any[]
  title?: string
  onViewAll?: () => void
  large?: boolean
}> = ({ items, title, large, onViewAll }) => {
  const navigation = useNavigation()
  const [currentPage, setCurrentPage] = useState(1)
  const tracking = useTracking()
  let slideWidth = 144

  if (large) {
    const maxWidth = Dimensions.get("window").width - 96
    slideWidth = maxWidth < 280 ? maxWidth : 280
  }

  const onScroll = (e) => {
    const newPageNum = Math.round(
      e.nativeEvent.contentOffset.x / slideWidth + 1
    )

    if (newPageNum !== currentPage) {
      tracking.trackEvent({
        actionName: TrackSchema.ActionNames.CarouselSwiped,
        actionType: TrackSchema.ActionTypes.Swipe,
        slideIndex: newPageNum,
        contextModule: title,
      })
      setCurrentPage(newPageNum)
    }
  }

  if (!items.length) {
    return null
  }

  return (
    <Box mb={3} pl={2}>
      <Flex
        flexDirection="row"
        flexWrap="nowrap"
        justifyContent="space-between"
      >
        <Sans size="4">{title}</Sans>
        {onViewAll && (
          <TouchableOpacity onPress={onViewAll}>
            <Box px={2}>
              <Sans size="4" style={{ textDecorationLine: "underline" }}>
                View all
              </Sans>
            </Box>
          </TouchableOpacity>
        )}
      </Flex>
      <Spacer mt={1} />
      <FlatList
        data={items}
        renderItem={({ item }: { item: any; index: number }) => {
          const image = item?.images?.[0]?.url as any
          const brandName = item.brand && item.brand.name
          return (
            <Animatable.View animation="fadeIn" duration={300}>
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate("Product", {
                    id: item.id,
                    slug: item.slug,
                    name: item.name,
                  })
                }
              >
                <Box mr={0.5} style={{ width: slideWidth }}>
                  <ProgressiveImage
                    // @ts-ignore
                    source={{ uri: image }}
                    style={{
                      width: slideWidth,
                      height: slideWidth * PRODUCT_ASPECT_RATIO,
                    }}
                  />
                  <Spacer mb={0.5} />
                  {!!brandName && <Sans size="2">{brandName}</Sans>}
                  {item.variants && (
                    <VariantSizes size="2" variants={item.variants} />
                  )}
                </Box>
              </TouchableWithoutFeedback>
            </Animatable.View>
          )
        }}
        keyExtractor={(item: any, index: number) => item.id + index}
        showsHorizontalScrollIndicator={false}
        horizontal
        onScroll={onScroll}
        overScrollMode="always"
        snapToAlignment="start"
        decelerationRate="fast"
        scrollEventThrottle={299}
        directionalLockEnabled={true}
        snapToInterval={slideWidth + space(0.5)}
      />
    </Box>
  )
}
