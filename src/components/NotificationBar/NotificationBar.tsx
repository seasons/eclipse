import React from "react"
import {
  GraphQLNotificationBarTemplate,
  NotificationBarProps,
} from "./NotificationBar.shared"
import { NotificationBarContainer, OuterWrapper } from "./StyledNotificationBar"

export const NotificationBar: React.FC<NotificationBarProps> = (props) => {
  const showIf = ({ drawerView, url: webURL }) => {
    if (drawerView) {
      return true
    }
    if (webURL) {
      let windowLocation
      if (typeof window !== "undefined") {
        windowLocation = window.location.pathname
      }
      return !!windowLocation && !!webURL && windowLocation !== webURL
    }

    return false
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
