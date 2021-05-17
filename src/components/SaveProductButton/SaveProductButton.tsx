import { SaveProductButtonProps } from "./SaveProductButton.shared"
import React, { useEffect, useState } from "react"
import { Box } from "@/elements"
import { SaveIcon } from "@/icons/SaveIcon"
import { useMutation } from "@apollo/client"
import { useTracking, TrackSchema } from "@/helpers/track"
import { SAVE_ITEM } from "./queries"
import styled from "styled-components"
import { SaveProductModal } from "../SaveProductModal"
import { Modal, Tooltip } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

export const SaveProductButton: React.FC<SaveProductButtonProps> = ({
  product,
  selectedVariant,
  onPressSaveButton,
  height,
  width,
  showSizeSelector,
  authState,
  onShowLoginModal,
  refetchQueries = [],
}) => {
  const isSaved = selectedVariant?.isSaved
    ? selectedVariant?.isSaved
    : product?.variants?.filter((variant) => variant.isSaved).length > 0
  const [isPopUpVisible, setIsPopUpVisible] = useState(false)
  const [enabled, setEnabled] = useState(isSaved)
  const tracking = useTracking()
  const [saveItem] = useMutation(SAVE_ITEM, {
    refetchQueries,
  })

  useEffect(() => {
    setEnabled(isSaved)
  }, [isSaved])

  if (product?.variants?.length === 0) {
    return null
  }

  const handleSaveItem = (variantID: string) => {
    tracking.trackEvent({
      actionName: TrackSchema.ActionNames.ProductSaved,
      actionType: TrackSchema.ActionTypes.Tap,
      saved: !isSaved,
    })
    setEnabled(!isSaved)
    saveItem({
      variables: {
        item: variantID,
        save: !isSaved,
      },
      awaitRefetchQueries: true,
      optimisticResponse: {
        __typename: "Mutation",
        saveProduct: {
          __typename: "Product",
          id: product.id,
          productVariant: {
            __typename: "ProductVariant",
            isSaved: !isSaved,
            id: variantID,
          },
        },
      },
    })
  }

  const handleSaveButton = () => {
    onPressSaveButton?.()
    if (!authState?.isSignedIn) {
      onShowLoginModal()
      return
    }

    if (showSizeSelector && !isSaved) {
      // Open size selector window, e.g. user is on browse page
      setIsPopUpVisible(true)
    } else if (selectedVariant) {
      handleSaveItem(selectedVariant.id)
    }
  }

  const handlePopUpDismiss = () => {
    setIsPopUpVisible(false)
  }

  return (
    <>
      <LightTooltip title="Save for later" placement="top-end">
        <Wrapper pl={2} pb={2} pt={0.5} onClick={handleSaveButton}>
          <SaveIcon
            width={width ? width : 16}
            height={height ? height : 22}
            enabled={!!enabled}
          />
        </Wrapper>
      </LightTooltip>
      <Modal open={isPopUpVisible} onClose={handlePopUpDismiss}>
        <ModalRoot>
          <SaveProductModal
            product={product}
            onDismiss={handlePopUpDismiss}
            onSaveItem={handleSaveItem}
          />
        </ModalRoot>
      </Modal>
    </>
  )
}

const LightTooltip = withStyles((_theme) => ({
  tooltip: {
    backgroundColor: "white",
    color: "black",
    fontSize: "12px",
    borderRadius: 0,
  },
}))(Tooltip)

const ModalRoot = styled(Box)`
  max-width: 800px;
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled(Box)`
  cursor: pointer;
  &:hover {
    path {
      fill: #000;
    }
  }
`
