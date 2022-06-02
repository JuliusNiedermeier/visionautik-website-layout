import { LayoutContext } from "./Layout";
import { useTheme, DefaultTheme } from "styled-components";
import { useContext } from "react";
import LayoutSidebar from "./LayoutSidebar.styled";
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

export default ({ children }) => {
  const { sidebarExpanded, setSidebarExpanded } = useContext(LayoutContext);
  const theme = useTheme();

  return (
    <>
      <LayoutSidebar>
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
      </LayoutSidebar>
    </>
  );
};
