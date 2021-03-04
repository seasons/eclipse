import { Box, Flex, Sans } from "@/elements";
import { ProgressiveImage } from "@/components";
import { Container } from "./StyledOrderItem";
import React from "react";
import { PRODUCT_ASPECT_RATIO } from "@/helpers/constants";
export const OrderItem = ({ productVariant, onPress, }) => {
    const product = productVariant?.product;
    if (!product) {
        return null;
    }
    const imageURL = product?.images?.[0]?.url;
    const variantSize = productVariant?.displayLong?.toLowerCase();
    return (React.createElement(Box, { key: product.id, onClick: () => onPress(product) },
        React.createElement(Container, { flexDirection: "row" },
            React.createElement(Flex, { style: { flex: 2 }, flexWrap: "nowrap", flexDirection: "column", justifyContent: "space-between" },
                React.createElement(Box, null,
                    React.createElement(Sans, { size: "4" }, product.brand.name),
                    React.createElement(Sans, { size: "4", color: "black50" }, product.name),
                    !!variantSize && (React.createElement(Sans, { size: "4", color: "black50" },
                        "Size ",
                        variantSize)))),
            React.createElement(Flex, { style: { flex: 2 }, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }, !!imageURL && (React.createElement(ProgressiveImage
            // @ts-ignore
            , { 
                // @ts-ignore
                style: { height: 170 * PRODUCT_ASPECT_RATIO, width: 170 }, resizeMode: "contain", source: { uri: imageURL } }))))));
};
