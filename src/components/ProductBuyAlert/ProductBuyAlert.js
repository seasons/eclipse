import React from "react";
import { Flex, Spacer, Sans } from "@/elements";
import { TabBar, Button } from "@/components";
import { OrderType } from "@/generated/globalTypes";
import { UnderlinedSans, Root } from "./StyledProductBuyAlert";
const TAB_LABELS = ["New", "Used"];
export var TabType;
(function (TabType) {
    TabType["NEW"] = "NEW";
    TabType["NEW_UNAVAILABLE"] = "NEW_UNAVAILABLE";
    TabType["USED"] = "USED";
    TabType["USED_UNAVAILABLE"] = "USED_UNAVAILABLE";
})(TabType || (TabType = {}));
export const ProductBuyAlert = ({ onDismiss, onNavigateToBrand, onCreateDraftOrder, onNotifyMe, tabs, initialTab = 0, style, className, }) => {
    const [activeTabIdx, setActiveTabIdx] = React.useState(initialTab);
    const [isMutating, setIsMutating] = React.useState(false);
    const styledProps = { style, className };
    const handleCreateDraftOrder = async (orderType) => {
        setIsMutating(true);
        try {
            onCreateDraftOrder(orderType);
        }
        finally {
            setIsMutating(false);
        }
    };
    const handleNotifyMe = async () => {
        setIsMutating(true);
        try {
            onNotifyMe();
        }
        finally {
            setIsMutating(false);
        }
    };
    const renderTab = (tab) => {
        switch (tab.type) {
            case TabType.NEW:
                return (React.createElement(Flex, { flexDirection: "column", alignItems: "center", px: "3", py: "4", key: TabType.NEW },
                    React.createElement(Button, { variant: "primaryBlack", block: true, onPress: () => handleCreateDraftOrder(OrderType.New), onClick: () => handleCreateDraftOrder(OrderType.New), loading: isMutating },
                        "Buy new for",
                        " ",
                        (tab.price / 100).toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        })),
                    React.createElement(Spacer, { mb: 3 }),
                    React.createElement(Sans, { size: "3", opacity: 0.5, color: "black100", textAlign: "center" },
                        "Orders fulfilled by",
                        " ",
                        React.createElement(UnderlinedSans, { size: "3", onPress: () => onNavigateToBrand(tab.brandHref), onClick: () => onNavigateToBrand(tab.brandHref) }, tab.brandName),
                        ". Payment & shipping information on file will be used for checkout."),
                    React.createElement(Spacer, { mb: 4 }),
                    React.createElement(UnderlinedSans, { size: "4", onPress: onDismiss }, "Cancel")));
            case TabType.NEW_UNAVAILABLE:
                return (React.createElement(Flex, { flexDirection: "column", px: "3", py: "4", alignItems: "center", key: TabType.NEW_UNAVAILABLE },
                    React.createElement(Button, { variant: "secondaryOutline", block: true, disabled: true }, "Sold Out"),
                    React.createElement(Spacer, { mb: 3 }),
                    React.createElement(Sans, { size: "3", opacity: 0.5, color: "black100", textAlign: "center" },
                        "Orders fulfilled by",
                        " ",
                        React.createElement(UnderlinedSans, { size: "3", onPress: () => onNavigateToBrand(tab.brandHref), onClick: () => onNavigateToBrand(tab.brandHref) }, tab.brandName),
                        ". Payment & shipping information on file will be used for checkout."),
                    React.createElement(Spacer, { mb: 4 }),
                    React.createElement(UnderlinedSans, { size: "4", onPress: onDismiss }, "Cancel")));
            case TabType.USED:
                return (React.createElement(Flex, { flexDirection: "column", px: "3", py: "4", alignItems: "center", key: TabType.USED },
                    React.createElement(Button, { variant: "primaryWhite", block: true, onPress: () => handleCreateDraftOrder(OrderType.Used), onClick: () => handleCreateDraftOrder(OrderType.Used), disabled: isMutating, loading: isMutating },
                        "Buy used for",
                        " ",
                        (tab.price / 100).toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        })),
                    React.createElement(Spacer, { mb: 3 }),
                    React.createElement(Sans, { size: "3", opacity: 0.5, color: "black100", textAlign: "center" }, "Orders fulfilled by Seasons. Payment & shipping information on file will be used for checkout."),
                    React.createElement(Spacer, { mb: 4 }),
                    React.createElement(UnderlinedSans, { size: "4", onPress: onDismiss, onClick: onDismiss }, "Cancel")));
            case TabType.USED_UNAVAILABLE:
                return (React.createElement(Flex, { flexDirection: "column", px: "3", py: "4", alignItems: "center", key: TabType.USED_UNAVAILABLE },
                    React.createElement(Button, { variant: "secondaryOutline", block: true, disabled: isMutating, loading: isMutating, onPress: handleNotifyMe, onClick: handleNotifyMe }, "Notify Me"),
                    React.createElement(Spacer, { mb: 3 }),
                    React.createElement(Sans, { size: "3", opacity: 0.5, color: "black100", textAlign: "center" }, "This used item isn't available for purchase. Tap Notify Me to get updated when it becomes available."),
                    React.createElement(Spacer, { mb: 4 }),
                    React.createElement(UnderlinedSans, { size: "4", onPress: onDismiss, onClick: onDismiss }, "Cancel")));
        }
    };
    return (React.createElement(Root, Object.assign({ flexDirection: "column" }, styledProps),
        React.createElement(Spacer, { mb: 2 }),
        React.createElement(TabBar, { spaceEvenly: true, tabs: TAB_LABELS, activeTab: activeTabIdx, goToPage: (index) => {
                setActiveTabIdx(index);
            } }),
        renderTab(tabs[activeTabIdx])));
};
