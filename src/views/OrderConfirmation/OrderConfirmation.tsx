import { TrackSchema, useTracking, color, space } from "@/helpers"
import {
  Container,
  FixedButton,
  Separator,
  Loader,
  SectionHeader,
  LineItem,
  OrderItem,
} from "@/components"
import { Box, Flex, Sans, Spacer } from "@/elements"
import React from "react"
import { ScrollView } from "./StyledOrderConfirmation"
import { CheckCircled } from "@/icons/CheckCircled"
import { OrderFragment_Customer } from "@/generated/OrderFragment_Customer"
import {
  OrderFragment_Order,
  OrderFragment_Order_lineItems_productVariant_product,
} from "@/generated/OrderFragment_Order"

type Props = {
  windowWidth: number
  order: OrderFragment_Order
  customer: OrderFragment_Customer
  onDonePressed: () => void
  onOrderItemPressed: (
    product: OrderFragment_Order_lineItems_productVariant_product
  ) => void
}

export const OrderConfirmation: React.FC<Props> = ({
  windowWidth,
  order,
  customer,
  onDonePressed,
  onOrderItemPressed,
}) => {
  const tracking = useTracking()

  console.log("order", order)

  const address = customer?.detail?.shippingAddress
  const productVariantItems = order?.lineItems?.filter(
    (i) => !!i.productVariant
  )
  const needsShipping =
    order?.lineItems?.some((item) => item.needShipping) && order.type !== "New"

  const handleDonePressed = () => {
    tracking.trackEvent({
      actionName: TrackSchema.ActionNames.CloseOrderConfirmationTapped,
      actionType: TrackSchema.ActionTypes.Tap,
    })
    onDonePressed()
  }

  if (!order) {
    return (
      <>
        <Loader />
      </>
    )
  }

  return (
    <Container insetsTop insetsBottom={false} backgroundColor="white100">
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Box px={2}>
          <Spacer mb={90} />
          <CheckCircled backgroundColor={color("green100")} />
          <Spacer mb={3} />
          <Box pb={1}>
            <Sans size="7" color="black100">
              {needsShipping ? "We've got your order" : "It's all yours"}
            </Sans>
          </Box>
          <Box mb={4}>
            <Sans size="4" color="black50">
              {needsShipping
                ? "We've emailed you a confirmation and we'll notify you when it's out for delivery."
                : "We've emailed you an order confirmation and cleared this item from your bag."}
            </Sans>
          </Box>
          {!!order && (
            <Box mb={1}>
              <LineItem
                windowWidth={windowWidth}
                leftText="Order number:"
                rightText={order?.orderNumber}
                color="black100"
              />
              <Spacer mb={1} />
              <Separator />
              <Spacer mb={2} />
              <LineItem
                windowWidth={windowWidth}
                leftText="Total"
                rightText={(order?.total / 100).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
                color="black100"
              />
              <Spacer mb={1} />
              <Separator />
            </Box>
          )}
          {!!address && needsShipping && (
            <Box mb={1}>
              <Flex
                flexDirection="row"
                width="100%"
                justifyContent="space-between"
              >
                <Flex flexDirection="row" pr={2}>
                  <Sans size="4" color="black100">
                    Shipping
                  </Sans>
                </Flex>
                <Flex style={{ maxWidth: windowWidth - 120 }}>
                  <Sans
                    size="4"
                    color="black100"
                    style={{ textAlign: "right" }}
                  >
                    {`${address.address1}${
                      address.address2 ? " " + address.address2 : ""
                    },`}
                  </Sans>
                  <Sans
                    size="4"
                    color="black100"
                    style={{ textAlign: "right" }}
                  >
                    {`${address.city}, ${address.state} ${address.zipCode}`}
                  </Sans>
                </Flex>
              </Flex>
            </Box>
          )}
          {needsShipping && (
            <Box mb={2}>
              <Spacer mb={1} />
              <Separator />
              <Spacer mb={1} />
              <Flex
                flexDirection="row"
                width="100%"
                justifyContent="space-between"
              >
                <Flex flexDirection="row" pr={2}>
                  <Sans size="4" color="black100">
                    Delivery
                  </Sans>
                </Flex>
                <Flex>
                  <Sans
                    size="4"
                    color="black100"
                    style={{ textAlign: "right" }}
                  >
                    5-day shipping
                  </Sans>
                  <Sans
                    size="4"
                    color="black100"
                    style={{ textAlign: "right" }}
                  >
                    UPS Ground
                  </Sans>
                </Flex>
              </Flex>
            </Box>
          )}
          <Box mb={5} pt={2}>
            <SectionHeader
              title={productVariantItems?.length === 1 ? "Item" : "Items"}
            />
            <Box mt={1} mb={4}>
              {productVariantItems?.map((item, i) => {
                return (
                  <Box key={item.productVariant?.id}>
                    <OrderItem
                      productVariant={item.productVariant}
                      onPress={onOrderItemPressed}
                    />
                    <Spacer mb={1} />
                    {i !== productVariantItems.length - 1 && <Separator />}
                    <Spacer mb={1} />
                  </Box>
                )
              })}
            </Box>
          </Box>
        </Box>
      </ScrollView>
      <FixedButton positionBottom={space(2)} onPress={handleDonePressed} block>
        Done
      </FixedButton>
    </Container>
  )
}
