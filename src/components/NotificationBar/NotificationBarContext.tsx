import React, { useContext } from "react"

export const useNotificationBarContext = () =>
  useContext(NotificationBarContext)

export const NotificationBarContext = React.createContext({
  showNotificationBar: () => null,
  hideNotificationBar: () => null,
  // userDidDismissNow: () => null,
  // setUserDidDismiss: () => null,
  // notificationBarState: { show: false, userDidDismiss: false },
  notificationBarState: { show: false },
  // notificationBarState: { show: false, userDismissedNow: false },
})
