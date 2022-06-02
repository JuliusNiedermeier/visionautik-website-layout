import { useContext } from "react";
import { LayoutContext } from "./Layout";
import Container from "../Container";

export default (props) => {
  const { sidebarVisible } = useContext(LayoutContext);
  return <Container sidebar={sidebarVisible}>{props.children}</Container>;
};
