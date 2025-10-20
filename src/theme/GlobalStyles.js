import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    body {
        margin: 0;
        height: 100vh;
        background-color: ${props => props.theme.color.background};
        font-family: ${props => props.theme.fonts.base};
        color: ${props => props.theme.color.secondary};
    }
`;

export default GlobalStyles;