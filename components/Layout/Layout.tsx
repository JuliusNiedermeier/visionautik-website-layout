import React, { createContext, useState } from "react";

import LayoutHeader from "./LayoutHeader.styled";
import LayoutHero from "./Hero/LayoutHero.styled";
import LayoutHeroWrapper from "./Hero/LayoutHeroWrapper.styled";
import LayoutSidebar from "./Sidebar/LayoutSidebar";
import LayoutSidebarWrapper from "./Sidebar/LayoutSidebarWrapper.styled";
import LayoutMain from "./LayoutMain.styled";
import LayoutFooter from "./LayoutFooter";
import LayoutModalBackdrop from "./LayoutModalBackdrop.styled";
import Relative from "../Relative.styled";

interface ILayoutContext {
  sidebarVisible: boolean;
  sidebarExpanded: boolean;
  setSidebarExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LayoutContext: React.Context<ILayoutContext> = createContext(null);

const Layout = (props) => {
  let areas = {
    header: null,
    hero: null,
    sidebar: null,
    main: null,
    footer: null,
  };

  React.Children.forEach(props.children, (child) => {
    if (child.type == LayoutHeader) areas.header = child;
    if (child.type == LayoutHero) areas.hero = child;
    if (child.type == LayoutSidebar) areas.sidebar = child;
    if (child.type == LayoutMain) areas.main = child;
    if (child.type == LayoutFooter) areas.footer = child;
  });

  const sidebarVisible = areas.sidebar ? true : false;
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  return (
    <LayoutContext.Provider
      value={{ sidebarVisible, sidebarExpanded, setSidebarExpanded }}
    >
      <LayoutModalBackdrop
        onClick={() => setSidebarExpanded(false)}
        show={sidebarExpanded}
      />
      {areas.header}
      <Relative>
        {areas.hero && <LayoutHeroWrapper>{areas.hero}</LayoutHeroWrapper>}
        <Relative>
          {areas.main}
          <LayoutSidebarWrapper disable={["portrait"]}>
            {areas.sidebar}
          </LayoutSidebarWrapper>
        </Relative>
      </Relative>
      {areas.footer}
    </LayoutContext.Provider>
  );
};

export default Layout;
