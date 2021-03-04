import { Box, Flex } from "@/elements";
import { BackArrow } from "@/icons/BackArrow";
import { themeProps } from "@/theme/theme";
import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
export const FixedBackArrow = ({ variant, onPress, rotationDegree = "0deg", overrides = {} }) => {
    const getColorsForVariant = (variant) => {
        const { colors: { black100, white100, black10, productBackgroundColor }, } = themeProps;
        switch (variant) {
            case "blackBackground":
                return {
                    backgroundColor: black100,
                    arrowColor: white100,
                };
            case "whiteBackground":
                return {
                    backgroundColor: white100,
                    arrowColor: black100,
                };
            case "productBackground":
                return {
                    backgroundColor: productBackgroundColor,
                    arrowColor: black100,
                };
            case "whiteTransparent":
                return {
                    backgroundColor: "rgba(0,0,0,0)",
                    arrowColor: white100,
                };
            default:
                return {
                    backgroundColor: black10,
                    arrowColor: black100,
                };
        }
    };
    const variantColors = getColorsForVariant(variant);
    return (React.createElement(Wrapper, { style: {
            left: overrides.left ?? 7,
            top: overrides.top ?? 50,
            transform: [{ rotate: rotationDegree }],
        } },
        React.createElement(TouchableOpacity, { onPress: onPress },
            React.createElement(ArrowWrapper, { backgroundColor: variantColors.backgroundColor, borderColor: overrides.borderColor },
                React.createElement(Arrow, { color: variantColors.arrowColor })))));
};
const Arrow = styled(BackArrow) `
  left: 4;
`;
const Wrapper = styled(Box) `
  position: absolute;
  z-index: 2000;
`;
const ArrowWrapper = styled(Flex) `
  flex-direction: row;
  background-color: ${(p) => p.backgroundColor};
  border-radius: 100;
  border-width: ${(p) => (p.borderColor ? 1 : 0)};
  border-color: ${(p) => p.borderColor ?? "#FFFFFF"};
  height: 40;
  width: 40;
  align-items: center;
  justify-content: center;
`;
