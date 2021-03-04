import { Box } from "@/elements/Box";
import { Flex } from "@/elements/Flex";
import { color } from "@/helpers";
import React from "react";
import styled from "styled-components";
export const CarouselPageDots = ({ slideCount, currentSlide, }) => {
    return (React.createElement(Flex, { flexDirection: "row", flexWrap: "nowrap", alignItems: "flex-start" }, [...Array(slideCount)]?.map((_image, index) => {
        return React.createElement(Pager, { active: currentSlide === index, ml: 0.5, key: index });
    })));
};
const Pager = styled(Box) `
  height: 8px;
  border-width: 1;
  border-color: ${color("black100")};
  width: 8px;
  background-color: ${(p) => p.active ? color("black100") : "rgba(0, 0, 0, 0)"};
`;
