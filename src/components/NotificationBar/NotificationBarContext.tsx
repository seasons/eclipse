import React, { useContext } from "react"

export interface NotificationBarData {
  title: string
  subtitle?: string
  underlinedText?: string
  onClickBanner?: () => void
  onClickText?: () => void
}

export const useNotificationBarContext = () =>
  useContext(NotificationBarContext)

export const NotificationBarContext = React.createContext({
  showNotificationBar: (data: NotificationBarData) => {
    return data
  },
  hideNotificationBar: () => null,
  notificationBarState: { show: true, data: null },
})
