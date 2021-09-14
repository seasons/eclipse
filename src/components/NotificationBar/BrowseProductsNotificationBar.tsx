import React from "react"
import {
  NotificationBarTemplate,
  NotificationBarProps,
} from "./NotificationBar.shared"
import { NotificationBarContainer, OuterWrapper } from "./StyledNotificationBar"
import { GetNotificationBar_me_notificationBar } from "@/generated/GetNotificationBar"
import { useRouter } from "next/router"

const BROWSE_PRODUCTS_NOTIFICATION = ({
  id: "BROWSE_PRODUCTS_NOTIFICATION",
  web: {
    title:
      "Apply for membership & get access to over +1,000 styles starting at $65 per month",
    route: { url: "/signup", dismissable: true },
  },
  underlinedCTAText: "Dismiss",
  palette: {
    default: {
      backgroundColor: "#000000",
      titleFontColor: "#ffffff",
      detailFontColor: "#7F7F7F",
      iconStrokeColor: "#7F7F7F",
    },
  },
  clickCount: 0,
  viewCount: 0,
} as any) as GetNotificationBar_me_notificationBar

const getBrowseProductsNotification = () => {
  try {
    return (
      JSON.parse(
        window.localStorage.getItem(BROWSE_PRODUCTS_NOTIFICATION.id)
      ) || BROWSE_PRODUCTS_NOTIFICATION
    )
  } catch {
    return BROWSE_PRODUCTS_NOTIFICATION
  }
}

const setBrowseProductsNotification = (data) => {
  window.localStorage.setItem(
    BROWSE_PRODUCTS_NOTIFICATION.id,
    JSON.stringify(data)
  )
}

export const BrowseProductsNotificationBar: React.FC<NotificationBarProps> = ({
  ...props
}) => {
  const router = useRouter()

  const data = getBrowseProductsNotification()

  React.useEffect(() => {
    setBrowseProductsNotification(data)
  }, [data])

  const hideIf = () => {
    return props.isLoggedIn || data.clickCount < 1
  }

  return (
    <NotificationBarTemplate
      outerContainerComponent={OuterWrapper}
      containerComponent={NotificationBarContainer}
      type="web"
      hideIf={hideIf}
      data={data}
      onHandleRoute={({ url }) => router.push(url)}
    />
  )
}
