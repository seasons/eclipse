import { Flex } from "@/elements";
import { Button } from "@/components";
import React from "react";
import styled from "styled-components";
import { space } from "@/helpers/space";
export const FixedButton = (props) => {
    return (React.createElement(FlexWrapper, { px: 2, positionBottom: props.positionBottom ? props.positionBottom : space(2), alignContent: "center", justifyContent: "center", flexDirection: "row" },
        React.createElement(Button, Object.assign({ onClick: props.onPress }, props), props.children)));
};
const FlexWrapper = styled(Flex) `
  position: absolute;
  bottom: ${(p) => p.positionBottom}px;
  z-index: 100;
  right: 0;
  left: 0;
`;
