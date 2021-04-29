import type { PopUpData } from "@/types"
export interface SaveProductButtonProps {
  product: any
  selectedVariant?: any
  onPressSaveButton: () => void
  grayStroke?: boolean
  height?: number
  width?: number
  noModal?: boolean
  showPopUp?: (data: PopUpData) => any
  hidePopUp?: () => void
  authState: any
  showSizeSelector?: boolean
  onShowLoginModal?: () => void
}
