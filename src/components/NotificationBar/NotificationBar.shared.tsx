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
import { GetNotificationBar_me_notificationBar } from "@/generated/GetNotificationBar"
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
  hideIcon?: boolean
  data: GetNotificationBar_me_notificationBar | null
  onUpdateNotificationBarReceipt: (opts: {
    notificationBarId: string
    clickCount?: number
    viewCount?: number
  }) => Promise<void>
}

type GraphQLNotificationBarProps = Omit<
  NotificationBarTemplateProps,
  "data" | "onUpdateNotificationBarReceipt"
> & {
  isLoggedIn?: boolean
}

export const GraphQLNotificationBarTemplate: React.FC<GraphQLNotificationBarProps> = ({
  isLoggedIn,
  ...notificationBarTemplateProps
}) => {
  const mapData = (d) => d?.me?.notificationBar
  const { previousData, data = previousData, refetch } = useQuery(
    GET_NOTIFICATION_BAR
  )

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

  const handleUpdateNotificationBarReceipt = (variables) =>
    updateNotificationBarReceipt({ variables }).then(() => Promise.resolve())

  useEffect(() => {
    refetch()
  }, [isLoggedIn, refetch])

  return (
    <NotificationBarTemplate
      {...notificationBarTemplateProps}
      data={mapData(data)}
      onUpdateNotificationBarReceipt={handleUpdateNotificationBarReceipt}
    />
  )
}

export const NotificationBarTemplate: React.FC<NotificationBarTemplateProps> = ({
  containerComponent: Container,
  outerContainerComponent: OuterContainer,
  onClick,
  onUpdateNotificationBarReceipt,
  type,
  hideIf,
  hideIcon,
  data,
}) => {
  const [hide, setHide] = useState(false)
  const supportedIcons = ["Chevron", "CloseX"]
  const { notificationBarState } = useNotificationBarContext()

  const [hasUpdatedViewCount, setHasUpdatedViewCount] = useState(false)
  const [hasbeenClosedNow, setHasBeenClosedNow] = useState(false)
  const hasData = Boolean(data)
  const show = notificationBarState.show

  const isWebNotification = type === "web"
  const isNativeNotification = type === "native"
  const underlinedCTAText = data?.underlinedCTAText

  const notificationBarId = data?.id
  const icon = data?.icon
  const clickCount = data?.clickCount
  const viewCount = data?.viewCount

  const web = data?.web
  const mobile = data?.mobile
  const webRoute = web?.route
  const mobileRoute = mobile?.route

  const palette = data?.palette
  const defaultPalette = palette?.default
  const pressedPalette = palette?.pressed

  const isDismissableNotif = webRoute?.dismissable && mobileRoute?.dismissable
  const hasBeenClickedBefore = clickCount > 0
  const hasBeenClosedBefore = isDismissableNotif && hasBeenClickedBefore

  useEffect(() => {
    if (data && hideIf) {
      setHide(hideIf(data))
    }
  }, [data, hideIf, setHide])

  if (hasBeenClosedBefore || !show || hasbeenClosedNow || !hasData || hide) {
    return null
  }

  const onPressIn = () => {
    if (isNativeNotification) {
      if (mobileRoute && mobileRoute.dismissable) {
        setHasBeenClosedNow(true)
      } else {
        onClick(mobileRoute)
      }
    } else if (isWebNotification) {
      if (webRoute && webRoute.dismissable) {
        setHasBeenClosedNow(true)
      } else {
        onClick(webRoute)
      }
    }
    onUpdateNotificationBarReceipt({
      notificationBarId,
      clickCount: clickCount + 1,
    })
  }

  if (!hasUpdatedViewCount) {
    onUpdateNotificationBarReceipt({
      notificationBarId,
      viewCount: viewCount + 1,
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
                  <FlexContainer mr={hideIcon ? 0 : 2}>
                    <Sans
                      size="3"
                      color={titleFontColorWithState}
                      style={{ textDecorationLine: "underline" }}
                    >
                      {underlinedCTAText}
                    </Sans>
                  </FlexContainer>
                )}
                {!hideIcon && renderChevron && (
                  <ChevronIcon
                    scale={isWebNotification ? 0.7 : 1}
                    color={iconFontColorWithState}
                    fillColor={bgColorWithState}
                  />
                )}
                {!hideIcon && renderCloseX && (
                  <CloseXIcon color={iconFontColorWithState} />
                )}
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
