import React from "react"
import { Linking } from "react-native"
import {
  WaitlistedCTATemplate,
  learnMoreMailToLink,
  requestAccessMailToLink,
  WaitlistedCTAProps,
} from "./WaitlistedCTA.shared"

export const WaitlistedCTA: React.FC<
  Omit<WaitlistedCTAProps, "onPressLearnMore" | "onPressRequestAccess">
> = (props) => {
  return (
    <WaitlistedCTATemplate
      {...props}
      onPressLearnMore={() => Linking.openURL(learnMoreMailToLink)}
      onPressRequestAccess={() => Linking.openURL(requestAccessMailToLink)}
    />
  )
}
