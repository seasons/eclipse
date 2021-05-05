import { PopUpData } from "@/types"
import { RefObject } from "react"
import { PureQueryOptions } from "@apollo/client"

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
  saveProductButtonRefetchQueries?: Array<string | PureQueryOptions>
  onShowLoginModal?: () => void
}
