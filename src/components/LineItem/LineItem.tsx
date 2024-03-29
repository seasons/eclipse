import { Flex, Sans } from "@/elements"
import { Color } from "@/theme/theme"
import React from "react"

type LineItemProps = {
  leftText: string
  rightText: string
  color?: Color
  windowWidth: number
}

export const LineItem: React.FC<LineItemProps> = ({
  leftText,
  rightText,
  color = "black50",
  windowWidth,
}) => {
  return (
    <Flex
      mt={1}
      flexDirection="row"
      width="100%"
      justifyContent={
        !!leftText && !!rightText ? "space-between" : "flex-start"
      }
    >
      <Flex flexDirection="row" style={{ maxWidth: windowWidth - 120 }} pr={2}>
        <Sans size="4" color={color}>
          {leftText}
        </Sans>
      </Flex>
      <Sans size="4" color={color}>
        {rightText}
      </Sans>
    </Flex>
  )
}
