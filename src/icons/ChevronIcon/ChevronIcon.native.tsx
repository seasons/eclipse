import React from "react"
import Svg, { G, Path, SvgProps } from "react-native-svg"
import { View } from "react-native"

interface Props extends SvgProps {
  rotateDeg?: string
  scale?: number
  fillColor?: string
}

export const ChevronIcon = (props: Props) => {
  const rotationStyle = props.rotateDeg
    ? { transform: [{ rotate: props.rotateDeg }] }
    : {}
  const scale = props.scale || 1
  const fillColor = props.fillColor || "#fff"
  return (
    <View {...props}>
      <Svg
        width={11 * scale}
        height={18 * scale}
        viewBox="0 0 11 18"
        style={rotationStyle}
      >
        <G fill="none" fillRule="evenodd">
          <Path fill={fillColor} d="M0 0h11v18H0z" />
          <Path
            stroke={props.color || "#C6C6C6"}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2 2l7 7-7 7"
          />
        </G>
      </Svg>
    </View>
  )
}
