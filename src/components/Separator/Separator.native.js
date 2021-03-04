import styled from "styled-components/native";
import { color } from "@/helpers/color";
import { space, width } from "styled-system";
/**
 * A horizontal divider whose width and spacing can be adjusted
 */
export const Separator = styled.View `
  border: 1px solid ${(props) => props.color || color("black10")};
  border-bottom-width: 0;
  ${space};
  ${width};
`;
Separator.defaultProps = {
    width: "100%",
};
