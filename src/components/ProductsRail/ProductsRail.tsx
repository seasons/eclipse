import { Box, Col, Display, Flex, Grid, Row, Sans, Spacer } from "@/elements"
import { Link, ProductGridItem } from "@/components"
import React from "react"
import type { ProductsRailProps } from "./ProductsRail.shared"

export const ProductsRail: React.FC<ProductsRailProps> = ({
  items,
  title,
  tag,
  collectionSlug,
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
      <Box px={[2, 2, 2, 5, 5]}>
        <Flex
          flexDirection="row"
          justifyContent={title ? "space-between" : "flex-end"}
        >
          {title && <Display size="7">{title}</Display>}
          {as ? (
            <Link href={href} as={as}>
              <Sans
                size={["5", "6"]}
                color="black50"
                style={{ minWidth: "58px" }}
              >
                See all
              </Sans>
            </Link>
          ) : (
            <Link href={href}>
              <Sans
                size={["5", "6"]}
                color="black50"
                style={{ minWidth: "58px" }}
              >
                See all
              </Sans>
            </Link>
          )}
        </Flex>
      </Box>
      <Spacer mb={2} />
      <Box px={[0, 0, 0, 5, 5]}>
        <Row>
          {items?.map((product, index) => {
            return (
              <Col md="3" xs="6" sm="6" key={index}>
                <ProductGridItem product={product} />
              </Col>
            )
          })}
        </Row>
      </Box>
    </Grid>
  )
}
