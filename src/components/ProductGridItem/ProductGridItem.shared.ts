import { PopUpData } from "@/types"
import { RefObject } from "react"
import { PureQueryOptions } from "@apollo/client"

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
  flatListRef?: RefObject<any>
  saveProductButtonRefetchQueries?: Array<string | PureQueryOptions>
}
