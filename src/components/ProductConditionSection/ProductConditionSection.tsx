import React from "react"
import { Sans, Spacer, Box } from "@/elements"
import gql from "graphql-tag"
import { ProductInfoItem } from "../ProductInfoItem"

export const ProductConditionSectionFragment_PhysicalProductQualityReport = gql`
  fragment ProductConditionSectionFragment_PhysicalProductQualityReport on PhysicalProductQualityReport {
    id
    score
    notes
    published
  }
`

const conditionDisplayName = (score: number): string => {
  if (score < 3) {
    return "Offloaded"
  } else {
    return "Used"
  }
}

export const ProductConditionSection = ({
  physicalProductQualityReport,
  ...boxProps
}) => {
  if (
    !physicalProductQualityReport ||
    !physicalProductQualityReport.published ||
    !physicalProductQualityReport.score
  ) {
    return null
  }

  const { score, notes } = physicalProductQualityReport

  if (score >= 7) {
    return null
  }

  return (
    <Box {...boxProps}>
      <ProductInfoItem detailType="Condition" detailValue="" />
      <Spacer mb={2} />
      <Sans size="4">{conditionDisplayName(score)}</Sans>
      <Spacer mb={2} />
      {notes && (
        <Sans size="3" color="black50">
          {notes}
        </Sans>
      )}
      <Spacer mb={2} />
    </Box>
  )
}
