import React from "react"
import { Dimensions } from "react-native"
import { space } from "@/helpers/space"
import { TwoButtonCTAShared, TwoButtonCTAProps } from "./TwoButtonCTA.shared"

export const TwoButtonCTA = ({
  buttonOneProps,
  buttonTwoProps,
}: TwoButtonCTAProps) => {
  const twoButtonWidth =
    Dimensions.get("window").width / 2 - space(2) - space(0.5)

  return (
    <TwoButtonCTAShared
      buttonOneProps={{ ...buttonOneProps, width: twoButtonWidth }}
      buttonTwoProps={{ ...buttonTwoProps, width: twoButtonWidth }}
    />
  )
}
