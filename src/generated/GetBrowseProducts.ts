/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaymentPlanTier } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetBrowseProducts
// ====================================================

export interface GetBrowseProducts_me_customer_admissions {
  __typename: "CustomerAdmissionsData";
  id: string;
  admissable: boolean;
  authorizationsCount: number;
  authorizationWindowClosesAt: any | null;
  allAccessEnabled: boolean;
}

export interface GetBrowseProducts_me_customer {
  __typename: "Customer";
  id: string;
  admissions: GetBrowseProducts_me_customer_admissions | null;
}

export interface GetBrowseProducts_me {
  __typename: "Me";
  customer: GetBrowseProducts_me_customer | null;
}

export interface GetBrowseProducts_paymentPlans {
  __typename: "PaymentPlan";
  id: string;
  name: string | null;
  description: string | null;
  tagline: string | null;
  price: number | null;
  planID: string;
  tier: PaymentPlanTier | null;
  itemCount: number | null;
}

export interface GetBrowseProducts_blogPosts {
  __typename: "BlogPost";
  id: string;
  url: string | null;
  name: string | null;
  author: string | null;
  imageURL: string | null;
}

export interface GetBrowseProducts_collections_products_modelSize {
  __typename: "Size";
  id: string;
  display: string;
}

export interface GetBrowseProducts_collections_products_brand {
  __typename: "Brand";
  id: string;
  name: string;
}

export interface GetBrowseProducts_collections_products_images {
  __typename: "Image";
  id: string;
  url: string | null;
}

export interface GetBrowseProducts_collections_products_variants {
  __typename: "ProductVariant";
  id: string;
  reservable: number;
  displayShort: string | null;
}

export interface GetBrowseProducts_collections_products {
  __typename: "Product";
  id: string;
  slug: string;
  name: string;
  modelSize: GetBrowseProducts_collections_products_modelSize | null;
  brand: GetBrowseProducts_collections_products_brand;
  images: GetBrowseProducts_collections_products_images[];
  variants: GetBrowseProducts_collections_products_variants[] | null;
}

export interface GetBrowseProducts_collections {
  __typename: "Collection";
  id: string;
  slug: string;
  title: string | null;
  products: GetBrowseProducts_collections_products[] | null;
}

export interface GetBrowseProducts_justAddedTops_modelSize {
  __typename: "Size";
  id: string;
  display: string;
}

export interface GetBrowseProducts_justAddedTops_brand {
  __typename: "Brand";
  id: string;
  name: string;
}

export interface GetBrowseProducts_justAddedTops_images {
  __typename: "Image";
  id: string;
  url: string | null;
}

export interface GetBrowseProducts_justAddedTops_variants {
  __typename: "ProductVariant";
  id: string;
  reservable: number;
  displayShort: string | null;
}

export interface GetBrowseProducts_justAddedTops {
  __typename: "Product";
  id: string;
  slug: string;
  name: string;
  modelSize: GetBrowseProducts_justAddedTops_modelSize | null;
  brand: GetBrowseProducts_justAddedTops_brand;
  images: GetBrowseProducts_justAddedTops_images[];
  variants: GetBrowseProducts_justAddedTops_variants[] | null;
}

export interface GetBrowseProducts_justAddedBottoms_modelSize {
  __typename: "Size";
  id: string;
  display: string;
}

export interface GetBrowseProducts_justAddedBottoms_brand {
  __typename: "Brand";
  id: string;
  name: string;
}

export interface GetBrowseProducts_justAddedBottoms_images {
  __typename: "Image";
  id: string;
  url: string | null;
}

export interface GetBrowseProducts_justAddedBottoms_variants {
  __typename: "ProductVariant";
  id: string;
  reservable: number;
  displayShort: string | null;
}

export interface GetBrowseProducts_justAddedBottoms {
  __typename: "Product";
  id: string;
  slug: string;
  name: string;
  modelSize: GetBrowseProducts_justAddedBottoms_modelSize | null;
  brand: GetBrowseProducts_justAddedBottoms_brand;
  images: GetBrowseProducts_justAddedBottoms_images[];
  variants: GetBrowseProducts_justAddedBottoms_variants[] | null;
}

export interface GetBrowseProducts_justAddedOuterwear_modelSize {
  __typename: "Size";
  id: string;
  display: string;
}

export interface GetBrowseProducts_justAddedOuterwear_brand {
  __typename: "Brand";
  id: string;
  name: string;
}

export interface GetBrowseProducts_justAddedOuterwear_images {
  __typename: "Image";
  id: string;
  url: string | null;
}

export interface GetBrowseProducts_justAddedOuterwear_variants {
  __typename: "ProductVariant";
  id: string;
  reservable: number;
  displayShort: string | null;
}

export interface GetBrowseProducts_justAddedOuterwear {
  __typename: "Product";
  id: string;
  slug: string;
  name: string;
  modelSize: GetBrowseProducts_justAddedOuterwear_modelSize | null;
  brand: GetBrowseProducts_justAddedOuterwear_brand;
  images: GetBrowseProducts_justAddedOuterwear_images[];
  variants: GetBrowseProducts_justAddedOuterwear_variants[] | null;
}

export interface GetBrowseProducts_newArchival_modelSize {
  __typename: "Size";
  id: string;
  display: string;
}

export interface GetBrowseProducts_newArchival_brand {
  __typename: "Brand";
  id: string;
  name: string;
}

export interface GetBrowseProducts_newArchival_images {
  __typename: "Image";
  id: string;
  url: string | null;
}

export interface GetBrowseProducts_newArchival_variants {
  __typename: "ProductVariant";
  id: string;
  reservable: number;
  displayShort: string | null;
}

export interface GetBrowseProducts_newArchival {
  __typename: "Product";
  id: string;
  slug: string;
  name: string;
  modelSize: GetBrowseProducts_newArchival_modelSize | null;
  brand: GetBrowseProducts_newArchival_brand;
  images: GetBrowseProducts_newArchival_images[];
  variants: GetBrowseProducts_newArchival_variants[] | null;
}

export interface GetBrowseProducts {
  me: GetBrowseProducts_me | null;
  paymentPlans: (GetBrowseProducts_paymentPlans | null)[] | null;
  blogPosts: GetBrowseProducts_blogPosts[];
  collections: (GetBrowseProducts_collections | null)[];
  justAddedTops: (GetBrowseProducts_justAddedTops | null)[];
  justAddedBottoms: (GetBrowseProducts_justAddedBottoms | null)[];
  justAddedOuterwear: (GetBrowseProducts_justAddedOuterwear | null)[];
  newArchival: (GetBrowseProducts_newArchival | null)[];
}
