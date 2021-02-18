import { Sans } from "@/elements"
import { Box } from "@/elements/Box"
import React from "react"
import styled from "styled-components/native"
import { ChevronIcon } from "@/icons/ChevronIcon/ChevronIcon"
import { Pressable } from "react-native"

export const NotificationBar: React.FC = () => {
  return (
    <Pressable
      onPressIn={() => {
        alert("You tapped aet!")
      }}
    >
      {({ pressed }) => (
        <Container color={pressed ? "#B56464" : "#B45455"}>
          <Box>
            <Sans size="4" color="white">
              You have a past due invoice yao attae asde yoo
            </Sans>
            <Sans size="4" color="#D8A8A9">
              Tap here to update your billing info
            </Sans>
          </Box>
          <ChevronIcon fillColor="#B45455" color="#D8A8A9" />
        </Container>
      )}
    </Pressable>
  )
}

const Container = styled(Box)<{ color: string }>`
  border-bottom-left-radius: 28;
  border-bottom-right-radius: 28;
  background-color: ${(p) => p.color};
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 100;
  padding: 20px 15px 20px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
