import styled from "styled-components";

export default styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  @media screen and (min-width: ${({ theme }) => theme.devices.landscape}) {
    width: ${({ theme }) => theme.sidebarWidth};
    position: sticky;
    top: calc(0.5 * ${({ theme }) => theme.sidebarWidth});
    pointer-events: all;
  }
`;
