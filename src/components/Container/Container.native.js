import { color } from "@/helpers";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Flex } from "@/elements/Flex";
import { Theme } from "@/theme/theme";
export const Container = ({ children, backgroundColor = "white100", insetsBottom = true, insetsTop = true, style, }) => {
    const insets = useSafeAreaInsets();
    return (React.createElement(Theme, null,
        React.createElement(Flex, { style: {
                flex: 1,
                paddingTop: insetsTop ? insets.top : 0,
                paddingBottom: insetsBottom ? insets.bottom : 0,
                backgroundColor: color(backgroundColor),
                ...style,
            } }, children)));
};
