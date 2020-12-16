import React from "react"
import { TwoButtonCTAShared, TwoButtonCTAProps } from "./TwoButtonCTA.shared"

export const TwoButtonCTA = ({
  buttonOneProps,
  buttonTwoProps,
}: TwoButtonCTAProps) => {
  return (
    <TwoButtonCTAShared
      buttonOneProps={{ ...buttonOneProps, block: true }}
      buttonTwoProps={{ ...buttonTwoProps, block: true }}
    />
  )
}
