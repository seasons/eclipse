import React, { useState } from "react"
import gql from "graphql-tag"
import { FlatList, TouchableWithoutFeedback } from "react-native"
import styled from "styled-components"
import {
  Button,
  ProgressiveImage,
  Separator,
  FixedBackArrow,
  Loader,
} from "@/components"
import { Box, Flex, Sans, Spacer } from "@/elements"
import Radio from "@material-ui/core/Radio"
import { color, space, sizeToName, TrackSchema, useTracking } from "@/helpers"

interface SaveProductProps {
  onDismiss: () => void
  onSaveItem: (variantID: string) => void
  product: any
}

export const SaveProductModal_Product = gql`
  fragment SaveProductModal_Product on Product {
    id
    description
    name
    type
    variants {
      id
      isSaved
      internalSize {
        id
        top {
          id
          letter
        }
        bottom {
          id
          value
        }
      }
    }
    extraLargeImages: images(size: XLarge) {
      url
    }
    brand {
      id
      name
    }
  }
`

export const SaveProductModal: React.FC<SaveProductProps> = ({
  product,
  onDismiss,
  onSaveItem,
}) => {
  const tracking = useTracking()
  const [selectedVariantID, setSelectedVariantID] = useState(null)

  if (!product) {
    return (
      <>
        <FixedBackArrow onPress={onDismiss} />
        <Loader />
      </>
    )
  }

  const images = product.extraLargeImages

  const { description, name, type, variants } = product

  const brandName = product?.brand?.name

  if (!type) {
    return (
      <>
        <FixedBackArrow onPress={onDismiss} variant="whiteBackground" />
        <Loader />
      </>
    )
  }

  const onSelectSize = (variantID) => {
    tracking.trackEvent({
      actionName: TrackSchema.ActionNames.SizeButtonTapped,
      actionType: TrackSchema.ActionTypes.Tap,
    })
    setSelectedVariantID(variantID)
  }

  const renderItem = (item) => {
    switch (item.type) {
      case "Header":
        return (
          <>
            <Spacer mt={2} />
            <Flex flexDirection="row" justifyContent="space-between">
              <Flex flex={2} flexDirection="column" justifyContent="flex-end">
                <Sans size="3">{name}</Sans>
                {!!brandName && (
                  <Sans size="3" color={color("black50")}>
                    {brandName}
                  </Sans>
                )}
              </Flex>
              <ImageContainer>
                <ProgressiveImage
                  alt={`Image of ${product?.name}`}
                  size="small"
                  source={{ uri: images?.[0]?.url || "" }}
                />
              </ImageContainer>
            </Flex>
            <Spacer mt={2} />
            <Sans size="3" color={color("black50")}>
              {description}
            </Sans>
            <Spacer mt={2} />
            <Separator />
          </>
        )
      case "Sizes":
        const renderSizeRow = (item) => {
          const {
            id,
            internalSize: { bottom, top },
            isSaved,
          } = item
          let sizeName
          switch (type) {
            case "Top":
              sizeName = sizeToName(top?.letter)
              break
            case "Bottom":
              sizeName = bottom?.value
              break
          }

          return (
            <TouchableWithoutFeedback onPress={() => onSelectSize(id)}>
              <Box>
                <Spacer mt={20} />
                <Flex flexDirection="row" justifyContent="space-between">
                  <Flex flexDirection="row" alignItems="center">
                    <Radio
                      checked={id === selectedVariantID}
                      value={id}
                      onChange={() => onSelectSize(id)}
                    />
                    <Sans
                      color={color("black100")}
                      ml={1}
                      size="3"
                      weight="medium"
                    >
                      {sizeName}
                    </Sans>
                  </Flex>
                  {isSaved && (
                    <Sans color={color("black50")} size="3" weight="medium">
                      (Saved)
                    </Sans>
                  )}
                </Flex>
                <Spacer mt={20} />
                <Separator color={color("black10")} />
              </Box>
            </TouchableWithoutFeedback>
          )
        }
        return (
          <FlatList
            extraData={{ selectedVariantID }}
            data={item?.variants || []}
            keyExtractor={(_item, index) => String(index)}
            renderItem={({ item }) => renderSizeRow(item)}
          />
        )
      default:
        return null
    }
  }

  const onPressSaveBtn = () => {
    if (selectedVariantID) {
      onSaveItem(selectedVariantID)
    }
    onDismiss()
  }

  const buttonHeight = 48
  const sections = [{ type: "Header" }, { type: "Sizes", variants }]

  return (
    <Container>
      <Box px={2}>
        <FlatList
          data={sections}
          keyExtractor={(_item, index) => String(index)}
          renderItem={({ item }) => renderItem(item)}
          ListFooterComponent={() => <Spacer mb={buttonHeight + space(4)} />}
        />
      </Box>
      <Flex alignItems={"stretch"} mb={2} px={2}>
        <Box flex={1}>
          <Button
            block
            variant="primaryWhite"
            onClick={() => {
              tracking.trackEvent({
                actionName:
                  TrackSchema.ActionNames.SaveProductModalCancelTapped,
                actionType: TrackSchema.ActionTypes.Tap,
              })
              onDismiss()
            }}
          >
            Cancel
          </Button>
        </Box>
        <Spacer ml={2} />
        <Box flex={1}>
          <Button
            block
            disabled={selectedVariantID === null}
            variant="primaryBlack"
            onClick={() => {
              tracking.trackEvent({
                actionName: TrackSchema.ActionNames.SaveProductModalSaveTapped,
                actionType: TrackSchema.ActionTypes.Tap,
              })
              onPressSaveBtn()
            }}
          >
            Save
          </Button>
        </Box>
      </Flex>
    </Container>
  )
}

const Container = styled.div`
  max-height: 100vh;
  overflow: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${color("white100")};
  border: solid 1px ${color("black100")};
`

const ImageContainer = styled.div`
  background: #f6f6f6;
  flex: 1;
`
