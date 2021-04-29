import React from "react"
import styled from "styled-components"
import { Link } from "../Link"
import { VariantSizes } from "../VariantSizes"
import ContentLoader from "react-content-loader"
import { Picture, ProgressiveImage } from "@/components"
import { Box, Sans, Spacer } from "@/elements"
import { TrackSchema, useTracking } from "@/helpers/track"
import { ProductGridItemProps } from "./ProductGridItem.shared"
import { IMAGE_ASPECT_RATIO } from "@/helpers/imageResize"

export const ProductGridItem: React.FC<ProductGridItemProps> = ({
  product,
  loading,
  imageIndex,
}) => {
  const [hover, setHover] = React.useState(false)
  const [loaded, setLoaded] = React.useState(false)
  const thirdImageRef = React.useRef(null)

  const disableHover = imageIndex === 2
  const image = product?.images?.[imageIndex || 0]
  const thirdImage = product?.images?.[2]
  const tracking = useTracking()

  const brandName = product?.brand?.name
  const productName = product?.name
  const brandSlug = product?.brand?.slug
  const retailPrice = product?.retailPrice

  React.useEffect(() => {
    const image = thirdImageRef.current
    if (image && image.complete && !loaded) {
      setLoaded(true)
    }
  }, [thirdImageRef, setLoaded, loaded])

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
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
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
          {hover && !disableHover && (
            <ThirdImageWrapper loaded={loaded}>
              <Picture
                src={thirdImage?.url}
                key={thirdImage?.url}
                alt={`Image of ${product.name}`}
                imgRef={thirdImageRef}
                onLoad={() => {
                  setLoaded(true)
                }}
              />
            </ThirdImageWrapper>
          )}
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

const ThirdImageWrapper = styled(Box)<{ loaded: boolean }>`
  z-index: 3;
  position: absolute;
  opacity: ${(p) => (p.loaded ? 1 : 0)};
  top: 0;
  left: 0;
  width: 100%;
  padding-bottom: calc(100% * ${IMAGE_ASPECT_RATIO});
`

const ProductContainer = styled(Box)`
  margin: 2px;
  overflow: hidden;
  text-align: left;
  cursor: pointer;
`
