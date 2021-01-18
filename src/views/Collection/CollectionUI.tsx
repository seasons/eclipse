import { Flex } from "@/elements"
import React from "react"
import type { CollectionUIProps } from "./Collection"

export const CollectionUI: React.FC<CollectionUIProps> = ({
  data,
  fetchMore,
  loading,
  currentImage,
  setCurrentImage,
}) => {
  console.log(data, fetchMore, loading, currentImage, setCurrentImage)
  return <Flex flex={1}></Flex>
}
