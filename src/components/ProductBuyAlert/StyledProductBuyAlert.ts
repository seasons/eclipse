import { color } from "@/helpers"
import styled from "styled-components/native"
import { Flex, Sans } from "@/elements"

export const Root = styled(Flex)`
  background-color: ${color("white100")};
  border-top-right-radius: 20;
  border-top-left-radius: 20;
  flex: 1;
`

export const UnderlinedSans = styled(Sans)`
  text-decoration: underline;
  display: inline;
  cursor: pointer;
`
