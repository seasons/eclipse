import { Flex } from "@/elements"
import { Button } from "@/components"
import { ButtonProps } from "@/components/Button/Button.shared"
import React from "react"
import styled from "styled-components"
import { space } from "@/helpers/space"

interface Props extends ButtonProps {
  positionBottom?: number
}

export const FixedButton: React.FC<Props> = (props) => {
  return (
    <FlexWrapper
      px={2}
      positionBottom={props.positionBottom ? props.positionBottom : space(2)}
      alignContent="center"
      justifyContent="center"
      flexDirection="row"
    >
      <Button onClick={props.onPress} {...props}>
        {props.children}
      </Button>
    </FlexWrapper>
  )
}

const FlexWrapper = styled(Flex)<{
  positionBottom: number
}>`
  position: absolute;
  bottom: ${(p) => p.positionBottom}px;
  z-index: 100;
  right: 0;
  left: 0;
`
