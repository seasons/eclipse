import { color, flex, space, textAlign, width } from "styled-system";
import { Col as _Col, Container as _Container, Row as _Row, } from "styled-bootstrap-grid";
import styled from "styled-components";
/** Outter wrapper when using a grid */
export const Grid = styled(_Container) `
  overflow: hidden;
  max-width: ${(props) => props.theme.grid.breakpoints.xl}px;
  ${space};
`;
/** Grid row */
export const Row = styled(_Row) `
  ${color};
  ${space};
`;
/** Grid column */
export const Col = styled(_Col) `
  ${color};
  ${flex};
  ${space};
  ${textAlign};
  ${width};
`;
Grid.displayName = "Grid";
Row.displayName = "Row";
Col.displayName = "Col";
