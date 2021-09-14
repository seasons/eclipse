import React, { useEffect } from "react"
import { useQuery, useMutation } from "@apollo/client"
import { useNotificationBarContext } from "./NotificationBarContext"
import {
  GET_NOTIFICATION_BAR,
  UPDATE_NOTIFICATION_BAR_RECEIPT,
} from "@/queries/notifBarQueries"
import { GetNotificationBar_me_notificationBar } from "@/generated/GetNotificationBar"
import { color } from "@/helpers"
import { NotificationBarContent } from "./NotificationBarContent"

export interface NotificationBarProps {
  onHandleRoute?: (route: any) => void
  isLoggedIn?: boolean
}

interface NotificationBarTemplateProps extends NotificationBarProps {
  containerComponent: React.FC<{ color: string }>
  outerContainerComponent: React.FC
  type: "web" | "native"
  hideIf?: (webRoute: { drawerView?: string; url?: string }) => boolean
  data: GetNotificationBar_me_notificationBar | null
}

type GraphQLNotificationBarProps = Omit<
  NotificationBarTemplateProps,
  "data" | "onUpdateNotificationBarReceipt"
> & {
  isLoggedIn?: boolean
}

export const GraphQLNotificationBarTemplate: React.FC<GraphQLNotificationBarProps> = ({
  isLoggedIn,
  ...notificationBarTemplateProps
}) => {
  const mapData = (d) => d?.me?.notificationBar
  const { previousData, data = previousData, refetch } = useQuery(
    GET_NOTIFICATION_BAR
  )

  useEffect(() => {
    refetch()
  }, [isLoggedIn, refetch])

  return (
    <NotificationBarTemplate
      {...notificationBarTemplateProps}
      data={mapData(data)}
    />
  )
}

export const NotificationBarTemplate: React.FC<NotificationBarTemplateProps> = ({
  containerComponent: Container,
  outerContainerComponent: OuterContainer,
  type,
  hideIf,
  data,
  onHandleRoute,
}) => {
  const {
    addNotificationBarData,
    showNotificationBar,
    hideNotificationBar,
    notificationBarState: { show, data: contextData, dismissed },
  } = useNotificationBarContext()

  const [updateNotificationBarReceipt] = useMutation(
    UPDATE_NOTIFICATION_BAR_RECEIPT,
    {
      refetchQueries: [
        {
          query: GET_NOTIFICATION_BAR,
        },
      ],
    }
  )

  const onUpdateNotificationBarReceipt = (variables) =>
    updateNotificationBarReceipt({ variables }).then(() => Promise.resolve())

  const isWebNotification = type === "web"
  const shouldHide = hideIf(contextData?.webRoute)

  useEffect(() => {
    if (shouldHide && contextData && show) {
      // In some instances we want to hide the notification bar from some views
      hideNotificationBar(false)
    } else if (!dismissed && !show && contextData && !shouldHide) {
      // In the event the user didn't dismiss and we still have contextData show it again
      showNotificationBar()
    }
  }, [
    shouldHide,
    showNotificationBar,
    hideNotificationBar,
    dismissed,
    show,
    contextData,
  ])

  useEffect(() => {
    if (!!data && contextData?.notificationBarId !== data?.id) {
      const defaultPalette = data?.palette?.default

      addNotificationBarData({
        title: isWebNotification ? data?.web?.title : data?.mobile?.title,
        subtitle: isWebNotification ? data?.web?.detail : data?.mobile?.detail,
        underlinedCTAText: data?.underlinedCTAText,
        initialClickCount: data?.clickCount,
        notificationBarId: data?.id,
        icon: data?.icon,
        webRoute: data?.web?.route,
        nativeRoute: data?.mobile?.route,
        titleFontColor: defaultPalette?.titleFontColor ?? color("white100"),
        subtitleFontColor: defaultPalette?.detailFontColor ?? color("black50"),
        bannerBackgroundColor:
          defaultPalette?.backgroundColor ?? color("black100"),
        iconColor: defaultPalette?.iconStrokeColor ?? color("black50"),
        isWebNotification,
      })
    }
  }, [
    data,
    addNotificationBarData,
    showNotificationBar,
    contextData,
    isWebNotification,
  ])

  if (!show) {
    return null
  }

  return (
    <OuterContainer>
      <NotificationBarContent
        onHandleRoute={onHandleRoute}
        Container={Container}
        onUpdateNotificationBarReceipt={onUpdateNotificationBarReceipt}
      />
    </OuterContainer>
  )
}
