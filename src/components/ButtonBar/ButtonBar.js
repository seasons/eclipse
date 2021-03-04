import React from "react";
import { ButtonBarTemplate } from "./ButtonBar.shared";
export const ButtonBar = ({ primaryButtonProps, secondaryButtonProps, }) => {
    return (React.createElement(ButtonBarTemplate, { primaryButtonProps: { ...primaryButtonProps, block: true }, secondaryButtonProps: { ...secondaryButtonProps, block: true } }));
};
