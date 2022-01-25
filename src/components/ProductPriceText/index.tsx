import { gql } from "@apollo/client"
import { Sans } from "@/elements"
import React from "react"
import { SansSize } from "@/theme/theme"

export const ProductPriceText_Product = gql`
  fragment ProductPriceText_Product on Product {
    rentalPrice
    discountedPrice
  }
`

interface ProductPriceTextProps {
  product: {
    rentalPrice: number
    discountedPrice: number
  }
  size?: SansSize
}

export const ProductPriceText: React.FC<ProductPriceTextProps> = ({
  product,
  size = "3",
}) => {
  const { rentalPrice, discountedPrice } = product
  let text
  if (discountedPrice && discountedPrice > 0) {
    text = `$${rentalPrice} / mo | $${discountedPrice / 100} to buy`
  } else {
    text = `$${rentalPrice} / mo`
  }
  return (
    <Sans size={size} color="black50">
      {text}
    </Sans>
  )
}
