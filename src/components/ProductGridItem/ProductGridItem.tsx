import React from "react"
import styled from "styled-components"
import { Link } from "../Link"
import { get } from "lodash"
import { VariantSizes } from "../VariantSizes"
import ContentLoader from "react-content-loader"
import { ProgressiveImage } from "@/components"
import { Box, Sans, Spacer, Flex } from "@/elements"
import { TrackSchema, useTracking } from "@/helpers/track"
import { ProductGridItemProps } from "./ProductGridItem.shared"

export const ProductGridItem: React.FC<ProductGridItemProps> = ({
  product,
  loading,
  imageIndex,
  isSignedIn,
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
  const brandSlug = product?.brand?.slug
  const retailPrice = product?.retailPrice

  if (!product || loading) {
    return (
      <Box m="2px">
        <ContentLoader viewBox="0 0 100 125">
          <rect x={0} y={0} width="100%" height="100%" />
        </ContentLoader>
        <Spacer mb="5px" />
        <ContentLoader width="100%" height="57px">
          <rect x={0} y={0} width="40%" height={10} />
          <rect x={0} y={15} width="53%" height={10} />
          <rect x={0} y={30} width="45%" height={10} />
          <rect x={0} y={45} width={50} height={10} />
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
          <Spacer mb={0.5} />
          <Link href="/designer/[Designer]" as={`/designer/${brandSlug}`}>
            <LeadingNoneSans size="2" mt="0.5">
              {brandName}
            </LeadingNoneSans>
          </Link>
          <Spacer mb={0.5} />
          {retailPrice && !isSignedIn && (
            <>
              <Flex flexDirection="row">
                <LineThroughSans
                  mt="0.5"
                  size="2"
                  color="black50"
                  display="inline"
                >
                  ${retailPrice}
                </LineThroughSans>
                <LeadingNoneSans
                  mt="0.5"
                  size="2"
                  color="black50"
                  display="inline"
                >
                  {" "}
                  | $65 for 30-days
                </LeadingNoneSans>
              </Flex>
              <Spacer mb={0.5} />
            </>
          )}
          <VariantSizes variants={product.variants} size="2" lineHeight="1" />
        </a>
      </Link>
    </ProductContainer>
  )
}

const LineThroughSans = styled(Sans)`
  text-decoration: line-through;
  line-height: 1;
`

const LeadingNoneSans = styled(Sans)`
  white-space: pre;
  line-height: 1;
`

const ProductContainer = styled(Box)`
  margin: 2px;
  overflow: hidden;
  text-align: left;
  cursor: pointer;
`
