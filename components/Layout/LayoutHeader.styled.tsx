import styled from "styled-components";

export default styled.div`
  background-color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 1;

  border-bottom: 1px solid #f0f0f0;

  padding-top: 1rem;
  padding-bottom: 1rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
