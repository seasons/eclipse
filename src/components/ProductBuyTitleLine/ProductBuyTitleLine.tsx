import React from "react"
import { ProgressiveImage } from "@/components"
import { Flex, Sans } from "@/elements"
import { color } from "@/helpers/color"
import { BrandLogoContainer } from "./StyledProductBuyTitleLine"

export const ProductBuyTitleLine = ({ brandName, brandLogoUri }) => (
  <Flex flexDirection="row" alignItems="flex-end" justifyContent="center">
    <Sans color="black100" size="4" weight="medium">
      Get it new from
    </Sans>
    {brandLogoUri ? (
      <BrandLogoContainer>
        <ProgressiveImage
          source={{ uri: brandLogoUri }}
          style={{ height: 21, width: 116 }}
          backgroundColor={color("white100")}
          resizeMode="contain"
        />
      </BrandLogoContainer>
    ) : (
      <>
        <Sans color="black100" size="4" weight="medium">
          {" "}
        </Sans>
        <Sans color="black100" size="4" weight="medium">
          {brandName}
        </Sans>
      </>
    )}
  </Flex>
)
