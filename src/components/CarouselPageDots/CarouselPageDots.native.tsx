import { Box } from "@/elements/Box"
import { Flex } from "@/elements/Flex"
import { color } from "@/helpers"
import React from "react"
import styled from "styled-components/native"

interface Props {
  slideCount: number
  currentSlide: number
}

export const CarouselPageDots: React.FC<Props> = ({
  slideCount,
  currentSlide,
}) => {
  return (
    <Flex flexDirection="row" flexWrap="nowrap" alignItems="flex-start">
      {[...Array(slideCount)]?.map((_image, index) => {
        return <Pager active={currentSlide === index} ml={0.5} key={index} />
      })}
    </Flex>
  )
}

const Pager = styled(Box)<{ active: boolean }>`
  height: 8px;
  border-width: 1;
  border-color: ${color("black100")};
  width: 8px;
  background-color: ${(p) =>
    p.active ? color("black100") : "rgba(0, 0, 0, 0)"};
`
