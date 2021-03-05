/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProductBuyCTA_ProductFragment
// ====================================================

export interface ProductBuyCTA_ProductFragment_brand {
  __typename: "Brand";
  id: string;
  name: string;
  websiteUrl: string | null;
}

export interface ProductBuyCTA_ProductFragment {
  __typename: "Product";
  id: string;
  brand: ProductBuyCTA_ProductFragment_brand;
}
