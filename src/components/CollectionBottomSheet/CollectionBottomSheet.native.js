import React, { useMemo, useRef, useState } from "react";
import { Box, Flex, Sans, Spacer } from "@/elements";
import { color, space } from "@/helpers";
import { Dimensions, FlatList, Linking, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";
import { CarouselPageDots } from "@/components/CarouselPageDots";
import { Handle } from "@/components/Handle";
import { ReadMore } from "@/components/ReadMore";
import { ProductGridItem } from "@/components/ProductGridItem/ProductGridItem";
import { SNAP_PADDING, } from "@/views/Collection/Collection";
import { Spinner } from "../Spinner";
const dimensions = Dimensions.get("window");
const MetaDataCarousel = ({ data }) => {
    return (React.createElement(FlatList, { horizontal: true, showsHorizontalScrollIndicator: false, data: data, keyExtractor: (item, index) => item?.title + index, renderItem: ({ item, index }) => (React.createElement(Flex, { flexDirection: "row", flexWrap: "nowrap" },
            index !== 0 && (React.createElement(Box, { style: {
                    height: "100%",
                    width: 1,
                    backgroundColor: color("black10"),
                } })),
            item?.title === "Website" ? (React.createElement(TouchableOpacity, { onPress: () => {
                    Linking.openURL(item?.text);
                } },
                React.createElement(Box, { ml: index === 0 ? 0 : 3, mr: 3 },
                    React.createElement(Sans, { size: "4", color: "black50" }, item?.title),
                    React.createElement(Sans, { size: "4" }, item?.text)))) : (React.createElement(Box, { ml: index === 0 ? 0 : 3, mr: 3 },
                React.createElement(Sans, { size: "4", color: "black50" }, item?.title),
                React.createElement(Sans, { size: "4" }, item?.text))))) }));
};
export const CollectionBottomSheet = ({ images, title, description, currentImage, showPopUp, hidePopUp, authState, products, onEndReached, metaData, loading, }) => {
    const [readMoreExpanded, setReadMoreExpanded] = useState(false);
    const [flatListHeight, setFlatListHeight] = useState(0);
    const insets = useSafeAreaInsets();
    const bottomSheetRef = useRef(null);
    const imageContentHeight = dimensions.width;
    const content = useMemo(() => {
        const numColumns = 2;
        const topSnapPoint = 0;
        const secondSnapPoint = imageContentHeight - insets.top - SNAP_PADDING;
        const hasImages = images?.length > 0;
        const snapPoints = hasImages
            ? [topSnapPoint, secondSnapPoint]
            : [topSnapPoint];
        const initialSnapPoint = hasImages ? 1 : 0;
        return (React.createElement(ScrollBottomSheet, { topInset: SNAP_PADDING, componentType: "FlatList", enableOverScroll: true, ListHeaderComponent: () => (React.createElement(Box, { px: 2 },
                React.createElement(Spacer, { mb: 1 }),
                React.createElement(Flex, { flexDirection: "row", alignItems: "flex-start", flexWrap: "nowrap", justifyContent: hasImages ? "space-between" : "flex-start" },
                    React.createElement(Sans, { size: "7", style: { textDecorationLine: "underline" } }, title),
                    images?.length > 1 && (React.createElement(Box, { pt: 0.5 },
                        React.createElement(CarouselPageDots, { slideCount: images?.length, currentSlide: currentImage - 1 })))),
                !!description && (React.createElement(React.Fragment, null,
                    React.createElement(Spacer, { mb: 3 }),
                    React.createElement(Sans, { size: "4" }, "About"),
                    React.createElement(Spacer, { mb: 0.5 }),
                    React.createElement(ReadMore, { readMoreExpanded: readMoreExpanded, setReadMoreExpanded: setReadMoreExpanded, content: description, maxChars: 100 }))),
                metaData?.length > 0 && (React.createElement(Box, { mt: 3 },
                    React.createElement(MetaDataCarousel, { data: metaData }))),
                React.createElement(Spacer, { mb: 3 }))), ListFooterComponent: () => (React.createElement(Box, null,
                loading && (React.createElement(Flex, { style: { height: 40 }, flexDirection: "row", justifyContent: "center" },
                    React.createElement(Spinner, null))),
                React.createElement(Spacer, { mb: 3 }))), containerStyle: {
                backgroundColor: "white",
                borderRadius: 20,
                marginTop: insets.top + SNAP_PADDING,
            }, snapPoints: snapPoints, initialSnapIndex: initialSnapPoint, renderHandle: () => (React.createElement(Handle, { style: { marginTop: space(2), marginBottom: space(1) }, backgroundColor: "black10" })), keyExtractor: (item, index) => item?.node?.id + index, data: products, numColumns: numColumns, onEndReachedThreshold: 0.7, onEndReached: onEndReached, 
            // @ts-ignore
            renderItem: ({ item }, i) => {
                const product = item?.node;
                return (React.createElement(ProductGridItem, { product: product, showPopUp: showPopUp, hidePopUp: hidePopUp, authState: authState, addLeftSpacing: i % numColumns !== 0 }));
            }, onLayout: (e) => {
                if (!flatListHeight) {
                    setFlatListHeight(e.nativeEvent.layout.height);
                }
            }, ref: bottomSheetRef, animationConfig: {
                duration: 200,
            } }));
    }, [
        imageContentHeight,
        currentImage,
        insets,
        onEndReached,
        images,
        description,
        products,
        hidePopUp,
        showPopUp,
        authState,
        title,
        flatListHeight,
        readMoreExpanded,
        setReadMoreExpanded,
        metaData,
        loading,
    ]);
    return React.createElement(React.Fragment, null, content);
};
