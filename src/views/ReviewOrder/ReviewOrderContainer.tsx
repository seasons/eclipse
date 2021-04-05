import { useQuery } from "@apollo/client"
import { ReviewOrder } from "./ReviewOrder"
import React from "react"
import {
  OrderFragment,
  OrderFragment_lineItems_productVariant_product,
} from "@/generated/OrderFragment"
import { GetCustomer, GetCustomer_me_customer } from "@/generated/GetCustomer"
import { FixedBackArrow, Loader } from "@/components"
import { OrderFragment_Customer } from "@/queries"
import gql from "graphql-tag"

type Props = {
  onBackPressed: () => void
  onOrderItemPressed: (
    product: OrderFragment_lineItems_productVariant_product
  ) => void
  onOrderSubmitted: ({
    order,
    customer,
  }: {
    order: OrderFragment
    customer: GetCustomer_me_customer
  }) => Promise<void>
  order: OrderFragment
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
  windowWidth,
}) => {
  const { data, loading } = useQuery<GetCustomer>(ReviewOrder_Query)

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
      order={order}
      customer={customer}
      windowWidth={windowWidth}
    />
  )
}
