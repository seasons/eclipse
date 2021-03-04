import { Box } from "@/elements/Box";
import { color } from "@/helpers/color";
import styled from "styled-components/native";
/**
 * A handle displayed on top of modal screens to indicate to users that
 * they can drag it.
 */
export const Handle = styled(Box) `
  width: 40px;
  height: 5px;
  border-radius: 100;
  background-color: ${(props) => !!props.backgroundColor ? color(props.backgroundColor) : color("white100")};
  margin: auto;
`;
