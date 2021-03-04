import React from "react";
import styled from "styled-components";
import { NotificationBarTemplate, } from "./NotificationBar.shared";
export const NotificationBar = (props) => {
    return (React.createElement(NotificationBarTemplate, Object.assign({ containerComponent: Container, type: "web" }, props)));
};
const Container = styled.div `
  background-color: ${(p) => p.color};
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px 15px 20px;
`;
