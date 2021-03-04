import React from "react";
import { color } from "@/helpers/color";
import { View } from "react-native";
import FadeIn from "react-native-fade-in-image";
import FastImage from "react-native-fast-image";
import styled from "styled-components/native";
export const ProgressiveImage = (props) => {
    return (React.createElement(Container, { radius: props.radius },
        React.createElement(FadeIn, null,
            React.createElement(FastImage, Object.assign({ source: props.source }, props)))));
};
const Container = styled(View) `
  background-color: ${color("black04")};
  overflow: hidden;
  border-radius: ${(p) => (p.radius ? 15 : 0)};
`;
