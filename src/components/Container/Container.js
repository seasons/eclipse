import { color } from "@/helpers";
import React from "react";
import { Flex } from "@/elements/Flex";
import { Theme } from "@/theme/theme";
export const Container = ({ children, backgroundColor = "white100", style, }) => {
    return (React.createElement(Theme, null,
        React.createElement(Flex, { style: {
                flex: 1,
                backgroundColor: color(backgroundColor),
                ...style,
            } }, children)));
};
