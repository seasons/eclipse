import { Box, Flex, Sans, Spacer } from "@/elements"
import React from "react"
import { Countdown, ButtonBar } from "@/components"
import type { DateTime } from "luxon"

export const learnMoreMailToLink = "https://szns.co/learnMore"
export const requestAccessMailToLink = "https://szns.co/requestAccess"

export interface WaitlistedCTAProps {
  authorizedAt: DateTime
  authorizationWindowClosesAt: DateTime
  onPressLearnMore: () => void
  onPressRequestAccess: () => void
  version: "mobile" | "web"
}

export const WaitlistedCTATemplate: React.FC<WaitlistedCTAProps> = ({
  authorizedAt,
  authorizationWindowClosesAt,
  onPressLearnMore,
  onPressRequestAccess,
  version,
}) => {
  const hasBeenAuthorized = !!authorizedAt
  let targetAuthorizationDate
  if (hasBeenAuthorized) {
    targetAuthorizationDate = authorizationWindowClosesAt?.isValid
      ? authorizationWindowClosesAt
      : authorizedAt.plus({ days: 7 })
  }

  const waitlistedCopy = `We'll send you ${
    version === "mobile" ? "a notification" : "an email"
  } when your account is ready and you're able to choose your plan. ${
    version === "mobile" ? "In the meantime, complete your profile below." : ""
  }`
  const rewaitlistedCopy = `Unfortunately, your sign-up window has closed and we've passed along your invite. If you'd still like to join, request access below.`

  return (
    <Box pb={1}>
      {hasBeenAuthorized && (
        <Flex alignItems="center" pb={3}>
          <Countdown targetDate={targetAuthorizationDate} />
        </Flex>
      )}
      <Sans
        size="5"
        color="black100"
        textAlign={hasBeenAuthorized ? "center" : "left"}
      >
        {`You're ${hasBeenAuthorized ? "back " : ""}on the waitlist`}
      </Sans>
      <Spacer mb={1} />
      <Sans
        size="4"
        color="black50"
        textAlign={hasBeenAuthorized ? "center" : "left"}
      >
        {hasBeenAuthorized ? rewaitlistedCopy : waitlistedCopy}
      </Sans>
      <Spacer mb={3} />
      <ButtonBar
        primaryButtonProps={{
          onClick: onPressRequestAccess,
          children: "Request Access",
        }}
        secondaryButtonProps={{
          onClick: onPressLearnMore,
          children: "Learn more",
        }}
      />
    </Box>
  )
}
