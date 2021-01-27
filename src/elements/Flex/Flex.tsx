import styled from "styled-components"
import type { BoxProps } from "../Box"
import { flexbox, FlexboxProps } from "styled-system"

/**
 * Flex is Box with display: flex
 */
export interface FlexProps extends BoxProps, FlexboxProps {}

/**
 * Flex is Box with display: flex
 */
export const Flex = styled.div<FlexProps>`
  ${flexbox}
`

Flex.defaultProps = {
  display: "flex",
}

Flex.displayName = "Flex"
