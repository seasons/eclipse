import React from "react"
import { Sans, Spacer, Flex } from "@/elements"
import { Separator } from "../Separator"
import { color } from "../../helpers"
interface Props {
  detailType: string
  detailValue: string
  hideSeparator?: boolean
}

export const ProductInfoItem: React.FC<Props> = ({
  detailType,
  detailValue,
  hideSeparator,
}) => {
  return (
    <>
      <Spacer mb={2} />
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        flexWrap="nowrap"
      >
        <Sans size="4" color="black">
          {detailType}
        </Sans>
        <Sans size="4" color="black50" style={{ textAlign: "right" }}>
          {detailValue}
        </Sans>
      </Flex>
      <Spacer mb={2} />
      {!hideSeparator && <Separator color={color("black15")} />}
    </>
  )
}
