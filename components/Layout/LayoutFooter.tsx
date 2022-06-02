import LayoutFooterStyled from "./LayoutFooter.styled";
import { useContext } from "react";
import { LayoutContext } from "./Layout";

const LayoutFooter = ({ children }) => {
  const { sidebarVisible } = useContext(LayoutContext);
  return (
    <LayoutFooterStyled sidebarVisible={sidebarVisible}>
      {children}
    </LayoutFooterStyled>
  );
};

export default LayoutFooter;
