import React from "react";
import { Box } from "./";
/**
 * A component used to inject space where it's needed
 */
export const Spacer = (props) => {
    return React.createElement(Box, Object.assign({}, props));
};
Spacer.displayName = "Spacer";
