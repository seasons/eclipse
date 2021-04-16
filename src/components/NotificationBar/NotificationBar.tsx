import React from "react"
import styled from "styled-components"
import {
  NotificationBarTemplate,
  NotificationBarProps,
} from "./NotificationBar.shared"
import { Container } from "styled-bootstrap-grid"
import { Box, Spacer } from "@/elements"

const NOTIFICATION_BAR_HEIGHT = "52px"

export const NotificationBar: React.FC<NotificationBarProps> = (props) => {
  const hideIf = (data: any) => {
    if (data) {
      let windowLocation
      if (typeof window !== "undefined") {
        windowLocation = window.location.pathname
      }
      return (
        !!windowLocation &&
        windowLocation === data?.me?.notificationBar?.web?.route?.url
      )
    } else {
      return false
    }
  }

  return (
    <NotificationBarTemplate
      outerContainerComponent={OuterWrapper}
      containerComponent={NotificationBarContainer}
      type="web"
      hideIf={hideIf}
      {...props}
    />
  )
}

const NotificationBarContainer = ({ children, color }) => {
  return (
    <Wrapper color={color} py={2}>
      <MaxWidth>
        <FlexContainer px={[2, 2, 2, 2, 2]}>{children}</FlexContainer>
      </MaxWidth>
    </Wrapper>
  )
}

const OuterWrapper = ({ children }) => {
  return (
    <>
      <FixedBox>{children}</FixedBox>
      <Spacer mb={NOTIFICATION_BAR_HEIGHT} />
    </>
  )
}

const FixedBox = styled(Box)`
  position: fixed;
  top: 59px;
  left: 0;
  z-index: 30;
  width: 100%;
`

const FlexContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Wrapper = styled(Box)<{ color: string }>`
  background-color: ${(p) => p.color};
  width: 100%;
`

const MaxWidth = styled(Container)`
  width: 100%;
  margin: 0 auto;
  position: relative;
  max-width: ${(props) => props.theme.grid.container.xl}px;
`
