import { Box, Flex, Sans, Spacer } from "@/elements"
import React from "react"
import { Countdown, TwoButtonCTA } from "@/components"
import type { DateTime } from "luxon"

export const learnMoreMailToLink = "https://szns.co/learnMore"
export const requestAccessMailToLink = "https://szns.co/requestAccess"

export interface RewaitlistedCTAProps {
  authorizedAt: DateTime
  authorizationWindowClosesAt: DateTime
  onPressLearnMore: () => void
  onPressRequestAccess: () => void
}

export const RewaitlistedCTATemplate: React.FC<RewaitlistedCTAProps> = ({
  authorizedAt,
  authorizationWindowClosesAt,
  onPressLearnMore,
  onPressRequestAccess,
}) => {
  const targetAuthorizationDate = authorizationWindowClosesAt.isValid
    ? authorizationWindowClosesAt
    : authorizedAt.plus({ days: 7 })

  return (
    <Box pb={1}>
      <Flex alignItems="center" pb={3}>
        <Countdown targetDate={targetAuthorizationDate} />
      </Flex>
      <Sans size="5" color="black100" textAlign="center">
        You're back on the waitlist
      </Sans>
      <Spacer mb={1} />
      <Sans size="4" color="black50" textAlign="center">
        Unfortunately, your sign-up window has closed and we've passed along
        your invite. If you'd still like to join, request access below.
      </Sans>
      <Spacer mb={3} />
      <TwoButtonCTA
        buttonOneProps={{
          onClick: onPressLearnMore,
          children: "Learn more",
        }}
        buttonTwoProps={{
          onClick: onPressRequestAccess,
          children: "Request Access",
        }}
      />
    </Box>
  )
}
