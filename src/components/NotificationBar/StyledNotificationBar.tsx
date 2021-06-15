import React, { useRef, useState, useEffect } from "react"
import { Box, Spacer } from "@/elements"
import { Container } from "styled-bootstrap-grid"
import styled from "styled-components"
import { useNotificationBarContext } from "./NotificationBarContext"

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
  const { notificationBarState } = useNotificationBarContext()
  const [barHeight, setBarHeight] = useState(52)
  const notifBarRef = useRef(null)

  useEffect(() => {
    if (notifBarRef.current) {
      setBarHeight(notifBarRef.current.getBoundingClientRect().height)
    }
  }, [notifBarRef, setBarHeight])

  const offsetTop = notificationBarState?.offsetTop

  return (
    <>
      <FixedBox ref={notifBarRef} offsetTop={offsetTop}>
        {children}
      </FixedBox>
      <Spacer mb={barHeight + offsetTop} />
    </>
  )
}

const FixedBox = styled(Box)<{ offsetTop: number }>`
  position: fixed;
  top: ${(p) => p.offsetTop + 59}px;
  left: 0;
  z-index: 30;
  width: 100%;
  cursor: pointer;
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
