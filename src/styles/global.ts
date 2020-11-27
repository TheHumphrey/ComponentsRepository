import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body {
        width: 100vw;
        height: 100vh;

        color: #000;
        background: #edf2f9;
    }
`;