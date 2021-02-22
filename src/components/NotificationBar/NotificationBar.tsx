import React from "react"
import styled from "styled-components"
import { Pressable } from "react-native-web"
import {
  NotificationBarTemplate,
  NotificationBarProps,
} from "./NotificationBar.shared"

export const NotificationBar: React.FC<NotificationBarProps> = (props) => {
  return (
    <NotificationBarTemplate
      pressableComponent={Pressable}
      containerComponent={Container}
      type="web"
      {...props}
    />
  )
}

const Container = styled.div<{ color: string }>`
  background-color: ${(p) => p.color};
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px 15px 20px;
`
