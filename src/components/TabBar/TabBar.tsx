import { color } from "@/helpers"
import React from "react"
import { Animated, View } from "react-native"
import { Sans } from "@/elements"
import { Button, Tabs, TabButton, Wrapper } from "./StyledTabBar"

/**
 * Nearly all props are given by the ScrollableTabView,
 * these are prefixed with Auto:
 */
interface TabBarProps {
  tabColor?: string
  /** Auto: A list of strings for the buttons */
  tabs: string[]
  disabledTabs?: string[]
  /** Auto:  A callback for usage in the tab buttons */
  goToPage?: (page: number) => null | void
  /** Auto: The index of the currently active tab */
  activeTab?: number
  /** Auto: How much horiztonal space do you have */
  containerWidth?: number
  /** Auto: Handled by ScrollableTabView */
  scrollValue?: Animated.AnimatedInterpolation
  /** Should space tabs evenly */
  spaceEvenly?: boolean
  /** Tabs to render with strikethrough */
  strikethroughTabs?: string[]
}

interface TabProps {
  tabLabel: string
}

export const Tab: React.FC<TabProps> = ({ children }) => (
  <View style={{ flex: 1, overflow: "hidden" }}>{children}</View>
)

export class TabBar extends React.Component<TabBarProps, null> {
  renderTab(
    name,
    page,
    isTabActive,
    isTabDisabled,
    onPressHandler,
    tabColorProps,
    withStrikeThrough
  ) {
    let tabTextColor
    if (isTabDisabled) {
      tabTextColor = color("black25")
    } else if (isTabActive) {
      tabTextColor = color("black100")
    } else {
      tabTextColor = color("black50")
    }
    return (
      <Button
        key={name}
        accessible={true}
        accessibilityLabel={name}
        // accessibilityTraits="button"
        onPress={() => (isTabDisabled ? null : onPressHandler(page))}
      >
        <TabButton
          spaceEvenly={this.props.spaceEvenly}
          active={isTabActive}
          tabColor={tabColorProps}
        >
          <Sans
            numberOfLines={1}
            weight="medium"
            size="5"
            color={tabTextColor}
            style={
              withStrikeThrough
                ? {
                    textDecorationLine: "line-through",
                    textDecorationStyle: "solid",
                  }
                : {}
            }
          >
            {name}
          </Sans>
        </TabButton>
      </Button>
    )
  }

  render() {
    return (
      <Wrapper>
        <Tabs>
          {this.props.tabs.map((name, index) => {
            const isTabActive = this.props.activeTab === index
            const isTabDisabled = this.props.disabledTabs?.includes(name)
            const withStrikeThrough = this.props.strikethroughTabs?.includes(
              name
            )
            return this.renderTab(
              name,
              index,
              isTabActive,
              isTabDisabled,
              this.props.goToPage,
              this.props.tabColor,
              withStrikeThrough
            )
          })}
        </Tabs>
      </Wrapper>
    )
  }
}
