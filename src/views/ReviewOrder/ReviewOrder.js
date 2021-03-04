import React from "react";
import { Box, Flex, Spacer, Sans } from "@/elements";
import { Container, FixedBackArrow, SectionHeader, LineItem, OrderItem, FixedButton, Separator, } from "@/components";
import { ScrollView } from "./StyledReviewOrder";
import { displayCurrency } from "@/helpers/currency";
import { space } from "@/helpers/space";
export const ReviewOrder = ({ onBackPressed, onOrderItemPressed, onSubmitOrder, order, windowWidth, customer, isSubmittingOrder, }) => {
    const phoneNumber = customer.detail?.phoneNumber;
    const address = customer.detail?.shippingAddress;
    const paymentMethod = customer.billingInfo?.last_digits;
    const paymentBrand = customer.billingInfo?.brand;
    const totalInDollars = order.total / 100;
    const totalSalesTaxDollars = order.salesTaxTotal / 100;
    const productVariantItems = order.lineItems?.filter((i) => !!i.productVariant);
    const needsShipping = order?.lineItems?.some((item) => item.needShipping);
    return (React.createElement(Container, { insetsTop: true, insetsBottom: false, backgroundColor: "white100" },
        React.createElement(FixedBackArrow, { onPress: onBackPressed, variant: "whiteBackground" }),
        React.createElement(Flex, { style: { flex: 1 }, px: 2 },
            React.createElement(ScrollView, { style: { flex: 1 }, showsVerticalScrollIndicator: false },
                React.createElement(Spacer, { mb: 80 }),
                React.createElement(Box, { pb: 1 },
                    React.createElement(Sans, { size: "7", color: "black100" }, "Confirm purchase")),
                React.createElement(Box, { mb: 4 },
                    React.createElement(Sans, { size: "4", color: "black50" }, "Purchased items will live in your bag until your reservation is returned & processed. We\u2019ll reset.")),
                !!order && (React.createElement(Box, { mb: 4 },
                    React.createElement(SectionHeader, { title: "Purchase summary" }),
                    order?.lineItems?.map((item, index) => {
                        const itemPriceInDollars = item?.price / 100;
                        const displayName = item.recordType === "Package"
                            ? "Shipping"
                            : item?.productVariant?.product?.name;
                        return (React.createElement(LineItem, { leftText: displayName, rightText: displayCurrency(itemPriceInDollars), key: item?.productVariant?.id ?? index, windowWidth: windowWidth }));
                    }),
                    React.createElement(Spacer, { mb: 2 }),
                    React.createElement(LineItem, { leftText: "Subtotal", windowWidth: windowWidth, rightText: displayCurrency(order.subTotal) }),
                    React.createElement(LineItem, { leftText: "Sales tax", windowWidth: windowWidth, rightText: displayCurrency(totalSalesTaxDollars) }),
                    React.createElement(LineItem, { leftText: "Total", windowWidth: windowWidth, rightText: displayCurrency(totalInDollars), color: "black100" }))),
                !!paymentMethod && (React.createElement(Box, { mb: 4 },
                    React.createElement(SectionHeader, { title: "Payment method" }),
                    React.createElement(Sans, { size: "4", color: "black50", mt: 1 }, `${paymentBrand} ending in ${paymentMethod}`))),
                !!address && needsShipping && (React.createElement(Box, { mb: 4 },
                    React.createElement(SectionHeader, { title: "Shipping address" }),
                    React.createElement(Sans, { size: "4", color: "black50", mt: 1 }, `${address.address1}${address.address2 ? " " + address.address2 : ""},`),
                    React.createElement(Sans, { size: "4", color: "black50" }, `${address.city}, ${address.state} ${address.zipCode}`))),
                !!phoneNumber && (React.createElement(Box, { mb: 4 },
                    React.createElement(SectionHeader, { title: "Phone number" }),
                    React.createElement(Sans, { size: "4", color: "black50", mt: 1 }, phoneNumber))),
                React.createElement(Box, { mb: 5 },
                    React.createElement(SectionHeader, { title: productVariantItems?.length === 1 ? "Item" : "Items" }),
                    React.createElement(Box, { mt: 1, mb: 4 }, productVariantItems?.map((item, i) => {
                        return (React.createElement(Box, { key: i },
                            React.createElement(OrderItem, { productVariant: item.productVariant, onPress: onOrderItemPressed }),
                            React.createElement(Spacer, { mb: 1 }),
                            i !== productVariantItems.length - 1 && React.createElement(Separator, null),
                            React.createElement(Spacer, { mb: 1 })));
                    }))))),
        React.createElement(FixedButton, { positionBottom: space(2), loading: isSubmittingOrder, disabled: isSubmittingOrder, onPress: () => onSubmitOrder(order.id), block: true }, "Place order")));
};
