import React from "react"
import { Flex, Sans, Spacer, Box } from "@/elements"
import { ProductBuyCTAFragment_Product as ProductFragment } from "@/generated/ProductBuyCTAFragment_Product"
import { ProductBuyCTAFragment_ProductVariant as ProductVariantFragment } from "@/generated/ProductBuyCTAFragment_ProductVariant"
import { FlexProps } from "styled-system"
import { ButtonSize, ButtonVariant } from "../Button/Button.shared"
import { Separator } from "../Separator"
import { Color } from "@/theme/theme"
import { Button } from "../Button"

const PriceDisplay: React.FC<{
  price: string
  title: string
  color: Color
  index: number
}> = ({ price, title, color, index }) => {
  return (
    <Flex flex={2} flexDirection="row">
      {index === 1 && <Separator height="100%" width="1px" />}
      <Box pl={index === 1 ? 2 : 0}>
        <Sans size="9" color={color}>
          {price}
        </Sans>
        <Sans size="4" color={color}>
          {title}
        </Sans>
      </Box>
    </Flex>
  )
}

const Subtext: React.FC<{
  isBuyNew: boolean
  onNavigateToBrand: () => void
  brandName: string
}> = ({ isBuyNew, onNavigateToBrand, brandName }) => {
  if (isBuyNew) {
    return (
      <Sans size="3" color="black50">
        Orders fulfilled by{" "}
        <Sans
          underline
          inline
          pointer
          size="3"
          onPress={onNavigateToBrand}
          onClick={onNavigateToBrand}
        >
          {brandName}
        </Sans>
        . Payment & shipping information on file will be used for one-tap
        checkout.
      </Sans>
    )
  } else {
    return (
      <Sans size="3" color="black50">
        All sales fulfilled by Seasons are final. Any available credits will be
        automatically applied at checkout.
      </Sans>
    )
  }
}

export const ProductBuyCTA: React.FC<
  {
    product: ProductFragment
    productVariant: ProductVariantFragment
    onAddToCart: () => void
    onNavigateToBrand: () => void
    buttonSize?: ButtonSize
    buttonVariant?: ButtonVariant
    isMutating: boolean
    productBuyRef
  } & FlexProps
> = React.forwardRef(
  (
    {
      productVariant,
      onAddToCart,
      product,
      productBuyRef,
      onNavigateToBrand,
      buttonSize,
      buttonVariant,
      isMutating,
      ...flexProps
    },
    ref
  ) => {
    const isBuyUsed = Boolean(
      productVariant?.price?.buyUsedEnabled &&
        productVariant?.price?.buyUsedAdjustedPrice
    )
    const isBuyNew = Boolean(
      productVariant?.price?.buyNewEnabled && productVariant?.price?.buyNewPrice
    )
    const availableForSale = isBuyUsed || isBuyNew

    if (!availableForSale) {
      return null
    }

    const variantPrice = productVariant?.price

    const priceInDollars = isBuyNew
      ? variantPrice?.buyNewPrice / 100
      : variantPrice?.buyUsedAdjustedPrice / 100

    const brandName = product?.brand?.name

    const price = priceInDollars?.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    const isInBag = productVariant?.isInBag
    const retailPrice = product?.retailPrice?.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })

    return (
      <Flex flexDirection="column" {...flexProps} ref={ref as any}>
        <Sans color="black100" size="4" weight="medium">
          Love it? Buy it
        </Sans>
        <Spacer mb={2} />
        <Separator />
        <Spacer mb={3} />
        <Flex flexDirection="row" flexWrap="nowrap">
          <PriceDisplay
            price={price}
            title="Member price"
            color="black100"
            index={0}
          />
          <PriceDisplay
            price={retailPrice}
            title="Retail price"
            color="black50"
            index={1}
          />
        </Flex>
        <Spacer mb={3} />
        <Button
          ref={productBuyRef}
          size={buttonSize ?? "medium"}
          variant={buttonVariant ?? "primaryBlack"}
          block
          onPress={onAddToCart}
          onClick={onAddToCart}
          loading={isMutating}
          disabled={isMutating || !availableForSale}
        >
          {!availableForSale ? "Sold out" : isInBag ? "Added" : "Add to cart"}
        </Button>
        <Spacer mb={2} />
        <Subtext
          brandName={brandName}
          onNavigateToBrand={() => onNavigateToBrand()}
          isBuyNew={isBuyNew}
        />
      </Flex>
    )
  }
)
