import { Box, Flex, Sans, Spacer } from "@/elements";
import React from "react";
import { Countdown, ButtonBar } from "@/components";
export const learnMoreMailToLink = "https://szns.co/learnMore";
export const requestAccessMailToLink = "https://szns.co/requestAccess";
export const WaitlistedCTATemplate = ({ authorizedAt, authorizationWindowClosesAt, onPressLearnMore, onPressRequestAccess, version, }) => {
    const hasBeenAuthorized = !!authorizedAt;
    let targetAuthorizationDate;
    if (hasBeenAuthorized) {
        targetAuthorizationDate = authorizationWindowClosesAt?.isValid
            ? authorizationWindowClosesAt
            : authorizedAt.plus({ days: 7 });
    }
    const waitlistedCopy = `We'll send you ${version === "mobile" ? "a notification" : "an email"} when your account is ready and you're able to choose your plan. ${version === "mobile" ? "In the meantime, complete your profile below." : ""}`;
    const rewaitlistedCopy = `Unfortunately, your sign-up window has closed and we've passed along your invite. If you'd still like to join, request access below.`;
    return (React.createElement(Box, { pb: 1 },
        hasBeenAuthorized && (React.createElement(Flex, { alignItems: "center", pb: 3 },
            React.createElement(Countdown, { targetDate: targetAuthorizationDate }))),
        React.createElement(Sans, { size: "5", color: "black100", textAlign: hasBeenAuthorized ? "center" : "left" }, `You're ${hasBeenAuthorized ? "back " : ""}on the waitlist`),
        React.createElement(Spacer, { mb: 1 }),
        React.createElement(Sans, { size: "4", color: "black50", textAlign: hasBeenAuthorized ? "center" : "left" }, hasBeenAuthorized ? rewaitlistedCopy : waitlistedCopy),
        React.createElement(Spacer, { mb: 3 }),
        React.createElement(ButtonBar, { primaryButtonProps: {
                onClick: onPressRequestAccess,
                children: "Request Access",
            }, secondaryButtonProps: {
                onClick: onPressLearnMore,
                children: "Learn more",
            } })));
};
