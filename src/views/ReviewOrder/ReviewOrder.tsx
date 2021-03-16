import React from "react"
import { Box, Flex, Spacer, Sans } from "@/elements"
import {
  Container,
  FixedBackArrow,
  SectionHeader,
  LineItem,
  OrderItem,
  FixedButton,
  Separator,
} from "@/components"
import { ScrollView } from "./StyledReviewOrder"
import {
  OrderFragment,
  OrderFragment_lineItems_productVariant_product,
} from "@/generated/OrderFragment"
import { CustomerOrderFragment } from "@/generated/CustomerOrderFragment"
import { displayCurrency } from "@/helpers/currency"
import { space } from "@/helpers/space"

type Props = {
  isSubmittingOrder: boolean
  onBackPressed: () => void
  onOrderItemPressed: (
    product: OrderFragment_lineItems_productVariant_product
  ) => void
  onSubmitOrder: (orderId: string) => void
  order: OrderFragment
  customer: CustomerOrderFragment
  windowWidth: number
}

export const ReviewOrder: React.FC<Props> = ({
  onBackPressed,
  onOrderItemPressed,
  onSubmitOrder,
  order,
  windowWidth,
  customer,
  isSubmittingOrder,
}) => {
  const phoneNumber = customer.detail?.phoneNumber
  const address = customer.detail?.shippingAddress
  const paymentMethod = customer.billingInfo?.last_digits
  const paymentBrand = customer.billingInfo?.brand
  const totalInDollars = order.total / 100
  const totalSalesTaxDollars = order.salesTaxTotal / 100
  const productVariantItems = order.lineItems?.filter((i) => !!i.productVariant)
  const needsShipping = order?.lineItems?.some((item) => item.needShipping)
  const subText = needsShipping
    ? "All orders will be processed Tuesdays and Thursdays between the hours of 12pm - 4pm EST. As a reminder, "
    : "Any purchased items will live in your bag until your reservation is returned & processed. As a reminder, "

  return (
    <Container insetsTop insetsBottom={false} backgroundColor="white100">
      <FixedBackArrow onPress={onBackPressed} variant="whiteBackground" />
      <Flex style={{ flex: 1 }} px={2}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <Spacer mb={80} />
          <Box pb={1}>
            <Sans size="7" color="black100">
              Confirm purchase
            </Sans>
          </Box>
          <Box mb={4}>
            <Sans size="4" color="black50">
              {subText}
              <Sans
                size="4"
                color="black50"
                style={{ textDecorationLine: "underline" }}
              >
                all sales are final.
              </Sans>
            </Sans>
          </Box>
          {!!order && (
            <Box mb={4}>
              <SectionHeader title="Purchase summary" />
              {order?.lineItems?.map((item, index) => {
                const itemPriceInDollars = item?.price / 100
                const displayName =
                  item.recordType === "Package"
                    ? "Shipping"
                    : item?.productVariant?.product?.name

                return (
                  <LineItem
                    leftText={displayName}
                    rightText={displayCurrency(itemPriceInDollars)}
                    key={item?.productVariant?.id ?? index}
                    windowWidth={windowWidth}
                  />
                )
              })}
              <Spacer mb={2} />
              <LineItem
                leftText="Subtotal"
                windowWidth={windowWidth}
                rightText={displayCurrency(order.subTotal)}
              />
              <LineItem
                leftText="Sales tax"
                windowWidth={windowWidth}
                rightText={displayCurrency(totalSalesTaxDollars)}
              />
              <LineItem
                leftText="Total"
                windowWidth={windowWidth}
                rightText={displayCurrency(totalInDollars)}
                color="black100"
              />
            </Box>
          )}
          {!!paymentMethod && (
            <Box mb={4}>
              <SectionHeader title="Payment method" />
              <Sans size="4" color="black50" mt={1}>
                {`${paymentBrand} ending in ${paymentMethod}`}
              </Sans>
            </Box>
          )}
          {!!address && needsShipping && (
            <Box mb={4}>
              <SectionHeader title="Shipping address" />
              <Sans size="4" color="black50" mt={1}>
                {`${address.address1}${
                  address.address2 ? " " + address.address2 : ""
                },`}
              </Sans>
              <Sans size="4" color="black50">
                {`${address.city}, ${address.state} ${address.zipCode}`}
              </Sans>
            </Box>
          )}
          {!!phoneNumber && (
            <Box mb={4}>
              <SectionHeader title="Phone number" />
              <Sans size="4" color="black50" mt={1}>
                {phoneNumber}
              </Sans>
            </Box>
          )}
          <Box mb={5}>
            <SectionHeader
              title={productVariantItems?.length === 1 ? "Item" : "Items"}
            />
            <Box mt={1} mb={4}>
              {productVariantItems?.map((item, i) => {
                return (
                  <Box key={i}>
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
      <FixedButton
        positionBottom={space(2)}
        loading={isSubmittingOrder}
        disabled={isSubmittingOrder}
        onPress={() => onSubmitOrder(order.id)}
        block
      >
        Place order
      </FixedButton>
    </Container>
  )
}
