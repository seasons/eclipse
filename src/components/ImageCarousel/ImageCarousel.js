import React, { useRef, useState, useEffect } from "react";
import { SnapList, SnapItem, useVisibleElements, useScroll, } from "react-snaplist-carousel";
import { space, color } from "../../helpers";
import styled from "styled-components";
import { Box, Flex } from "@/elements";
import { imageResize } from "@/helpers/imageResize";
import { Picture } from "../Image/Picture";
// import { Picture } from "../Image"
export const ImageCarousel = ({ images, maxWidth, pagerHorizontal }) => {
    const snapList = useRef(null);
    const [clientSide, setClientSide] = useState(false);
    const firstImage = (!!images?.[0] && [images?.[0]]) || [];
    const [imagesToUse, setImagesToUse] = useState(firstImage);
    const selected = useVisibleElements({ debounce: 10, ref: snapList }, ([element]) => element);
    const goToSnapItem = useScroll({ ref: snapList });
    useEffect(() => {
        if (typeof window !== "undefined" && !clientSide) {
            setClientSide(true);
            setImagesToUse(images);
        }
    }, [setImagesToUse, setClientSide, clientSide, images]);
    useEffect(() => {
        if (clientSide) {
            setImagesToUse(images);
        }
    }, [clientSide, images]);
    if (!images) {
        return null;
    }
    return (React.createElement(Flex, { flexDirection: "row", style: { position: "relative", maxWidth: maxWidth ? maxWidth : "auto" } },
        React.createElement(Wrapper, null,
            React.createElement(SnapList, { direction: "horizontal", width: pagerHorizontal ? "100%" : "calc(100% - 16px)", ref: snapList }, imagesToUse?.map((image, index) => {
                // imageURL is used for blogposts
                const url = image?.imageURL ?? image?.url;
                const imageSRC = (!!url && imageResize(url, "large")) || "";
                return (React.createElement(SnapItem, { width: "100%", margin: { right: space(1) + "px" }, snapAlign: "center", key: url },
                    React.createElement(Box, { style: {
                            backgroundColor: color("black04"),
                            height: "100%",
                            width: "100%",
                        }, onClick: () => goToSnapItem(index === images.length - 1 ? 0 : index + 1) },
                        React.createElement(ImageWrapper, null,
                            React.createElement(Picture, { src: imageSRC, alt: image.alt })))));
            })),
            React.createElement(PagerWrapper, null,
                React.createElement(PagerAbsolute, { pagerHorizontal: pagerHorizontal },
                    React.createElement(Flex, { flexDirection: pagerHorizontal ? "row" : "column", justifyContent: "flex-end", pl: pagerHorizontal ? 0 : 1, width: "100%" }, images.map((_image, index) => {
                        return (React.createElement(Box, { key: index, pt: pagerHorizontal ? 1 : 0.5, pl: pagerHorizontal ? 0.5 : 0 },
                            React.createElement(Pager, { active: selected === index, clientSide: clientSide })));
                    })))))));
};
const PagerWrapper = styled.div `
  position: relative;
  width: 100%;
  pointer-events: none;
  z-index: 4;
`;
const PagerAbsolute = styled.div `
  position: ${(p) => (p.pagerHorizontal ? "relative" : "absolute")};
  right: 0;
  bottom: 0;
`;
const Wrapper = styled.div `
  position: relative;
`;
const Pager = styled.div `
  height: 8px;
  box-sizing: border-box;
  width: 8px;
  border: 1px solid ${color("black100")};
  background-color: ${(p) => (p.active ? color("black100") : "transparent")};
  opacity: ${(p) => (p.clientSide ? "1" : "0")};
`;
const ImageWrapper = styled.div `
  width: 100%;
  height: 100%;
  cursor: pointer;
  img {
    width: 100%;
  }
`;
