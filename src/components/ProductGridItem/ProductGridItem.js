import React from "react";
import styled from "styled-components";
import { Link } from "../Link";
import { get } from "lodash";
import { VariantSizes } from "../VariantSizes";
import ContentLoader from "react-content-loader";
import { ProgressiveImage } from "@/components";
import { Box, Sans, Spacer } from "@/elements";
import { TrackSchema, useTracking } from "@/helpers/track";
export const ProductGridItem = ({ product, loading, showName }) => {
    const image = get(product, "images[0]", { url: "" });
    const tracking = useTracking();
    let showBrand = true;
    const brandName = product?.brand?.name;
    const brandSlug = product?.brand?.slug;
    if (showName || brandName === "Vintage") {
        showBrand = false;
    }
    if (!product || loading) {
        return (React.createElement(Box, { m: "2px" },
            React.createElement(ContentLoader, { viewBox: "0 0 100 125" },
                React.createElement("rect", { x: 0, y: 0, width: "100%", height: "100%" })),
            React.createElement(Spacer, { mb: "5px" }),
            React.createElement(ContentLoader, { width: "100%", height: "42px" },
                React.createElement("rect", { x: 0, y: 0, width: "40%", height: 12 }),
                React.createElement("rect", { x: 0, y: 19, width: 37, height: 12 }))));
    }
    const Text = () => {
        if (showBrand && brandName && brandSlug) {
            return (React.createElement(Link, { href: "/designer/[Designer]", as: `/designer/${brandSlug}` },
                React.createElement(Sans, { size: "2", mt: "0.5" }, brandName),
                React.createElement(VariantSizes, { variants: product.variants, size: "2" })));
        }
        else {
            return (React.createElement(React.Fragment, null, !!product?.name && (React.createElement(React.Fragment, null,
                React.createElement(Sans, { size: "2", mt: "0.5" }, product?.name),
                React.createElement(VariantSizes, { variants: product.variants, size: "2" })))));
        }
    };
    return (React.createElement(ProductContainer, { key: product.id, onClick: () => tracking.trackEvent({
            actionName: TrackSchema.ActionNames.ProductTapped,
            actionType: TrackSchema.ActionTypes.Tap,
            productName: product.name,
            productSlug: product.slug,
            productId: product.id,
        }) },
        React.createElement(Link, { href: "/product/[Product]", as: `/product/${product.slug}` },
            React.createElement("a", { href: `/product/${product.slug}`, style: { textDecoration: "none", color: "inherit" } },
                React.createElement(ProgressiveImage, { url: image?.url, size: "small", alt: "product image" }),
                React.createElement(Spacer, { mb: 1 }),
                React.createElement(Text, null)))));
};
const ProductContainer = styled(Box) `
  margin: 2px;
  overflow: hidden;
  text-align: left;
  cursor: pointer;
`;
