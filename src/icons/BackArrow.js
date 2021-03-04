import React from "react";
import Svg, { G, Path } from "react-native-svg";
export const BackArrow = (props) => (React.createElement(Svg, Object.assign({ width: 26, height: 26 }, props, { viewBox: "0 0 28 28" }),
    React.createElement(G, { fill: "none", fillRule: "evenodd" },
        React.createElement(Path, { stroke: props.color || "#FFF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", d: "M9 6l-8 8 8 8M1 14h15" }))));
