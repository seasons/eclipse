import React from "react";
import { Dimensions } from "react-native";
import { space } from "@/helpers/space";
import { ButtonBarTemplate } from "./ButtonBar.shared";
export const ButtonBar = ({ primaryButtonProps, secondaryButtonProps, }) => {
    const twoButtonWidth = Dimensions.get("window").width / 2 - space(2) - space(0.5);
    return (React.createElement(ButtonBarTemplate, { primaryButtonProps: { ...primaryButtonProps, width: twoButtonWidth }, secondaryButtonProps: { ...secondaryButtonProps, width: twoButtonWidth } }));
};
