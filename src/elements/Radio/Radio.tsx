import debounce from "lodash/debounce"
import React from "react"
import styled from "styled-components"
import {
  BorderProps,
  borders,
  SizeProps,
  space as styledSpace,
  SpaceProps,
} from "styled-system"
import { Flex, FlexProps } from "@/elements/Flex/Flex"
import { SansSize } from "@/theme/theme"
import { Sans } from "@/elements/Typography"
import { Box } from "@/elements/Box"
import { color } from "../../helpers/color"
import { space } from "../../helpers/space"

/**
 * Spec: zpl.io/bAvnwlB
 */

export interface RadioProps extends FlexProps {
  /** The border radius of the radio button */
  borderRadius?: number
  /** Disable interactions */
  disabled?: boolean
  /** Select the button on render. If the Radio is inside a RadioGroup, use RadioGroup.defaultValue instead. */
  selected?: boolean
  /** Callback when selected */
  onSelect?: (selected: { selected: boolean; value: string }) => void
  /** Value of radio button */
  value?: string
  /** Name of the radio button */
  name?: string
  /** The label content, if not specified the children will be used  */
  label?: React.ReactNode
  labelSize?: SansSize
  pointerEventsNone?: boolean
  activeColor?: string
}

// @ts-ignore
export interface RadioToggleProps
  extends RadioProps,
    BorderProps,
    SizeProps,
    SpaceProps {}

/**
 * A Radio button
 *
 * Spec: zpl.io/bAvnwlB
 */
export const Radio: React.FC<RadioProps> = (props) => {
  const {
    borderRadius = 100,
    children,
    disabled,
    pointerEventsNone,
    onSelect: _onSelect,
    selected,
    value,
    label,
    labelSize = "2",
    activeColor,
    ...others
  } = props

  // Ensures that only one call to `onSelect` occurs, regardless of whether the
  // user clicks the radio element or the label.
  const onSelect = _onSelect && debounce(_onSelect, 0)

  const innerComponent = children || (
    <InnerCircle
      style={{ borderRadius }}
      activeColor={activeColor ?? color("black100")}
    />
  )

  return (
    <Flex
      flexDirection="row"
      alignItems="center"
      style={{ pointerEvents: pointerEventsNone ? "none" : "auto" }}
    >
      <Flex
        flexDirection="row"
        alignItems="center"
        onClick={() =>
          !disabled && onSelect && onSelect({ selected: !selected, value })
        }
      >
        <Container disabled={disabled} selected={selected} {...others}>
          <RadioButton
            role="presentation"
            border={1}
            borderRadius={borderRadius}
            mr={1}
            selected={selected}
            disabled={disabled}
          >
            {selected && innerComponent}
          </RadioButton>
        </Container>
      </Flex>
      {!!label && (
        <Flex flexDirection="row" alignItems="center" ml={1}>
          <Sans size={labelSize} color="black100">
            {label}
          </Sans>
        </Flex>
      )}
    </Flex>
  )
}

/**
 * A radio button with a border
 */
export const BorderedRadio = styled(Box)<RadioProps>`
  padding: ${space(2)}px;
  border: 1px solid ${color("black100")};
  transition: background-color 0.14s ease-in-out;
  :not(:first-child) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  :not(:last-child) {
    border-bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`

interface ContainerProps extends FlexProps {
  disabled: boolean
  selected: boolean
}

const Container = styled(Box)<ContainerProps>`
  display: flex;
  align-items: flex-start;
`

const InnerCircle = styled(Box)<{ activeColor: string }>`
  width: 14px;
  height: 14px;
  background-color: ${(p) => p.activeColor};
`

const RadioButton = styled(Box)<RadioToggleProps>`
  ${borders};
  ${styledSpace};
  display: flex;
  border: 1px solid
    ${(p) => (p.selected ? color("black100") : color("black25"))};
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  justify-content: center;
  align-items: center;
`
