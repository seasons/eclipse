import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Dimensions, FlatList, TouchableOpacity, TouchableWithoutFeedback, } from "react-native";
import { Box, Flex, Sans, Spacer } from "@/elements";
import { TrackSchema, useTracking } from "@/helpers/track";
import { space } from "@/helpers/space";
import * as Animatable from "react-native-animatable";
import { PRODUCT_ASPECT_RATIO } from "@/helpers/constants";
import { VariantSizes } from "../VariantSizes";
import { ProgressiveImage } from "../Image/ProgressiveImage";
export const ProductsRail = ({ items, title, large, onViewAll, }) => {
    const navigation = useNavigation();
    const [currentPage, setCurrentPage] = useState(1);
    const tracking = useTracking();
    let slideWidth = 144;
    if (large) {
        const maxWidth = Dimensions.get("window").width - 96;
        slideWidth = maxWidth < 280 ? maxWidth : 280;
    }
    const onScroll = (e) => {
        const newPageNum = Math.round(e.nativeEvent.contentOffset.x / slideWidth + 1);
        if (newPageNum !== currentPage) {
            tracking.trackEvent({
                actionName: TrackSchema.ActionNames.CarouselSwiped,
                actionType: TrackSchema.ActionTypes.Swipe,
                slideIndex: newPageNum,
                contextModule: title,
            });
            setCurrentPage(newPageNum);
        }
    };
    if (!items.length) {
        return null;
    }
    return (React.createElement(Box, { mb: 3, pl: 2 },
        React.createElement(Flex, { flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between" },
            React.createElement(Sans, { size: "4" }, title),
            onViewAll && (React.createElement(TouchableOpacity, { onPress: onViewAll },
                React.createElement(Box, { px: 2 },
                    React.createElement(Sans, { size: "4", style: { textDecorationLine: "underline" } }, "View all"))))),
        React.createElement(Spacer, { mt: 1 }),
        React.createElement(FlatList, { data: items, renderItem: ({ item }) => {
                const image = item?.images?.[0]?.url;
                const brandName = item.brand && item.brand.name;
                return (React.createElement(Animatable.View, { animation: "fadeIn", duration: 300 },
                    React.createElement(TouchableWithoutFeedback, { onPress: () => navigation.navigate("Product", {
                            id: item.id,
                            slug: item.slug,
                            name: item.name,
                        }) },
                        React.createElement(Box, { mr: 0.5, style: { width: slideWidth } },
                            React.createElement(ProgressiveImage
                            // @ts-ignore
                            , { 
                                // @ts-ignore
                                source: { uri: image }, style: {
                                    width: slideWidth,
                                    height: slideWidth * PRODUCT_ASPECT_RATIO,
                                } }),
                            React.createElement(Spacer, { mb: 0.5 }),
                            !!brandName && React.createElement(Sans, { size: "2" }, brandName),
                            item.variants && (React.createElement(VariantSizes, { size: "2", variants: item.variants }))))));
            }, keyExtractor: (item, index) => item.id + index, showsHorizontalScrollIndicator: false, horizontal: true, onScroll: onScroll, overScrollMode: "always", snapToAlignment: "start", decelerationRate: "fast", scrollEventThrottle: 299, directionalLockEnabled: true, snapToInterval: slideWidth + space(0.5) })));
};
