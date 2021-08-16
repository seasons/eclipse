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
  if (score < 3) return "Offloaded"
  if (score < 6) return "Used"
  if (score < 9) return "Gently used"
  return "New"
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
    return (
      <Box {...boxProps}>
        <ProductInfoItem detailType="Condition" detailValue="" />
        <Spacer mb={2} />
        <Sans size="4">New</Sans>
        <Spacer mb={2} />
        <Sans size="3" color="black50">
          Just arrived from the factory
        </Sans>
        <Spacer mb={2} />
      </Box>
    )
  }

  const { score, notes } = physicalProductQualityReport

  const NotesDisplay = (notes) => {
    if (notes) {
      return (
        <Sans size="3" color="black50">
          {notes}
        </Sans>
      )
    }
    return (
      <Sans size="3" color="black50">
        Just arrived from the factory
      </Sans>
    )
  }

  return (
    <Box {...boxProps}>
      <ProductInfoItem detailType="Condition" detailValue="" />
      <Spacer mb={2} />
      <Sans size="4">{conditionDisplayName(score)}</Sans>
      <Spacer mb={2} />
      {NotesDisplay(notes)}

      <Spacer mb={2} />
    </Box>
  )
}
