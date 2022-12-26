import "styled-components";
import light from "./theme";

declare module 'styled-components' {
    type ThemeType = typeof light;

    export interface DefaultTheme extends ThemeType {}
}
