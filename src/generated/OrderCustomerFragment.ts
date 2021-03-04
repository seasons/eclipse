/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ShippingCode } from "./globalTypes";

// ====================================================
// GraphQL fragment: OrderCustomerFragment
// ====================================================

export interface OrderCustomerFragment_detail_shippingAddress_shippingOptions_shippingMethod {
  __typename: "ShippingMethod";
  id: string;
  code: ShippingCode;
  displayText: string;
}

export interface OrderCustomerFragment_detail_shippingAddress_shippingOptions {
  __typename: "ShippingOption";
  id: string;
  externalCost: number | null;
  averageDuration: number | null;
  shippingMethod: OrderCustomerFragment_detail_shippingAddress_shippingOptions_shippingMethod | null;
}

export interface OrderCustomerFragment_detail_shippingAddress {
  __typename: "Location";
  id: string;
  address1: string | null;
  address2: string | null;
  city: string | null;
  state: string | null;
  zipCode: string;
  shippingOptions: OrderCustomerFragment_detail_shippingAddress_shippingOptions[] | null;
}

export interface OrderCustomerFragment_detail {
  __typename: "CustomerDetail";
  id: string;
  phoneNumber: string | null;
  shippingAddress: OrderCustomerFragment_detail_shippingAddress | null;
}

export interface OrderCustomerFragment_billingInfo {
  __typename: "BillingInfo";
  id: string;
  brand: string;
  last_digits: string;
}

export interface OrderCustomerFragment {
  __typename: "Customer";
  detail: OrderCustomerFragment_detail | null;
  billingInfo: OrderCustomerFragment_billingInfo | null;
}
