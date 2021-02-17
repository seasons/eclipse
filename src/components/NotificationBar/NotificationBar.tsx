import { Box, Sans } from "@/elements"
import React from "react"
// import styled from "styled-components"

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
    <Box
      style={{
        zIndex: 100,
        backgroundColor: "#B45455",
        width: "100%",
        padding: "15px 0px 15px 20px",
      }}
    >
      <Sans size="3" color="white100">
        You have a past due invoice
      </Sans>

      <Sans size="3" color="#D8A8A9">
        Click to update your billing info and avoid having your membership
        cancelled
      </Sans>
    </Box>
  )
}
