import { PopUpData } from "@/types"
import { RefObject } from "react"

export interface ProductGridItemProps {
  product: any
  loading?: boolean
  showName?: boolean
  showPopUp?: (data: PopUpData) => void
  hidePopUp?: () => void
  authState?: any
  addLeftSpacing?: boolean
  imageIndex?: number
  showBrandName?: boolean
  isSignedIn?: boolean
  flatListRef?: RefObject<any>
}
