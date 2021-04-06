import React, { useEffect, useState } from "react"
import { Box, Sans } from "@/elements"
import { ChevronIcon } from "@/icons/ChevronIcon"
import { CloseXIcon } from "@/icons/CloseXIcon"
import { useQuery, useMutation } from "@apollo/client"
import { Pressable } from "@/components/ReactNative"
import { useNotificationBarContext } from "./NotificationBarContext"
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
  show?: boolean
}

export const NotificationBarTemplate: React.FC<NotificationBarTemplateProps> = ({
  containerComponent: Container,
  onClick,
  type,
  isLoggedIn,
}) => {
  const supportedIcons = ["Chevron", "CloseX"]
  const { previousData, data = previousData, refetch } = useQuery(
    GET_NOTIFICATION_BAR
  )
  const { notificationBarState } = useNotificationBarContext()

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
  const show = notificationBarState.show

  useEffect(() => {
    refetch()
  }, [isLoggedIn, refetch])

  if (!show || hasbeenClosedNow) {
    return null
  }

  if (!hasData) {
    return null
  }

  const isWebNotification = type === "web"
  const isMobileNotification = type === "mobile"
  const notificationBar = data?.me?.notificationBar

  const notificationBarId = notificationBar?.id
  const icon = notificationBar?.icon
  const clickCount = notificationBar?.clickCount
  const viewCount = notificationBar?.viewCount

  const web = notificationBar?.web
  const mobile = notificationBar?.mobile
  const webRoute = web?.route
  const mobileRoute = mobile?.route

  const palette = notificationBar?.palette
  const defaultPalette = palette?.default
  const pressedPalette = palette?.pressed

  const isDismissableNotif = webRoute?.dismissable && mobileRoute?.dismissable
  const hasBeenClickedBefore = clickCount > 0
  const hasBeenClosedBefore = isDismissableNotif && hasBeenClickedBefore
  if (hasBeenClosedBefore) {
    return null
  }

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
          ? pressedPalette?.backgroundColor
          : defaultPalette?.backgroundColor
        const titleFontColorWithState = pressed
          ? pressedPalette?.titleFontColor
          : defaultPalette?.titleFontColor
        const detailFontColorWithState = pressed
          ? pressedPalette?.detailFontColor
          : defaultPalette?.detailFontColor
        const iconFontColorWithState = pressed
          ? pressedPalette?.iconStrokeColor
          : defaultPalette?.iconStrokeColor
        const renderChevron =
          icon === "Chevron" || !supportedIcons.includes(icon) // default icon
        const renderCloseX = icon === "CloseX"
        return (
          <Container color={bgColorWithState}>
            <Box paddingRight="20px">
              <Sans size="3" color={titleFontColorWithState}>
                {isWebNotification && web?.title}
                {isMobileNotification && mobile?.title}
              </Sans>
              <Sans size="3" color={detailFontColorWithState}>
                {isWebNotification && web?.detail}
                {isMobileNotification && mobile?.detail}
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
