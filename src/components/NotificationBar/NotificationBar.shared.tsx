import React, { useEffect, useState } from "react"
import { Box, Sans } from "@/elements"
import { ChevronIcon } from "@/icons/ChevronIcon"
import { CloseXIcon } from "@/icons/CloseXIcon"
import { useQuery, useMutation } from "@apollo/client"
import { useNotificationBarContext } from "./NotificationBarContext"
import {
  GET_NOTIFICATION_BAR,
  UPDATE_NOTIFICATION_BAR_RECEIPT,
} from "@/queries/notifBarQueries"
import { GetNotificationBar_me_notificationBar } from "@/generated/GetNotificationBar"
import styled from "styled-components"
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native"

export interface NotificationBarProps {
  onClickText?: () => void
  onClickBanner?: (any) => void
  isLoggedIn?: boolean
}

interface NotificationBarTemplateProps extends NotificationBarProps {
  containerComponent: React.FC<{ color: string }>
  outerContainerComponent: React.FC
  type: "web" | "native"
  showIf?: (webURL?: string) => boolean
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
  onClickBanner,
  onClickText,
  onUpdateNotificationBarReceipt,
  type,
  showIf,
  hideIcon,
  data,
}) => {
  const [show, setShow] = useState(false)
  const supportedIcons = ["Chevron", "CloseX"]
  const { notificationBarState } = useNotificationBarContext()

  const [hasUpdatedViewCount, setHasUpdatedViewCount] = useState(false)
  const [hasbeenClosedNow, setHasBeenClosedNow] = useState(false)
  const hasData = Boolean(data)
  const notifStateShow = notificationBarState.show

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

  const isDismissableNotif = webRoute?.dismissable && mobileRoute?.dismissable
  const hasBeenClickedBefore = clickCount > 0
  const hasBeenClosedBefore = isDismissableNotif && hasBeenClickedBefore

  const bgColorWithState = defaultPalette?.backgroundColor
  const titleFontColorWithState = defaultPalette?.titleFontColor
  const detailFontColorWithState = defaultPalette?.detailFontColor
  const iconFontColorWithState = defaultPalette?.iconStrokeColor
  const renderChevron = icon === "Chevron" || !supportedIcons.includes(icon) // default icon
  const renderCloseX = icon === "CloseX"

  useEffect(() => {
    console.log("notifStateShow,", notifStateShow)
    setShow(notifStateShow)
  }, [notifStateShow])

  useEffect(() => {
    if (data && showIf) {
      setShow(showIf(data?.web?.route?.url))
    }
  }, [data, showIf, setShow])

  if (hasBeenClosedBefore || !show || hasbeenClosedNow || !hasData) {
    return null
  }

  const onBannerClick = () => {
    if (isNativeNotification) {
      if (mobileRoute && mobileRoute.route) {
        onClickBanner(mobileRoute)
      } else if (mobileRoute && mobileRoute.dismissable) {
        setHasBeenClosedNow(true)
      }
    } else if (isWebNotification) {
      if (webRoute && webRoute.url) {
        onClickBanner(webRoute)
      } else if (webRoute && webRoute.dismissable) {
        setHasBeenClosedNow(true)
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
      <TouchableOpacity onPress={() => onBannerClick()}>
        <Container color={bgColorWithState}>
          <Box pr={5} py={2}>
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
              <TouchableWithoutFeedback
                onPress={(e) => {
                  e.stopPropagation()
                  !!onClickText ? onClickText() : setHasBeenClosedNow(true)
                }}
              >
                <FlexContainer pl={2} py={2} mr={hideIcon ? 0 : 2}>
                  <Sans
                    size="3"
                    color={titleFontColorWithState}
                    style={{ textDecorationLine: "underline" }}
                  >
                    {underlinedCTAText}
                  </Sans>
                </FlexContainer>
              </TouchableWithoutFeedback>
            )}
            {!hideIcon && renderChevron && (
              <ChevronIcon
                scale={isWebNotification ? 0.7 : 1}
                color={iconFontColorWithState}
                fillColor={bgColorWithState}
              />
            )}
            {!hideIcon && renderCloseX && (
              <TouchableWithoutFeedback
                onPress={(e) => {
                  e.stopPropagation()
                  setHasBeenClosedNow(true)
                }}
              >
                <CloseXIcon color={iconFontColorWithState} />
              </TouchableWithoutFeedback>
            )}
          </FlexContainer>
        </Container>
      </TouchableOpacity>
    </OuterContainer>
  )
}

const FlexContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
