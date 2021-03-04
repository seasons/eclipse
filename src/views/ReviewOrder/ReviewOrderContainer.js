import { useQuery } from "@apollo/client";
import { ReviewOrder } from "./ReviewOrder";
import { GetCustomerQuery } from "./queries";
import React from "react";
import { FixedBackArrow, Loader } from "@/components";
export const ReviewOrderContainer = ({ order, onBackPressed, onOrderItemPressed, onOrderSubmitted, windowWidth, }) => {
    const { data, loading } = useQuery(GetCustomerQuery);
    const [isSubmittingOrder, setIsSubmittingOrder] = React.useState(false);
    const customer = data?.me?.customer;
    const handleSubmitOrder = async () => {
        if (isSubmittingOrder) {
            return;
        }
        try {
            setIsSubmittingOrder(true);
            await onOrderSubmitted({ order, customer });
        }
        finally {
            setIsSubmittingOrder(false);
        }
    };
    if (loading) {
        return (React.createElement(React.Fragment, null,
            React.createElement(FixedBackArrow, { onPress: onBackPressed, variant: "whiteBackground" }),
            React.createElement(Loader, null)));
    }
    return (React.createElement(ReviewOrder, { isSubmittingOrder: isSubmittingOrder, onSubmitOrder: handleSubmitOrder, onBackPressed: onBackPressed, onOrderItemPressed: onOrderItemPressed, order: order, customer: customer, windowWidth: windowWidth }));
};
