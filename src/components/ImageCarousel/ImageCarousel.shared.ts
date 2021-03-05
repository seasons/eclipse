export interface ImageCarouselProps {
  items: any[]
  pagerHorizontal?: boolean
  title?: string
  imageWidth?: number
  imageHeight?: number
  onPressItem?: (item: any) => void
}
