import { ImageCarousel, Media, ProductGridItem, ReadMore, Spinner, } from "@/components";
import Head from "next/head";
import { Box, Col, Flex, Grid, Row, Sans, Spacer } from "@/elements";
import { debounce } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { space } from "@/helpers";
export const CollectionUI = ({ data, fetchMore, loading, setProductCount, }) => {
    const [readMoreExpanded, setReadMoreExpanded] = useState(false);
    const collection = data?.collection;
    let title = collection?.title;
    let description = collection?.descriptions?.[0];
    const products = collection?.products?.edges;
    const aggregateCount = collection?.productsAggregate?.aggregate?.count;
    const images = collection?.images;
    const imageContainer = useRef(null);
    const onScroll = debounce(() => {
        const shouldLoadMore = !loading &&
            !!aggregateCount &&
            aggregateCount > products?.length &&
            window.innerHeight >=
                imageContainer?.current?.getBoundingClientRect().bottom - 200;
        if (shouldLoadMore) {
            fetchMore({
                variables: {
                    skip: products?.length,
                },
            }).then((fetchMoreResult) => {
                setProductCount(products.length +
                    fetchMoreResult?.data?.collection?.products?.edges?.length);
            });
        }
    }, 100);
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", onScroll);
        }
        return () => window.removeEventListener("scroll", onScroll);
    }, [onScroll]);
    const BreadCrumb = () => {
        return (React.createElement(React.Fragment, null,
            React.createElement(Sans, { size: "3", style: { display: "inline" } }, "Collection"),
            React.createElement(Sans, { size: "3", style: { display: "inline" } },
                " ",
                "/",
                " "),
            React.createElement(Sans, { size: "3", style: { display: "inline" } }, title)));
    };
    const TextContent = () => (React.createElement(Box, null,
        React.createElement(Sans, { size: "9", style: { textDecoration: "underline" } }, title),
        !!description && (React.createElement(React.Fragment, null,
            React.createElement(Spacer, { mb: 3 }),
            React.createElement(Sans, { size: "4" }, "About"),
            React.createElement(ReadMore, { readMoreExpanded: readMoreExpanded, setReadMoreExpanded: setReadMoreExpanded, content: description, maxChars: 400 }))),
        React.createElement(Spacer, { mb: 6 })));
    return (React.createElement(React.Fragment, null,
        React.createElement(Head, null,
            React.createElement("title", null, title ? `${title} Collection - Seasons` : "Seasons"),
            React.createElement("meta", { content: description, name: "description" }),
            React.createElement("meta", { property: "og:title", content: title }),
            React.createElement("meta", { property: "og:description", content: description }),
            React.createElement("meta", { property: "twitter:description", content: description }),
            React.createElement("meta", { property: "og:type", content: "website" }),
            React.createElement("meta", { property: "og:site_name", content: "Seasons" }),
            React.createElement("meta", { property: "og:url", content: `https://www.seasons.nyc/collection/${collection?.slug}` }),
            React.createElement("meta", { property: "og:image", content: "https://flare-public-assets.s3.amazonaws.com/logo.png" }),
            React.createElement("meta", { property: "twitter:card", content: "summary" })),
        React.createElement(Box, { pt: [1, 5] },
            React.createElement(Grid, { px: [2, 2, 2, 5, 5] },
                React.createElement(Row, null,
                    React.createElement(Col, { md: "6", sm: "12" },
                        React.createElement(MediaWithHeight, { greaterThanOrEqual: "md" },
                            React.createElement(Box, null,
                                React.createElement(BreadCrumb, null)),
                            React.createElement(Flex, { flexDirection: "column", justifyContent: "center", height: "100%" },
                                React.createElement(TextContent, null))),
                        React.createElement(Media, { lessThan: "md" },
                            React.createElement(Box, null,
                                React.createElement(BreadCrumb, null),
                                React.createElement(Spacer, { mb: 2 }),
                                images?.length > 0 && (React.createElement(ImageCarousel, { images: images, pagerHorizontal: true }))))),
                    React.createElement(Col, { md: "6", sm: "12" },
                        React.createElement(Box, { pl: [0, 0, "136px", "136px", "136px"], pt: [6, 6, 0, 0, 0] },
                            React.createElement(Media, { greaterThanOrEqual: "md" }, images?.length > 0 && (React.createElement(ImageCarousel, { images: images, pagerHorizontal: true }))),
                            React.createElement(Media, { lessThan: "md" },
                                React.createElement(TextContent, null)))))),
            React.createElement(Grid, { px: [0, space(2) - 2, space(2) - 2, space(5) - 2, space(5) - 2] },
                React.createElement(Row, { ref: imageContainer },
                    products?.map((product, i) => (React.createElement(Col, { col: true, sm: "3", xs: "6", key: i },
                        React.createElement(Box, { pt: [2, 2, 5, 5, 5], pb: [2, 5] },
                            React.createElement(ProductGridItem, { product: product?.node, loading: !data, showName: true }))))),
                    loading && (React.createElement(Box, { mb: 5, style: {
                            width: "100%",
                            position: "relative",
                            height: "30px",
                        } },
                        React.createElement(Spinner, null))))))));
};
const MediaWithHeight = styled(Media) `
  height: 100%;
`;
