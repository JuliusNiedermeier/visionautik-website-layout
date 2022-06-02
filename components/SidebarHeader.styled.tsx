import styled from "styled-components";

export default styled.div`
  background-color: darkblue;
  color: white;

  @media (min-width: ${({ theme }) => theme.devices.landscape}) {
    width: 100%;
    aspect-ratio: 1;
  }
`;
