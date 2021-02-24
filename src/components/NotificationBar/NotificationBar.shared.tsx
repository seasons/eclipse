import React from "react"
import { Box, Sans } from "@/elements"
import { ChevronIcon } from "@/icons/ChevronIcon"
import { CloseXIcon } from "@/icons/CloseXIcon"
import { gql, useQuery } from "@apollo/client"
import { Pressable } from "@/components/ReactNative"

const GET_NOTIFICATION_BAR = gql`
  query GetNotificationBar {
    me {
      id
      notificationBar {
        icon
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
  const { data } = useQuery(GET_NOTIFICATION_BAR)
  console.log(data)
  if (!data?.me?.notificationBar) {
    return null
  }

  const isWebNotification = type === "web"
  const isMobileNotification = type === "mobile"
  const {
    me: {
      notificationBar: {
        icon,
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
    if (isMobileNotification && !!mobileRoute) {
      onClick(mobileRoute)
    }
    if (isWebNotification && !!webRoute) {
      onClick(webRoute)
    }
  }

  const supportedIcons = ["Chevron", "CloseX"]

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
