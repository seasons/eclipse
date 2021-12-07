/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProductBuyCTAFragment_Product
// ====================================================

export interface ProductBuyCTAFragment_Product_brand {
  __typename: "Brand";
  id: string;
  name: string;
}

export interface ProductBuyCTAFragment_Product {
  __typename: "Product";
  id: string;
  retailPrice: number | null;
  brand: ProductBuyCTAFragment_Product_brand;
}
