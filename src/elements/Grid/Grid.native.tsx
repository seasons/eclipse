import { color, flex, space, textAlign, width } from "styled-system"
import styled from "styled-components"
import { View } from "react-native"

/**
 * TODO: v2 of `styled-bootstrap-grid` contains TS typings, but we need to
 * upgrade to styled-components 4 before it's possible to upgrade to v2.
 */

/** Outter wrapper when using a grid */
export const Grid: any = styled(View)`
  overflow: hidden;
  ${space};
`

/** Grid row */
export const Row: any = styled(View)`
  ${color};
  ${space};
`

/** Grid column */
export const Col: any = styled(View)`
  ${color};
  ${flex};
  ${space};
  ${textAlign};
  ${width};
`

Grid.displayName = "Grid"
Row.displayName = "Row"
Col.displayName = "Col"
