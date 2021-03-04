import React from "react";
import styled from "styled-components";
import { color, display, fontSize, lineHeight, maxWidth, space, style, } from "styled-system";
import { determineFontSizes } from "./determineFontSizes";
import { fontFamily } from "@/theme/fonts";
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
export const Text = styled.p `
  ${({ fontFamily }) => fontFamily && renderFontValue(fontFamily)};
  text-align: ${(props) => props.textAlign || "left"};
  ${fontSize};
  ${color};
  ${display};
  ${maxWidth};
  ${space};
  ${lineHeight};
  ${verticalAlign};
  padding: 0;
  margin: 0;
`;
/**
 * Returns the weight, if given, otherwise it defaults to `regular` unless
 * explicitly given `null` in which case it returns undefined, meaning the
 * weight should be inherited from the component’s parent.
 *
 * @param weight
 */
function _fontWeight(weight) {
    if (weight === null) {
        return undefined;
    }
    return weight || "regular";
}
function _selectFontFamilyType(weight, italic) {
    return italic ? "italic" : weight;
}
/**
 * Creates a wrapper around the generic `Text` component for a font type defined
 * in the palette’s theme (sans, serif, or display).
 *
 * The component’s props are specified with type parameter `P` and should hold
 * both the component’s specific props (size, weight, italic) as well as all of
 * the generic `Text` component’s props, although as optional.
 *
 * @param fontType
 *        The font type that this text component represents.
 * @param selectFontFamilyType
 *        An optional function that maps weight+italic to a font-family.
 */
function createStyledText(fontType, selectFontFamilyType = _selectFontFamilyType) {
    // @ts-ignore
    return styled(({ size, weight, italic, element, underline, inline, ...textProps }) => {
        const fontFamilyType = selectFontFamilyType(_fontWeight(weight), italic);
        // This is mostly to narrow the type of `fontFamilyType` to remove `null`.
        if (fontFamilyType === null) {
            throw new Error("Did not expect `fontType` to be `null`.");
        }
        let styles = textProps.style ?? {};
        if (fontType === "display") {
            styles["letterSpacing"] = "-1px";
        }
        if (underline) {
            styles["textDecoration"] = "underline";
        }
        if (inline) {
            styles["display"] = "inline";
        }
        return (React.createElement(Text, Object.assign({ fontFamily: fontFamilyType && fontFamily[fontType][fontFamilyType] }, determineFontSizes(fontType, size), (element ? { as: element } : {}), textProps, { style: styles })));
    }) ``;
}
/**
 * @example
 *
 * <Sans color="black10" size="3t" weight="medium" italic>Hi</Sans>
 */
export const Sans = createStyledText("sans", (weight, italic) => {
    return _selectFontFamilyType(weight, italic);
});
/**
 * This is our Apercu font used mainly for headers
 *
 * @example
 *
 * <Display color="black10" size="3t">Hi</Display>
 */
export const Display = createStyledText("display");
/**
 * @example
 *
 * <Display color="black10" size="3t">Hi</Display>
 */
Sans.displayName = "Sans";
Display.displayName = "Display";
