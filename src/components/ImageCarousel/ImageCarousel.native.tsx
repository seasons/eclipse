import React from "react"
import { FlatList, TouchableWithoutFeedback } from "react-native"
import { TrackSchema, useTracking } from "@/helpers/track"
import * as Animatable from "react-native-animatable"
import { ProgressiveImage } from "../Image/ProgressiveImage"
import { useState } from "react"
import { space } from "@/helpers"
import type { ImageCarouselProps } from "./ImageCarousel.shared"

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  items,
  imageWidth,
  imageHeight,
  title,
  onPressItem,
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const tracking = useTracking()

  const onScroll = (e) => {
    const newPageNum = Math.round(
      e.nativeEvent.contentOffset.x / imageWidth + 1
    )
    if (newPageNum !== currentPage) {
      tracking.trackEvent({
        actionName: TrackSchema.ActionNames.CarouselSwiped,
        actionType: TrackSchema.ActionTypes.Swipe,
        slideIndex: newPageNum,
        contextModule: title,
      })
      setCurrentPage(newPageNum)
    }
  }

  return (
    <Box mb={3}>
      <Flex
        flexDirection="row"
        flexWrap="nowrap"
        justifyContent="space-between"
        px={2}
      >
        <Sans size="4">{title}</Sans>
      </Flex>
      <Spacer mt={1} />
      <FlatList
        data={items}
        renderItem={({ item }: { item: any; index: number }) => {
          const url = item?.images?.[0]?.url
          return (
            <Animatable.View animation="fadeIn" duration={300}>
              <TouchableWithoutFeedback onPress={() => onPressItem(item)}>
                <Box mr={0.5} style={{ width: imageWidth }}>
                  <ProgressiveImage
                    // @ts-ignore
                    source={{ uri: url }}
                    style={{
                      width: imageWidth,
                      height: imageHeight,
                    }}
                  />
                </Box>
              </TouchableWithoutFeedback>
            </Animatable.View>
          )
        }}
        keyExtractor={(item: any, index: number) => item.id + index}
        showsHorizontalScrollIndicator={false}
        horizontal
        onScroll={onScroll}
        overScrollMode="always"
        snapToAlignment="start"
        decelerationRate="fast"
        scrollEventThrottle={299}
        directionalLockEnabled={true}
        snapToInterval={imageWidth + space(0.5)}
      />
    </Box>
  )
}
