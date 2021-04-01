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
  id: string | null;
  customer: GetBrowseProducts_me_customer | null;
}

export interface GetBrowseProducts_collections_images {
  __typename: "Image";
  id: string;
  url: string | null;
}

export interface GetBrowseProducts_collections_products_modelSize {
  __typename: "Size";
  id: string;
  display: string;
}

export interface GetBrowseProducts_collections_products_brand {
  __typename: "Brand";
  id: string;
  slug: string;
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
  subTitle: string | null;
  images: GetBrowseProducts_collections_images[] | null;
  products: GetBrowseProducts_collections_products[] | null;
}

export interface GetBrowseProducts_blogPosts {
  __typename: "BlogPost";
  id: string;
  url: string | null;
  name: string | null;
  author: string | null;
  imageURL: string | null;
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

export interface GetBrowseProducts_newestBrandProducts_modelSize {
  __typename: "Size";
  id: string;
  display: string;
}

export interface GetBrowseProducts_newestBrandProducts_brand {
  __typename: "Brand";
  id: string;
  slug: string;
  name: string;
}

export interface GetBrowseProducts_newestBrandProducts_images {
  __typename: "Image";
  id: string;
  url: string | null;
}

export interface GetBrowseProducts_newestBrandProducts_variants {
  __typename: "ProductVariant";
  id: string;
  reservable: number;
  displayShort: string | null;
}

export interface GetBrowseProducts_newestBrandProducts {
  __typename: "Product";
  id: string;
  slug: string;
  name: string;
  modelSize: GetBrowseProducts_newestBrandProducts_modelSize | null;
  brand: GetBrowseProducts_newestBrandProducts_brand;
  images: GetBrowseProducts_newestBrandProducts_images[];
  variants: GetBrowseProducts_newestBrandProducts_variants[] | null;
}

export interface GetBrowseProducts_fitPics_location {
  __typename: "Location";
  id: string;
  city: string | null;
  state: string | null;
}

export interface GetBrowseProducts_fitPics_image {
  __typename: "Image";
  id: string;
  url: string | null;
}

export interface GetBrowseProducts_fitPics_user_customer_detail {
  __typename: "CustomerDetail";
  instagramHandle: string | null;
}

export interface GetBrowseProducts_fitPics_user_customer {
  __typename: "Customer";
  detail: GetBrowseProducts_fitPics_user_customer_detail | null;
}

export interface GetBrowseProducts_fitPics_user {
  __typename: "User";
  id: string;
  customer: GetBrowseProducts_fitPics_user_customer | null;
}

export interface GetBrowseProducts_fitPics {
  __typename: "FitPic";
  id: string;
  location: GetBrowseProducts_fitPics_location | null;
  image: GetBrowseProducts_fitPics_image;
  includeInstagramHandle: boolean;
  user: GetBrowseProducts_fitPics_user;
}

export interface GetBrowseProducts_newArchival_modelSize {
  __typename: "Size";
  id: string;
  display: string;
}

export interface GetBrowseProducts_newArchival_brand {
  __typename: "Brand";
  id: string;
  slug: string;
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
  collections: (GetBrowseProducts_collections | null)[];
  blogPosts: GetBrowseProducts_blogPosts[];
  paymentPlans: (GetBrowseProducts_paymentPlans | null)[] | null;
  newestBrandProducts: GetBrowseProducts_newestBrandProducts[] | null;
  fitPics: GetBrowseProducts_fitPics[];
  newArchival: (GetBrowseProducts_newArchival | null)[];
}
