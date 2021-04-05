import React from "react"
import styled from "styled-components"
import {
  NotificationBarTemplate,
  NotificationBarProps,
} from "./NotificationBar.shared"

export const NotificationBar: React.FC<NotificationBarProps> = (props) => {
  return (
    <NotificationBarTemplate
      containerComponent={Container}
      type="web"
      {...props}
    />
  )
}

const Container = styled.div<{ color: string }>`
  background-color: ${(p) => p.color};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px 15px 20px;
`
