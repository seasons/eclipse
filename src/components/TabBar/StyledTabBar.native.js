import styled from "styled-components/native";
import { TouchableWithoutFeedback, View } from "react-native";
import { Box } from "@/elements";
export const Button = styled(TouchableWithoutFeedback) `
  flex: 1;
`;
export const Tabs = styled(View) `
  height: 55px;
  flex-direction: row;
  justify-content: space-around;
`;
export const TabButton = styled(View) `
  align-items: center;
  justify-content: center;
  padding-top: 5;
  flex-grow: 1;
  border-color: transparent;
  border-bottom-width: 3px;
  ${(p) => p.spaceEvenly && `flex: 1;`};
  ${(p) => p.active &&
    `
    border-color: ${p.tabColor ? p.tabColor : "#000000"};
  `};
`;
export const Wrapper = styled(Box) `
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
`;
