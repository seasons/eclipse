import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { Container, FixedBackArrow, Loader, HeroImageCarousel, CollectionBottomSheet, } from "@/components";
import { useNavigation } from "@react-navigation/native";
export const CollectionUI = ({ data, fetchMore, showPopUp, hidePopUp, authState, setProductCount, loading, }) => {
    const [currentImage, setCurrentImage] = useState(1);
    const navigation = useNavigation();
    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            StatusBar.setBarStyle("light-content");
        });
        return unsubscribe;
    }, [navigation]);
    const onBackPressed = () => {
        navigation?.goBack();
    };
    if (!data) {
        return (React.createElement(React.Fragment, null,
            React.createElement(FixedBackArrow, { onPress: onBackPressed, variant: "whiteBackground" }),
            React.createElement(Loader, null)));
    }
    const collection = data?.collection;
    const images = collection?.images;
    const products = collection?.products?.edges;
    const description = collection?.descriptions?.[0];
    const title = collection?.title;
    const onEndReached = () => {
        if (!loading &&
            products?.length < data?.collection?.productsAggregate?.aggregate?.count) {
            fetchMore({
                variables: {
                    skip: products.length,
                },
            }).then((fetchMoreResult) => {
                setProductCount(products.length +
                    fetchMoreResult?.data?.collection?.products?.edges?.length);
            });
        }
    };
    return (React.createElement(Container, { insetsBottom: false, insetsTop: false },
        React.createElement(FixedBackArrow, { onPress: onBackPressed, variant: "whiteTransparent" }),
        React.createElement(HeroImageCarousel, { images: images, currentImage: currentImage, setCurrentImage: setCurrentImage }),
        React.createElement(CollectionBottomSheet, { loading: loading, products: products, title: title, images: images, description: description, currentImage: currentImage, showPopUp: showPopUp, hidePopUp: hidePopUp, authState: authState, onEndReached: onEndReached })));
};
