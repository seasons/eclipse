import React from "react";
import Svg, { Circle, G, Path } from "react-native-svg";
export const CheckCircled = (props) => {
    return (React.createElement(Svg, Object.assign({ width: props.width || 42, height: props.height || 42 }, props, { viewBox: "0 0 56 56" }),
        React.createElement(G, { fill: "none", fillRule: "evenodd" },
            React.createElement(Circle, { fill: props.backgroundColor ? props.backgroundColor : "#04B853", cx: 28, cy: 28, r: 28 }),
            React.createElement(Path, { stroke: "#FFF", strokeWidth: props.strokeWidth ? props.strokeWidth : 2, strokeLinecap: "round", strokeLinejoin: "round", d: "M18 28.263L24.85 34 38 21" }))));
};
