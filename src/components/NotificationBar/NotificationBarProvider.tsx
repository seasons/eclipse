import React, { useReducer } from "react"
import {
  NotificationBarContext,
  NotificationBarData,
} from "./NotificationBarContext"

enum NotificationBarAction {
  Show = "SHOW",
  Hide = "HIDE",
  SetOffset = "SET_OFFSET",
  AddData = "ADD_DATA",
}

export const NotificationBarProvider = ({ children }) => {
  const [notificationBarState, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case NotificationBarAction.AddData:
          return {
            ...prevState,
            data: action.data,
          }
        case NotificationBarAction.Show:
          return {
            ...prevState,
            show: true,
          }
        case NotificationBarAction.Hide:
          return {
            ...prevState,
            dismissed: action.dismissed,
            show: false,
          }
        case NotificationBarAction.SetOffset:
          return {
            ...prevState,
            offsetTop: action.offsetTop,
          }
      }
    },
    {
      show: false,
      dismissed: false,
      data: null,
      offsetTop: 0,
    }
  )

  let clearData

  const notificationBarContext = {
    showNotificationBar: async () => {
      dispatch({ type: NotificationBarAction.Show })
    },
    addNotificationBarData: async (data: NotificationBarData) => {
      clearTimeout(clearData)
      dispatch({ type: NotificationBarAction.AddData, data })
    },
    hideNotificationBar: async (dismissed: boolean) => {
      dispatch({ type: NotificationBarAction.Hide, dismissed })
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
