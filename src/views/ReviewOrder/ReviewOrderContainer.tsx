import { useQuery } from "@apollo/client"
import { ReviewOrder } from "./ReviewOrder"
import { GetCustomerQuery } from "./queries"
import React from "react"
import {
  OrderFragment,
  OrderFragment_lineItems_productVariant_product,
} from "@/generated/OrderFragment"
import { GetCustomer, GetCustomer_me_customer } from "@/generated/GetCustomer"
import { FixedBackArrow, Loader } from "@/components"

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

export const ReviewOrderContainer: React.FC<Props> = ({
  order,
  onBackPressed,
  onOrderItemPressed,
  onOrderSubmitted,
  windowWidth,
}) => {
  const { data, loading } = useQuery<GetCustomer>(GetCustomerQuery)

  const [isSubmittingOrder, setIsSubmittingOrder] = React.useState(false)

  const customer = data?.me?.customer

  const handleSubmitOrder = async () => {
    if (isSubmittingOrder) {
      return
    }
    try {
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
