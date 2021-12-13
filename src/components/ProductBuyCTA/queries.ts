import gql from "graphql-tag"

export const ProductBuyCTAFragment_Product = gql`
  fragment ProductBuyCTAFragment_Product on Product {
    id
    retailPrice
    brand {
      id
      name
    }
  }
`

export const ProductBuyCTAFragment_ProductVariant = gql`
  fragment ProductBuyCTAFragment_ProductVariant on ProductVariant {
    id
    isInCart
    price {
      id
      buyUsedEnabled
      buyUsedPrice
      buyUsedAvailableForSale
      buyNewEnabled
      buyNewPrice
      buyNewAvailableForSale
      buyUsedAdjustedPrice
    }
  }
`
