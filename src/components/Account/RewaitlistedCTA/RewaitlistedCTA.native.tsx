import { Button } from "@/components"
import { Box, Flex, Sans, Spacer } from "@/elements"
import { space } from "@/helpers/space"
import React from "react"
import { Linking, Dimensions } from "react-native"
import { HourMinuteSecondCountdown } from "../HourMinuteSecondCountdown"
import type { DateTime } from "luxon"

const learnMoreMailToLink =
  "mailto:membership@seasons.nyc?subject=Learn%20More%20about%20Membership&body=I'd%20like%20to%20learn%20more%20about%20membership!"
const requestAccessMailToLink =
  "mailto:membership@seasons.nyc?subject=Request%20Access&body=I'm%20ready%20to%20subscribe%20and%20would%20like%20to%20request%20access!"

export const RewaitlistedCTA: React.FC<{
  authorizedAt: DateTime
  authorizationWindowClosesAt: DateTime
}> = ({ authorizedAt, authorizationWindowClosesAt }) => {
  const targetAuthorizationDate = authorizationWindowClosesAt.isValid
    ? authorizationWindowClosesAt
    : authorizedAt.plus({ days: 2 })
  const twoButtonWidth =
    Dimensions.get("window").width / 2 - space(2) - space(0.5)

  return (
    <Box pb={1}>
      <Flex alignItems="center" pb={3}>
        <HourMinuteSecondCountdown targetDate={targetAuthorizationDate} />
      </Flex>
      <Sans size="5" color="black100" textAlign="center">
        You're back on the waitlist
      </Sans>
      <Spacer mb={1} />
      <Sans size="4" color="black50" textAlign="center">
        Unfortunately, your sign-up window has closed and we've passed along
        your invite, if you'd still like to join, request access below.
      </Sans>
      <Spacer mb={3} />
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Button
          variant="primaryWhite"
          width={twoButtonWidth}
          onPress={() => Linking.openURL(learnMoreMailToLink)}
        >
          Learn more
        </Button>
        <Button
          variant="primaryBlack"
          width={twoButtonWidth}
          onPress={() => Linking.openURL(requestAccessMailToLink)}
        >
          Request Access
        </Button>
      </Flex>
    </Box>
  )
}
