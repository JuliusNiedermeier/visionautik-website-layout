import { useContext } from "react";
import { LayoutContext } from "./Layout";
import Container from "../Container";

const LayoutContainer = (props) => {
  const { sidebarVisible } = useContext(LayoutContext);
  return <Container sidebar={sidebarVisible}>{props.children}</Container>;
};

export default LayoutContainer;
