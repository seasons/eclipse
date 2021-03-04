import { Box, Col, Display, Flex, Grid, Row, Sans, Spacer } from "@/elements";
import { Link, ProductGridItem } from "@/components";
import React from "react";
export const ProductsRail = ({ items, title, tag, collectionSlug, }) => {
    let href = "/browse";
    let as;
    if (tag) {
        href = "collection/[Tag]";
        as = `collection/${tag}`;
    }
    else if (collectionSlug) {
        href = "collection/[Collection]";
        as = `collection/${collectionSlug}`;
    }
    return (React.createElement(Grid, null,
        React.createElement(Box, { px: [2, 2, 2, 5, 5] },
            React.createElement(Flex, { flexDirection: "row", justifyContent: title ? "space-between" : "flex-end" },
                title && React.createElement(Display, { size: "7" }, title),
                as ? (React.createElement(Link, { href: href, as: as },
                    React.createElement(Sans, { size: ["5", "6"], color: "black50", style: { minWidth: "58px" } }, "See all"))) : (React.createElement(Link, { href: href },
                    React.createElement(Sans, { size: ["5", "6"], color: "black50", style: { minWidth: "58px" } }, "See all"))))),
        React.createElement(Spacer, { mb: 2 }),
        React.createElement(Box, { px: [0, 0, 0, 5, 5] },
            React.createElement(Row, null, items?.map((product, index) => {
                return (React.createElement(Col, { md: "3", xs: "6", sm: "6", key: index },
                    React.createElement(ProductGridItem, { product: product })));
            })))));
};
