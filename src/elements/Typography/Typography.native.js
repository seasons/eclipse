import React from "react";
import styled from "styled-components/native";
import { color as colorHelper } from "@/helpers/color";
import { color, display, fontSize, lineHeight, maxWidth, space, style, textAlign, } from "styled-system";
import { determineFontSizes } from "./determineFontSizes";
/**
 * A map of the font families and their settings
 */
export const fontFamily = {
    sans: {
        thin: "ProximaNovaT-Thin",
        medium: "ProximaNova-Medium",
        bold: "ProximaNova-Bold",
    },
    display: {
        regular: "Apercu-Mono",
    },
};
const verticalAlign = style({
    prop: "verticalAlign",
});
/** renderFontValue */
export const renderFontValue = (fontValue) => {
    if (typeof fontValue === "string") {
        return `font-family: ${fontValue}`;
    }
    else {
        return [`font-family: ${fontValue.fontFamily}`]
            .concat(fontValue.fontStyle ? `font-style: ${fontValue.fontStyle}` : [])
            .concat(fontValue.fontWeight ? `font-weight: ${fontValue.fontWeight}` : [])
            .join(";\n");
    }
};
/** Base Text component for typography */
export const Text = styled.Text `
  ${({ fontFamily }) => fontFamily && renderFontValue(fontFamily)};
  ${fontSize};
  ${lineHeight};
  ${color};
  ${display};
  ${maxWidth};
  ${space};
  ${textAlign};
  ${verticalAlign};
  ${(p) => "textDecorationLine: " + (p.underline ? "underline" : "none")};
`;
/**
 * The Sans typeface is the main Seasons typeface
 */
export const Sans = (props) => {
    const { size, weight, numberOfLines } = props;
    const color = props.color
        ? colorHelper(props.color)
        : colorHelper("black100");
    return (React.createElement(Text, Object.assign({}, props, { fontFamily: fontFamily.sans[weight || "medium"] }, determineFontSizes("sans", size), { color: color, numberOfLines: numberOfLines })));
};
Sans.displayName = "Sans";
export const Display = (props) => {
    const { size, numberOfLines } = props;
    const color = props.color
        ? colorHelper(props.color)
        : colorHelper("black100");
    return (React.createElement(Text, Object.assign({}, props, { fontFamily: fontFamily.display.regular }, determineFontSizes("display", size), { color: color, numberOfLines: numberOfLines })));
};
export const LogoText = styled.Text `
  font-family: "Apercu-Mono";
  font-size: 20;
  letter-spacing: 2;
  line-height: 24;
  color: white;
  text-align: center;
`;
