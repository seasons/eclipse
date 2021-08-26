import { Box, Flex, Sans } from "@/elements"
import { color } from "@/helpers"
import React from "react"
import styled from "styled-components"
import { uniqBy } from "lodash"

export const VariantSizes: React.FC<{
  variants: any[]
  size: "2" | "4"
}> = ({ variants, size }) => {
  const availableVariants = variants.filter((a) => !!a?.displayShort)
  const uniqueSizes = uniqBy(availableVariants, (x) => x.displayShort)

  return (
    <Flex flexDirection="row" flexWrap="wrap" maxWidth="100%">
      {uniqueSizes.map((variant: any) => {
        const sameDisplayShortVariants = availableVariants.filter(
          (v) => v.displayShort === variant.displayShort
        )
        const reservable = sameDisplayShortVariants.some(
          (v) => v.reservable > 0
        )
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

const Strikethrough = styled.div<{ size: "2" | "4" }>`
  background-color: ${color("black25")};
  height: 2px;
  width: 100%;
  position: absolute;
  top: ${(p) => (p.size === "2" ? "7px" : "11px")};
  left: 0;
`
