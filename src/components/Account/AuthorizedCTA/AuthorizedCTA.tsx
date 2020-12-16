import React from "react"
import { Box, Flex, Sans, Spacer } from "@/elements"
import type { DateTime } from "luxon"
import { Duration } from "luxon"
import { Countdown, Button } from "@/components"
import styled from "styled-components"

export const AuthorizedCTA: React.FC<{
  authorizedAt: DateTime
  authorizationWindowClosesAt: DateTime
  onPressChoosePlan: () => void
  onPressLearnMore: () => void
}> = ({
  authorizedAt,
  authorizationWindowClosesAt,
  onPressChoosePlan,
  onPressLearnMore,
}) => {
  const targetAuthorizationDate = authorizationWindowClosesAt.isValid
    ? authorizationWindowClosesAt
    : authorizedAt.plus({ days: 7 })
  const authorizationDuration =
    targetAuthorizationDate.valueOf() > authorizedAt.valueOf()
      ? targetAuthorizationDate.diff(authorizedAt, "hours")
      : Duration.fromMillis(0)

  const getDetailTextTime = () => {
    const hoursInAuthWindow = authorizationDuration.get("hours")
    if (hoursInAuthWindow === 1) {
      return `${authorizationDuration.toFormat("h")} hour`
    } else if (hoursInAuthWindow <= 48) {
      return `${authorizationDuration.toFormat("h")} hours`
    } else if (hoursInAuthWindow > 48) {
      return `${authorizationDuration.toFormat("d")} days`
    } else {
      return `a limited window`
    }
  }
  return (
    <Box pb={1}>
      <Flex alignItems="center" justifyContent="center" pb={3}>
        <Countdown targetDate={targetAuthorizationDate} />
      </Flex>
      <Sans size="5" color="black100" textAlign="center">
        You're in. Let's choose your plan
      </Sans>
      <Spacer mb={1} />
      <Sans size="4" color="black50" textAlign="center">
        You have <Underline>{getDetailTextTime()}</Underline> to secure your
        spot. If we don't hear from you, your invite will go to the next person
        and <Underline>you'll be waitlisted</Underline>.
      </Sans>
      <Spacer mb={3} />
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Button variant="primaryWhite" block onClick={onPressLearnMore}>
          Learn more
        </Button>
        <Spacer ml={2} />
        <Button variant="primaryBlack" block onClick={onPressChoosePlan}>
          Choose plan
        </Button>
      </Flex>
    </Box>
  )
}

const Underline = styled.span`
  text-decoration: underline;
`
