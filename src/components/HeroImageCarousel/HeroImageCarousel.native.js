import React from "react";
import { FlatList, Dimensions } from "react-native";
import styled from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { color } from "@/helpers/color";
import { Box } from "@/elements";
import { SNAP_PADDING } from "@/views/Collection/Collection";
import { ProgressiveImage } from "@/components";
const windowWidth = Dimensions.get("window").width;
const imageHeight = windowWidth;
export const HeroImageCarousel = ({ images, currentImage, setCurrentImage, }) => {
    const insets = useSafeAreaInsets();
    const renderItem = ({ item }) => {
        return (React.createElement(Box, null,
            React.createElement(ProgressiveImage
            // @ts-ignore
            , { 
                // @ts-ignore
                source: { uri: item?.url || "" }, style: { width: windowWidth, height: imageHeight } })));
    };
    const onScroll = (e) => {
        const newPageNum = Math.round(e.nativeEvent.contentOffset.y / imageHeight + 1);
        if (newPageNum !== currentImage) {
            setCurrentImage(newPageNum);
        }
    };
    if (images?.length === 0) {
        return React.createElement(BlackSpacer, { insetsTop: insets?.top || 0 });
    }
    return (React.createElement(Wrapper, null,
        React.createElement(FlatList, { pagingEnabled: true, overScrollMode: "always", snapToAlignment: "start", decelerationRate: "fast", scrollEventThrottle: 299, onScroll: onScroll, data: images, keyExtractor: (item, index) => item.id + index, renderItem: (item) => renderItem(item) })));
};
const Wrapper = styled(Box) `
  height: ${imageHeight};
  overflow: hidden;
  background-color: ${color("white100")};
`;
const BlackSpacer = styled(Box) `
  height: ${(p) => p.insetsTop + SNAP_PADDING};
  width: 100%;
  background-color: ${color("black100")};
`;
