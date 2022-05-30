import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    devices: { desktop: string };
  }
}
