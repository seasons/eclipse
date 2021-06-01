import React, { useReducer } from "react"
import {
  NotificationBarContext,
  NotificationBarData,
} from "./NotificationBarContext"

enum NotificationBarAction {
  Show = "SHOW",
  Hide = "HIDE",
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
      }
    },
    {
      show: true,
      data: null,
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
    notificationBarState,
  }

  return (
    // @ts-ignore
    <NotificationBarContext.Provider value={notificationBarContext}>
      {children}
    </NotificationBarContext.Provider>
  )
}
