import { Flex, Sans, Spacer, Box } from "@/elements"
import { Separator } from "@/components"
import React from "react"

type Props = {
  title: string
  rightText?: string
  onPressRightText?: () => void
}

export const SectionHeader: React.FC<Props> = ({
  title,
  rightText,
  onPressRightText,
}) => {
  return (
    <>
      <Flex flexDirection="row" style={{ flex: 1 }} width="100%">
        <Sans size="4" color="black">
          {title}
        </Sans>
        {!!rightText && (
          <>
            {onPressRightText ? (
              <Box onClick={onPressRightText}>
                <Sans size="4" color="blue">
                  {rightText}
                </Sans>
              </Box>
            ) : (
              <Sans size="4" color="black">
                {rightText}
              </Sans>
            )}
          </>
        )}
      </Flex>
      <Spacer mb={1} />
      <Separator />
    </>
  )
}
