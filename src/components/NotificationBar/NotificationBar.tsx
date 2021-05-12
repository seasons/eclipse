import React from "react"
import {
  GraphQLNotificationBarTemplate,
  NotificationBarProps,
} from "./NotificationBar.shared"
import { NotificationBarContainer, OuterWrapper } from "./StyledNotificationBar"

export const NotificationBar: React.FC<NotificationBarProps> = (props) => {
  const showIf = (data: any) => {
    if (data) {
      let windowLocation
      if (typeof window !== "undefined") {
        windowLocation = window.location.pathname
      }
      return (
        !!windowLocation &&
        windowLocation !== data?.me?.notificationBar?.web?.route?.url
      )
    } else {
      return false
    }
  }

  return (
    <GraphQLNotificationBarTemplate
      outerContainerComponent={OuterWrapper}
      containerComponent={NotificationBarContainer}
      type="web"
      showIf={showIf}
      {...props}
    />
  )
}
