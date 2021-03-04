import { themeProps } from "@/theme/theme";
/**
 * A helper to easily access colors when not in a styled-components or
 * styled-systems context.
 */
export const color = (colorKey) => themeProps.colors[colorKey] || colorKey;
