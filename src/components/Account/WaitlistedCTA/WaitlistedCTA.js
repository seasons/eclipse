import React from "react";
import { Linking } from "react-native-web";
import { learnMoreMailToLink, requestAccessMailToLink, WaitlistedCTATemplate, } from "./WaitlistedCTA.shared";
export const WaitlistedCTA = (props) => {
    return (React.createElement(WaitlistedCTATemplate, Object.assign({}, props, { onPressLearnMore: () => {
            Linking.openURL(learnMoreMailToLink);
            props.onPressLearnMore?.();
        }, onPressRequestAccess: () => {
            Linking.openURL(requestAccessMailToLink);
            props.onPressRequestAccess?.();
        } })));
};
