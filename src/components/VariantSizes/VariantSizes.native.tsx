import { Box, Flex, Sans } from "@/elements"
import { color } from "@/helpers"
import React from "react"
import styled from "styled-components/native"

export const VariantSizes: React.FC<{
  variants: any[]
  size: "2" | "4"
  lineHeight?: string
}> = ({ variants, size }) => {
  const availableVariants = variants.filter((a) => !!a?.displayShort)

  return (
    <Flex flexDirection="row">
      {availableVariants.map((variant: any) => {
        const reservable = variant.reservable !== null && !!variant.reservable
        return (
          <Box key={variant.id} mr={0.5} style={{ position: "relative" }}>
            <Sans size={size} color={reservable ? "black100" : "black25"}>
              {variant?.displayShort}
            </Sans>
            {!reservable && <Strikethrough size={size} />}
          </Box>
        )
      })}
    </Flex>
  )
}

const Strikethrough = styled.View<{ size: "2" | "4" }>`
  background-color: ${color("black25")};
  height: 2;
  width: 100%;
  position: absolute;
  top: ${(p) => (p.size === "2" ? 7 : 11)};
  left: 0;
`
