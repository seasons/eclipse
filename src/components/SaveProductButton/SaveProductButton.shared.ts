import { PopUpData } from "@/types"
import { PureQueryOptions } from "@apollo/client"

export interface SaveProductButtonProps {
  product: any
  selectedVariant?: any
  onPressSaveButton: () => void
  grayStroke?: boolean
  height?: number
  width?: number
  noModal?: boolean
  showPopUp: (data: PopUpData) => any
  hidePopUp: () => void
  authState: any
  refetchQueries?: Array<string | PureQueryOptions>
}
