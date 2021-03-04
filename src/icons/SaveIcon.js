import { color } from "@/helpers";
import React from "react";
import Svg, { Path } from "react-native-svg";
export const SaveIcon = (props) => {
    const fillColor = props.enabled ? "#000" : "#fff";
    const strokeColor = props.grayStroke && !props.enabled ? color("black10") : "#000";
    return (React.createElement(Svg, Object.assign({ width: props.width || 16, height: props.height || 21, viewBox: "0 0 16 21" }, props),
        React.createElement(Path, { d: "M15.25 19.746L8 13.75l-6.832 6.183L.75.75h14.5v18.996z", fill: fillColor, stroke: strokeColor, strokeWidth: 1.5, fillRule: "evenodd" })));
};
