/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { HomePageSectionType, Rating, QuestionType, CustomerStatus } from "./globalTypes";

// ====================================================
// GraphQL query operation: Homepage
// ====================================================

export interface Homepage_homepage_sections_tagData {
  __typename: "ProductsByTagTagData";
  id: string;
  tagName: string | null;
  description: string | null;
}

export interface Homepage_homepage_sections_results_Collection {
  __typename: "Collection";
}

export interface Homepage_homepage_sections_results_Brand {
  __typename: "Brand";
  id: string;
  name: string;
  since: any | null;
}

export interface Homepage_homepage_sections_results_Category {
  __typename: "Category";
  id: string;
  slug: string;
  name: string;
  image: any | null;
}

export interface Homepage_homepage_sections_results_Product_images {
  __typename: "Image";
  id: string;
  url: string | null;
}

export interface Homepage_homepage_sections_results_Product_brand {
  __typename: "Brand";
  id: string;
  name: string;
}

export interface Homepage_homepage_sections_results_Product_variants_internalSize {
  __typename: "Size";
  id: string;
  display: string;
}

export interface Homepage_homepage_sections_results_Product_variants {
  __typename: "ProductVariant";
  id: string;
  reservable: number;
  internalSize: Homepage_homepage_sections_results_Product_variants_internalSize | null;
}

export interface Homepage_homepage_sections_results_Product {
  __typename: "Product";
  id: string;
  slug: string;
  name: string;
  images: Homepage_homepage_sections_results_Product_images[];
  brand: Homepage_homepage_sections_results_Product_brand;
  variants: Homepage_homepage_sections_results_Product_variants[] | null;
}

export type Homepage_homepage_sections_results = Homepage_homepage_sections_results_Collection | Homepage_homepage_sections_results_Brand | Homepage_homepage_sections_results_Category | Homepage_homepage_sections_results_Product;

export interface Homepage_homepage_sections {
  __typename: "HomepageSection";
  id: string;
  title: string | null;
  type: HomePageSectionType;
  tagData: Homepage_homepage_sections_tagData | null;
  results: Homepage_homepage_sections_results[];
}

export interface Homepage_homepage {
  __typename: "Homepage";
  id: string;
  sections: Homepage_homepage_sections[];
}

export interface Homepage_reservationFeedback_feedbacks_questions {
  __typename: "ProductVariantFeedbackQuestion";
  id: string;
  options: string[];
  question: string;
  responses: string[];
  type: QuestionType;
}

export interface Homepage_reservationFeedback_feedbacks_variant_product_images {
  __typename: "Image";
  id: string;
  url: string | null;
}

export interface Homepage_reservationFeedback_feedbacks_variant_product {
  __typename: "Product";
  id: string;
  name: string;
  retailPrice: number | null;
  images: Homepage_reservationFeedback_feedbacks_variant_product_images[];
}

export interface Homepage_reservationFeedback_feedbacks_variant {
  __typename: "ProductVariant";
  id: string;
  product: Homepage_reservationFeedback_feedbacks_variant_product;
}

export interface Homepage_reservationFeedback_feedbacks {
  __typename: "ProductVariantFeedback";
  id: string;
  isCompleted: boolean;
  questions: Homepage_reservationFeedback_feedbacks_questions[] | null;
  variant: Homepage_reservationFeedback_feedbacks_variant;
}

export interface Homepage_reservationFeedback {
  __typename: "ReservationFeedback";
  id: string;
  comment: string | null;
  rating: Rating | null;
  feedbacks: Homepage_reservationFeedback_feedbacks[] | null;
}

export interface Homepage_me_customer_bagItems {
  __typename: "BagItem";
  id: string;
}

export interface Homepage_me_customer_admissions {
  __typename: "CustomerAdmissionsData";
  id: string;
  admissable: boolean;
  authorizationsCount: number;
}

export interface Homepage_me_customer_user {
  __typename: "User";
  id: string;
  createdAt: any;
}

export interface Homepage_me_customer_detail_shippingAddress {
  __typename: "Location";
  id: string;
  state: string | null;
}

export interface Homepage_me_customer_detail {
  __typename: "CustomerDetail";
  id: string;
  shippingAddress: Homepage_me_customer_detail_shippingAddress | null;
}

export interface Homepage_me_customer {
  __typename: "Customer";
  id: string;
  status: CustomerStatus | null;
  shouldRequestFeedback: boolean | null;
  bagItems: Homepage_me_customer_bagItems[] | null;
  admissions: Homepage_me_customer_admissions | null;
  user: Homepage_me_customer_user;
  detail: Homepage_me_customer_detail | null;
}

export interface Homepage_me_savedItems_productVariant_product_modelSize {
  __typename: "Size";
  id: string;
  display: string;
}

export interface Homepage_me_savedItems_productVariant_product_brand {
  __typename: "Brand";
  id: string;
  name: string;
}

export interface Homepage_me_savedItems_productVariant_product_images {
  __typename: "Image";
  id: string;
  url: string | null;
}

export interface Homepage_me_savedItems_productVariant_product_variants {
  __typename: "ProductVariant";
  id: string;
  reservable: number;
  displayShort: string | null;
}

export interface Homepage_me_savedItems_productVariant_product {
  __typename: "Product";
  id: string;
  name: string;
  modelSize: Homepage_me_savedItems_productVariant_product_modelSize | null;
  brand: Homepage_me_savedItems_productVariant_product_brand;
  images: Homepage_me_savedItems_productVariant_product_images[];
  variants: Homepage_me_savedItems_productVariant_product_variants[] | null;
}

