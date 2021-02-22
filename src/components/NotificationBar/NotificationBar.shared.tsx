import React from "react"
import { Box, Sans } from "@/elements"
import { ChevronIcon } from "@/icons/ChevronIcon"
import { gql, useQuery } from "@apollo/client"

const GET_NOTIFICATION_BAR = gql`
  query GetNotificationBar {
    me {
      id
      notificationBar {
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
  pressableComponent: React.FC<{
    onPressIn: null | ((event: any) => void)
  }>
  containerComponent: React.FC<{ color: string }>
  type: "web" | "mobile"
}

export const NotificationBarTemplate: React.FC<NotificationBarTemplateProps> = ({
  pressableComponent: Pressable,
  containerComponent: Container,
  onClick,
  type,
}) => {
  const { data } = useQuery(GET_NOTIFICATION_BAR)
  console.log(data)
  if (!data) {
    return null
  }

  const isWebNotification = type === "web"
  const isMobileNotification = type === "mobile"
  const {
    me: {
      notificationBar: {
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

  return (
    <Pressable onPressIn={onPressIn}>
      {({ pressed }) => {
        let bgColorWithState = pressed
          ? backgroundColorPressed
          : backgroundColor
        let titleFontColorWithState = pressed
          ? titleFontColorPressed
          : titleFontColor
        let detailFontColorWithState = pressed
          ? detailFontColorPressed
          : detailFontColor
        let iconFontColorWithState = pressed
          ? iconStrokeColorPressed
          : iconStrokeColor
        return (
          <Container color={bgColorWithState}>
            <Box>
              <Sans size="3" color={titleFontColorWithState}>
                {isWebNotification && webTitle}
                {isMobileNotification && mobileTitle}
              </Sans>
              <Sans size="3" color={detailFontColorWithState}>
                {isWebNotification && webDetail}
                {isMobileNotification && mobileDetail}
              </Sans>
            </Box>
            <ChevronIcon
              fillColor={bgColorWithState}
              color={iconFontColorWithState}
            />
          </Container>
        )
      }}
    </Pressable>
  )
}
