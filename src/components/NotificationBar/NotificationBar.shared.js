import React, { useEffect, useState } from "react";
import { Box, Sans } from "@/elements";
import { ChevronIcon } from "@/icons/ChevronIcon";
import { CloseXIcon } from "@/icons/CloseXIcon";
import { useQuery, useMutation } from "@apollo/client";
import { Pressable } from "@/components/ReactNative";
import { GET_NOTIFICATION_BAR, UPDATE_NOTIFICATION_BAR_RECEIPT, } from "@/queries/notifBarQueries";
export const NotificationBarTemplate = ({ containerComponent: Container, onClick, type, isLoggedIn, }) => {
    const supportedIcons = ["Chevron", "CloseX"];
    const { data, refetch } = useQuery(GET_NOTIFICATION_BAR);
    const [updateNotificationBarReceipt] = useMutation(UPDATE_NOTIFICATION_BAR_RECEIPT, {
        refetchQueries: [
            {
                query: GET_NOTIFICATION_BAR,
            },
        ],
    });
    const [hasUpdatedViewCount, setHasUpdatedViewCount] = useState(false);
    const [hasbeenClosedNow, setHasBeenClosedNow] = useState(false);
    const hasData = data?.me?.notificationBar;
    useEffect(() => {
        console.log(`isLoggedIn changed to ${isLoggedIn}. Refetching`);
        refetch();
    }, [isLoggedIn]);
    if (!hasData) {
        return null;
    }
    const isWebNotification = type === "web";
    const isMobileNotification = type === "mobile";
    const { me: { notificationBar: { id: notificationBarId, icon, clickCount, viewCount, web: { title: webTitle, detail: webDetail, route: webRoute }, mobile: { title: mobileTitle, detail: mobileDetail, route: mobileRoute, }, palette: { default: { backgroundColor, titleFontColor, detailFontColor, iconStrokeColor, }, pressed: { backgroundColor: backgroundColorPressed, titleFontColor: titleFontColorPressed, detailFontColor: detailFontColorPressed, iconStrokeColor: iconStrokeColorPressed, }, }, }, }, } = data;
    const hasBeenClosedBefore = webRoute.dismissable && mobileRoute.dismissable && clickCount > 0;
    const onPressIn = () => {
        if (isMobileNotification) {
            if (mobileRoute.dismissable) {
                setHasBeenClosedNow(true);
            }
            else {
                onClick(mobileRoute);
            }
        }
        else if (isWebNotification) {
            if (webRoute.dismissable) {
                setHasBeenClosedNow(true);
            }
            else {
                onClick(webRoute);
            }
        }
        updateNotificationBarReceipt({
            variables: { notificationBarId, clickCount: clickCount + 1 },
        });
    };
    if (hasBeenClosedBefore || hasbeenClosedNow) {
        return null;
    }
    if (!hasUpdatedViewCount) {
        updateNotificationBarReceipt({
            variables: { notificationBarId, viewCount: viewCount + 1 },
        });
        setHasUpdatedViewCount(true);
    }
    return (React.createElement(Pressable, { onPressIn: onPressIn }, ({ pressed }) => {
        const bgColorWithState = pressed
            ? backgroundColorPressed
            : backgroundColor;
        const titleFontColorWithState = pressed
            ? titleFontColorPressed
            : titleFontColor;
        const detailFontColorWithState = pressed
            ? detailFontColorPressed
            : detailFontColor;
        const iconFontColorWithState = pressed
            ? iconStrokeColorPressed
            : iconStrokeColor;
        const renderChevron = icon === "Chevron" || !supportedIcons.includes(icon); // default icon
        const renderCloseX = icon === "CloseX";
        return (React.createElement(Container, { color: bgColorWithState },
            React.createElement(Box, { paddingRight: "20px" },
                React.createElement(Sans, { size: "3", color: titleFontColorWithState },
                    isWebNotification && webTitle,
                    isMobileNotification && mobileTitle),
                React.createElement(Sans, { size: "3", color: detailFontColorWithState },
                    isWebNotification && webDetail,
                    isMobileNotification && mobileDetail)),
            React.createElement(Box, null,
                renderChevron && (React.createElement(ChevronIcon, { color: iconFontColorWithState, fillColor: bgColorWithState })),
                renderCloseX && React.createElement(CloseXIcon, { color: iconFontColorWithState }))));
    }));
};
