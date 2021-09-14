import React from "react"
import { Box, Spacer } from "@/elements"
import { Container } from "styled-bootstrap-grid"
import styled from "styled-components"

export const NotificationBarContainer = ({ children, color }) => {
  return (
    <Wrapper color={color}>
      <MaxWidth>
        <FlexContainer px={[2, 2, 2, 2, 2]}>{children}</FlexContainer>
      </MaxWidth>
    </Wrapper>
  )
}

const NAV_HEIGHT = 72

export const OuterWrapper = ({ children }) => {
  return (
    <>
      <FixedBox>{children}</FixedBox>
      <Spacer mb={NAV_HEIGHT} />
    </>
  )
}

const FixedBox = styled(Box)`
  position: fixed;
  top: ${NAV_HEIGHT}px;
  left: 0;
  z-index: 30;
  width: 100%;
  height: 56px;
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
