import { TypeSizes, themeProps } from "@/theme/theme"

export const sans = (sansSizeKey: keyof TypeSizes["sans"]) =>
  themeProps.typeSizes.sans[sansSizeKey]
