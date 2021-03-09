import React from "react"
import { FlatList, TouchableWithoutFeedback } from "react-native"
import { TrackSchema, useTracking } from "@/helpers/track"
import * as Animatable from "react-native-animatable"
import { ProgressiveImage } from "../Image/ProgressiveImage"
import { useState } from "react"
import { space } from "@/helpers"
import type { CollectionsRailProps } from "./CollectionsRail.shared"
import { Box, Flex, Sans, Spacer } from "@/elements"
import styled from "styled-components/native"

export const CollectionsRail: React.FC<CollectionsRailProps> = ({
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
      <Box px={2}>
        <Sans size="4">{title}</Sans>
      </Box>
      <Spacer mt={1} />
      <FlatList
        data={items}
        renderItem={({ item }: { item: any; index: number }) => {
          const url = item?.images?.[0]?.url
          const showTextOverlay = item?.displayTextOverlay
          const textOverlayColor = item?.textOverlayColor
          return (
            <Animatable.View animation="fadeIn" duration={300}>
              <TouchableWithoutFeedback onPress={() => onPressItem(item)}>
                <Box
                  mr={0.5}
                  style={{
                    width: imageWidth,
                    position: "relative",
                    height: imageHeight,
                  }}
                >
                  <ProgressiveImage
                    // @ts-ignore
                    source={{ uri: url }}
                    style={{
                      width: imageWidth,
                      height: imageHeight,
                    }}
                  />
                  {showTextOverlay && (
                    <TextOverlay px={4}>
                      {!!item.title && (
                        <Sans
                          size="2"
                          color={
                            textOverlayColor ? textOverlayColor : "white100"
                          }
                          style={{ textAlign: "center" }}
                        >
                          {item.title}
                        </Sans>
                      )}
                      {!!item.subTitle && (
                        <Sans
                          size="4"
                          color={
                            textOverlayColor ? textOverlayColor : "white100"
                          }
                          style={{ textAlign: "center" }}
                        >
                          {item.subTitle}
                        </Sans>
                      )}
                    </TextOverlay>
                  )}
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

const TextOverlay = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`
