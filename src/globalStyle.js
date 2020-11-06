import { createGlobalStyle } from 'styled-components';
import { Theme } from './styles/theme'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Roboto:wght@300;400;500&display=swap');

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