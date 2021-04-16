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
  const [overrideShow, setOverrideShow] = React.useState(false)

  const dataToParent = (data: any) => {
    if (data) {
      let windowLocation
      if (typeof window !== "undefined") {
        windowLocation = window.location.pathname
      }
      if (windowLocation === data?.me?.notificationBar?.web?.route?.url) {
        setOverrideShow(true)
      } else if (overrideShow) {
        setOverrideShow(false)
      }
    }
  }

  return (
    <NotificationBarTemplate
      outerContainerComponent={OuterWrapper}
      dataToParent={dataToParent}
      containerComponent={NotificationBarContainer}
      type="web"
      overrideShow={overrideShow}
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
