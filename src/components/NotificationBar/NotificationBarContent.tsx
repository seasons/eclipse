import React from "react"
import { Box, Sans } from "@/elements"
import { TouchableWithoutFeedback } from "react-native"
import { ChevronIcon } from "@/icons/ChevronIcon"
import { CloseXIcon } from "@/icons/CloseXIcon"
import { useNotificationBarContext } from "@seasons/eclipse"
import styled from "styled-components"
import { NotificationBarData } from "./NotificationBarContext"

const supportedIcons = ["Chevron", "CloseX"]

export const NotificationBarContent: React.FC<{
  Container: React.FC<{ color: string }>
  onUpdateNotificationBarReceipt: (data: any) => void
  onHandleRoute: (route: any) => void
}> = ({ Container, onUpdateNotificationBarReceipt, onHandleRoute }) => {
  const {
    hideNotificationBar,
    notificationBarState: { data: contextData },
  } = useNotificationBarContext()

  if (!contextData) {
    return null
  }

  const {
    title,
    subtitle,
    underlinedCTAText,
    icon,
    onClickText,
    onClickBanner,
    webRoute,
    nativeRoute,
    isWebNotification,
    titleFontColor,
    subtitleFontColor,
    bannerBackgroundColor,
    iconColor,
    notificationBarId,
    initialClickCount,
  } = contextData as NotificationBarData

  const isNativeNotification = !isWebNotification
  const renderCloseX = icon === "CloseX"
  const renderChevron = icon === "Chevron" || !supportedIcons.includes(icon)
  const hideIcon = !icon

  const onBannerClick = () => {
    if (onClickBanner) {
      onClickBanner()
    } else if (isNativeNotification) {
      if (nativeRoute?.route) {
        onHandleRoute(nativeRoute)
      } else if (nativeRoute?.dismissable) {
        hideNotificationBar(true)
      }
    } else if (isWebNotification) {
      if (webRoute) {
        onHandleRoute(webRoute)
      } else if (webRoute?.dismissable) {
        hideNotificationBar(true)
      }
    }

    if (notificationBarId) {
      onUpdateNotificationBarReceipt({
        notificationBarId,
        clickCount: initialClickCount + 1,
      })
    }
  }

  const onUnderlinedTextClicked = () => {
    if (onClickText) {
      onClickText()
    } else if (isNativeNotification) {
      if (nativeRoute?.route) {
        onHandleRoute(nativeRoute)
      } else if (nativeRoute?.dismissable) {
        hideNotificationBar(true)
      }
    } else if (isWebNotification) {
      if (webRoute) {
        onHandleRoute(webRoute)
      } else if (webRoute?.dismissable) {
        hideNotificationBar(true)
      }
    }
  }

  const canClickBanner =
    (!isWebNotification && nativeRoute?.route) ||
    (isWebNotification && webRoute) ||
    onClickBanner

  let wrapperStyles = {}
  if (canClickBanner && isWebNotification) {
    wrapperStyles = { cursor: "pointer" }
  }
  if (isWebNotification) {
    wrapperStyles = { ...wrapperStyles, height: "100%" }
  }

  return (
    <Box height="100%" onClick={canClickBanner ? () => onBannerClick() : null}>
      <Box style={wrapperStyles}>
        <Container color={bannerBackgroundColor}>
          <Box pr={5} py={2}>
            <Sans size={isWebNotification ? "3" : "4"} color={titleFontColor}>
              {title}
            </Sans>
            {!!subtitle && (
              <Sans
                size={isWebNotification ? "3" : "4"}
                color={subtitleFontColor}
              >
                {subtitle}
              </Sans>
            )}
          </Box>
          <FlexContainer>
            {!!underlinedCTAText && isWebNotification && (
              <TouchableWithoutFeedback
                onPress={(e) => {
                  e.stopPropagation()
                  onUnderlinedTextClicked()
                }}
              >
                <FlexContainer pl={2} py={2} mr={hideIcon ? 0 : 2}>
                  <Sans
                    size="3"
                    color={titleFontColor}
                    style={{ textDecorationLine: "underline" }}
                  >
                    {underlinedCTAText}
                  </Sans>
                </FlexContainer>
              </TouchableWithoutFeedback>
            )}
            {renderChevron && canClickBanner && (
              <ChevronIcon
                scale={isWebNotification ? 0.7 : 1}
                color={iconColor}
                fillColor={bannerBackgroundColor}
              />
            )}
            {renderCloseX && (
              <TouchableWithoutFeedback
                onPress={(e) => {
                  e.stopPropagation()
                  hideNotificationBar(true)
                }}
              >
                <CloseXIcon color={iconColor} />
              </TouchableWithoutFeedback>
            )}
          </FlexContainer>
        </Container>
      </Box>
    </Box>
  )
}

const FlexContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
