import React, { useEffect, useState } from "react"
import { StatusBar } from "react-native"
import {
  Container,
  FixedBackArrow,
  Loader,
  HeroImageCarousel,
  CollectionBottomSheet,
} from "@/components"
import type { CollectionUIProps } from "./Collection"
import { useNavigation } from "@react-navigation/native"

export const CollectionUI: React.FC<CollectionUIProps> = ({
  data,
  fetchMore,
  loading,
  showPopUp,
  hidePopUp,
  authState,
  setProductCount,
}) => {
  const [currentImage, setCurrentImage] = useState(1)
  const navigation = useNavigation()
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      StatusBar.setBarStyle("light-content")
    })
    return unsubscribe
  }, [navigation])

  const onBackPressed = () => {
    navigation?.goBack()
  }

  if (!data) {
    return (
      <>
        <FixedBackArrow onPress={onBackPressed} variant="whiteBackground" />
        <Loader />
      </>
    )
  }

  const collection = data?.collection
  const images = collection?.images
  const products = collection?.products?.edges
  const description = collection?.descriptions?.[0]
  const title = collection?.title

  const onEndReached = () => {
    if (!loading) {
      fetchMore({
        variables: {
          skip: products.length,
        },
      }).then((fetchMoreResult: any) => {
        setProductCount(
          products.length +
            fetchMoreResult?.data?.collection?.products?.edges?.length
        )
      })
    }
  }

  return (
    <Container insetsBottom={false} insetsTop={false}>
      <FixedBackArrow onPress={onBackPressed} variant="whiteTransparent" />
      <HeroImageCarousel
        images={images}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
      />
      <CollectionBottomSheet
        products={products}
        title={title}
        images={images}
        description={description}
        currentImage={currentImage}
        showPopUp={showPopUp}
        hidePopUp={hidePopUp}
        authState={authState}
        onEndReached={onEndReached}
      />
    </Container>
  )
}
