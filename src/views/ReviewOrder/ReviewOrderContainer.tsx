import { useQuery } from "@apollo/client"
import { ReviewOrder } from "./ReviewOrder"
import React from "react"
import { FixedBackArrow, Loader } from "@/components"
import { OrderFragment_Customer } from "@/queries"
import gql from "graphql-tag"
import {
  OrderFragment_Order,
  OrderFragment_Order_lineItems_productVariant_product,
} from "@/generated/OrderFragment_Order"
import { ReviewOrder_Query_me_customer } from "@/generated/ReviewOrder_Query"

type Props = {
  onBackPressed: () => void
  onNavigateToBrand: (href: string) => void
  onOrderItemPressed: (
    product: OrderFragment_Order_lineItems_productVariant_product
  ) => void
  onOrderSubmitted: ({
    order,
    customer,
  }: {
    order: OrderFragment_Order
    customer: ReviewOrder_Query_me_customer
  }) => Promise<void>
  order: OrderFragment_Order
  windowWidth: number
}

export const ReviewOrder_Query = gql`
  query ReviewOrder_Query {
    me {
      id
      customer {
        id
        ...OrderFragment_Customer
      }
    }
  }
  ${OrderFragment_Customer}
`

export const ReviewOrderContainer: React.FC<Props> = ({
  order,
  onBackPressed,
  onOrderItemPressed,
  onOrderSubmitted,
  onNavigateToBrand,
  windowWidth,
}) => {
  const { data, loading } = useQuery(ReviewOrder_Query)

  const [isSubmittingOrder, setIsSubmittingOrder] = React.useState(false)

  const customer = data?.me?.customer

  const handleSubmitOrder = async () => {
    if (isSubmittingOrder) {
      return
    }

    try {
      setIsSubmittingOrder(true)
      await onOrderSubmitted({ order, customer })
    } finally {
      setIsSubmittingOrder(false)
    }
  }

  if (loading) {
    return (
      <>
        <FixedBackArrow onPress={onBackPressed} variant="whiteBackground" />
        <Loader />
      </>
    )
  }

  return (
    <ReviewOrder
      isSubmittingOrder={isSubmittingOrder}
      onSubmitOrder={handleSubmitOrder}
      onBackPressed={onBackPressed}
      onOrderItemPressed={onOrderItemPressed}
      onNavigateToBrand={onNavigateToBrand}
      order={order}
      customer={customer}
      windowWidth={windowWidth}
    />
  )
}
