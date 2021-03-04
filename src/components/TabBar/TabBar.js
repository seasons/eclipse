import { color } from "@/helpers";
import React from "react";
import { View } from "react-native";
import { Sans } from "@/elements";
import { Button, Tabs, TabButton, Wrapper } from "./StyledTabBar";
export const Tab = ({ children }) => (React.createElement(View, { style: { flex: 1, overflow: "hidden" } }, children));
export class TabBar extends React.Component {
    renderTab(name, page, isTabActive, isTabDisabled, onPressHandler, tabColorProps, withStrikeThrough) {
        let tabTextColor;
        if (isTabDisabled) {
            tabTextColor = color("black25");
        }
        else if (isTabActive) {
            tabTextColor = color("black100");
        }
        else {
            tabTextColor = color("black50");
        }
        return (React.createElement(Button, { key: name, accessible: true, accessibilityLabel: name, 
            // accessibilityTraits="button"
            onPress: () => (isTabDisabled ? null : onPressHandler(page)) },
            React.createElement(TabButton, { spaceEvenly: this.props.spaceEvenly, active: isTabActive, tabColor: tabColorProps },
                React.createElement(Sans, { numberOfLines: 1, weight: "medium", size: "5", color: tabTextColor, style: withStrikeThrough
                        ? {
                            textDecorationLine: "line-through",
                            textDecorationStyle: "solid",
                        }
                        : {} }, name))));
    }
    render() {
        return (React.createElement(Wrapper, null,
            React.createElement(Tabs, null, this.props.tabs.map((name, index) => {
                const isTabActive = this.props.activeTab === index;
                const isTabDisabled = this.props.disabledTabs?.includes(name);
                const withStrikeThrough = this.props.strikethroughTabs?.includes(name);
                return this.renderTab(name, index, isTabActive, isTabDisabled, this.props.goToPage, this.props.tabColor, withStrikeThrough);
            }))));
    }
}
