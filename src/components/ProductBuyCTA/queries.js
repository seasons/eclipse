import gql from "graphql-tag";
export const ProductFragment = gql `
  fragment ProductBuyCTA_ProductFragment on Product {
    id
    brand {
      id
      name
      websiteUrl
    }
  }
`;
export const ProductVariantFragment = gql `
  fragment ProductBuyCTA_ProductVariantFragment on ProductVariant {
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
`;
