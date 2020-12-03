import type {
  BorderRadiusProps,
  HeightProps,
  SpaceProps,
  WidthProps,
} from "styled-system"

export interface BaseImageProps {
  /** The URL for the image */
  src: string
  /** The URLs for the image */
  srcSet?: string
  /** Apply additional styles to component */
  style?: object
}

export interface ImageProps
  extends BaseImageProps,
    SpaceProps,
    WidthProps,
    HeightProps,
    BorderRadiusProps {}
