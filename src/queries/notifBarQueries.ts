import gql from "graphql-tag"

export const GET_NOTIFICATION_BAR = gql`
  query GetNotificationBar {
    me {
      id
      notificationBar {
        id
        icon
        underlinedCTAText
        viewCount
        clickCount
        web {
          title
          detail
          route {
            url
            drawerView
            dismissable
          }
        }
        mobile {
          title
          detail
          route {
            route
            screen
            params
            dismissable
          }
        }
        palette {
          default {
            backgroundColor
            titleFontColor
            detailFontColor
            iconStrokeColor
          }
        }
      }
    }
  }
`

export const UPDATE_NOTIFICATION_BAR_RECEIPT = gql`
  mutation UpdateNotificationBarReceipt(
    $notificationBarId: NotificationBarID!
    $viewCount: Int
    $clickCount: Int
  ) {
    updateNotificationBarReceipt(
      notification: {
        notificationBarId: $notificationBarId
        clickCount: $clickCount
        viewCount: $viewCount
      }
    ) {
      id
      viewCount
      clickCount
    }
  }
`
