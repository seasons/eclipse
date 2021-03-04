import React from "react";
import { View } from "react-native-web";
export const ChevronIcon = (props) => {
    // TODO: Support rotation on web chevron
    // const rotationStyle = props.rotateDeg
    //   ? { transform: [{ rotate: props.rotateDeg }] }
    //   : {}
    const scale = props.scale || 1;
    const fillColor = props.fillColor || "#fff";
    return (React.createElement(View, Object.assign({}, props),
        React.createElement("svg", { width: 11 * scale, height: 18 * scale, viewBox: "0 0 11 18" },
            React.createElement("g", { fill: "none", fillRule: "evenodd" },
                React.createElement("path", { fill: fillColor, d: "M0 0h11v18H0z" }),
                React.createElement("path", { stroke: props.color || "#C6C6C6", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", d: "M2 2l7 7-7 7" })))));
};
