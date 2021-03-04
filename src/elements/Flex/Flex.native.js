import styled from "styled-components/primitives";
import { alignContent, alignItems, background, bottom, display, flex, flexBasis, flexDirection, flexWrap, height, justifyContent, maxHeight, maxWidth, order, position, space, style, width, zIndex, } from "styled-system";
const flexGrow = style({
    prop: "flexGrow",
});
/**
 * A utility component that encapsulates flexbox behavior
 */
export const Flex = styled.View `
  display: flex;
  ${alignContent};
  ${alignItems};
  ${background};
  ${bottom};
  ${display};
  ${flex};
  ${flexBasis};
  ${flexDirection};
  ${flexGrow};
  ${flexWrap};
  ${height};
  ${justifyContent};
  ${maxHeight};
  ${maxWidth};
  ${order};
  ${position};
  ${space};
  ${width};
  ${zIndex};
`;
Flex.displayName = "Flex";
