import styled from "styled-components";

export interface ILayoutFooterProps {
  sidebarVisible?: boolean;
}

export default styled.div<ILayoutFooterProps>`
  background-color: darkblue;
  padding-bottom: ${({ sidebarVisible }) => (sidebarVisible ? "6rem" : "1rem")};
  min-height: 20rem;
`;
