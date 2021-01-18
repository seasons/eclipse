import React, { useEffect } from "react"
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
  currentImage,
  setCurrentImage,
  showPopUp,
  hidePopUp,
  authState,
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

  const images = data?.brand?.images

  return (
    <Container insetsBottom={false} insetsTop={false}>
      <FixedBackArrow onPress={onBackPressed} variant="whiteTransparent" />
      <HeroImageCarousel
        images={images}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
      />
      <CollectionBottomSheet
        data={data}
        loading={loading}
        fetchMore={fetchMore}
        currentImage={currentImage}
        showPopUp={showPopUp}
        hidePopUp={hidePopUp}
        authState={authState}
      />
    </Container>
  )
}
