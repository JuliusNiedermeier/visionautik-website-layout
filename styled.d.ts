import "styled-components";

type ColorCollection = {
  i100: string;
  i75: string;
  i50: string;
  i25: string;
};

type ColorCollectionPair = {
  primary: ColorCollection;
  secondary: ColorCollection;
};

declare module "styled-components" {
  export interface DefaultTheme {
    rootFontSize: string;

    devices: { portrait?: string; landscape: string };

    space: {
      sidebarWidth: string;
      micro: { sm: string; md: string; lg: string };
      macro: { sm: string; md: string; lg: string };
    };

    color: {
      background: ColorCollectionPair;
      text: ColorCollectionPair;
      brand: ColorCollectionPair;
    };
  }
}
