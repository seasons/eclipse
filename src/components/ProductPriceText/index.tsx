import { gql } from "@apollo/client"
import { Sans } from "@/elements"
import React from "react"
import { SansSize } from "@/theme/theme"

export const ProductPriceText_Product = gql`
  fragment ProductPriceText_Product on Product {
    rentalPrice
    retailPrice
  }
`

interface ProductPriceTextProps {
  product: {
    rentalPrice: number
    retailPrice: number
  }
  size?: SansSize
}

export const ProductPriceText: React.FC<ProductPriceTextProps> = ({
  product,
  size = "3",
}) => {
  const { rentalPrice, retailPrice } = product
  return (
    <Sans size={size} color="black50">
      ${rentalPrice} / mo | ${retailPrice} retail
    </Sans>
  )
}
