import styled from "styled-components";
import { useContext } from "react";
import { LayoutContext } from "./Layout";

export default styled.div`
  background-color: white;
  padding-bottom: ${() => {
    return useContext(LayoutContext).sidebarVisible ? "6rem" : "1rem";
  }};
`;
