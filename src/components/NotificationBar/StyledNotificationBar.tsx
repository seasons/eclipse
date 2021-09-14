import React from "react"
import { Box } from "@/elements"
import { Container } from "styled-bootstrap-grid"
import styled from "styled-components"
import { Media } from "../../components/Responsive"

const DESKTOP_NAV_HEIGHT = "72px"
const MOBILE_NAV_HEIGHT = "59px"

export const NotificationBarContainer = ({ children, color }) => {
  return (
    <Wrapper color={color}>
      <MaxWidth>
        <FlexContainer px={[2, 2, 2, 2, 2]}>{children}</FlexContainer>
      </MaxWidth>
    </Wrapper>
  )
}

export const OuterWrapper = ({ children }) => {
  return (
    <Box width="100%">
      <Media greaterThan="sm">
        <FixedBox height={DESKTOP_NAV_HEIGHT}>{children}</FixedBox>
      </Media>
      <Media lessThan="md">
        <FixedBox height={MOBILE_NAV_HEIGHT}>{children}</FixedBox>
      </Media>
    </Box>
  )
}

const FixedBox = styled(Box)`
  width: 100%;
`

const FlexContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

const Wrapper = styled(Box)<{ color: string }>`
  background-color: ${(p) => p.color};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const MaxWidth = styled(Container)`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  max-width: ${(props) => props.theme.grid.container.xl}px;
`
