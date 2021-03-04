import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { CollectionUI } from "./CollectionUI";
export const GET_COLLECTION = gql `
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
`;
export const SNAP_PADDING = 70;
export const Collection = ({ collectionSlug, showPopUp, hidePopUp, authState }) => {
    const [productCount, setProductCount] = useState(10);
    const { previousData, data = previousData, fetchMore, loading, error, } = useQuery(GET_COLLECTION, {
        variables: {
            slug: collectionSlug,
            first: productCount,
            skip: 0,
            orderBy: "publishedAt_DESC",
        },
    });
    if (error) {
        console.log("error CollectionWrapper.tsx: ", error);
    }
    return (React.createElement(CollectionUI, { fetchMore: fetchMore, loading: loading, data: data, showPopUp: showPopUp, hidePopUp: hidePopUp, authState: authState, setProductCount: setProductCount }));
};
