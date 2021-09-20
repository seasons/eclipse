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
      "Apply for membership & get exclusive rental access to over +1,000 designer styles",
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
  const [data, setData] = React.useState(getBrowseProductsNotification())

  React.useEffect(() => {
    setBrowseProductsNotification(data)
  }, [data])

  const showIf = () => {
    return !props.isLoggedIn && data.clickCount < 1
  }

  const handleUpdateNotificationBarReceipt = ({
    clickCount,
  }: {
    clickCount?: number
  }) => {
    if (clickCount) {
      setData({ ...data, clickCount })
    }
    return Promise.resolve()
  }

  return (
    <NotificationBarTemplate
      outerContainerComponent={OuterWrapper}
      containerComponent={NotificationBarContainer}
      onUpdateNotificationBarReceipt={handleUpdateNotificationBarReceipt}
      type="web"
      showIf={showIf}
      hideIcon={true}
      data={data}
      onClickBanner={({ url }) => router.push(url)}
    />
  )
}
