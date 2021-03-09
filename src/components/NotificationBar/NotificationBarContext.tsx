import React, { useContext } from "react"

export const useNotificationBarContext = () =>
  useContext(NotificationBarContext)

export const NotificationBarContext = React.createContext({
  showNotificationBar: () => null,
  hideNotificationBar: () => null,
  notificationBarState: { show: true },
})
