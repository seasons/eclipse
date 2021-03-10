export interface ProductsRailProps {
  items: any[]
  title?: string
  onViewAll?: () => void
  large?: boolean
  collectionSlug?: string
  tag?: string
  underlineTitleText?: string
  imageIndex?: number
  underlineTitleOnClick?: () => void
  showProductName?: boolean
}
