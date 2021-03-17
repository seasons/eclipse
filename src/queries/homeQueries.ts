import gql from "graphql-tag"

const HomePageProductFragment = gql`
  fragment HomePageProduct on Product {
    id
    slug
    name
    modelSize {
      id
      display
    }
    brand {
      id
      slug
      name
    }
    images(size: XLarge) {
      id
      url
    }
    variants {
      id
      reservable
      displayShort
    }
  }
`

// Traits we pass to segment on homepage renders
const CustomerTraitsFragment = gql`
  fragment SegmentTraits on Customer {
    bagItems {
      id
    }
    admissions {
      id
      admissable
      authorizationsCount
    }
    user {
      id
      createdAt
    }
    detail {
      id
      shippingAddress {
        id
        state
      }
    }
  }
`

export const GET_HOMEPAGE_NATIVE = gql`
  query Homepage($firstFitPics: Int!, $skipFitPics: Int) {
    banner: view(viewID: "Banner") {
      id
      title
      caption
      type
      properties
    }
    homepage {
      id
      sections {
        id
        title
        type
        tagData {
          id
          tagName
          description
        }
        results {
          ... on Brand {
            id
            name
            since
          }
          ... on Category {
            id
            slug
            name
            image
          }
          ... on Product {
            id
            slug
            name
            images(size: Thumb) {
              id
              url
            }
            brand {
              id
              name
            }
            variants {
              id
              reservable
              internalSize {
                id
                display
              }
            }
          }
        }
      }
    }
    reservationFeedback {
      id
      comment
      rating
      feedbacks {
        id
        isCompleted
        questions {
          id
          options
          question
          responses
          type
        }
        variant {
          id
          product {
            id
            name
            retailPrice
            images(size: Thumb) {
              id
              url
            }
          }
        }
      }
    }
    me {
      id
      customer {
        id
        status
        shouldRequestFeedback
        ...SegmentTraits
      }
      savedItems {
        id
        productVariant {
          id
          product {
            id
            name
            modelSize {
              id
              display
            }
            brand {
              id
              name
            }
            images(size: Medium) {
              id
              url
            }
            variants {
              id
              reservable
              displayShort
            }
          }
        }
      }
    }
    featuredCollections: collections(
      orderBy: updatedAt_DESC
      where: { published: true }
      first: 5
    ) {
      id
      slug
      title
      subTitle
      displayTextOverlay
      textOverlayColor
      images {
        id
        url
      }
    }
    collections(
      orderBy: updatedAt_DESC
      placements: [Homepage]
      where: { published: true }
    ) {
      id
      slug
      title
      products(first: 10, orderBy: updatedAt_DESC) {
        id
        name
        brand {
          id
          name
        }
        images(size: Thumb) {
          id
          url
        }
      }
    }
    blogPosts(count: 5) {
      id
      url
      name
      category
      imageURL
    }
    archivalProducts: products(
      where: {
        AND: [{ tags_some: { name: "Vintage" } }, { status: Available }]
      }
      first: 10
      orderBy: publishedAt_DESC
    ) {
      id
      slug
      name
      images(size: Thumb) {
        id
        url
      }
    }
    justAddedOuterwear: products(
      first: 8
      category: "outerwear"
      orderBy: publishedAt_DESC
      where: {
        AND: [
          { variants_some: { id_not: null } }
          { status: Available }
          { tags_none: { name: "Vintage" } }
        ]
      }
    ) {
      id
      ...HomePageProduct
    }
    justAddedTops: products(
      first: 8
      category: "tops"
      orderBy: publishedAt_DESC
      where: {
        AND: [
          { variants_some: { id_not: null } }
          { status: Available }
          { tags_none: { name: "Vintage" } }
        ]
      }
    ) {
      id
      ...HomePageProduct
    }
    justAddedBottoms: products(
      first: 8
      category: "bottoms"
      orderBy: publishedAt_DESC
      where: {
        AND: [
          { variants_some: { id_not: null } }
          { status: Available }
          { tags_none: { name: "Vintage" } }
        ]
      }
    ) {
      id
      ...HomePageProduct
    }
    fitPicsCount: fitPicsConnection(where: { status: Published }) {
      aggregate {
        count
      }
    }
    fitPics(
      first: $firstFitPics
      skip: $skipFitPics
      orderBy: createdAt_DESC
      where: { status: Published }
    ) {
      id
      author
      location {
        id
        city
        state
      }
      image(size: Medium) {
        id
        url
      }
      includeInstagramHandle
      user {
        id
        customer {
          detail {
            instagramHandle
          }
        }
      }
      products {
        id
        slug
        name
        isSaved
        brand {
          id
          name
        }
        images {
          id
          url
        }
        variants(first: 1) {
          id
        }
      }
      createdAt
    }
  }
  ${HomePageProductFragment}
  ${CustomerTraitsFragment}
`

export const HOME_QUERY_WEB = gql`
  query GetBrowseProducts {
    me {
      id
      customer {
        id
        admissions {
          id
          admissable
          authorizationsCount
          authorizationWindowClosesAt
          allAccessEnabled
        }
      }
    }
    collections(orderBy: updatedAt_DESC, first: 1, where: { published: true }) {
      id
      slug
      title
      subTitle
      images {
        id
        url
      }
      products(first: 3, orderBy: updatedAt_DESC) {
        ...HomePageProduct
      }
    }
    blogPosts(count: 3) {
      id
      url
      name
      author
      imageURL
    }
    paymentPlans(where: { status: "active" }) {
      id
      name
      description
      tagline
      price
      planID
      tier
      itemCount
    }
    newestBrandProducts(first: 3) {
      ...HomePageProduct
    }
    fitPics(first: 5, orderBy: createdAt_DESC, where: { status: Published }) {
      id
      location {
        id
        city
        state
      }
      image(size: Medium) {
        id
        url
      }
      includeInstagramHandle
      user {
        id
        customer {
          detail {
            instagramHandle
          }
        }
      }
    }
    newArchival: products(
      first: 3
      orderBy: publishedAt_DESC
      where: {
        AND: [{ tags_some: { name: "Vintage" } }, { status: Available }]
      }
    ) {
      ...HomePageProduct
    }
  }
  ${HomePageProductFragment}
`
