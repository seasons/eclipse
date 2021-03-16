import { Box } from "@/elements/Box"
import React from "react"
import styled from "styled-components/native"
import {
  NotificationBarTemplate,
  NotificationBarProps,
} from "./NotificationBar.shared"

export const NotificationBar: React.FC<NotificationBarProps> = (props) => {
  return (
    <NotificationBarTemplate
      containerComponent={Container}
      type="mobile"
      {...props}
    />
  )
}

const Container = styled(Box)<{ color: string }>`
  border-bottom-left-radius: 28;
  border-bottom-right-radius: 28;
  background-color: ${(p) => p.color};
  position: relative;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 100;
  padding: 20px 15px 20px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`