import React from "react"
import { color } from "@/helpers/color"
import { ImageProps, View } from "react-native"
import FadeIn from "react-native-fade-in-image"
import FastImage from "react-native-fast-image"
import styled from "styled-components/native"

interface ProgressiveImageProps extends ImageProps {
  radius?: boolean
  source: any
  backgroundColor?: string
}

export const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  backgroundColor,
  ...props
}) => {
  return (
    <Container radius={props.radius} backgroundColor={backgroundColor}>
      <FadeIn>
        <FastImage source={props.source} {...(props as any)} />
      </FadeIn>
    </Container>
  )
}

const Container = styled(View)<{ radius: boolean; backgroundColor?: string }>`
  background-color: ${(p) => p.backgroundColor || color("black04")};
  overflow: hidden;
  border-radius: ${(p) => (p.radius ? 15 : 0)};
`
