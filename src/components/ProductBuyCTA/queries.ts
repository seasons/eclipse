import gql from "graphql-tag"

export const ProductFragment = gql`
  fragment ProductBuyCTAFragment_Product on Product {
    id
    brand {
      id
      name
      websiteUrl
      logoImage {
        id
        url
        height
        width
      }
    }
  }
`

export const ProductVariantFragment = gql`
  fragment ProductBuyCTAFragment_ProductVariant on ProductVariant {
    id
    price {
      id
      buyUsedEnabled
      buyUsedPrice
      buyUsedAvailableForSale
      buyNewEnabled
      buyNewPrice
      buyNewAvailableForSale
    }
  }
`
