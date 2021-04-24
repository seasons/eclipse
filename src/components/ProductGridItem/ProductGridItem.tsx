import React from "react"
import styled from "styled-components"
import { Link } from "../Link"
import { get } from "lodash"
import { VariantSizes } from "../VariantSizes"
import ContentLoader from "react-content-loader"
import { ProgressiveImage } from "@/components"
import { Box, Sans, Spacer } from "@/elements"
import { TrackSchema, useTracking } from "@/helpers/track"
import { ProductGridItemProps } from "./ProductGridItem.shared"

export const ProductGridItem: React.FC<ProductGridItemProps> = ({
  product,
  loading,
  imageIndex,
}) => {
  const image = get(
    product,
    imageIndex ? `images[${imageIndex}]` : "images[0]",
    {
      url: "",
    }
  )
  const tracking = useTracking()

  const brandName = product?.brand?.name
  const productName = product?.name
  const brandSlug = product?.brand?.slug
  const retailPrice = product?.retailPrice

  if (!product || loading) {
    return (
      <Box m="2px">
        <ContentLoader viewBox="0 0 100 125">
          <rect x={0} y={0} width="100%" height="100%" />
        </ContentLoader>
        <Spacer mb="5px" />
        <ContentLoader width="100%" height="70px">
          <rect x={0} y={0} width={70} height={10} />
          <rect x={0} y={18} width={110} height={10} />
          <rect x={0} y={38} width={60} height={10} />
          <rect x={0} y={58} width={55} height={10} />
        </ContentLoader>
      </Box>
    )
  }

  return (
    <ProductContainer
      key={product.id}
      onClick={() =>
        tracking.trackEvent({
          actionName: TrackSchema.ActionNames.ProductTapped,
          actionType: TrackSchema.ActionTypes.Tap,
          productName: product.name,
          productSlug: product.slug,
          productId: product.id,
        })
      }
    >
      <Link href="/product/[Product]" as={`/product/${product.slug}`}>
        <a
          href={`/product/${product.slug}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ProgressiveImage url={image?.url} size="small" alt="product image" />
          <Spacer mb={1} />
          <Link href="/designer/[Designer]" as={`/designer/${brandSlug}`}>
            <Spacer mt={0.5} />
            <Sans size="2">{brandName}</Sans>
          </Link>
          <Spacer mt={0.5} />
          <Sans size="2" color="black50">
            {productName}
          </Sans>
          {retailPrice && (
            <>
              <Spacer mt={0.5} />
              <Sans size="2" color="black50">
                Retail ${retailPrice}
              </Sans>
            </>
          )}
          <Spacer mt={0.5} />
          <VariantSizes variants={product.variants} size="2" />
        </a>
      </Link>
    </ProductContainer>
  )
}

const ProductContainer = styled(Box)`
  margin: 2px;
  overflow: hidden;
  text-align: left;
  cursor: pointer;
`
