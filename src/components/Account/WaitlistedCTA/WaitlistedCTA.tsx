import React from "react"
import { Linking } from "react-native-web"
import {
  learnMoreMailToLink,
  requestAccessMailToLink,
  WaitlistedCTAProps,
  WaitlistedCTATemplate,
} from "./WaitlistedCTA.shared"

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>

export const WaitlistedCTA: React.FC<
  Optional<WaitlistedCTAProps, "onPressLearnMore" | "onPressRequestAccess">
> = (props) => {
  return (
    <WaitlistedCTATemplate
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
