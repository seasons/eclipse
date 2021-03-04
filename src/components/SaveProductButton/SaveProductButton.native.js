import React, { useEffect, useState } from "react";
import gql from "graphql-tag";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SaveIcon } from "@/icons/SaveIcon";
import { TrackSchema, useTracking } from "@/helpers/track";
import { Box } from "@/elements/Box";
import { useMutation } from "@apollo/client";
import { GET_PRODUCT } from "@/queries/productQueries";
import { GET_BAG } from "@/queries/bagQueries";
import { GET_HOMEPAGE_NATIVE } from "@/queries/homeQueries";
export const SAVE_ITEM = gql `
  mutation SaveItem($item: ID!, $save: Boolean!) {
    saveProduct(item: $item, save: $save) {
      id
      productVariant {
        id
        isSaved
      }
    }
  }
`;
export const SaveProductButton = ({ product, selectedVariant, onPressSaveButton, grayStroke, height, width, noModal, showPopUp, hidePopUp, authState, }) => {
    const navigation = useNavigation();
    const isSaved = selectedVariant?.isSaved
        ? selectedVariant?.isSaved
        : product?.variants?.filter((variant) => variant.isSaved).length > 0;
    const [enabled, setEnabled] = useState(isSaved);
    const tracking = useTracking();
    const [saveItem] = useMutation(SAVE_ITEM, {
        refetchQueries: [
            {
                query: GET_PRODUCT,
                variables: {
                    where: { id: product?.id },
                },
            },
            {
                query: GET_BAG,
            },
            {
                query: GET_HOMEPAGE_NATIVE,
                variables: { firstFitPics: 8, skipFitPics: 0 },
            },
        ],
    });
    const userHasSession = !!authState?.userSession;
    useEffect(() => {
        setEnabled(isSaved);
    }, [isSaved]);
    if (product?.variants?.length === 0) {
        return null;
    }
    const handleSaveButton = () => {
        onPressSaveButton();
        if (!userHasSession) {
            navigation.navigate("Modal", {
                screen: "SignInModal",
            });
            return;
        }
        const updatedState = !isSaved;
        // Open SaveProductModal if:
        // 1) User wants to save a specific variant inside ProductDetails screen OR
        // 2) User wants to save the product, i.e. clicked button outside of ProductDetails screen
        if ((updatedState || !selectedVariant) && !noModal) {
            // FIXME: Should we create a navigation schema in eclipse?
            navigation.navigate("Modal", {
                screen: "SaveProductModal",
                params: {
                    hidePopUp,
                    product,
                    showPopUp,
                },
            });
        }
        else {
            tracking.trackEvent({
                actionName: TrackSchema.ActionNames.ProductSaved,
                actionType: TrackSchema.ActionTypes.Tap,
                saved: !isSaved,
            });
            setEnabled(!isSaved);
            saveItem({
                variables: {
                    item: selectedVariant.id,
                    save: !isSaved,
                },
                awaitRefetchQueries: true,
                optimisticResponse: {
                    __typename: "Mutation",
                    saveProduct: {
                        __typename: "Product",
                        id: product.id,
                        productVariant: {
                            __typename: "ProductVariant",
                            isSaved: !isSaved,
                            id: selectedVariant.id,
                        },
                    },
                },
            });
        }
    };
    return (React.createElement(TouchableOpacity, { onPress: handleSaveButton },
        React.createElement(Box, { px: 2, pb: 2, pt: 0.5 },
            React.createElement(SaveIcon, { width: width, height: height, enabled: enabled, grayStroke: grayStroke }))));
};
