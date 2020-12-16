import React from "react"
import { Flex, Spacer } from "@/elements"
import { Button } from "@/components"
import type { ButtonProps } from "@/components/Button/Button.shared"

export interface TwoButtonCTAProps {
  buttonOneProps: Omit<ButtonProps, "onPress">
  buttonTwoProps: Omit<ButtonProps, "onPress">
}

export const TwoButtonCTAShared = ({
  buttonOneProps,
  buttonTwoProps,
}: TwoButtonCTAProps) => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Button
        variant="primaryWhite"
        {...buttonOneProps}
        onPress={buttonOneProps.onClick}
      >
        {buttonOneProps.children}
      </Button>
      <Spacer ml={2} />
      <Button
        variant="primaryBlack"
        {...buttonTwoProps}
        onPress={buttonTwoProps.onClick}
      >
        {buttonTwoProps.children}
      </Button>
    </Flex>
  )
}
