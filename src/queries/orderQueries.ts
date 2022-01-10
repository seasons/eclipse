import gql from "graphql-tag"

export const OrderFragment_Order = gql`
  fragment OrderFragment_Order on Order {
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
            websiteUrl
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

export const OrderFragment_Customer = gql`
  fragment OrderFragment_Customer on Customer {
    id
    status
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
