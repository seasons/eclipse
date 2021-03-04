import { TrackSchema, useTracking, color, space } from "@/helpers";
import { Container, FixedButton, Separator, Loader, SectionHeader, LineItem, OrderItem, } from "@/components";
import { Box, Flex, Sans, Spacer } from "@/elements";
import React from "react";
import { ScrollView } from "./StyledOrderConfirmation";
import { CheckCircled } from "@/icons/CheckCircled";
export const OrderConfirmation = ({ windowWidth, order, customer, onDonePressed, onOrderItemPressed, }) => {
    const tracking = useTracking();
    const address = customer?.detail?.shippingAddress;
    const productVariantItems = order?.lineItems?.filter((i) => !!i.productVariant);
    const needsShipping = order?.lineItems?.some((item) => item.needShipping);
    const handleDonePressed = () => {
        tracking.trackEvent({
            actionName: TrackSchema.ActionNames.CloseOrderConfirmationTapped,
            actionType: TrackSchema.ActionTypes.Tap,
        });
        onDonePressed();
    };
    if (!order) {
        return (React.createElement(React.Fragment, null,
            React.createElement(Loader, null)));
    }
    return (React.createElement(Container, { insetsTop: true, insetsBottom: false, backgroundColor: "white100" },
        React.createElement(Flex, { style: { flex: 1 }, px: 2 },
            React.createElement(ScrollView, { style: { flex: 1 }, showsVerticalScrollIndicator: false },
                React.createElement(Spacer, { mb: 80 }),
                React.createElement(CheckCircled, { backgroundColor: color("green100") }),
                React.createElement(Spacer, { mb: 4 }),
                React.createElement(Box, { pb: 1 },
                    React.createElement(Sans, { size: "7", color: "black100" }, needsShipping ? "We've got your order" : "It's all yours")),
                React.createElement(Box, { mb: 4 },
                    React.createElement(Sans, { size: "4", color: "black50" }, needsShipping
                        ? "We've emailed you a confirmation and we'll notify you when it's out for delivery."
                        : "All you have to do is hold onto it and we'll reset your slot when we receive your return.")),
                !!order && (React.createElement(Box, { mb: 1 },
                    React.createElement(LineItem, { windowWidth: windowWidth, leftText: "Order number:", rightText: order?.orderNumber, color: "black100" }),
                    React.createElement(Spacer, { mb: 1 }),
                    React.createElement(Separator, null))),
                !!address && needsShipping && (React.createElement(Box, { mb: 1 },
                    React.createElement(Flex, { flexDirection: "row", width: "100%", justifyContent: "space-between" },
                        React.createElement(Flex, { flexDirection: "row", pr: 2 },
                            React.createElement(Sans, { size: "4", color: "black100" }, "Shipping")),
                        React.createElement(Flex, { style: { maxWidth: windowWidth - 120 } },
                            React.createElement(Sans, { size: "4", color: "black100", style: { textAlign: "right" } }, `${address.address1}${address.address2 ? " " + address.address2 : ""},`),
                            React.createElement(Sans, { size: "4", color: "black100", style: { textAlign: "right" } }, `${address.city}, ${address.state} ${address.zipCode}`))))),
                needsShipping && (React.createElement(Box, { mb: 2 },
                    React.createElement(Spacer, { mb: 1 }),
                    React.createElement(Separator, null),
                    React.createElement(Spacer, { mb: 1 }),
                    React.createElement(Flex, { flexDirection: "row", width: "100%", justifyContent: "space-between" },
                        React.createElement(Flex, { flexDirection: "row", pr: 2 },
                            React.createElement(Sans, { size: "4", color: "black100" }, "Delivery")),
                        React.createElement(Flex, null,
                            React.createElement(Sans, { size: "4", color: "black100", style: { textAlign: "right" } }, "5-day shipping"),
                            React.createElement(Sans, { size: "4", color: "black100", style: { textAlign: "right" } }, "UPS Ground"))))),
                React.createElement(Box, { mb: 5, pt: 2 },
                    React.createElement(SectionHeader, { title: productVariantItems?.length === 1 ? "Item" : "Items" }),
                    React.createElement(Box, { mt: 1, mb: 4 }, productVariantItems?.map((item, i) => {
                        return (React.createElement(Box, { key: item.productVariant?.id },
                            React.createElement(OrderItem, { productVariant: item.productVariant, onPress: onOrderItemPressed }),
                            React.createElement(Spacer, { mb: 1 }),
                            i !== productVariantItems.length - 1 && React.createElement(Separator, null),
                            React.createElement(Spacer, { mb: 1 })));
                    }))))),
        React.createElement(FixedButton, { positionBottom: space(2), onPress: handleDonePressed, block: true }, "Done")));
};
