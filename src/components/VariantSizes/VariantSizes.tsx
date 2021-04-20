import { Box, Flex, Sans } from "@/elements"
import { color } from "@/helpers"
import React from "react"
import styled from "styled-components"

export const VariantSizes: React.FC<{
  variants: any[]
  size: "2" | "4"
  lineHeight?: string
}> = ({ variants, size, lineHeight }) => {
  const availableVariants = variants.filter((a) => !!a?.displayShort)

  return (
    <Flex flexDirection="row">
      {availableVariants.map((variant: any) => {
        const reservable = variant.reservable !== null && !!variant.reservable
        return (
          <Box key={variant.id} mr={0.5} style={{ position: "relative" }}>
            <SansWithLineHeight
              size={size}
              color={reservable ? "black100" : "black25"}
              lineHeight={lineHeight}
            >
              {variant?.displayShort}
            </SansWithLineHeight>
            {!reservable && <Strikethrough size={size} />}
          </Box>
        )
      })}
    </Flex>
  )
}

const SansWithLineHeight = styled(Sans)`
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}`}
`

const Strikethrough = styled.div<{ size: "2" | "4"; lineHeight?: string }>`
  background-color: ${color("black25")};
  height: 2px;
  width: 100%;
  position: absolute;
  top: ${(p) => (p.size === "2" ? "7px" : "11px")};
  left: 0;
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}`}
`
