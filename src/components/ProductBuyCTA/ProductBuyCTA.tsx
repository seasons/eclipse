import React from "react"

import { ProductBuyCTA_ProductFragment as ProductFragment } from "@/generated/ProductBuyCTA_ProductFragment"
import { ProductBuyCTA_ProductVariantFragment as ProductVariantFragment } from "@/generated/ProductBuyCTA_ProductVariantFragment"

import { Flex, Sans, Spacer } from "@/elements"
import { Button } from "@/components"
import { UnderlinedSans } from "./StyledProductBuyCTA"

const ProductBuyNew: React.FC<{
  price: string
  brandName: string
  availableForSale: boolean
  onBuyNew: () => void
  onNavigateToPartner: () => void
  buyButtonMutating: boolean
}> = ({
  price,
  brandName,
  onBuyNew,
  onNavigateToPartner,
  availableForSale,
  buyButtonMutating,
}) => {
  return (
    <Flex flexDirection="column" px={3} pb={3}>
      <Sans color="black100" size="4" weight="medium">
        Available from Judy Turner
      </Sans>
      <Spacer mb={2} />
      <Button
        variant="primaryBlack"
        block
        onPress={onBuyNew}
        disabled={!availableForSale || buyButtonMutating}
        loading={buyButtonMutating}
      >
        {availableForSale ? `Buy new for ${price}` : "Sold Out"}
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

const ProductBuyUsed: React.FC<{
  price: string
  availableForSale: boolean
  onBuyUsed: () => void
  buyButtonMutating: boolean
}> = ({ price, availableForSale, onBuyUsed, buyButtonMutating }) => (
  <Flex flexDirection="column" px={3} pb={3}>
    <Sans color="black100" size="4" weight="medium">
      Available from Seasons
    </Sans>
    <Spacer mb={2} />
    <Button
      variant="primaryBlack"
      block
      onPress={onBuyUsed}
      loading={buyButtonMutating}
      disabled={buyButtonMutating || !availableForSale}
    >
      {availableForSale ? `Buy used for ${price}` : "Sold Out"}
    </Button>
    <Spacer mb={2} />
    <Sans size="3" opacity={0.5} color="black100">
      Orders fulfilled by Seasons. Payment & shipping information on file will
      be used for one-tap checkout.
    </Sans>
  </Flex>
)

export const ProductBuyCTA: React.FC<{
  product: ProductFragment
  selectedVariant: ProductVariantFragment
  onBuyUsed: () => void
  onBuyNew: () => void
  onNavigateToBrand: (href: string) => void
  buyButtonMutating: boolean
}> = ({
  selectedVariant,
  onBuyUsed,
  onBuyNew,
  product,
  buyButtonMutating,
  onNavigateToBrand,
}) => {
  if (
    selectedVariant?.price?.buyUsedEnabled &&
    selectedVariant?.price?.buyUsedPrice
  ) {
    const priceInDollars = selectedVariant?.price?.buyUsedPrice / 100
    const price = priceInDollars?.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })

    return (
      <ProductBuyUsed
        price={price}
        onBuyUsed={onBuyUsed}
        availableForSale={true}
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
        buyButtonMutating={buyButtonMutating}
        price={price}
        brandName={brandName}
        availableForSale={availableForSale}
        onBuyNew={onBuyNew}
        onNavigateToPartner={handleNavigateToPartner}
      />
    )
  }

  return null
}
