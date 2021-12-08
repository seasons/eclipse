/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProductBuyCTAFragment_ProductVariant
// ====================================================

export interface ProductBuyCTAFragment_ProductVariant_price {
  __typename: "ProductVariantPrice";
  id: string;
  buyUsedEnabled: boolean;
  buyUsedPrice: number | null;
  buyUsedAvailableForSale: boolean | null;
  buyNewEnabled: boolean;
  buyNewPrice: number | null;
  buyNewAvailableForSale: boolean | null;
  buyUsedAdjustedPrice: number | null;
}

export interface ProductBuyCTAFragment_ProductVariant {
  __typename: "ProductVariant";
  id: string;
  isInBag: boolean;
  price: ProductBuyCTAFragment_ProductVariant_price;
}
