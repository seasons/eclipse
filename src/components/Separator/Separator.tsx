import styled from "styled-components"
import { color } from "@/helpers/color"

import {
  space,
  SpaceProps,
  width,
  WidthProps,
  height,
  HeightProps,
} from "styled-system"

export interface SeparatorProps extends SpaceProps, WidthProps, HeightProps {
  color?: string
}

/**
 * A horizontal divider whose width and spacing can be adjusted
 */
export const Separator = styled.div<SeparatorProps>`
  background-color: ${(props) => props.color || color("black10")};
  ${space};
  ${height};
  ${width};
`

Separator.defaultProps = {
  width: "100%",
  height: "1px",
}
