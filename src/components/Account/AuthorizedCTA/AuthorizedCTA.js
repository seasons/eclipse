import React from "react";
import { Box, Sans, Flex, Spacer } from "@/elements";
import { Duration } from "luxon";
import { Countdown, ButtonBar } from "@/components";
export const AuthorizedCTA = ({ authorizedAt, authorizationWindowClosesAt, onPressChoosePlan, onPressLearnMore, }) => {
    const targetAuthorizationDate = authorizationWindowClosesAt.isValid
        ? authorizationWindowClosesAt
        : authorizedAt.plus({ days: 7 });
    const authorizationDuration = targetAuthorizationDate.valueOf() > authorizedAt.valueOf()
        ? targetAuthorizationDate.diff(authorizedAt, "hours")
        : Duration.fromMillis(0);
    const getDetailTextTime = () => {
        const hoursInAuthWindow = authorizationDuration.get("hours");
        if (hoursInAuthWindow === 1) {
            return `${authorizationDuration.toFormat("h")} hour`;
        }
        else if (hoursInAuthWindow <= 48) {
            return `${authorizationDuration.toFormat("h")} hours`;
        }
        else if (hoursInAuthWindow > 48) {
            return `${authorizationDuration.toFormat("d")} days`;
        }
        else {
            return `a limited window`;
        }
    };
    const captionSansProps = { size: "4", color: "black50", textAlign: "center" };
    return (React.createElement(Box, { pb: 1 },
        React.createElement(Flex, { alignItems: "center", justifyContent: "center", pb: 3 },
            React.createElement(Countdown, { targetDate: targetAuthorizationDate })),
        React.createElement(Sans, { size: "5", color: "black100", textAlign: "center" }, "You're in. Let's choose your plan"),
        React.createElement(Spacer, { mb: 1 }),
        React.createElement(Sans, Object.assign({}, captionSansProps),
            "You have",
            " ",
            React.createElement(Sans, Object.assign({}, captionSansProps, { underline: true, inline: true }), getDetailTextTime()),
            " ",
            "to secure your spot. If we don't hear from you, your invite will go to the next person and",
            " ",
            React.createElement(Sans, Object.assign({}, captionSansProps, { underline: true, inline: true }), "you'll be waitlisted.")),
        React.createElement(Spacer, { mb: 3 }),
        React.createElement(ButtonBar, { primaryButtonProps: {
                children: "Choose plan",
                onClick: onPressChoosePlan,
            }, secondaryButtonProps: {
                children: "Learn more",
                onClick: onPressLearnMore,
            } })));
};
