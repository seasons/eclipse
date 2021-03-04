import { Flex, Sans, Spacer } from "@/elements";
import { Separator } from "@/components";
import React from "react";
export const SectionHeader = ({ title }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Flex, { flexDirection: "row", style: { flex: 1 }, width: "100%" },
            React.createElement(Sans, { size: "4", color: "black" }, title)),
        React.createElement(Spacer, { mb: 1 }),
        React.createElement(Separator, null)));
};
