import {
  ImageCarousel,
  Media,
  ProductGridItem,
  ReadMore,
  Spinner,
} from "@/components"
import Head from "next/head"
import { Box, Col, Flex, Grid, Row, Sans, Spacer } from "@/elements"
import { debounce } from "lodash"
import React, { useEffect, useRef, useState } from "react"
// import Head from "next/head"
import type { CollectionUIProps } from "./Collection"
import styled from "styled-components"
import { space } from "@/helpers"

export const CollectionUI: React.FC<CollectionUIProps> = ({
  data,
  fetchMore,
  loading,
  setProductCount,
}) => {
  const [readMoreExpanded, setReadMoreExpanded] = useState(false)
  const collection = data?.collection
  let title = collection?.title
  let description = collection?.descriptions?.[0]
  const products = collection?.products?.edges
  const aggregateCount = collection?.productsAggregate?.aggregate?.count
  const images = collection?.images

  const imageContainer = useRef(null)

  const onScroll = debounce(() => {
    const shouldLoadMore =
      !loading &&
      !!aggregateCount &&
      aggregateCount > products?.length &&
      window.innerHeight >=
        imageContainer?.current?.getBoundingClientRect().bottom - 200

    if (shouldLoadMore) {
      fetchMore({
        variables: {
          skip: products?.length,
        },
      }).then((fetchMoreResult: any) => {
        setProductCount(
          products.length +
            fetchMoreResult?.data?.collection?.products?.edges?.length
        )
      })
    }
  }, 100)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", onScroll)
    }
    return () => window.removeEventListener("scroll", onScroll)
  }, [onScroll])

  const BreadCrumb = () => {
    return (
      <>
        <Sans size="3" style={{ display: "inline" }}>
          Collection
        </Sans>
        <Sans size="3" style={{ display: "inline" }}>
          {" "}
          /{" "}
        </Sans>
        <Sans size="3" style={{ display: "inline" }}>
          {title}
        </Sans>
      </>
    )
  }

  const TextContent = () => (
    <Box>
      <Sans size="9" style={{ textDecoration: "underline" }}>
        {title}
      </Sans>
      {!!description && (
        <>
          <Spacer mb={3} />
          <Sans size="4">About</Sans>
          <ReadMore
            readMoreExpanded={readMoreExpanded}
            setReadMoreExpanded={setReadMoreExpanded}
            content={description}
            maxChars={400}
          />
        </>
      )}
      <Spacer mb={6} />
    </Box>
  )

  return (
    <>
      <Head>
        <title>{title ? `${title} Collection - Seasons` : "Seasons"}</title>
        <meta content={description} name="description" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Seasons" />
        <meta
          property="og:url"
          content={`https://www.seasons.nyc/collection/${collection?.slug}`}
        />
        <meta
          property="og:image"
          content="https://flare-public-assets.s3.amazonaws.com/logo.png"
        />
        <meta property="twitter:card" content="summary" />
      </Head>
      <Box pt={[1, 5]}>
        <Grid px={[2, 2, 2, 5, 5]}>
          <Row>
            <Col md="6" sm="12">
              <MediaWithHeight greaterThanOrEqual="md">
                <Box>
                  <BreadCrumb />
                </Box>
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  height="100%"
                >
                  <TextContent />
                </Flex>
              </MediaWithHeight>

              <Media lessThan="md">
                <Box>
                  <BreadCrumb />
                  <Spacer mb={2} />
                  {images?.length > 0 && (
                    <ImageCarousel images={images} pagerHorizontal />
                  )}
                </Box>
              </Media>
            </Col>
            <Col md="6" sm="12">
              <Box pl={[0, 0, "136px", "136px", "136px"]} pt={[6, 6, 0, 0, 0]}>
                <Media greaterThanOrEqual="md">
                  {images?.length > 0 && (
                    <ImageCarousel images={images} pagerHorizontal />
                  )}
                </Media>
                <Media lessThan="md">
                  <TextContent />
                </Media>
              </Box>
            </Col>
          </Row>
        </Grid>
        <Grid px={[0, space(2) - 2, space(2) - 2, space(5) - 2, space(5) - 2]}>
          <Row ref={imageContainer}>
            {products?.map((product, i) => (
              <Col col sm="3" xs="6" key={i}>
                <Box pt={[2, 2, 5, 5, 5]} pb={[2, 5]}>
                  <ProductGridItem
                    product={product?.node}
                    loading={!data}
                    showName
                  />
                </Box>
              </Col>
            ))}
            {loading && (
              <Box
                mb={5}
                style={{
                  width: "100%",
                  position: "relative",
                  height: "30px",
                }}
              >
                <Spinner />
              </Box>
            )}
          </Row>
        </Grid>
      </Box>
    </>
  )
}

const MediaWithHeight = styled(Media)`
  height: 100%;
`
