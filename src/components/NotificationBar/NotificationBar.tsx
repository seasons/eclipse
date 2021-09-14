import React from "react"
import {
  GraphQLNotificationBarTemplate,
  NotificationBarProps,
} from "./NotificationBar.shared"
import { WebRoute } from "./NotificationBarContext"
import { NotificationBarContainer, OuterWrapper } from "./StyledNotificationBar"

export const NotificationBar: React.FC<NotificationBarProps> = (props) => {
  const hideIf = (route: WebRoute) => {
    if (!route) {
      return false
    }
    const { drawerView, url: webURL } = route
    if (drawerView) {
      return false
    }
    if (webURL) {
      let windowLocation
      if (typeof window !== "undefined") {
        windowLocation = window.location.pathname
      }
      return !!windowLocation && !!webURL && windowLocation === webURL
    }

    return false
  }

  return (
    <GraphQLNotificationBarTemplate
      outerContainerComponent={OuterWrapper}
      containerComponent={NotificationBarContainer}
      type="web"
      hideIf={hideIf}
      {...props}
    />
  )
}