export interface Homepage_me_savedItems_productVariant {
  __typename: "ProductVariant";
  id: string;
  product: Homepage_me_savedItems_productVariant_product;
}

export interface Homepage_me_savedItems {
  __typename: "BagItem";
  id: string;
  productVariant: Homepage_me_savedItems_productVariant;
}

export interface Homepage_me {
  __typename: "Me";
  id: string;
  customer: Homepage_me_customer | null;
  savedItems: Homepage_me_savedItems[] | null;
}

export interface Homepage_collections_products_brand {
  __typename: "Brand";
  id: string;
  name: string;
}

export interface Homepage_collections_products_images {
  __typename: "Image";
  id: string;
  url: string | null;
}

export interface Homepage_collections_products {
  __typename: "Product";
  id: string;
  name: string;
  brand: Homepage_collections_products_brand;
  images: Homepage_collections_products_images[];
}

export interface Homepage_collections {
  __typename: "Collection";
  id: string;
  slug: string;
  title: string | null;
  products: Homepage_collections_products[] | null;
}

export interface Homepage_blogPosts {
  __typename: "BlogPost";
  id: string;
  url: string | null;
  name: string | null;
  category: string | null;
  imageURL: string | null;
}

export interface Homepage_archivalProducts_images {
  __typename: "Image";
  id: string;
  url: string | null;
}

export interface Homepage_archivalProducts {
  __typename: "Product";
  id: string;
  slug: string;
  name: string;
  images: Homepage_archivalProducts_images[];
}

export interface Homepage_justAddedOuterwear_modelSize {
  __typename: "Size";
  id: string;
  display: string;
}

export interface Homepage_justAddedOuterwear_brand {
  __typename: "Brand";
  id: string;
  name: string;
}

export interface Homepage_justAddedOuterwear_images {
  __typename: "Image";
  id: string;
  url: string | null;
}

export interface Homepage_justAddedOuterwear_variants {
  __typename: "ProductVariant";
  id: string;
  reservable: number;
  displayShort: string | null;
}

export interface Homepage_justAddedOuterwear {
  __typename: "Product";
  id: string;
  slug: string;
  name: string;
  modelSize: Homepage_justAddedOuterwear_modelSize | null;
  brand: Homepage_justAddedOuterwear_brand;
  images: Homepage_justAddedOuterwear_images[];
  variants: Homepage_justAddedOuterwear_variants[] | null;
}

export interface Homepage_justAddedTops_modelSize {
  __typename: "Size";
  id: string;
  display: string;
}

export interface Homepage_justAddedTops_brand {
  __typename: "Brand";
  id: string;
  name: string;
}

export interface Homepage_justAddedTops_images {
  __typename: "Image";
  id: string;
  url: string | null;
}

export interface Homepage_justAddedTops_variants {
  __typename: "ProductVariant";
  id: string;
  reservable: number;
  displayShort: string | null;
}

export interface Homepage_justAddedTops {
  __typename: "Product";
  id: string;
  slug: string;
  name: string;
  modelSize: Homepage_justAddedTops_modelSize | null;
  brand: Homepage_justAddedTops_brand;
  images: Homepage_justAddedTops_images[];
  variants: Homepage_justAddedTops_variants[] | null;
}

export interface Homepage_justAddedBottoms_modelSize {
  __typename: "Size";
  id: string;
  display: string;
}

export interface Homepage_justAddedBottoms_brand {
  __typename: "Brand";
  id: string;
  name: string;
}

export interface Homepage_justAddedBottoms_images {
  __typename: "Image";
  id: string;
  url: string | null;
}

export interface Homepage_justAddedBottoms_variants {
  __typename: "ProductVariant";
  id: string;
  reservable: number;
  displayShort: string | null;
}

export interface Homepage_justAddedBottoms {
  __typename: "Product";
  id: string;
  slug: string;
  name: string;
  modelSize: Homepage_justAddedBottoms_modelSize | null;
  brand: Homepage_justAddedBottoms_brand;
  images: Homepage_justAddedBottoms_images[];
  variants: Homepage_justAddedBottoms_variants[] | null;
}

export interface Homepage_fitPicsCount_aggregate {
  __typename: "AggregateFitPic";
  count: number;
}

export interface Homepage_fitPicsCount {
  __typename: "FitPicConnection";
  aggregate: Homepage_fitPicsCount_aggregate;
}

export interface Homepage_fitPics_location {
  __typename: "Location";
  id: string;
  city: string | null;
  state: string | null;
}

export interface Homepage_fitPics_image {
  __typename: "Image";
  id: string;
  url: string | null;
}

export interface Homepage_fitPics {
  __typename: "FitPic";
  id: string;
  author: string;
  location: Homepage_fitPics_location | null;
  image: Homepage_fitPics_image;
  createdAt: any;
}

export interface Homepage {
  homepage: Homepage_homepage | null;
  reservationFeedback: Homepage_reservationFeedback | null;
  me: Homepage_me | null;
  collections: (Homepage_collections | null)[];
  blogPosts: Homepage_blogPosts[];
  archivalProducts: (Homepage_archivalProducts | null)[];
  justAddedOuterwear: (Homepage_justAddedOuterwear | null)[];
  justAddedTops: (Homepage_justAddedTops | null)[];
  justAddedBottoms: (Homepage_justAddedBottoms | null)[];
  fitPicsCount: Homepage_fitPicsCount;
  fitPics: Homepage_fitPics[];
}

export interface HomepageVariables {
  firstFitPics: number;
  skipFitPics?: number | null;
}