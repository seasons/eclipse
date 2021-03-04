import React from "react";
import NextLink from "next/link";
import styled from "styled-components";
import { color as styledColor, display, position, space } from "styled-system";
import { color } from "@/helpers";
export const Link = (props) => {
    return (React.createElement(NextLink, Object.assign({}, props),
        React.createElement(Anchor, null, props.children)));
};
/**
 * Basic <a> tag styled with additional LinkProps
 * Spec: https://zpl.io/2Gm6D3d
 */
export const Anchor = styled.a `
  color: ${color("black100")};
  transition: color 0.25s;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${color("black100")};
  }
  ${display};
  ${position};
  ${space};
  ${styledColor};
`;
