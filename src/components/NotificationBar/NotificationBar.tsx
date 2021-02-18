import { Box, Sans } from "@/elements"
import React from "react"
// import Svg from "react-native-svg-web"
// import styled from "styled-components"
import { ChevronIcon } from "@/icons/ChevronIcon"
import { TouchableOpacity } from "react-native-web"

export interface NotificationBarProps {
  title: string
  description: string
  onClick: () => void
  type: "P0" | "P1"
}

export const NotificationBar: React.FC<NotificationBarProps> = (
  {
    //   title,
    //   description,
    //   onClick,
  }
) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <Box
        style={{
          zIndex: 100,
          backgroundColor: "#B45455",
          width: "100%",
          padding: "15px 20px 15px 20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Sans size="3" color="white100">
            You have a past due invoice
          </Sans>
          <Sans size="3" color="#D8A8A9">
            Click to update your billing info and avoid having your membership
            cancelled
          </Sans>
        </Box>
        <ChevronIcon fillColor="#B45455" color="#D8A8A9" />
      </Box>
    </TouchableOpacity>
  )
}
