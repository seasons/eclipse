import { useQuery } from "@apollo/client"
import { ReviewOrder } from "./ReviewOrder"
import { GetCustomerQuery } from "./queries"
import React from "react"
import {
  Order_OrderFragment,
  Order_OrderFragment_lineItems_productVariant_product,
} from "@/generated/Order_OrderFragment"
import { GetCustomer, GetCustomer_me_customer } from "@/generated/GetCustomer"
import { FixedBackArrow, Loader } from "@/components"

type Props = {
  onBackPressed: () => void
  onNavigateToBrand: (href: string) => void
  onOrderItemPressed: (
    product: Order_OrderFragment_lineItems_productVariant_product
  ) => void
  onOrderSubmitted: ({
    order,
    customer,
  }: {
    order: Order_OrderFragment
    customer: GetCustomer_me_customer
  }) => Promise<void>
  order: Order_OrderFragment
  windowWidth: number
}

export const ReviewOrderContainer: React.FC<Props> = ({
  order,
  onBackPressed,
  onOrderItemPressed,
  onOrderSubmitted,
  onNavigateToBrand,
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
