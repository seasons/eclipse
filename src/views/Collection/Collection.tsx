import type { PopUpData } from "@/types"
import { gql, useQuery } from "@apollo/client"
import React, { useState } from "react"
import { CollectionUI } from "./CollectionUI"

export const GET_COLLECTION = gql`
  query GetCollection(
    $collectionID: ID!
    $first: Int!
    $skip: Int!
    $orderBy: ProductOrderByInput!
  ) {
    collection(where: { id: $collectionID }) {
      id
      slug
      title
      subTitle
      descriptions
      images {
        id
        url
      }
      products(
        first: $first
        skip: $skip
        orderBy: $orderBy
        where: { status: Available }
      ) {
        id
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
`

export const SNAP_PADDING = 70

export interface CollectionUIProps {
  setCurrentImage: (index: number) => void
  currentImage: number
  data: any
  fetchMore: (x: any) => void
  loading: boolean
  showPopUp: (data: PopUpData) => any
  hidePopUp: () => void
  authState: any
}

export const Collection: React.FC<{
  collectionID: string
  showPopUp: (data: PopUpData) => any
  hidePopUp: () => void
  authState: any
}> = ({ collectionID, showPopUp, hidePopUp, authState }) => {
  const [currentImage, setCurrentImage] = useState(1)
  const { data, fetchMore, loading, error } = useQuery(GET_COLLECTION, {
    variables: {
      id: collectionID,
      first: 10,
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
      currentImage={currentImage}
      setCurrentImage={setCurrentImage}
      showPopUp={showPopUp}
      hidePopUp={hidePopUp}
      authState={authState}
    />
  )
}