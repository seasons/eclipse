import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { View } from "react-native";
export const ChevronIcon = (props) => {
    const rotationStyle = props.rotateDeg
        ? { transform: [{ rotate: props.rotateDeg }] }
        : {};
    const scale = props.scale || 1;
    const fillColor = props.fillColor || "#fff";
    return (React.createElement(View, Object.assign({}, props),
        React.createElement(Svg, { width: 11 * scale, height: 18 * scale, viewBox: "0 0 11 18", style: rotationStyle },
            React.createElement(G, { fill: "none", fillRule: "evenodd" },
                React.createElement(Path, { fill: fillColor, d: "M0 0h11v18H0z" }),
                React.createElement(Path, { stroke: props.color || "#C6C6C6", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", d: "M2 2l7 7-7 7" })))));
};
