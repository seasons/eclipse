import { gql } from "@apollo/client"
import { Sans } from "@/elements"
import React from "react"
import { SansSize } from "@/theme/theme"

export const ProductPriceText_Product = gql`
  fragment ProductPriceText_Product on Product {
    rentalPrice
    discountedPrice
    isRentable
  }
`

interface ProductPriceTextProps {
  product: {
    rentalPrice: number
    discountedPrice: number
    isRentable: boolean
  }
  size?: SansSize
}

export const ProductPriceText: React.FC<ProductPriceTextProps> = ({
  product,
  size = "3",
}) => {
  const { rentalPrice, discountedPrice, isRentable } = product
  let text
  if (discountedPrice && discountedPrice > 0 && isRentable) {
    text = `$${rentalPrice} / mo | $${discountedPrice} to buy`
  } else if (isRentable) {
    text = `$${rentalPrice} / mo`
  } else if (discountedPrice && discountedPrice > 0) {
    text = `$${discountedPrice} to buy`
  }

  return (
    <Sans size={size} color="black50">
      {text}
    </Sans>
  )
}
