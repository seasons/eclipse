import React from "react";
import { Flex, Spacer } from "@/elements";
import { Button } from "@/components";
export const ButtonBarTemplate = ({ primaryButtonProps, secondaryButtonProps, }) => {
    return (React.createElement(Flex, { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
        React.createElement(Button, Object.assign({ variant: "primaryWhite" }, secondaryButtonProps, { onPress: secondaryButtonProps.onClick }), secondaryButtonProps.children),
        React.createElement(Spacer, { ml: 1 }),
        React.createElement(Button, Object.assign({ variant: "primaryBlack" }, primaryButtonProps, { onPress: primaryButtonProps.onClick }), primaryButtonProps.children)));
};
