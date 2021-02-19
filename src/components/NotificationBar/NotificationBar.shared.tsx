import React from "react"
import { Box, Sans } from "@/elements"
import { ChevronIcon } from "@/icons/ChevronIcon"
import { gql, useQuery } from "@apollo/client"

const GET_NOTIFICATION_BAR = gql`
  query GetNotificationBar {
    me {
      id
      notificationBar {
        title
        detail
        route {
          web {
            url
            drawerView
          }
          mobile {
            route
            screen
            params
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
}

export const NotificationBarTemplate: React.FC<NotificationBarTemplateProps> = ({
  pressableComponent: Pressable,
  containerComponent: Container,
  onClick,
}) => {
  const { data } = useQuery(GET_NOTIFICATION_BAR)
  console.log(data)
  if (!data) {
    return null
  }

  const {
    me: {
      notificationBar: { title, detail, route },
    },
  } = data
  return (
    <Pressable onPressIn={() => !!route && onClick(route)}>
      {({ pressed }) => {
        const backgroundColor = pressed ? "#B56464" : "#B45455"
        return (
          <Container color={backgroundColor}>
            <Box>
              <Sans size="3" color="white100">
                {title}
              </Sans>
              <Sans size="3" color="#D8A8A9">
                {detail}
              </Sans>
            </Box>
            <ChevronIcon fillColor={backgroundColor} color="#D8A8A9" />
          </Container>
        )
      }}
    </Pressable>
  )
}
