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
            name
            images(size: Thumb) {
              id
              url
            }
            variants {
              id
              displayShort
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
  fetchMore: (x: any) => Promise<any>
  loading?: boolean
  showPopUp?: (data: PopUpData) => any
  hidePopUp?: () => void
  authState?: any
  setProductCount?: (count: number) => void
}

export const Collection: React.FC<{
  collectionSlug: string
  showPopUp?: (data: PopUpData) => any
  hidePopUp?: () => void
  authState?: any
}> = ({ collectionSlug, showPopUp, hidePopUp, authState }) => {
  const [productCount, setProductCount] = useState(10)
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
      showPopUp={showPopUp}
      hidePopUp={hidePopUp}
      authState={authState}
      setProductCount={setProductCount}
    />
  )
}
