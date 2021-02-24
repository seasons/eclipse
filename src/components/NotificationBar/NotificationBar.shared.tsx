import React, { useEffect, useState } from "react"
import { Box, Sans } from "@/elements"
import { ChevronIcon } from "@/icons/ChevronIcon"
import { CloseXIcon } from "@/icons/CloseXIcon"
import { gql, useQuery, useMutation } from "@apollo/client"
import { Pressable } from "@/components/ReactNative"

const GET_NOTIFICATION_BAR = gql`
  query GetNotificationBar {
    me {
      id
      notificationBar {
        id
        icon
        viewCount
        clickCount
        web {
          title
          detail
          route {
            url
            drawerView
          }
        }
        mobile {
          title
          detail
          route {
            route
            screen
            params
          }
        }
        palette {
          default {
            backgroundColor
            titleFontColor
            detailFontColor
            iconStrokeColor
          }
          pressed {
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

const UPDATE_NOTIFICATION_BAR_RECEIPT = gql`
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
export interface NotificationBarProps {
  onClick?: (any) => void
}

interface NotificationBarTemplateProps extends NotificationBarProps {
  containerComponent: React.FC<{ color: string }>
  type: "web" | "mobile"
}

export const NotificationBarTemplate: React.FC<NotificationBarTemplateProps> = ({
  containerComponent: Container,
  onClick,
  type,
}) => {
  const { data, error } = useQuery(GET_NOTIFICATION_BAR)
  const [updateNotificationBarReceipt] = useMutation(
    UPDATE_NOTIFICATION_BAR_RECEIPT,
    {
      refetchQueries: [
        {
          query: GET_NOTIFICATION_BAR,
        },
      ],
    }
  )
  const [hasUpdatedViewCount, setHasUpdatedViewCount] = useState(false)
  useEffect(() => {
    if (!data?.me?.notificationBar || hasUpdatedViewCount) {
      return
    }

    const {
      me: {
        notificationBar: { id: notificationBarId, viewCount },
      },
    } = data
    updateNotificationBarReceipt({
      variables: { notificationBarId, viewCount: viewCount + 1 },
    })
    setHasUpdatedViewCount(true)
  }, [data])
  // const [hasbeenClosed, setHasBeenClosed] = useState(false)

  console.log(data)
  console.log(error)
  if (!data?.me?.notificationBar) {
    return null
  }

  const isWebNotification = type === "web"
  const isMobileNotification = type === "mobile"
  const {
    me: {
      notificationBar: {
        // id: notificationBarId,
        icon,
        // viewCount,
        // clickCount,
        web: { title: webTitle, detail: webDetail, route: webRoute },
        mobile: {
          title: mobileTitle,
          detail: mobileDetail,
          route: mobileRoute,
        },
        palette: {
          default: {
            backgroundColor,
            titleFontColor,
            detailFontColor,
            iconStrokeColor,
          },
          pressed: {
            backgroundColor: backgroundColorPressed,
            titleFontColor: titleFontColorPressed,
            detailFontColor: detailFontColorPressed,
            iconStrokeColor: iconStrokeColorPressed,
          },
        },
      },
    },
  } = data

  const onPressIn = () => {
    if (isMobileNotification) {
      if (mobileRoute.dismissable) {
        // setHasBeenClosed(true)
      } else {
        onClick(mobileRoute)
      }
    } else if (isWebNotification) {
      if (webRoute.dismissable) {
        // setHasBeenClosed(true)
      } else {
        onClick(webRoute)
      }
    }
  }

  const supportedIcons = ["Chevron", "CloseX"]

  // if (hasbeenClosed) {
  //   return null
  // }

  return (
    <Pressable onPressIn={onPressIn}>
      {({ pressed }) => {
        const bgColorWithState = pressed
          ? backgroundColorPressed
          : backgroundColor
        const titleFontColorWithState = pressed
          ? titleFontColorPressed
          : titleFontColor
        const detailFontColorWithState = pressed
          ? detailFontColorPressed
          : detailFontColor
        const iconFontColorWithState = pressed
          ? iconStrokeColorPressed
          : iconStrokeColor
        const renderChevron =
          icon === "Chevron" || !supportedIcons.includes(icon) // default icon
        const renderCloseX = icon === "CloseX"
        return (
          <Container color={bgColorWithState}>
            <Box paddingRight="20px">
              <Sans size="3" color={titleFontColorWithState}>
                {isWebNotification && webTitle}
                {isMobileNotification && mobileTitle}
              </Sans>
              <Sans size="3" color={detailFontColorWithState}>
                {isWebNotification && webDetail}
                {isMobileNotification && mobileDetail}
              </Sans>
            </Box>
            <Box>
              {renderChevron && <ChevronIcon color={iconFontColorWithState} />}
              {renderCloseX && <CloseXIcon color={iconFontColorWithState} />}
            </Box>
          </Container>
        )
      }}
    </Pressable>
  )
}
