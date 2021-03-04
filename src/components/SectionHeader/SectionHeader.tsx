import { Flex, Sans, Spacer } from "@/elements"
import { Separator } from "@/components"
import React from "react"

type Props = {
  title: string
}

export const SectionHeader: React.FC<Props> = ({ title }) => {
  return (
    <>
      <Flex flexDirection="row" style={{ flex: 1 }} width="100%">
        <Sans size="4" color="black">
          {title}
        </Sans>
      </Flex>
      <Spacer mb={1} />
      <Separator />
    </>
  )
}
