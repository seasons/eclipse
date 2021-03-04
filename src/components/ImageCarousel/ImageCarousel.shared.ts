export interface ImageCarouselProps {
  items: any[]
  imageWidth?: number
  imageHeight?: number
  pagerHorizontal?: boolean
  title?: string
  onPressItem?: (item: any) => void
}
