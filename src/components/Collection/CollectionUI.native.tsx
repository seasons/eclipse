import React, { useEffect } from "react"
import { StatusBar } from "react-native"
import { Container } from "../Container/Container"
import { FixedBackArrow } from "../FixedBackArrow/FixedBackArrow"
import { Loader } from "../Loader/Loader"
import type { CollectionProps } from "./Collection"
import { useNavigation } from "@react-navigation/native"

export const SNAP_PADDING = 70

export const CollectionUI: React.FC<CollectionProps> = ({
  data,
  fetchMore,
  loading,
  currentImage,
  setCurrentImage,
}) => {
  const navigation = useNavigation()
  console.log(data, fetchMore, loading, currentImage, setCurrentImage)
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

  // const images = data?.brand?.images

  return (
    <Container insetsBottom={false} insetsTop={false}>
      <FixedBackArrow onPress={onBackPressed} variant="whiteTransparent" />
    </Container>
  )
}

{
  /* <BrandPhotos
  images={images}
  currentImage={currentImage}
  setCurrentImage={setCurrentImage}
/>
<BrandBottomSheet
  data={data}
  loading={loading}
  fetchMore={fetchMore}
  currentImage={currentImage}
/> */
}
