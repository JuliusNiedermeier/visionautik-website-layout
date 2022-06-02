import LayoutFooter from "./LayoutFooter.styled";
import { useContext } from "react";
import { LayoutContext } from "./Layout";

export default ({ children }) => {
  const { sidebarVisible } = useContext(LayoutContext);
  return (
    <LayoutFooter sidebarVisible={sidebarVisible}>{children}</LayoutFooter>
  );
};
