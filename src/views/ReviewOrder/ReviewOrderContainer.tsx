import { useQuery, useMutation, ApolloError } from "@apollo/client"
import { ReviewOrder } from "./ReviewOrder"
import { GetCustomerQuery, SubmitOrderMutation } from "./queries"
import React from "react"
import {
  OrderFragment,
  OrderFragment_lineItems_productVariant_product,
} from "@/generated/OrderFragment"
import { GetCustomer, GetCustomer_me_customer } from "@/generated/GetCustomer"
import { SubmitOrder, SubmitOrderVariables } from "@/generated/SubmitOrder"
import { FixedBackArrow, Loader } from "@/components"
import { useTracking, TrackSchema } from "@/helpers"

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
  }) => void
  onError: (error: Error | readonly ApolloError[]) => void
  order: OrderFragment
  windowWidth: number
}

export const ReviewOrderContainer: React.FC<Props> = ({
  order,
  onBackPressed,
  onOrderItemPressed,
  onOrderSubmitted,
  onError,
  windowWidth,
}) => {
  const { data, loading } = useQuery<GetCustomer>(GetCustomerQuery)
  const [submitOrder] = useMutation<SubmitOrder, SubmitOrderVariables>(
    SubmitOrderMutation
  )

  const tracking = useTracking()
  const [isSubmittingOrder, setIsSubmittingOrder] = React.useState(false)

  const customer = data?.me?.customer

  const handleSubmitOrder = async (orderId: string) => {
    if (isSubmittingOrder) {
      return
    }

    tracking.trackEvent({
      actionName: TrackSchema.ActionNames.PlaceOrderTapped,
      actionType: TrackSchema.ActionTypes.Tap,
    })
    setIsSubmittingOrder(true)

    try {
      const result = await submitOrder({
        variables: {
          input: {
            orderID: orderId,
          },
        },
      })

      if (result.errors) {
        return onError((result.errors as any) as readonly ApolloError[])
      }

      onOrderSubmitted({ order: result.data.submitOrder, customer })
    } catch (e) {
      return onError(e)
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
