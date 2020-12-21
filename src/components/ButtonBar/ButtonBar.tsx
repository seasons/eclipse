import React from "react"
import { ButtonBarTemplate, ButtonBarProps } from "./ButtonBar.shared"

export const ButtonBar = ({
  primaryButtonProps,
  secondaryButtonProps,
}: ButtonBarProps) => {
  return (
    <ButtonBarTemplate
      primaryButtonProps={{ ...primaryButtonProps, block: true }}
      secondaryButtonProps={{ ...secondaryButtonProps, block: true }}
    />
  )
}
