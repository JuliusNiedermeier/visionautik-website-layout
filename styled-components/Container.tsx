import styled from "styled-components";

export default styled.div`
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  @media (min-width: ${({ theme }) => theme.devices.desktop}) {
    padding-left: initial;
    padding-right: initial;
    width: min(1500px, 80vw);
    margin-left: auto;
    margin-right: auto;
  }
`;
