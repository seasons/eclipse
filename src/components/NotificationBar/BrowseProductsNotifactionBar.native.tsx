import React from "react"
import { NotificationBarProps } from "./NotificationBar.shared"

interface BrowseProductsNotificationBarProps extends NotificationBarProps {
  isBrowse: boolean
}

export const BrowseProductsNotificationBar: React.FC<BrowseProductsNotificationBarProps> = ({
  isBrowse,
  ...props
}) => {
  console.log(isBrowse)
  console.log(props)
  return null
}
