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
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  padding: 15px 20px 15px 20px;
`
