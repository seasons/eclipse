import gql from "graphql-tag"

export const OrderFragment = gql`
  fragment OrderFragment on Order {
    id
    orderNumber
    subTotal
    total
    type
    status
    createdAt
    updatedAt
    salesTaxTotal
    lineItems {
      id
      price
      recordID
      recordType
      needShipping
      taxRate
      taxName
      taxPercentage
      taxPrice
      productVariant {
        id
        displayLong
        product {
          id
          slug
          name
          brand {
            id
            name
          }
          images(size: Thumb) {
            id
            url
          }
        }
      }
    }
  }
`

export const OrderCustomerFragment = gql`
  fragment OrderCustomerFragment on Customer {
    detail {
      id
      phoneNumber
      shippingAddress {
        id
        address1
        address2
        city
        state
        zipCode
        shippingOptions {
          id
          externalCost
          averageDuration
          shippingMethod {
            id
            code
            displayText
          }
        }
      }
    }
    billingInfo {
      id
      brand
      last_digits
    }
  }
`

export const GetCustomerQuery = gql`
  query GetCustomer {
    me {
      id
      customer {
        id
        ...OrderCustomerFragment
      }
    }
  }
  ${OrderCustomerFragment}
`

export const SubmitOrderMutation = gql`
  mutation SubmitOrder($input: SubmitOrderInput!) {
    submitOrder(input: $input) {
      id
      ...OrderFragment
    }
  }
  ${OrderFragment}
`
