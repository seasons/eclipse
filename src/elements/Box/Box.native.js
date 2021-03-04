import styled from "styled-components/native";
import { background, bottom, color as styledColor, display, height, left, maxWidth, minHeight, position, right, space as styledSpace, textAlign, top, width, zIndex, } from "styled-system";
/**
 * Box is just a `View`
 */
export const Box = styled.View `
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
`;
Box.displayName = "Box";
