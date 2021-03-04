import { Box, Flex, Sans } from "@/elements";
import { color } from "@/helpers";
import React from "react";
import styled from "styled-components/native";
export const VariantSizes = ({ variants, size }) => {
    const availableVariants = variants.filter((a) => !!a?.displayShort);
    return (React.createElement(Flex, { flexDirection: "row" }, availableVariants.map((variant) => {
        const reservable = variant.reservable !== null && !!variant.reservable;
        return (React.createElement(Box, { key: variant.id, mr: 0.5, style: { position: "relative" } },
            React.createElement(Sans, { size: size, color: reservable ? "black100" : "black25" }, variant?.displayShort),
            !reservable && React.createElement(Strikethrough, { size: size })));
    })));
};
const Strikethrough = styled.View `
  background-color: ${color("black25")};
  height: 2;
  width: 100%;
  position: absolute;
  top: ${(p) => (p.size === "2" ? 7 : 11)};
  left: 0;
`;
