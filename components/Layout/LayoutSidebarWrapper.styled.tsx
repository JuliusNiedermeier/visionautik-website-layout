import styled from "styled-components";
import Container from "../Container";

export default styled(Container)`
  position: sticky;
  bottom: 0;
  z-index: 2;

  @media screen and (min-width: ${({ theme }) => theme.devices.landscape}) {
    z-index: initial;
    position: absolute;
    top: -${({ theme }) => theme.space.sidebarWidth};
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    pointer-events: none;
  }
`;
