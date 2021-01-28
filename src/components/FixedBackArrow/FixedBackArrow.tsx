import React from "react"

type FixedBackArrowVariant =
  | "blackBackground"
  | "whiteBackground"
  | "productBackground"
  | "whiteTransparent"
type RotationDegree = "0deg" | "90deg" | "180deg" | "270deg"

export const FixedBackArrow: React.FC<{
  onPress: () => void
  variant?: FixedBackArrowVariant
  rotationDegree?: RotationDegree
  overrides?: any
}> = () => {
  return <></>
}
