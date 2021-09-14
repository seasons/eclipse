import { Box, Col, Display, Flex, Grid, Row, Sans, Spacer } from "@/elements"
import { Link, ProductGridItem } from "@/components"
import React from "react"
import type { ProductsRailProps } from "./ProductsRail.shared"
import { space } from "@/helpers"

export const ProductsRail: React.FC<ProductsRailProps> = ({
  items,
  title,
  tag,
  collectionSlug,
  underlineTitleText,
  underlineTitleOnClick,
  imageIndex,
  authState,
  onShowLoginModal,
  disableClickThrough = false,
}) => {
  let href = "/browse"
  let as
  if (tag) {
    href = "collection/[Tag]"
    as = `collection/${tag}`
  } else if (collectionSlug) {
    href = "collection/[Collection]"
    as = `collection/${collectionSlug}`
  }

  return (
    <Grid>
      <Box px={[2, 2, 2, 2, 2]}>
        <Flex
          flexDirection="row"
          alignItems="flex-end"
          justifyContent={title ? "space-between" : "flex-end"}
        >
          {title && (
            <Display size="8" style={{ paddingRight: space(1) + "px" }}>
              {underlineTitleText ? `${title} ` : title}
              {underlineTitleText && (
                <span
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                  onClick={underlineTitleOnClick}
                >
                  {underlineTitleText}
                </span>
              )}
            </Display>
          )}
          {as ? (
            <Link href={href} as={as}>
              <Sans
                size="4"
                color="black100"
                style={{ minWidth: "58px", textDecoration: "underline" }}
              >
                View all
              </Sans>
            </Link>
          ) : (
            <Link href={href}>
              <Sans
                size="4"
                color="black100"
                style={{ minWidth: "58px", textDecoration: "underline" }}
              >
                View all
              </Sans>
            </Link>
          )}
        </Flex>
      </Box>
      <Spacer mb={2} />
      <Box px={[0, 0, 0, 2, 2]}>
        <Row>
          {items?.map((product, index) => {
            return (
              <Col
                md="4"
                xs="12"
                sm="12"
                key={index}
                pb={[2, 2, 2, 0, 0]}
                style={{ pointerEvents: disableClickThrough ? "none" : "auto" }}
              >
                <ProductGridItem
                  product={product}
                  imageIndex={imageIndex}
                  authState={authState}
                  onShowLoginModal={onShowLoginModal}
                />
              </Col>
            )
          })}
        </Row>
      </Box>
    </Grid>
  )
}
