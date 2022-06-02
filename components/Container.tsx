import styled from "styled-components";

export interface IContainerProps {
  sidebar?: boolean;
  disable?: ["portrait" | "landscape"];
}

export default styled.div<IContainerProps>`
  padding-left: ${(props) => !props.disable?.includes("portrait") && "0.5rem"};
  padding-right: ${(props) => !props.disable?.includes("portrait") && "0.5rem"};

  @media (min-width: ${({ theme }) => theme.devices.landscape}) {
    padding-left: initial;
    padding-right: ${(props) =>
      props.sidebar
        ? `calc(${props.theme.space.sidebarWidth} + 1rem)`
        : "initial"};
    width: min(1500px, 80vw);
    min-width: ${(props) => props.disable?.includes("landscape") && "100vw"};
    margin-left: auto;
    margin-right: auto;
  }
`;
