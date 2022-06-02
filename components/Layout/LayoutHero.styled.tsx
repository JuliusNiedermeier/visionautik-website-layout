import styled from "styled-components";

export default styled.div`
  position: relative;
  min-height: calc(1.5 * ${({ theme }) => theme.sidebarWidth});
  color: white;
`;
