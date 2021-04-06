import React, { useReducer } from "react"
import { NotificationBarContext } from "./NotificationBarContext"

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
          }
        case NotificationBarAction.Hide:
          return {
            ...prevState,
            show: false,
          }
      }
    },
    {
      show: true,
    }
  )

  let clearData

  const notificationBarContext = {
    showNotificationBar: async () => {
      clearTimeout(clearData)
      dispatch({ type: NotificationBarAction.Show })
    },
    hideNotificationBar: async () => {
      dispatch({ type: NotificationBarAction.Hide })
    },
    notificationBarState,
  }

  return (
    <NotificationBarContext.Provider value={notificationBarContext}>
      {children}
    </NotificationBarContext.Provider>
  )
}
