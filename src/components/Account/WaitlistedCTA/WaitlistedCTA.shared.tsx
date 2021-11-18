import { Box, Sans, Spacer } from "@/elements"
import React from "react"
import { ButtonBar } from "@/components"
import type { DateTime } from "luxon"

export const learnMoreMailToLink = "https://szns.co/learnMore"
export const requestAccessMailToLink = "https://szns.co/requestAccess"

export interface WaitlistedCTAProps {
  authorizedAt: DateTime
  onPressLearnMore: () => void
  onPressRequestAccess: () => void
  version: "mobile" | "web"
  title?: string
  detail?: string
}

export const WaitlistedCTATemplate: React.FC<WaitlistedCTAProps> = ({
  authorizedAt,
  onPressLearnMore,
  onPressRequestAccess,
  version,
  title: _title,
  detail: _detail,
}) => {
  const hasBeenAuthorized = !!authorizedAt
  const waitlistedCopy = `We'll send you ${
    version === "mobile" ? "a notification" : "an email"
  } when your account is ready and you're able to choose your plan. ${
    version === "mobile" ? "In the meantime, complete your profile below." : ""
  }`
  const rewaitlistedCopy = `Unfortunately, your sign-up window has closed and we've passed along your invite. If you'd still like to join, request access below.`

  const title =
    _title || `You're ${hasBeenAuthorized ? "back " : ""}on the waitlist`
  const detail =
    _detail || (hasBeenAuthorized ? rewaitlistedCopy : waitlistedCopy)
  return (
    <Box pb={1}>
      <Sans
        size="5"
        color="black100"
        textAlign={hasBeenAuthorized ? "center" : "left"}
      >
        {title}
      </Sans>
      <Spacer mb={1} />
      <Sans
        size="4"
        color="black50"
        textAlign={hasBeenAuthorized ? "center" : "left"}
      >
        {detail}
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
