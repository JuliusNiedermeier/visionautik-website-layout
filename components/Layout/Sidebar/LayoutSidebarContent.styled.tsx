import styled from "styled-components";

export interface ILayoutSidebarContentProps {
  expanded?: boolean;
}

export default styled.div<ILayoutSidebarContentProps>`
  height: ${({ expanded }) => (expanded ? "60vh" : "0")};
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  transition: height 250ms ease;

  @media screen and (min-width: ${({ theme }) => theme.devices.landscape}) {
    height: initial;
    display: block;
  }
`;
