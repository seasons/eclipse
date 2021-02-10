import { useQuery } from "@apollo/client"
import { ReviewOrder } from "./ReviewOrder"
import { GetCustomerQuery } from "./queries"
import { OrderFragment } from "@/generated/OrderFragment"
import React from "react"
import { GetCustomer } from "@/generated/GetCustomer"
import { FixedBackArrow, Loader } from "@/components"
import { useTracking, TrackSchema } from "@/helpers"

type Props = {
  onBackPressed: () => void
  onOrderItemPressed: () => void
  order: OrderFragment
  windowWidth: number
}

export const OrderContainer: React.FC<Props> = ({
  order,
  onBackPressed,
  onOrderItemPressed,
  windowWidth,
}) => {
  const { data, loading } = useQuery<GetCustomer>(GetCustomerQuery)
  const tracking = useTracking()
  const [isSubmittingOrder, setIsSubmittingOrder] = React.useState(false)

  const customer = data?.me?.customer

  const handleSubmitOrder = (_orderId: string) => {
    if (isSubmittingOrder) {
      return false
    }

    tracking.trackEvent({
      actionName: TrackSchema.ActionNames.PlaceOrderTapped,
      actionType: TrackSchema.ActionTypes.Tap,
    })
    setIsSubmittingOrder(true)

    return false

    // todo: submit order
    /**
    await submitOrder({
      variables: {
        input: {
          orderID: order.id,
        },
      },
    })
    **/
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
