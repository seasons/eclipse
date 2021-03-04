import { Box } from "@/elements";
import { themeProps } from "@/theme/theme";
import React from "react";
import styled from "styled-components";
import { Spinner } from "../Spinner";
export const Loader = ({ variant = "whiteBackground" }) => {
    const getColorAndOpacityForVariant = (variant) => {
        const { colors: { black100, white100 }, } = themeProps;
        switch (variant) {
            case "whiteBackground":
                return {
                    backgroundColor: white100,
                    opacity: 1.0,
                };
            case "blackOpaque85":
                return {
                    backgroundColor: black100,
                    opacity: 0.85,
                };
        }
    };
    const variantProps = getColorAndOpacityForVariant(variant);
    return (React.createElement(Container, { backgroundColor: variantProps.backgroundColor, opacity: variantProps.opacity },
        React.createElement(Spinner, null)));
};
const Container = styled(Box) `
  background-color: ${(p) => p.backgroundColor};
  opacity: ${(p) => p.opacity};
  width: 100%;
  height: 100%;
  z-index: 51;
  position: absolute;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
