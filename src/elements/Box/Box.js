import styled from "styled-components";
import { background, bottom, color as styledColor, display, flex, height, left, maxHeight, maxWidth, minHeight, minWidth, position, right, space as styledSpace, textAlign, top, width, zIndex, } from "styled-system";
/**
 * Box is just a `View` or `div` (depending on the platform) with common styled-systems
 * hooks.
 */
export const Box = styled("div") `
  ${background};
  ${bottom};
  ${display};
  ${flex};
  ${height};
  ${left};
  ${minWidth};
  ${maxWidth};
  ${minHeight};
  ${maxHeight};
  ${position};
  ${right};
  ${styledColor};
  ${styledSpace};
  ${textAlign};
  ${top};
  ${width};
  ${zIndex};
`;
Box.displayName = "Box";
