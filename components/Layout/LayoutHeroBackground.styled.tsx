import styled from "styled-components";

export default styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: -1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  @media screen and (min-width: ${({ theme }) => theme.devices.landscape}) {
    &::before {
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.5), transparent);
    }
  }
`;
