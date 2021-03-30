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
import { ScrollView, UnderlinedSans } from "./StyledReviewOrder"
import {
  Order_OrderFragment,
  Order_OrderFragment_lineItems_productVariant_product,
  Order_OrderFragment_lineItems_productVariant_product_brand,
} from "@/generated/Order_OrderFragment"
import { Order_CustomerFragment } from "@/generated/Order_CustomerFragment"
import { OrderType } from "@/generated/globalTypes"
import { displayCurrency } from "@/helpers/currency"
import { space } from "@/helpers/space"

type Props = {
  isSubmittingOrder: boolean
  onBackPressed: () => void
  onOrderItemPressed: (
    product: Order_OrderFragment_lineItems_productVariant_product
  ) => void
  onNavigateToBrand: (href: string) => void
  onSubmitOrder: (orderId: string) => void
  order: Order_OrderFragment
  customer: Order_CustomerFragment
  windowWidth: number
}

const SubText = ({
  needsShipping,
  orderType,
  brand,
  onNavigateToBrand,
}: {
  needsShipping: boolean
  orderType: OrderType
  brand: Order_OrderFragment_lineItems_productVariant_product_brand
  onNavigateToBrand: (href: string) => void
}) => {
  if (orderType === "New") {
    const brandHost = new URL(brand.websiteUrl).host
    const handleBrandPressed = () => onNavigateToBrand(brand.websiteUrl)
    return (
      <Sans size="4" color="black50">
        All orders and returns wil be processed by{" "}
        <UnderlinedSans
          size="4"
          color="black50"
          onPress={handleBrandPressed}
          onClick={handleBrandPressed}
        >
          {brand.name}
        </UnderlinedSans>{" "}
        via email and{" "}
        <UnderlinedSans
          size="4"
          color="black50"
          onPress={handleBrandPressed}
          onClick={handleBrandPressed}
        >
          {brandHost}
        </UnderlinedSans>
        .
      </Sans>
    )
  }

  const usedSubText = needsShipping
    ? "All orders will be processed Tuesdays and Thursdays between the hours of 12pm - 4pm EST. As a reminder, "
    : "Any purchased items will live in your bag until your reservation is returned & processed. As a reminder, "

  return (
    <Sans size="4" color="black50">
      {usedSubText}
      <UnderlinedSans size="4" color="black50">
        all sales are final.
      </UnderlinedSans>
    </Sans>
  )
}

export const ReviewOrder: React.FC<Props> = ({
  onBackPressed,
  onOrderItemPressed,
  onNavigateToBrand,
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
  const subTotalDollars = order.subTotal / 100
  const totalSalesTaxDollars = order.salesTaxTotal / 100
  const productVariantItems = order.lineItems?.filter((i) => !!i.productVariant)
  const needsShipping = order?.lineItems?.some((item) => item.needShipping)

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
            <SubText
              needsShipping={needsShipping}
              orderType={order.type}
              brand={productVariantItems?.[0]?.productVariant?.product?.brand}
              onNavigateToBrand={onNavigateToBrand}
            />
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
                rightText={displayCurrency(subTotalDollars)}
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
