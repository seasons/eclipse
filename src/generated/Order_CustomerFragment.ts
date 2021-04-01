/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ShippingCode } from "./globalTypes";

// ====================================================
// GraphQL fragment: Order_CustomerFragment
// ====================================================

export interface Order_CustomerFragment_detail_shippingAddress_shippingOptions_shippingMethod {
  __typename: "ShippingMethod";
  id: string;
  code: ShippingCode;
  displayText: string;
}

export interface Order_CustomerFragment_detail_shippingAddress_shippingOptions {
  __typename: "ShippingOption";
  id: string;
  externalCost: number | null;
  averageDuration: number | null;
  shippingMethod: Order_CustomerFragment_detail_shippingAddress_shippingOptions_shippingMethod | null;
}

export interface Order_CustomerFragment_detail_shippingAddress {
  __typename: "Location";
  id: string;
  address1: string | null;
  address2: string | null;
  city: string | null;
  state: string | null;
  zipCode: string;
  shippingOptions: Order_CustomerFragment_detail_shippingAddress_shippingOptions[] | null;
}

export interface Order_CustomerFragment_detail {
  __typename: "CustomerDetail";
  id: string;
  phoneNumber: string | null;
  shippingAddress: Order_CustomerFragment_detail_shippingAddress | null;
}

export interface Order_CustomerFragment_billingInfo {
  __typename: "BillingInfo";
  id: string;
  brand: string;
  last_digits: string;
}

export interface Order_CustomerFragment {
  __typename: "Customer";
  id: string;
  detail: Order_CustomerFragment_detail | null;
  billingInfo: Order_CustomerFragment_billingInfo | null;
}
