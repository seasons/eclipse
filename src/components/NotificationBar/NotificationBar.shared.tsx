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
import styled from "styled-components"

export interface NotificationBarProps {
  onClick?: (any) => void
  isLoggedIn?: boolean
}

interface NotificationBarTemplateProps extends NotificationBarProps {
  containerComponent: React.FC<{ color: string }>
  outerContainerComponent: React.FC
  type: "web" | "native"
  hideIf?: (data: any) => boolean
}

export const NotificationBarTemplate: React.FC<NotificationBarTemplateProps> = ({
  containerComponent: Container,
  outerContainerComponent: OuterContainer,
  onClick,
  type,
  isLoggedIn,
  hideIf,
}) => {
  const [hide, setHide] = useState(false)
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

  const isWebNotification = type === "web"
  const isNativeNotification = type === "native"
  const notificationBar = data?.me?.notificationBar
  const underlinedCTAText = notificationBar?.underlinedCTAText

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

  useEffect(() => {
    if (data) {
      setHide(hideIf(data))
    }
  }, [data, hideIf, setHide])

  if (hasBeenClosedBefore || !show || hasbeenClosedNow || !hasData || hide) {
    return null
  }

  const onPressIn = () => {
    if (isNativeNotification) {
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
    <OuterContainer>
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
              <Box pr={5}>
                <Sans
                  size={isWebNotification ? "3" : "4"}
                  color={titleFontColorWithState}
                >
                  {isWebNotification && web?.title}
                  {isNativeNotification && mobile?.title}
                </Sans>
                <Sans
                  size={isWebNotification ? "3" : "4"}
                  color={detailFontColorWithState}
                >
                  {isWebNotification && web?.detail}
                  {isNativeNotification && mobile?.detail}
                </Sans>
              </Box>
              <FlexContainer>
                {!!underlinedCTAText && isWebNotification && (
                  <FlexContainer mr={2}>
                    <Sans
                      size="3"
                      color={titleFontColorWithState}
                      style={{ textDecorationLine: "underline" }}
                    >
                      {underlinedCTAText}
                    </Sans>
                  </FlexContainer>
                )}
                {renderChevron && (
                  <ChevronIcon
                    scale={isWebNotification ? 0.7 : 1}
                    color={iconFontColorWithState}
                    fillColor={bgColorWithState}
                  />
                )}
                {renderCloseX && <CloseXIcon color={iconFontColorWithState} />}
              </FlexContainer>
            </Container>
          )
        }}
      </Pressable>
    </OuterContainer>
  )
}

const FlexContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
