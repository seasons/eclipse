import { useQuery, useMutation, ApolloError } from "@apollo/client"
import { ReviewOrder } from "./ReviewOrder"
import { GetCustomerQuery, SubmitOrderMutation } from "./queries"
import React from "react"
import { OrderFragment } from "@/generated/OrderFragment"
import { GetCustomer } from "@/generated/GetCustomer"
import { SubmitOrder, SubmitOrderVariables } from "@/generated/SubmitOrder"
import { FixedBackArrow, Loader } from "@/components"
import { useTracking, TrackSchema } from "@/helpers"

type Props = {
  onBackPressed: () => void
  onOrderItemPressed: () => void
  onOrderSubmitted: (resultOrder: OrderFragment) => void
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

      onOrderSubmitted(result.data.submitOrder)
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
