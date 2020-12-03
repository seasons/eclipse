import { color } from "@/helpers"
import React from "react"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { Flex } from "@/elements/Flex"
import { Theme } from "@/theme/theme"

import type { ContainerProps } from "./Container.shared"

export const Container: React.FC<ContainerProps> = ({
  children,
  backgroundColor = "white100",
  insetsBottom = true,
  insetsTop = true,
  style,
}) => {
  const insets = useSafeAreaInsets()

  return (
    <Theme>
      <Flex
        style={{
          flex: 1,
          paddingTop: insetsTop ? insets.top : 0,
          paddingBottom: insetsBottom ? insets.bottom : 0,
          backgroundColor: color(backgroundColor),
          ...style,
        }}
      >
        {children}
      </Flex>
    </Theme>
  )
}
