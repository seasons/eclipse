import React from "react";
import { Linking } from "react-native";
import { WaitlistedCTATemplate, learnMoreMailToLink, requestAccessMailToLink, } from "./WaitlistedCTA.shared";
export const WaitlistedCTA = (props) => {
    return (React.createElement(WaitlistedCTATemplate, Object.assign({}, props, { onPressLearnMore: () => Linking.openURL(learnMoreMailToLink), onPressRequestAccess: () => Linking.openURL(requestAccessMailToLink) })));
};
