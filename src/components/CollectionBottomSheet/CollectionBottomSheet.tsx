import React from "react"
import type { PopUpData } from "@/types"

interface CollectionBottomSheetProps {
  currentImage: number
  showPopUp: (data: PopUpData) => any
  hidePopUp: () => void
  authState: any
  images: any[]
  products: any[]
  description: string
  title: string
  onEndReached: () => void
  metaData?: []
}

export const CollectionBottomSheet: React.FC<CollectionBottomSheetProps> = () => {
  return <></>
}
