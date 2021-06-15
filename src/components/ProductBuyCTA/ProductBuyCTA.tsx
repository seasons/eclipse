import React from "react"
import { ProductBuyCTAFragment_Product as ProductFragment } from "@/generated/ProductBuyCTAFragment_Product"
import { ProductBuyCTAFragment_ProductVariant as ProductVariantFragment } from "@/generated/ProductBuyCTAFragment_ProductVariant"
import { Flex, Sans, Spacer } from "@/elements"
import { Button } from "@/components"
import { UnderlinedSans } from "./StyledProductBuyCTA"
import { FlexProps } from "styled-system"

type ProductBuyNewProps = {
  price: string
  brandName: string
  availableForSale: boolean
  onBuyNew: () => void
  onNavigateToPartner: () => void
  buyButtonMutating: boolean
  flexProps: FlexProps
}
const ProductBuyNew = React.forwardRef(
  (
    {
      price,
      brandName,
      onBuyNew,
      onNavigateToPartner,
      availableForSale,
      buyButtonMutating,
      flexProps,
    }: ProductBuyNewProps,
    ref
  ) => {
    return (
      <Flex flexDirection="column" {...flexProps} ref={ref as any}>
        <Sans color="black100" size="4" weight="medium">
          Get it new from {brandName}
        </Sans>
        <Spacer mb={2} />
        <Button
          variant="primaryBlack"
          block
          onPress={onBuyNew}
          onClick={onBuyNew}
          disabled={!availableForSale || buyButtonMutating}
          loading={buyButtonMutating}
          style={{ zIndex: 99 }}
        >
          {availableForSale ? `Buy for ${price}` : "Sold Out"}
        </Button>
        <Spacer mb={2} />
        <Sans size="3" opacity={0.5} color="black100">
          Orders fulfilled by{" "}
          <UnderlinedSans size="3" onPress={() => onNavigateToPartner()}>
            {brandName}
          </UnderlinedSans>
          . Payment & shipping information on file will be used for one-tap
          checkout.
        </Sans>
      </Flex>
    )
  }
)

type ProductBuyUsedProps = {
  price: string
  availableForSale: boolean
  onBuyUsed: () => void
  buyButtonMutating: boolean
  flexProps: FlexProps
}
const ProductBuyUsed = React.forwardRef(
  (
    {
      price,
      availableForSale,
      onBuyUsed,
      buyButtonMutating,
      flexProps,
    }: ProductBuyUsedProps,
    ref
  ) => (
    <Flex flexDirection="column" {...flexProps} ref={ref as any}>
      <Sans color="black100" size="4" weight="medium">
        Available from Seasons
      </Sans>
      <Spacer mb={2} />
      <Button
        variant="primaryBlack"
        block
        onPress={onBuyUsed}
        onClick={onBuyUsed}
        loading={buyButtonMutating}
        disabled={buyButtonMutating || !availableForSale}
      >
        {availableForSale ? `Buy for ${price}` : "Sold Out"}
      </Button>
      <Spacer mb={2} />
      <Sans size="3" opacity={0.5} color="black100">
        Orders fulfilled by Seasons. Payment & shipping information on file will
        be used for one-tap checkout.
      </Sans>
    </Flex>
  )
)

export const ProductBuyCTA: React.FC<
  {
    product: ProductFragment
    selectedVariant: ProductVariantFragment
    onBuyUsed: () => void
    onBuyNew: () => void
    onNavigateToBrand: (href: string) => void
    buyButtonMutating: boolean
  } & FlexProps
> = React.forwardRef(
  (
    {
      selectedVariant,
      onBuyUsed,
      onBuyNew,
      product,
      buyButtonMutating,
      onNavigateToBrand,
      ...flexProps
    },
    ref
  ) => {
    if (
      selectedVariant?.price?.buyUsedEnabled &&
      selectedVariant?.price?.buyUsedPrice
    ) {
      const priceInDollars = selectedVariant?.price?.buyUsedPrice / 100
      const price = priceInDollars?.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })

      return (
        <ProductBuyUsed
          ref={ref}
          flexProps={flexProps}
          price={price}
          onBuyUsed={onBuyUsed}
          availableForSale={selectedVariant?.price?.buyUsedAvailableForSale}
          buyButtonMutating={buyButtonMutating}
        />
      )
    } else if (
      selectedVariant?.price?.buyNewEnabled &&
      selectedVariant?.price?.buyNewPrice
    ) {
      const priceInDollars = selectedVariant?.price?.buyNewPrice / 100
      const price = priceInDollars?.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
      const availableForSale = selectedVariant?.price?.buyNewAvailableForSale
      const brandName = product?.brand?.name
      const handleNavigateToPartner = () => {
        const href = product?.brand?.websiteUrl
        if (href) {
          onNavigateToBrand(href)
        }
      }

      return (
        <ProductBuyNew
          ref={ref}
          buyButtonMutating={buyButtonMutating}
          price={price}
          brandName={brandName}
          availableForSale={availableForSale}
          onBuyNew={onBuyNew}
          onNavigateToPartner={handleNavigateToPartner}
          flexProps={flexProps}
        />
      )
    }

    return null
  }
)
