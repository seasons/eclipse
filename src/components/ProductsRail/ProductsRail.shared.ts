export interface ProductsRailProps {
  items: any[]
  title?: string
  onViewAll?: () => void
  large?: boolean
  collectionSlug?: string
  tag?: string
  underlineTitleText?: string
  rightText?: string
  imageIndex?: number
  underlineTitleOnClick?: () => void
  showProductName?: boolean
  authState?: any
  onShowLoginModal?: () => void
  disableTap?: boolean
  hidePrice?: boolean
  hideSaveButton?: boolean
  hideSizes?: boolean
}
