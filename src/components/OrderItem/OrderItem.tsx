import { Box, Flex, Sans } from "@/elements"
import { OrderFragment_lineItems_productVariant } from "@/generated/OrderFragment"
import { ProgressiveImage } from "@/components"
import React from "react"
import { TouchableWithoutFeedback } from "react-native"
import styled from "styled-components/native"
import { PRODUCT_ASPECT_RATIO } from "@/helpers/constants"

type OrderItemProps = {
  productVariant: OrderFragment_lineItems_productVariant
  onPress: () => void
}

export const OrderItem: React.FC<OrderItemProps> = ({
  productVariant,
  onPress,
}) => {
  const product = productVariant?.product
  if (!product) {
    return null
  }

  const imageURL = product?.images?.[0]?.url
  const variantSize = productVariant?.displayLong?.toLowerCase()

  return (
    <Box key={product.id}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Container flexDirection="row">
          <Flex
            style={{ flex: 2 }}
            flexWrap="nowrap"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Sans size="4">{product.brand.name}</Sans>
              <Sans size="4" color="black50">
                {product.name}
              </Sans>
              {!!variantSize && (
                <Sans size="4" color="black50">
                  Size {variantSize}
                </Sans>
              )}
            </Box>
          </Flex>
          <Flex
            style={{ flex: 2 }}
            flexDirection="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            {!!imageURL && (
              <ProgressiveImage
                // @ts-ignore
                style={{ height: 170 * PRODUCT_ASPECT_RATIO, width: 170 }}
                resizeMode="contain"
                source={{ uri: imageURL }}
              />
            )}
          </Flex>
        </Container>
      </TouchableWithoutFeedback>
    </Box>
  )
}

const Container = styled(Flex)`
  background: white;
  overflow: hidden;
  height: 210px;
`
