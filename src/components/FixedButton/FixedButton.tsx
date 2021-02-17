import { Flex } from "@/elements"
import { Button } from "@/components"
import { ButtonProps } from "@/components/Button/Button.shared"
import React from "react"
import styled from "styled-components"
import { space } from "@/helpers/space"

interface Props extends ButtonProps {
  positionBottom?: number
  rightAligned?: boolean
}

export const FixedButton: React.FC<Props> = (props) => {
  return (
    <FlexWrapper
      px={2}
      rightAligned={props.rightAligned}
      positionBottom={props.positionBottom ? props.positionBottom : space(2)}
      alignContent="center"
      justifyContent="center"
      flexDirection="row"
    >
      <Button {...props}>{props.children}</Button>
    </FlexWrapper>
  )
}

const FlexWrapper = styled(Flex)<{
  rightAligned: boolean
  positionBottom: number
}>`
  position: absolute;
  bottom: ${(p) => p.positionBottom};
  z-index: 100;
  right: 0;
  right: ${(p) => (p.rightAligned ? 0 : "auto")};
  left: ${(p) => (p.rightAligned ? "auto" : 0)};
`
