import React from "react"
import { Flex, Spacer, Sans } from "@/elements"
import { TabBar, Button } from "@/components"
import { OrderType } from "@/generated/globalTypes"
import { UnderlinedSans, Root } from "./StyledProductBuyAlert"

const TAB_LABELS = ["New", "Used"]
export enum TabType {
  NEW = "NEW",
  NEW_UNAVAILABLE = "NEW_UNAVAILABLE",
  USED = "USED",
  USED_UNAVAILABLE = "USED_UNAVAILABLE",
}

export type Tab =
  | { type: TabType.NEW; price: number; brandHref: string; brandName: string }
  | { type: TabType.NEW_UNAVAILABLE; brandHref: string; brandName: string }
  | { type: TabType.USED; price: number; brandHref: string; brandName: string }
  | { type: TabType.USED_UNAVAILABLE }

type Props = {
  onDismiss: () => void
  onNavigateToBrand: (href: string) => void
  onCreateDraftOrder: (orderType: OrderType) => Promise<void>
  onNotifyMe: () => Promise<void>
  tabs: Tab[]
  initialTab: number
  style?: any
  className?: any
}

export const ProductBuyAlert: React.FC<Props> = ({
  onDismiss,
  onNavigateToBrand,
  onCreateDraftOrder,
  onNotifyMe,
  tabs,
  initialTab = 0,
  style,
  className,
}) => {
  const [activeTabIdx, setActiveTabIdx] = React.useState<number>(initialTab)
  const [isMutating, setIsMutating] = React.useState(false)
  const styledProps = { style, className }

  const handleCreateDraftOrder = async (orderType: OrderType) => {
    setIsMutating(true)
    try {
      onCreateDraftOrder(orderType)
    } finally {
      setIsMutating(false)
    }
  }

  const handleNotifyMe = async () => {
    setIsMutating(true)
    try {
      onNotifyMe()
    } finally {
      setIsMutating(false)
    }
  }

  const renderTab = (tab: Tab) => {
    switch (tab.type) {
      case TabType.NEW:
        return (
          <Flex
            flexDirection="column"
            alignItems="center"
            px="3"
            py="4"
            key={TabType.NEW}
          >
            <Button
              variant="primaryBlack"
              block
              onPress={() => handleCreateDraftOrder(OrderType.New)}
              onClick={() => handleCreateDraftOrder(OrderType.New)}
              loading={isMutating}
            >
              Buy new for{" "}
              {(tab.price / 100).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </Button>
            <Spacer mb={3} />
            <Sans size="3" opacity={0.5} color="black100" textAlign="center">
              Orders fulfilled by{" "}
              <UnderlinedSans
                size="3"
                onPress={() => onNavigateToBrand(tab.brandHref)}
                onClick={() => onNavigateToBrand(tab.brandHref)}
              >
                {tab.brandName}
              </UnderlinedSans>
              . Payment & shipping information on file will be used for
              checkout.
            </Sans>
            <Spacer mb={4} />
            <UnderlinedSans size="4" onPress={onDismiss}>
              Cancel
            </UnderlinedSans>
          </Flex>
        )
      case TabType.NEW_UNAVAILABLE:
        return (
          <Flex
            flexDirection="column"
            px="3"
            py="4"
            alignItems="center"
            key={TabType.NEW_UNAVAILABLE}
          >
            <Button variant="secondaryOutline" block disabled>
              Sold Out
            </Button>
            <Spacer mb={3} />
            <Sans size="3" opacity={0.5} color="black100" textAlign="center">
              Orders fulfilled by{" "}
              <UnderlinedSans
                size="3"
                onPress={() => onNavigateToBrand(tab.brandHref)}
                onClick={() => onNavigateToBrand(tab.brandHref)}
              >
                {tab.brandName}
              </UnderlinedSans>
              . Payment & shipping information on file will be used for
              checkout.
            </Sans>
            <Spacer mb={4} />
            <UnderlinedSans size="4" onPress={onDismiss}>
              Cancel
            </UnderlinedSans>
          </Flex>
        )
      case TabType.USED:
        return (
          <Flex
            flexDirection="column"
            px="3"
            py="4"
            alignItems="center"
            key={TabType.USED}
          >
            <Button
              variant="primaryWhite"
              block
              onPress={() => handleCreateDraftOrder(OrderType.Used)}
              onClick={() => handleCreateDraftOrder(OrderType.Used)}
              disabled={isMutating}
              loading={isMutating}
            >
              Buy used for{" "}
              {(tab.price / 100).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </Button>
            <Spacer mb={3} />
            <Sans size="3" opacity={0.5} color="black100" textAlign="center">
              Orders fulfilled by Seasons. Payment & shipping information on
              file will be used for checkout.
            </Sans>
            <Spacer mb={4} />
            <UnderlinedSans size="4" onPress={onDismiss} onClick={onDismiss}>
              Cancel
            </UnderlinedSans>
          </Flex>
        )
      case TabType.USED_UNAVAILABLE:
        return (
          <Flex
            flexDirection="column"
            px="3"
            py="4"
            alignItems="center"
            key={TabType.USED_UNAVAILABLE}
          >
            <Button
              variant="secondaryOutline"
              block
              disabled={isMutating}
              loading={isMutating}
              onPress={handleNotifyMe}
              onClick={handleNotifyMe}
            >
              Notify Me
            </Button>
            <Spacer mb={3} />
            <Sans size="3" opacity={0.5} color="black100" textAlign="center">
              This used item isn't available for purchase. Tap Notify Me to get
              updated when it becomes available.
            </Sans>
            <Spacer mb={4} />
            <UnderlinedSans size="4" onPress={onDismiss} onClick={onDismiss}>
              Cancel
            </UnderlinedSans>
          </Flex>
        )
    }
  }

  return (
    <Root flexDirection="column" {...styledProps}>
      <Spacer mb={2} />
      <TabBar
        spaceEvenly
        tabs={TAB_LABELS}
        activeTab={activeTabIdx}
        goToPage={(index) => {
          setActiveTabIdx(index)
        }}
      />
      {renderTab(tabs[activeTabIdx])}
    </Root>
  )
}
