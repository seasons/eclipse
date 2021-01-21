import React from "react"
import { Box, Sans, Flex, Spacer } from "@/elements"
import type { DateTime } from "luxon"
import { Duration } from "luxon"
import { Countdown, ButtonBar } from "@/components"

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
  const captionSansProps = { size: "4", color: "black50", textAlign: "center" }
  return (
    <Box pb={1}>
      <Flex alignItems="center" justifyContent="center" pb={3}>
        <Countdown targetDate={targetAuthorizationDate} />
      </Flex>
      <Sans size="5" color="black100" textAlign="center">
        You're in. Let's choose your plan
      </Sans>
      <Spacer mb={1} />
      <Sans {...captionSansProps}>
        You have{" "}
        <Sans {...captionSansProps} underline inline>
          {getDetailTextTime()}
        </Sans>{" "}
        to secure your spot. If we don't hear from you, your invite will go to
        the next person and{" "}
        <Sans {...captionSansProps} underline inline>
          you'll be waitlisted.
        </Sans>
      </Sans>
      <Spacer mb={3} />
      <ButtonBar
        primaryButtonProps={{
          children: "Choose plan",
          onClick: onPressChoosePlan,
        }}
        secondaryButtonProps={{
          children: "Learn more",
          onClick: onPressLearnMore,
        }}
      />
    </Box>
  )
}
