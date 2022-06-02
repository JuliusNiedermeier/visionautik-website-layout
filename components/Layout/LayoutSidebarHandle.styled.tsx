import styled from "styled-components";
import Container from "../Container";

export default styled(Container)`
  background-color: darkblue;
  padding-top: 2rem;
  padding-bottom: 1rem;
  color: white;
  border-radius: 0.5rem 0.5rem 0 0;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    top: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    height: 3px;
    width: 25%;
    border-radius: 1.5px;
    background-color: white;
    opacity: 0.5;
  }

  @media screen and (min-width: ${({ theme }) => theme.devices.landscape}) {
    display: none;
  }
`;
