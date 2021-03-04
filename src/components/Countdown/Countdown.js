import React from "react";
import { Display } from "@/elements/Typography";
import { Duration } from "luxon";
const formatDisplayDuration = (targetDate) => {
    const duration = targetDate.isValid && targetDate.valueOf() > Date.now()
        ? targetDate.diffNow(["days", "hours", "minutes", "seconds"])
        : Duration.fromMillis(0);
    const twoDays = Duration.fromObject({ days: 2 });
    if (duration >= twoDays) {
        return `${duration.days + 1} days left`;
    }
    return duration.toFormat("hh:mm:ss");
};
export const Countdown = ({ targetDate, underline = false, display = "block", }) => {
    const [displayDuration, setDisplayDuration] = React.useState(formatDisplayDuration(targetDate));
    React.useEffect(() => {
        const interval = setInterval(() => {
            setDisplayDuration(formatDisplayDuration(targetDate));
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [targetDate]);
    let style = {};
    if (underline) {
        style.textDecoration = "underline";
    }
    if (display === "inline") {
        style.fontSize = "inherit";
    }
    return (React.createElement(Display, { size: "9", style: style, inline: display === "inline" }, displayDuration));
};
