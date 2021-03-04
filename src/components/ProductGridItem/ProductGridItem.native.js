import { Flex, Sans, Spacer } from "@/elements";
import { Box } from "@/elements/Box";
import { PRODUCT_ASPECT_RATIO } from "@/helpers/constants";
import { TrackSchema, useTracking } from "@/helpers/track";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, TouchableWithoutFeedback } from "react-native";
import { SaveProductButton } from "@/components/SaveProductButton";
import { VariantSizes } from "@/components/VariantSizes";
import { ProgressiveImage } from "../Image/ProgressiveImage";
const ProductGridItemComponent = ({ flatListRef, product, addLeftSpacing, showBrandName, showPopUp, hidePopUp, authState, }) => {
    const tracking = useTracking();
    const navigation = useNavigation();
    const itemWidth = Dimensions.get("window").width / 2 - 2;
    const imageHeight = itemWidth * PRODUCT_ASPECT_RATIO;
    const image = product?.images?.[0]?.url;
    const productName = product?.name;
    const brandName = product?.brand?.name;
    return (React.createElement(TouchableWithoutFeedback, { key: product.id, onPress: () => {
            tracking.trackEvent({
                actionName: TrackSchema.ActionNames.ProductTapped,
                actionType: TrackSchema.ActionTypes.Tap,
                productSlug: product.slug,
                productId: product.id,
                productName,
            });
            navigation.navigate("Product", {
                id: product.id,
                slug: product.slug,
                name: product.name,
            });
            if (!!flatListRef?.current) {
                // If the flatList is passed down we scroll to the top when the page is reloaded
                // this is used for when the product view is being reloaded with a new product
                flatListRef?.current?.scrollToOffset?.({ animated: true, offset: 0 });
            }
        } },
        React.createElement(Box, { mr: addLeftSpacing ? 0.5 : 0, mb: 0.5, width: itemWidth },
            React.createElement(ProgressiveImage
            // @ts-ignore
            , { 
                // @ts-ignore
                source: { uri: image }, style: { width: itemWidth, height: imageHeight } }),
            React.createElement(Flex, { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
                React.createElement(Box, { my: 0.5, mx: 1 },
                    (!!productName || !!brandName) && (React.createElement(Sans, { size: "2", style: { maxWidth: itemWidth - 50 } }, !!showBrandName && brandName !== "Vintage"
                        ? brandName
                        : productName)),
                    React.createElement(VariantSizes, { size: "2", variants: product?.variants })),
                React.createElement(Box, { mt: 0.5 },
                    React.createElement(SaveProductButton, { showPopUp: showPopUp, hidePopUp: hidePopUp, authState: authState, grayStroke: true, height: 16, width: 12, product: product, onPressSaveButton: () => {
                            tracking.trackEvent({
                                actionName: TrackSchema.ActionNames.SaveProductButtonTapped,
                                actionType: TrackSchema.ActionTypes.Tap,
                            });
                        } }))),
            React.createElement(Spacer, { mb: 0.5 }))));
};
export const ProductGridItem = React.memo(ProductGridItemComponent);
