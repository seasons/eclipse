import React, { useMemo, useRef, useState } from "react"
import { Box, Flex, Sans, Spacer } from "@/elements"
import { color, space } from "@/helpers"
import { Dimensions, FlatList, Linking, TouchableOpacity } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import ScrollBottomSheet from "react-native-scroll-bottom-sheet"
import { CarouselPageDots } from "@/components/CarouselPageDots"
import { Handle } from "@/components/Handle"
import { ReadMore } from "@/components/ReadMore"
import { ProductGridItem } from "@/components/ProductGridItem/ProductGridItem"
import { SNAP_PADDING } from "@/views/Collection/Collection"
import type { PopUpData } from "@/types"

const dimensions = Dimensions.get("window")

interface CollectionBottomSheetProps {
  currentImage: number
  showPopUp: (data: PopUpData) => any
  hidePopUp: () => void
  authState: any
  images: any[]
  products: any[]
  description: string
  title: string
  onEndReached: () => void
  metaData?: []
}

const MetaDataCarousel = ({ data }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(item, index) => item?.title + index}
      renderItem={({ item, index }) => (
        <Flex flexDirection="row" flexWrap="nowrap">
          {index !== 0 && (
            <Box
              style={{
                height: "100%",
                width: 1,
                backgroundColor: color("black10"),
              }}
            />
          )}
          {item?.title === "Website" ? (
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(item?.text)
              }}
            >
              <Box ml={index === 0 ? 0 : 3} mr={3}>
                <Sans size="4" color="black50">
                  {item?.title}
                </Sans>
                <Sans size="4">{item?.text}</Sans>
              </Box>
            </TouchableOpacity>
          ) : (
            <Box ml={index === 0 ? 0 : 3} mr={3}>
              <Sans size="4" color="black50">
                {item?.title}
              </Sans>
              <Sans size="4">{item?.text}</Sans>
            </Box>
          )}
        </Flex>
      )}
    />
  )
}

export const CollectionBottomSheet: React.FC<CollectionBottomSheetProps> = ({
  images,
  title,
  description,
  currentImage,
  showPopUp,
  hidePopUp,
  authState,
  products,
  onEndReached,
  metaData,
}) => {
  const [readMoreExpanded, setReadMoreExpanded] = useState(false)
  const [flatListHeight, setFlatListHeight] = useState(0)
  const insets = useSafeAreaInsets()
  const bottomSheetRef: React.MutableRefObject<
    ScrollBottomSheet<string>
  > = useRef(null)

  const imageContentHeight = dimensions.width

  const content = useMemo(() => {
    const numColumns = 2
    const topSnapPoint = 0
    const secondSnapPoint = imageContentHeight - insets.top - SNAP_PADDING
    const hasImages = images?.length > 0
    const snapPoints = hasImages
      ? [topSnapPoint, secondSnapPoint]
      : [topSnapPoint]
    const initialSnapPoint = hasImages ? 1 : 0

    return (
      <ScrollBottomSheet<string>
        topInset={SNAP_PADDING}
        componentType="FlatList"
        enableOverScroll
        ListHeaderComponent={() => (
          <Box px={2}>
            <Spacer mb={1} />
            <Flex
              flexDirection="row"
              alignItems="flex-start"
              flexWrap="nowrap"
              justifyContent={hasImages ? "space-between" : "flex-start"}
            >
              <Sans size="7" style={{ textDecorationLine: "underline" }}>
                {title}
              </Sans>
              {hasImages && (
                <Box pt={0.5}>
                  <CarouselPageDots
                    slideCount={images?.length}
                    currentSlide={currentImage - 1}
                  />
                </Box>
              )}
            </Flex>
            {!!description && (
              <>
                <Spacer mb={3} />
                <Sans size="4">About</Sans>
                <Spacer mb={0.5} />
                <ReadMore
                  readMoreExpanded={readMoreExpanded}
                  setReadMoreExpanded={setReadMoreExpanded}
                  content={description}
                  maxChars={100}
                />
              </>
            )}
            {metaData?.length > 0 && (
              <Box mt={3}>
                <MetaDataCarousel data={metaData} />
              </Box>
            )}
            <Spacer mb={3} />
          </Box>
        )}
        ListFooterComponent={() => <Spacer mb={3} />}
        containerStyle={{
          backgroundColor: "white",
          borderRadius: 20,
          marginTop: insets.top + SNAP_PADDING,
        }}
        snapPoints={snapPoints}
        initialSnapIndex={initialSnapPoint}
        renderHandle={() => (
          <Handle
            style={{ marginTop: space(2), marginBottom: space(1) }}
            backgroundColor="black10"
          />
        )}
        keyExtractor={(item: any, index) => item?.node?.id + index}
        data={products}
        numColumns={numColumns}
        onEndReachedThreshold={0.7}
        onEndReached={onEndReached}
        // @ts-ignore
        renderItem={({ item }: { item: any }, i) => {
          const product = item?.node
          return (
            <ProductGridItem
              product={product}
              showPopUp={showPopUp}
              hidePopUp={hidePopUp}
              authState={authState}
              addLeftSpacing={i % numColumns !== 0}
            />
          ) as any
        }}
        onLayout={(e) => {
          if (!flatListHeight) {
            setFlatListHeight(e.nativeEvent.layout.height)
          }
        }}
        ref={bottomSheetRef}
        animationConfig={{
          duration: 200,
        }}
      />
    )
  }, [
    imageContentHeight,
    currentImage,
    insets,
    onEndReached,
    images,
    description,
    products,
    hidePopUp,
    showPopUp,
    authState,
    title,
    flatListHeight,
    readMoreExpanded,
    setReadMoreExpanded,
    metaData,
  ])

  return <>{content}</>
}
