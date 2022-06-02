import { LayoutContext } from "./Layout";
import { useTheme, DefaultTheme } from "styled-components";
import { useContext } from "react";
import LayoutSidebarStyled from "./LayoutSidebar.styled";
import LayoutSidebarHandle from "./LayoutSidebarHandle.styled";
import LayoutSidebarContent from "./LayoutSidebarContent.styled";

function onHandleClick(
  theme: DefaultTheme,
  sidebarExpanded,
  setSidebarExpanded
) {
  if (window.innerWidth > parseInt(theme.devices.landscape)) return;
  setSidebarExpanded(!sidebarExpanded);
}

const LayoutSidebar = ({ children }) => {
  const { sidebarExpanded, setSidebarExpanded } = useContext(LayoutContext);
  const theme = useTheme();

  return (
    <>
      <LayoutSidebarStyled>
        <LayoutSidebarHandle
          onClick={() =>
            onHandleClick(theme, sidebarExpanded, setSidebarExpanded)
          }
        >
          Read more
        </LayoutSidebarHandle>
        <LayoutSidebarContent expanded={sidebarExpanded}>
          {children}
        </LayoutSidebarContent>
      </LayoutSidebarStyled>
    </>
  );
};

export default LayoutSidebar;
