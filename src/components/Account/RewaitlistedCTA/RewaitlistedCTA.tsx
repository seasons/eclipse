import React from "react"
import { Linking } from "react-native-web"
import {
  learnMoreMailToLink,
  requestAccessMailToLink,
  RewaitlistedCTAProps,
  RewaitlistedCTATemplate,
} from "./RewaitlistedCTA.shared"

export const RewaitlistedCTA: React.FC<RewaitlistedCTAProps> = (props) => {
  return (
    <RewaitlistedCTATemplate
      {...props}
      onPressLearnMore={() => {
        Linking.openURL(learnMoreMailToLink)
        props.onPressLearnMore?.()
      }}
      onPressRequestAccess={() => {
        Linking.openURL(requestAccessMailToLink)
        props.onPressRequestAccess?.()
      }}
    />
  )
}
