import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    devices: { portrait?: string; landscape: string };
    sidebarWidth: string;
  }
}
