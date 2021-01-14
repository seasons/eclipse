import React from "react"
import { Flex, Spacer } from "@/elements"
import { Button } from "@/components"
import type { ButtonProps } from "@/components/Button/Button.shared"

export interface ButtonBarProps {
  primaryButtonProps: Omit<ButtonProps, "onPress">
  secondaryButtonProps: Omit<ButtonProps, "onPress">
}

export const ButtonBarTemplate = ({
  primaryButtonProps,
  secondaryButtonProps,
}: ButtonBarProps) => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Button
        variant="primaryWhite"
        {...secondaryButtonProps}
        onPress={secondaryButtonProps.onClick}
      >
        {secondaryButtonProps.children}
      </Button>
      <Spacer ml={1} />
      <Button
        variant="primaryBlack"
        {...primaryButtonProps}
        onPress={primaryButtonProps.onClick}
      >
        {primaryButtonProps.children}
      </Button>
    </Flex>
  )
}
