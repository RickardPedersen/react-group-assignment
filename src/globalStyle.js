import { createGlobalStyle } from 'styled-components';
import { Theme } from './styles/theme'

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: ${Theme.colors.bg}
    }

    body.modal-open {
        max-height: 100vh;
        overflow: hidden;
    }

    * {
        box-sizing: border-box;
    }
`