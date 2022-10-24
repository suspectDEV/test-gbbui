import { Div } from "@grubbe/ui";
import styled from "styled-components";
import { Irow } from ".";

export const StyledRow = styled(Div)<Irow>`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-flow: row wrap;
  ${(props) => props.mb && `margin-bottom:${props.mb}px;`}
  @media (min-width: 1064px) {
    padding-right: 40px;
    padding-left: 40px;
  }
  ${(props) =>
    props.fullWidth
      ? `padding-right:0;padding-left:0;`
      : `padding-right: 20px; padding-left: 20px;`}
`;
