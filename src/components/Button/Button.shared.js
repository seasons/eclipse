import { css } from "styled-components";
import { themeProps } from "@/theme/theme";
/** Default button color variant */
export const defaultVariant = "primaryBlack";
/** Default button size */
export const defaultSize = "medium";
/**
 * Returns various colors for each state given a button variant
 * @param variant
 */
export function getColorsForVariant(variant) {
    const { colors: { black100, black10, black50, white100 }, } = themeProps;
    switch (variant) {
        case "primaryBlack":
            return {
                default: {
                    backgroundColor: black100,
                    borderColor: black100,
                    color: white100,
                },
                hover: {
                    backgroundColor: black50,
                    borderColor: black50,
                    color: black100,
                },
            };
        case "primaryWhite":
            return {
                default: {
                    backgroundColor: white100,
                    borderColor: white100,
                    color: black100,
                },
                hover: {
                    backgroundColor: black50,
                    borderColor: black50,
                    color: black100,
                },
            };
        case "secondaryOutline":
            return {
                default: {
                    backgroundColor: white100,
                    borderColor: black10,
                    color: black100,
                },
                hover: {
                    backgroundColor: white100,
                    borderColor: black100,
                    color: black100,
                },
            };
        case "noOutline":
            return {
                default: {
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderColor: "rgba(0, 0, 0, 0)",
                    color: black100,
                },
                hover: {
                    backgroundColor: white100,
                    borderColor: black100,
                    color: black100,
                },
            };
        default:
            return {};
    }
}
/**
 * Returns css related to the passed in variant
 * @param variant
 */
export const getStylesForVariant = (variant) => {
    const { default: enabled, hover } = getColorsForVariant(variant);
    return css `
    ${() => {
        return `
          background-color: ${enabled.backgroundColor};
          border-color: ${enabled.borderColor};
          color: ${enabled.color};

          @media ${themeProps.mediaQueries.hover} {
            &:hover {
              background-color: ${hover.backgroundColor};
              border-color: ${hover.borderColor};
              color: ${hover.color};
            }
          }
        `;
    }};
  `;
};
