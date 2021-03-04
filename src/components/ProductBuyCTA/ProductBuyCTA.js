import React from "react";
import { Flex, Sans, Spacer } from "@/elements";
import { Button } from "@/components";
import { UnderlinedSans } from "./StyledProductBuyCTA";
const ProductBuyNew = React.forwardRef(({ price, brandName, onBuyNew, onNavigateToPartner, availableForSale, buyButtonMutating, flexProps, }, ref) => {
    return (React.createElement(Flex, Object.assign({ flexDirection: "column" }, flexProps, { ref: ref }),
        React.createElement(Sans, { color: "black100", size: "4", weight: "medium" }, "Available from Judy Turner"),
        React.createElement(Spacer, { mb: 2 }),
        React.createElement(Button, { variant: "primaryBlack", block: true, onPress: onBuyNew, onClick: onBuyNew, disabled: !availableForSale || buyButtonMutating, loading: buyButtonMutating }, availableForSale ? `Buy new for ${price}` : "Sold Out"),
        React.createElement(Spacer, { mb: 2 }),
        React.createElement(Sans, { size: "3", opacity: 0.5, color: "black100" },
            "Orders fulfilled by",
            " ",
            React.createElement(UnderlinedSans, { size: "3", onPress: () => onNavigateToPartner() }, brandName),
            ". Payment & shipping information on file will be used for one-tap checkout.")));
});
const ProductBuyUsed = React.forwardRef(({ price, availableForSale, onBuyUsed, buyButtonMutating, flexProps, }, ref) => (React.createElement(Flex, Object.assign({ flexDirection: "column" }, flexProps, { ref: ref }),
    React.createElement(Sans, { color: "black100", size: "4", weight: "medium" }, "Available from Seasons"),
    React.createElement(Spacer, { mb: 2 }),
    React.createElement(Button, { variant: "primaryBlack", block: true, onPress: onBuyUsed, onClick: onBuyUsed, loading: buyButtonMutating, disabled: buyButtonMutating || !availableForSale }, availableForSale ? `Buy used for ${price}` : "Sold Out"),
    React.createElement(Spacer, { mb: 2 }),
    React.createElement(Sans, { size: "3", opacity: 0.5, color: "black100" }, "Orders fulfilled by Seasons. Payment & shipping information on file will be used for one-tap checkout."))));
export const ProductBuyCTA = React.forwardRef(({ selectedVariant, onBuyUsed, onBuyNew, product, buyButtonMutating, onNavigateToBrand, ...flexProps }, ref) => {
    if (selectedVariant?.price?.buyUsedEnabled &&
        selectedVariant?.price?.buyUsedPrice) {
        const priceInDollars = selectedVariant?.price?.buyUsedPrice / 100;
        const price = priceInDollars?.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
        return (React.createElement(ProductBuyUsed, { ref: ref, flexProps: flexProps, price: price, onBuyUsed: onBuyUsed, availableForSale: selectedVariant?.price?.buyUsedAvailableForSale, buyButtonMutating: buyButtonMutating }));
    }
    else if (selectedVariant?.price?.buyNewEnabled &&
        selectedVariant?.price?.buyNewPrice) {
        const priceInDollars = selectedVariant?.price?.buyNewPrice / 100;
        const price = priceInDollars?.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
        const availableForSale = selectedVariant?.price?.buyNewAvailableForSale;
        const brandName = product?.brand?.name;
        const handleNavigateToPartner = () => {
            const href = product?.brand?.websiteUrl;
            if (href) {
                onNavigateToBrand(href);
            }
        };
        return (React.createElement(ProductBuyNew, { ref: ref, buyButtonMutating: buyButtonMutating, price: price, brandName: brandName, availableForSale: availableForSale, onBuyNew: onBuyNew, onNavigateToPartner: handleNavigateToPartner, flexProps: flexProps }));
    }
    return null;
});
