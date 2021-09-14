import React, { useContext } from "react"

export interface NotificationBarData {
  title: string
  subtitle?: string
  underlinedCTAText?: string
  initialClickCount?: number
  icon: string
  titleFontColor: string
  subtitleFontColor: string
  bannerBackgroundColor: string
  iconColor: string
  notificationBarId: string
  nativeRoute?: NativeRoute
  webRoute?: WebRoute
  isWebNotification: boolean

  // Optional onClicks passed in from frontend clients
  onClickBanner?: () => void
  onClickText?: () => void
}

export interface WebRoute {
  dismissable?: boolean
  drawerView?: string
  url?: string
}

export interface NativeRoute {
  dismissable?: boolean
  route?: string
  screen?: string
}

export const useNotificationBarContext = () =>
  useContext(NotificationBarContext)

export const NotificationBarContext = React.createContext({
  addNotificationBarData: (data: NotificationBarData) => {
    return data
  },
  showNotificationBar: () => null,
  hideNotificationBar: (dismissed: boolean) => {
    return dismissed
  },
  setOffsetTop: (offset: number) => {
    return offset
  },
  notificationBarState: {
    show: false,
    dismissed: false,
    data: null,
    offsetTop: 0,
  },
})
