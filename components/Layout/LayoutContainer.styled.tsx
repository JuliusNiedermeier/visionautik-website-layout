import styled from "styled-components";
import { useContext } from "react";
import { LayoutContext } from "./Layout";

export interface IContainerProps {
  respectSidebar?: boolean;
  disable?: ["portrait" | "landscape"];
}

const LayoutContainer = styled.div<IContainerProps>`
  padding-left: ${(props) => !props.disable?.includes("portrait") && "0.5rem"};
  padding-right: ${(props) => !props.disable?.includes("portrait") && "0.5rem"};

  @media (min-width: ${({ theme }) => theme.devices.landscape}) {
    padding-left: initial;

    padding-right: ${(props) => {
      const { sidebarVisible } = useContext(LayoutContext);
      return sidebarVisible && props.respectSidebar
        ? `calc(${props.theme.space.sidebarWidth} + 1rem)`
        : "initial";
    }};

    width: min(1500px, 80vw);
    min-width: ${(props) => props.disable?.includes("landscape") && "100vw"};
    margin-left: auto;
    margin-right: auto;
  }
`;

LayoutContainer.defaultProps = {
  respectSidebar: true,
};

export default LayoutContainer;
