import React, { useReducer } from "react"
import { NotificationBarContext } from "./NotificationBarContext"

enum NotificationBarAction {
  Show = "SHOW",
  Hide = "HIDE",
  // SetUserDidDismiss = "SET_USER_DID_DISMISS",
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
        // case NotificationBarAction.SetUserDidDismiss:
        //   return {
        //     ...prevState,
        //     userDidDismiss: true,
        //   }
      }
    },
    {
      show: false,
      // userDidDismiss: false,
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
    // setUserDidDismiss: async () => {
    //   dispatch({ type: NotificationBarAction.SetUserDidDismiss })
    // },
    notificationBarState,
  }

  return (
    <NotificationBarContext.Provider value={notificationBarContext}>
      {children}
    </NotificationBarContext.Provider>
  )
}
