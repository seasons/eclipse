import React from "react";
import Svg, { G, Path } from "react-native-svg";
export const CheckIcon = (props) => (React.createElement(Svg, Object.assign({ width: 16, height: 16 }, props),
    React.createElement(G, { fill: "none", fillRule: "evenodd" },
        React.createElement(Path, { fillOpacity: 0.05, fill: "#232323", opacity: 0.05, d: "M0 0h16v16H0z" }),
        React.createElement(Path, { stroke: props.color, strokeWidth: 2, opacity: 0.5, strokeLinecap: "round", strokeLinejoin: "round", d: "M2 8.47L6.11 12 14 4" }))));
