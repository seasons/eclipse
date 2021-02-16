import { TrackSchema, useTracking, color, space } from "@/helpers"
import {
  Container,
  FixedBackArrow,
  FixedButton,
  Separator,
  Loader,
  SectionHeader,
  LineItem,
  OrderItem,
} from "@/components"
import { Box, Flex, Sans, Spacer } from "@/elements"
import {
  OrderFragment,
  OrderFragment_lineItems_productVariant_product,
} from "@/generated/OrderFragment"
import { CustomerOrderFragment } from "@/generated/CustomerOrderFragment"
import React from "react"
import { ScrollView } from "react-native"
import { CheckCircled } from "@/icons/CheckCircled"

type Props = {
  windowWidth: number
  order: OrderFragment
  customer: CustomerOrderFragment
  onBackPressed: () => void
  onDonePressed: () => void
  onOrderItemPressed: (
    product: OrderFragment_lineItems_productVariant_product
  ) => void
}

export const OrderConfirmation: React.FC<Props> = ({
  windowWidth,
  order,
  customer,
  onBackPressed,
  onDonePressed,
  onOrderItemPressed,
}) => {
  const tracking = useTracking()

  const address = customer?.detail?.shippingAddress
  const productVariantItems = order?.lineItems?.filter(
    (i) => !!i.productVariant
  )

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
        <FixedBackArrow onPress={onBackPressed} variant="whiteBackground" />
        <Loader />
      </>
    )
  }

  return (
    <Container insetsTop insetsBottom={false} backgroundColor="white100">
      <FixedBackArrow onPress={onBackPressed} variant="whiteBackground" />
      <Flex style={{ flex: 1 }} px={2}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <Spacer mb={80} />
          <CheckCircled backgroundColor={color("green100")} />
          <Spacer mb={4} />
          <Box pb={1}>
            <Sans size="7" color="black100">
              We've got your order
            </Sans>
          </Box>
          <Box mb={4}>
            <Sans size="4" color="black50">
              We've emailed you a confirmation and we'll notify you when it's
              out for delivery.
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
            </Box>
          )}
          {!!address && (
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
          <Box mb={4}>
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
                <Sans size="4" color="black100" style={{ textAlign: "right" }}>
                  5-day shipping
                </Sans>
                <Sans size="4" color="black100" style={{ textAlign: "right" }}>
                  UPS Ground
                </Sans>
              </Flex>
            </Flex>
          </Box>
          <Box mb={5}>
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
        </ScrollView>
      </Flex>
      <FixedButton positionBottom={space(2)} onPress={handleDonePressed} block>
        Done
      </FixedButton>
    </Container>
  )
}
