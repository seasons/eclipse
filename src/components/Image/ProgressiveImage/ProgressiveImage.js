import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";
import { Picture } from "@/components";
import { color, PRODUCT_ASPECT_RATIO } from "@/helpers";
import { Box } from "@/elements";
import { imageResize } from "@/helpers/imageResize";
export const ProgressiveImage = ({ url, size, aspectRatio = PRODUCT_ASPECT_RATIO, alt, source, }) => {
    const [loaded, setLoaded] = useState(false);
    const fullImageRef = useRef(null);
    useEffect(() => {
        const image = fullImageRef.current;
        if (image && image.complete && !loaded) {
            setLoaded(true);
        }
    }, [fullImageRef, loaded]);
    const imageUrl = source?.uri || url;
    const initialImage = imageResize(imageUrl, "initial");
    const fullImage = imageResize(imageUrl, size);
    return (React.createElement(ImageWrapper, { aspectRatio: aspectRatio },
        React.createElement(FullImageWrapper, { loaded: loaded },
            React.createElement(Picture, { src: fullImage, key: fullImage, alt: alt, imgRef: fullImageRef, onLoad: () => {
                    setLoaded(true);
                } })),
        React.createElement(InitialImageWrapper, null,
            React.createElement(Picture, { src: initialImage, alt: alt }))));
};
const FullImageWrapper = styled.div `
  position: absolute;
  opacity: ${(p) => (p.loaded ? 1 : 0)};
  top: 0;
  left: 0;
  width: 100%;
  transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  z-index: 1;
  background-color: ${color("white100")};
`;
const InitialImageWrapper = styled.div `
  img {
    filter: blur(8px);
    transform: scale(1);
    width: 100%;
  }
`;
const ImageWrapper = styled(Box) `
  height: 0;
  padding-bottom: calc(100% * ${(p) => p.aspectRatio});
  width: 100%;
  max-height: 100%;
  overflow: hidden;
  position: relative;
`;
