import styled from "styled-components";

export interface ILayoutModalBackdropProps {
  show?: boolean;
}

export default styled.button<ILayoutModalBackdropProps>`
  border: none;
  outline: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: ${({ show }) => (show ? "0.75" : "0")};
  z-index: 2;

  transition: opacity 250ms ease;

  @media screen and (min-width: ${({ theme }) => theme.devices.landscape}) {
    display: none;
  }
`;
