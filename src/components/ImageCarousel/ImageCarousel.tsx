import React, { useRef, useState, useEffect } from "react"
import {
  SnapList,
  SnapItem,
  useVisibleElements,
  useScroll,
} from "react-snaplist-carousel"
import { space, color } from "../../helpers"
import styled from "styled-components"
import { Box, Flex } from "@/elements"
import { imageResize } from "@/helpers/imageResize"
import { Picture } from "../Image/Picture"
import type { ImageCarouselProps } from "./ImageCarousel.shared"

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  items,
  pagerHorizontal,
}) => {
  const snapList = useRef(null)
  const [clientSide, setClientSide] = useState(false)
  const firstImage = (!!items?.[0] && [items?.[0]]) || []
  const [imagesToUse, setImagesToUse] = useState(firstImage)
  const selected = useVisibleElements(
    { debounce: 10, ref: snapList },
    ([element]) => element
  )
  const goToSnapItem = useScroll({ ref: snapList })
  useEffect(() => {
    if (typeof window !== "undefined" && !clientSide) {
      setClientSide(true)
      setImagesToUse(items)
    }
  }, [setImagesToUse, setClientSide, clientSide, items])

  useEffect(() => {
    if (clientSide) {
      setImagesToUse(items)
    }
  }, [clientSide, items])

  if (!items) {
    return null
  }

  return (
    <Flex flexDirection="row" style={{ position: "relative" }}>
      <Wrapper>
        <SnapList
          direction="horizontal"
          width={pagerHorizontal ? "100%" : "calc(100% - 16px)"}
          ref={snapList}
        >
          {imagesToUse?.map((image, index) => {
            // imageURL is used for blogposts
            const url = image?.imageURL ?? image?.url
            const imageSRC = (!!url && imageResize(url, "large")) || ""
            return (
              <SnapItem
                width="100%"
                margin={{ right: space(1) + "px" }}
                snapAlign="center"
                key={url}
              >
                <Box
                  style={{
                    backgroundColor: color("black04"),
                    height: "100%",
                    width: "100%",
                  }}
                  onClick={() =>
                    goToSnapItem(index === items.length - 1 ? 0 : index + 1)
                  }
                >
                  <ImageWrapper>
                    <Picture src={imageSRC} alt={image.alt} />
                  </ImageWrapper>
                </Box>
              </SnapItem>
            )
          })}
        </SnapList>
        <PagerWrapper>
          <PagerAbsolute pagerHorizontal={pagerHorizontal}>
            <Flex
              flexDirection={pagerHorizontal ? "row" : "column"}
              justifyContent="flex-end"
              pl={pagerHorizontal ? 0 : 1}
              width="100%"
            >
              {imagesToUse?.length > 1 &&
                imagesToUse?.map((_image, index) => {
                  return (
                    <Box
                      key={index}
                      pt={pagerHorizontal ? 1 : 0.5}
                      pl={pagerHorizontal ? 0.5 : 0}
                    >
                      <Pager
                        active={selected === index}
                        clientSide={clientSide}
                      />
                    </Box>
                  )
                })}
            </Flex>
          </PagerAbsolute>
        </PagerWrapper>
      </Wrapper>
    </Flex>
  )
}

const PagerWrapper = styled.div`
  position: relative;
  width: 100%;
  pointer-events: none;
  z-index: 4;
`

const PagerAbsolute = styled.div<{ pagerHorizontal?: boolean }>`
  position: ${(p) => (p.pagerHorizontal ? "relative" : "absolute")};
  right: 0;
  bottom: 0;
`

const Wrapper = styled.div`
  position: relative;
`

const Pager = styled.div<{ active: boolean; clientSide: boolean }>`
  height: 8px;
  box-sizing: border-box;
  width: 8px;
  border: 1px solid ${color("black100")};
  background-color: ${(p) => (p.active ? color("black100") : "transparent")};
  opacity: ${(p) => (p.clientSide ? "1" : "0")};
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  img {
    width: 100%;
  }
`
