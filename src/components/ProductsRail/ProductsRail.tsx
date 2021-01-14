import React from "react"

export const ProductsRail: React.FC<{
  items: any[]
  title?: string
  onViewAll?: () => void
  large?: boolean
}> = ({ items, title, large, onViewAll }) => {
  console.log(items, title, large, onViewAll)
  return <></>
}
