import styled from "styled-components/native"

import {
  background,
  BackgroundProps,
  bottom,
  BottomProps,
  color as styledColor,
  ColorProps,
  display,
  DisplayProps,
  height,
  HeightProps,
  left,
  LeftProps,
  maxWidth,
  MaxWidthProps,
  minHeight,
  MinHeightProps,
  position,
  PositionProps,
  right,
  RightProps,
  space as styledSpace,
  SpaceProps,
  textAlign,
  TextAlignProps,
  top,
  TopProps,
  width,
  WidthProps,
  zIndex,
  ZIndexProps,
} from "styled-system"

export interface BoxProps
  extends BackgroundProps,
    BottomProps,
    ColorProps,
    DisplayProps,
    HeightProps,
    LeftProps,
    MaxWidthProps,
    MinHeightProps,
    PositionProps,
    RightProps,
    SpaceProps,
    TextAlignProps,
    TopProps,
    WidthProps,
    ZIndexProps {}

/**
 * Box is just a `View`
 */
export const Box = styled.View<BoxProps>`
  ${background};
  ${bottom};
  ${display};
  ${height};
  ${left};
  ${maxWidth};
  ${minHeight};
  ${position};
  ${right};
  ${styledColor};
  ${styledSpace};
  ${textAlign};
  ${top};
  ${width};
  ${zIndex};
`

Box.displayName = "Box"
