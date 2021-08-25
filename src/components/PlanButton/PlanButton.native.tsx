import { Flex, Sans, Spacer, Radio, Box } from "@/elements"
import { color } from "@/helpers"
import React from "react"
import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"

interface PlanButtonProps {
  shouldSelect: (plan: any) => void
  selected: boolean
  plan: any
  lowestPlanPrice: number
}

export const PlanButton: React.FC<PlanButtonProps> = ({
  lowestPlanPrice,
  shouldSelect,
  selected,
  plan,
}) => {
  const { price, name, caption } = plan
  const onPress = (plan) => {
    shouldSelect(plan)
  }

  const formatPrice = (price) =>
    (price / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })

  const monthlyPrice = plan.price / 12
  const planDiscount = 100 - (monthlyPrice / lowestPlanPrice) * 100
  const showYearlyDiscount =
    plan.planID === "access-yearly" && selected && planDiscount

  return (
    <TouchableOpacity onPress={() => onPress(plan)}>
      <StyledFlex
        alignItems="center"
        flexDirection="row"
        width="100%"
        height={72}
        mb={1}
        px={2}
        justifyContent="space-between"
        selected={selected}
      >
        {showYearlyDiscount && (
          <PlanDiscount px={0.5}>
            <Sans size="3" color="white100">
              {planDiscount}% Off
            </Sans>
          </PlanDiscount>
        )}
        <Flex flexDirection="row">
          <Radio selected={selected} pointerEventsNone />
          <Spacer mr={1} />
          <Flex flexDirection="column">
            <Sans color="black100" size="5">
              {name}
            </Sans>
            <Sans size="2" color="black50">
              {caption}
            </Sans>
          </Flex>
        </Flex>
        <Sans color="black100" size="5">
          {formatPrice(price)}
        </Sans>
      </StyledFlex>
    </TouchableOpacity>
  )
}

const StyledFlex = styled(Flex)<{ selected: boolean }>`
  border-radius: 8;
  background-color: ${color("black04")};
  z-index: 10;
  elevation: 6;
  border-color: ${(p) => (p.selected ? color("black100") : color("white100"))};
  border-width: 1px;
  position: relative;
`

const PlanDiscount = styled(Box)`
  position: absolute;
  top: -10;
  right: 20;
  border-radius: 4;
  background-color: ${color("black100")};
`
