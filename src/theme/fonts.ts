/**
 * Type definition for font objects
 */
export interface FontDefinition {
  fontFamily: string
  fontWeight?: string | number
  fontStyle?: string
}

/**
 * Type definition for font value properties which can either
 * be an object for complex definitions or a string for single entries.
 */
export type FontValue = string | FontDefinition

/**
 * Defines the shape of the font family
 */
export interface FontFamilyProps {
  sans: {
    thin: FontValue
    regular: FontValue
    medium: FontValue
    bold: FontValue
  }
  serif: {
    medium: FontValue
  }
  display: {
    regular: FontValue
  }
}

/**
 * A map of the font families and their settings
 */
export const fontFamily: FontFamilyProps = {
  sans: {
    thin: "'ProximaNova-Thin', sans-serif",
    regular: "'ProximaNova-Medium', sans-serif",
    medium: "'ProximaNova-Medium', sans-serif",
    bold: "'ProximaNova-Bold', sans-serif",
  },
  serif: {
    medium: "",
  },
  display: {
    regular: "'NBAkademieProRegular', sans-serif",
  },
}
