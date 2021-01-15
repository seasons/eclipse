import { Flex } from "@/elements"
import React from "react"
import type { CollectionProps } from "./Collection"

export const CollectionUI: React.FC<CollectionProps> = ({
  data,
  fetchMore,
  loading,
  currentImage,
  setCurrentImage,
}) => {
  console.log(data, fetchMore, loading, currentImage, setCurrentImage)
  return <Flex flex={1}></Flex>
}
