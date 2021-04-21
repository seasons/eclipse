import { PopUpData } from "@/types"
import { RefObject } from "react"

export interface ProductGridItemProps {
  product: any
  loading?: boolean
  showPopUp?: (data: PopUpData) => void
  hidePopUp?: () => void
  addLeftSpacing?: boolean
  imageIndex?: number
  showBrandName?: boolean
  authState: any
  flatListRef?: RefObject<any>
  onShowLoginModal?: () => void
}
