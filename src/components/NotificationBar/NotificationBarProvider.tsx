import React, { useReducer } from "react"
import {
  NotificationBarContext,
  NotificationBarData,
} from "./NotificationBarContext"

enum NotificationBarAction {
  Show = "SHOW",
  Hide = "HIDE",
  SetOffset = "SET_OFFSET",
}

export const NotificationBarProvider = ({ children }) => {
  const [notificationBarState, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case NotificationBarAction.Show:
          return {
            ...prevState,
            show: true,
            data: action.data,
          }
        case NotificationBarAction.Hide:
          return {
            ...prevState,
            show: false,
            data: null,
          }
        case NotificationBarAction.SetOffset:
          return {
            ...prevState,
            offsetTop: action.offsetTop,
          }
      }
    },
    {
      show: true,
      data: null,
      offsetTop: 0,
    }
  )

  let clearData

  const notificationBarContext = {
    showNotificationBar: async (data: NotificationBarData) => {
      clearTimeout(clearData)
      dispatch({ type: NotificationBarAction.Show, data })
    },
    hideNotificationBar: async () => {
      dispatch({ type: NotificationBarAction.Hide })
    },
    setOffsetTop: async (offsetTop: number) => {
      dispatch({ type: NotificationBarAction.SetOffset, offsetTop })
    },
    notificationBarState,
  }

  return (
    // @ts-ignore
    <NotificationBarContext.Provider value={notificationBarContext}>
      {children}
    </NotificationBarContext.Provider>
  )
}
