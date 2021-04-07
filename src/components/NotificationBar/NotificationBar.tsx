import React from "react"
import styled from "styled-components"
import {
  NotificationBarTemplate,
  NotificationBarProps,
} from "./NotificationBar.shared"
import { Container } from "styled-bootstrap-grid"
import { Box } from "@/elements"

export const NotificationBar: React.FC<NotificationBarProps> = (props) => {
  return (
    <NotificationBarTemplate
      containerComponent={NotificationBarContainer}
      type="web"
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

const FlexContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Wrapper = styled(Box)<{ color: string }>`
  background-color: ${(p) => p.color};
`

const MaxWidth = styled(Container)`
  width: 100%;
  margin: 0 auto;
  position: relative;
  max-width: ${(props) => props.theme.grid.container.xl}px;
`
