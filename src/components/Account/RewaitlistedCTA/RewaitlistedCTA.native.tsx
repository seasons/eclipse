import React from "react"
import { Linking } from "react-native"
import {
  RewaitlistedCTATemplate,
  learnMoreMailToLink,
  requestAccessMailToLink,
  RewaitlistedCTAProps,
} from "./RewaitlistedCTA.shared"

export const RewaitlistedCTA: React.FC<RewaitlistedCTAProps> = (props) => {
  return (
    <RewaitlistedCTATemplate
      {...props}
      onPressLearnMore={() => Linking.openURL(learnMoreMailToLink)}
      onPressRequestAccess={() => Linking.openURL(requestAccessMailToLink)}
    />
  )
}
