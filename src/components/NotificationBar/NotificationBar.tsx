import { Box, Sans } from "@/elements"
import React from "react"
import styled from "styled-components"
import { ChevronIcon } from "@/icons/ChevronIcon"
import { Pressable } from "react-native-web"

export const NotificationBar: React.FC = () => {
  return (
    <Pressable
      onPressIn={() => {
        console.log("You tappeasd aet  as!")
      }}
    >
      {({ pressed }) => (
        <Container color={pressed ? "#B56464" : "#B45455"}>
          <Box>
            <Sans size="3" color="white100">
              You have a get past due invasoice get {pressed}
            </Sans>
            <Sans size="3" color="#D8A8A9">
              Click to update your billing info and avoid having your membership
              cancelled
            </Sans>
          </Box>
          <ChevronIcon fillColor="#B45455" color="#D8A8A9" />
        </Container>
      )}
    </Pressable>
  )
}

const Container = styled.div<{ color: string }>`
  background-color: ${(p) => p.color};
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px 15px 20px;
`
