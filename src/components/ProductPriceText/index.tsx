import { gql } from "@apollo/client"
import { Sans } from "@/elements"
import React from "react"
import { SansSize } from "@/theme/theme"

export const ProductPriceText_Product = gql`
  fragment ProductPriceText_Product on Product {
    rentalPrice
    buyUsedPrice
    discountPercentage
    discountedPrice
  }
`

interface ProductPriceTextProps {
  product: {
    rentalPrice: number
    buyUsedPrice: number
    discountPercentage: number
  }
  size?: SansSize
  showDiscount?: boolean
}

export const ProductPriceText: React.FC<ProductPriceTextProps> = ({
  product,
  size = "3",
  showDiscount,
}) => {
  const { rentalPrice, buyUsedPrice, discountPercentage } = product

  let text
  if (buyUsedPrice && buyUsedPrice > 0) {
    text = `$${rentalPrice} / mo | $${buyUsedPrice / 100} to buy`
  } else {
    text = `$${rentalPrice} / mo`
  }

  if (showDiscount && discountPercentage) {
    text = `${text} (${discountPercentage}% off)`
  }

  return (
    <Sans size={size} color="black50">
      {text}
    </Sans>
  )
}
