import { color } from "@/helpers"
import React from "react"

import { Flex } from "@/elements/Flex"
import { Theme } from "@/theme/theme"
import type { ContainerProps } from "./Container.shared"

export const Container: React.FC<ContainerProps> = ({
  children,
  backgroundColor = "white100",
  style,
}) => {
  return (
    <Theme>
      <Flex
        style={{
          flex: 1,
          backgroundColor: color(backgroundColor),
          ...style,
        }}
      >
        {children}
      </Flex>
    </Theme>
  )
}
