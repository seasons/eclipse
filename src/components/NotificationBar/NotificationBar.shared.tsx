import React, { useEffect, useState } from "react"
import { Box, Sans } from "@/elements"
import { ChevronIcon } from "@/icons/ChevronIcon"
import { CloseXIcon } from "@/icons/CloseXIcon"
import { useQuery, useMutation } from "@apollo/client"
import { Pressable } from "@/components/ReactNative"
import {
  GET_NOTIFICATION_BAR,
  UPDATE_NOTIFICATION_BAR_RECEIPT,
} from "@/queries/notifBarQueries"

export interface NotificationBarProps {
  onClick?: (any) => void
  isLoggedIn?: boolean
}

interface NotificationBarTemplateProps extends NotificationBarProps {
  containerComponent: React.FC<{ color: string }>
  type: "web" | "mobile"
}

export const NotificationBarTemplate: React.FC<NotificationBarTemplateProps> = ({
  containerComponent: Container,
  onClick,
  type,
  isLoggedIn,
}) => {
  const supportedIcons = ["Chevron", "CloseX"]
  const { data, refetch } = useQuery(GET_NOTIFICATION_BAR)
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
  const [hasbeenClosedNow, setHasBeenClosedNow] = useState(false)
  const hasData = data?.me?.notificationBar

  useEffect(() => {
    console.log(`isLoggedIn changed to ${isLoggedIn}. Refetching`)
    refetch()
  }, [isLoggedIn])

  if (!hasData) {
    return null
  }
  const isWebNotification = type === "web"
  const isMobileNotification = type === "mobile"
  const {
    me: {
      notificationBar: {
        id: notificationBarId,
        icon,
        clickCount,
        viewCount,
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
  const hasBeenClosedBefore =
    webRoute.dismissable && mobileRoute.dismissable && clickCount > 0

  const onPressIn = () => {
    if (isMobileNotification) {
      if (mobileRoute.dismissable) {
        setHasBeenClosedNow(true)
      } else {
        onClick(mobileRoute)
      }
    } else if (isWebNotification) {
      if (webRoute.dismissable) {
        setHasBeenClosedNow(true)
      } else {
        onClick(webRoute)
      }
    }
    updateNotificationBarReceipt({
      variables: { notificationBarId, clickCount: clickCount + 1 },
    })
  }

  if (hasBeenClosedBefore || hasbeenClosedNow) {
    return null
  }

  if (!hasUpdatedViewCount) {
    updateNotificationBarReceipt({
      variables: { notificationBarId, viewCount: viewCount + 1 },
    })
    setHasUpdatedViewCount(true)
  }

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
              {renderChevron && (
                <ChevronIcon
                  color={iconFontColorWithState}
                  fillColor={bgColorWithState}
                />
              )}
              {renderCloseX && <CloseXIcon color={iconFontColorWithState} />}
            </Box>
          </Container>
        )
      }}
    </Pressable>
  )
}
