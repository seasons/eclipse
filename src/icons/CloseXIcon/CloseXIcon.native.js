import React from "react";
import Svg, { G, Rect } from "react-native-svg";
export const CloseXIcon = (props) => (React.createElement(Svg, Object.assign({ width: 12, height: 12 }, props),
    React.createElement(G, { transform: "rotate(45 9.414 4.586)", fill: props.color || "#FFF", fillRule: "evenodd" },
        React.createElement(Rect, { x: 7, width: 2, height: 16, rx: 1 }),
        React.createElement(Rect, { transform: "rotate(90 8 8)", x: 7, width: 2, height: 16, rx: 1 }))));
