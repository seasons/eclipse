import React from "react"
import styled from "styled-components"
import gql from "graphql-tag"
import { Link } from "../Link"
import { filter } from "graphql-anywhere"
import { PRODUCT_ASPECT_RATIO } from "@/helpers"
import { VariantSizes } from "../VariantSizes"
import ContentLoader from "react-content-loader"
import { Picture, ProgressiveImage } from "@/components"
import { Box, Sans, Spacer, Flex } from "@/elements"
import { TrackSchema, useTracking } from "@/helpers/track"
import { ProductGridItemProps } from "./ProductGridItem.shared"
import { SaveProductButton } from "../SaveProductButton"
import { SaveProductModal_Product } from "../SaveProductModal/SaveProductModal"

export const ProductGridItem_Product = gql`
  fragment ProductGridItem_Product on Product {
    id
    slug
    retailPrice
    brand {
      id
      slug
      name
    }
    variants {
      id
      reservable
      displayShort
    }
    extraLargeImages: images(size: XLarge) {
      id
      url
    }

    ...SaveProductModal_Product
  }
  ${SaveProductModal_Product}
`

export const ProductGridItem: React.FC<ProductGridItemProps> = ({
  product,
  loading,
  imageIndex,
  authState,
  onShowLoginModal,
  saveProductButtonRefetchQueries,
}) => {
  const [hover, setHover] = React.useState(false)
  const [loaded, setLoaded] = React.useState(false)
  const thirdImageRef = React.useRef(null)

  const disableHover = imageIndex === 2
  const image = product?.extraLargeImages?.[imageIndex || 0]
  const thirdImage = product?.extraLargeImages?.[2]
  const tracking = useTracking()

  const brandName = product?.brand?.name
  const productName = product?.name
  const brandSlug = product?.brand?.slug
  const retailPrice = product?.retailPrice
  const rentalPrice = product?.rentalPrice? product?.rentalPrice : 40

  React.useEffect(() => {
    if (thirdImageRef.current && thirdImageRef.current.complete && !loaded) {
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
      <Link
        href="/product/[Product]"
        as={`/product/${product.slug}`}
        passHref={true}
        prefetch={false}
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
      </Link>
      <Spacer mb={1} />
      <Flex flexDirection="row">
        <Box flex={1}>
          <Link
            href="/designer/[Designer]"
            as={`/designer/${brandSlug}`}
            passHref={true}
            prefetch={false}
          >
            <Spacer mt={0.5} />
            <Sans size="2">{brandName}</Sans>
          </Link>
          <Link
            href="/product/[Product]"
            as={`/product/${product.slug}`}
            passHref={true}
            prefetch={false}
          >
            <Spacer mt={0.5} />
            <Sans size="2" color="black50">
              {productName}
            </Sans>
            {retailPrice && (
              <>
                <Spacer mt={0.5} />
                <Sans size="2" color="black50">
                  ${rentalPrice} per Month | ${retailPrice} Retail
                </Sans>
              </>
            )}
            <Spacer mt={0.5} />
            <VariantSizes variants={product.variants} size="2" />
          </Link>
        </Box>
        <Box marginRight={1}>
          <SaveProductButton
            product={filter(SaveProductModal_Product, product)}
            height={20}
            width={16}
            onShowLoginModal={onShowLoginModal}
            authState={authState}
            showSizeSelector={true}
            onPressSaveButton={() => {
              tracking.trackEvent({
                actionName: TrackSchema.ActionNames.SaveProductButtonTapped,
                actionType: TrackSchema.ActionTypes.Tap,
              })
            }}
            refetchQueries={saveProductButtonRefetchQueries}
          />
        </Box>
      </Flex>
    </ProductContainer>
  )
}

const ThirdImageWrapper = styled(Box)<{ loaded: boolean }>`
  z-index: 3;
  position: absolute;
  height: 0;
  padding-bottom: calc(100% * ${PRODUCT_ASPECT_RATIO});
  opacity: ${(p) => (p.loaded ? 1 : 0)};
  top: 0;
  left: 0;
  width: 100%;

  img {
    position: absolute;
    height: 100%;
    width: 100%;
  }
`

const ProductContainer = styled(Box)`
  margin: 2px;
  overflow: hidden;
  text-align: left;
  cursor: pointer;
  position: relative;
`
