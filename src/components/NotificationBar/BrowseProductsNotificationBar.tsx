import React from "react"
import {
  NotificationBarTemplate,
  NotificationBarProps,
} from "./NotificationBar.shared"
import { NotificationBarContainer, OuterWrapper } from "./StyledNotificationBar"
import { GetNotificationBar_me_notificationBar } from "@/generated/GetNotificationBar"

const BROWSE_PRODUCTS_NOTIFICATION = ({
  id: "BROWSE_PRODUCTS_NOTIFICATION",
  web: {
    title:
      "Apply for membership & get access to over +1,000 styles starting at $65 per month",
    route: {
      dismissable: true,
    },
  },
  underlinedCTAText: "Dismiss",
  palette: {
    default: {
      backgroundColor: "#000000",
      titleFontColor: "#ffffff",
      detailFontColor: "#7F7F7F",
      iconStrokeColor: "#7F7F7F",
    },
    pressed: {
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

interface BrowseProductsNotificationBarProps extends NotificationBarProps {
  isBrowse: boolean
}

export const BrowseProductsNotificationBar: React.FC<BrowseProductsNotificationBarProps> = ({
  isBrowse,
  ...props
}) => {
  const [data, setData] = React.useState(getBrowseProductsNotification())

  React.useEffect(() => {
    setBrowseProductsNotification(data)
  }, [data])

  const hideIf = (data: any) => {
    return props.isLoggedIn || !isBrowse || data.clickCount > 0
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
      hideIf={hideIf}
      hideIcon={true}
      data={data}
    />
  )
}
