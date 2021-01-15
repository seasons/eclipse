import React from "react"
import { FlatList, Dimensions } from "react-native"
import styled from "styled-components/native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { color } from "@/helpers/color"
import { Box } from "@/elements"
import { FadeInImage } from "../FadeInImage"
import { SNAP_PADDING } from "@/views/Collection/Collection"

const windowWidth = Dimensions.get("window").width
const imageHeight = windowWidth

export const HeroImageCarousel = ({
  images,
  currentImage,
  setCurrentImage,
}) => {
  const insets = useSafeAreaInsets()

  const renderItem = ({ item }) => {
    return (
      <Box>
        <FadeInImage
          source={{ uri: item?.url || "" }}
          style={{ width: windowWidth, height: imageHeight }}
        />
      </Box>
    )
  }

  const onScroll = (e) => {
    const newPageNum = Math.round(
      e.nativeEvent.contentOffset.y / imageHeight + 1
    )

    if (newPageNum !== currentImage) {
      setCurrentImage(newPageNum)
    }
  }

  if (images.length === 0) {
    return <BlackSpacer insetsTop={insets?.top || 0} />
  }

  return (
    <Wrapper>
      <FlatList
        pagingEnabled
        overScrollMode="always"
        snapToAlignment="start"
        decelerationRate="fast"
        scrollEventThrottle={299}
        onScroll={onScroll}
        data={images}
        keyExtractor={(item, index) => item.id + index}
        renderItem={(item) => renderItem(item)}
      />
    </Wrapper>
  )
}

const Wrapper = styled(Box)`
  height: ${imageHeight};
  overflow: hidden;
  background-color: ${color("white100")};
`

const BlackSpacer = styled(Box)<{ insetsTop: number }>`
  height: ${(p) => p.insetsTop + SNAP_PADDING};
  width: 100%;
  background-color: ${color("black100")};
`
