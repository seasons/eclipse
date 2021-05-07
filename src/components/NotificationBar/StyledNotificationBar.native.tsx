import React from "react"
import { Box, Spacer } from "@/elements"
import styled from "styled-components"

const NOTIFICATION_BAR_HEIGHT = "52px"

export const NotificationBarContainer = ({ children, color }) => {
  return (
    <Wrapper color={color} py={2}>
      <MaxWidth>
        <FlexContainer px={[2, 2, 2, 2, 2]}>{children}</FlexContainer>
      </MaxWidth>
    </Wrapper>
  )
}

export const OuterWrapper = ({ children }) => {
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

const MaxWidth = styled(Box)`
  width: 100%;
  margin: 0 auto;
  position: relative;
`
