import styled from "styled-components"
import { Box, Flex } from "@/elements"
import { TouchableWithoutFeedback } from "react-native"

export const Button = styled(TouchableWithoutFeedback)`
  flex: 1;
`

export const Tabs = styled(Flex)`
  height: 55px;
  flex-direction: row;
  justify-content: space-around;
`

export const TabButton = styled(Flex)<{
  spaceEvenly?: boolean
  active?: boolean
  tabColor?: string
}>`
  align-items: center;
  justify-content: center;
  padding-top: 5px;
  flex-grow: 1;
  border-color: transparent;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  cursor: pointer;
  ${(p) => p.spaceEvenly && `flex: 1;`};
  ${(p) =>
    p.active &&
    `
    border-color: ${p.tabColor ? p.tabColor : "#000000"};
  `};
`

export const Wrapper = styled(Box)`
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
  border-bottom-style: solid;
`
