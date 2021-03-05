import React from "react"

interface Props {
  color?: string
}

export const CloseXIcon = (props: Props) => (
  <svg width={12} height={12} {...props}>
    <g
      transform="rotate(45 9.414 4.586)"
      fill={props.color || "#FFF"}
      fillRule="evenodd"
    >
      s
      <rect x={7} width={2} height={16} rx={1} />
      <rect transform="rotate(90 8 8)" x={7} width={2} height={16} rx={1} />
    </g>
  </svg>
)
