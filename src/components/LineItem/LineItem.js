import { Flex, Sans } from "@/elements";
import React from "react";
export const LineItem = ({ leftText, rightText, color = "black50", windowWidth, }) => {
    return (React.createElement(Flex, { mt: 1, flexDirection: "row", width: "100%", justifyContent: !!leftText && !!rightText ? "space-between" : "flex-start" },
        React.createElement(Flex, { flexDirection: "row", style: { maxWidth: windowWidth - 120 }, pr: 2 },
            React.createElement(Sans, { size: "4", color: color }, leftText)),
        React.createElement(Sans, { size: "4", color: color }, rightText)));
};
