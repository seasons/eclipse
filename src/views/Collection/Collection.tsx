import type { PopUpData } from "@/types"
import { gql, useQuery } from "@apollo/client"
import React, { useState } from "react"
import { CollectionUI } from "./CollectionUI"

export const GET_COLLECTION = gql`
  query GetCollection(
    $slug: String!
    $first: Int!
    $skip: Int!
    $orderBy: ProductOrderByInput!
  ) {
    collection(where: { slug: $slug }) {
      id
      slug
      title
      subTitle
      descriptions
      images {
        id
        url
      }
      productsAggregate: productsConnection(where: { status: Available }) {
        aggregate {
          count
        }
      }
      products: productsConnection(
        first: $first
        skip: $skip
        orderBy: $orderBy
        where: { status: Available }
      ) {
        edges {
          node {
            id
            slug
            name
            images(size: Thumb) {
              id
              url
            }
            variants {
              id
              displayShort
              reservable
            }
            brand {
              id
              name
            }
          }
        }
      }
    }
  }
`

export const SNAP_PADDING = 70

export interface CollectionUIProps {
  data: any
  pageLength: number
  fetchMore: (x: any) => Promise<any>
  loading?: boolean
  showPopUp?: (data: PopUpData) => any
  hidePopUp?: () => void
  authState?: any
  setProductCount?: (count: number) => void
  onShowLoginModal?: () => void
}

export interface CollectionBottomSheetProps {
  currentImage: number
  showPopUp: (data: PopUpData) => any
  hidePopUp: () => void
  authState: any
  images: any[]
  products: any[]
  description: string
  title: string
  onEndReached: () => void
  metaData?: []
  aggregateCount?: number
}

export const Collection: React.FC<{
  collectionSlug: string
  showPopUp?: (data: PopUpData) => any
  hidePopUp?: () => void
  authState?: any
}> = ({ collectionSlug, showPopUp, hidePopUp, authState }) => {
  const PAGE_LENGTH = 12
  const [productCount, setProductCount] = useState(PAGE_LENGTH)
  const {
    previousData,
    data = previousData,
    fetchMore,
    loading,
    error,
  } = useQuery(GET_COLLECTION, {
    variables: {
      slug: collectionSlug,
      first: productCount,
      skip: 0,
      orderBy: "publishedAt_DESC",
    },
  })

  if (error) {
    console.log("error CollectionWrapper.tsx: ", error)
  }

  return (
    <CollectionUI
      fetchMore={fetchMore}
      loading={loading}
      data={data}
      pageLength={PAGE_LENGTH}
      showPopUp={showPopUp}
      hidePopUp={hidePopUp}
      authState={authState}
      setProductCount={setProductCount}
    />
  )
}
