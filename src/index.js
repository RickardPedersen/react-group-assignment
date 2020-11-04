import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './globalStyle';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Theme } from './styles/theme'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme = {Theme}>
        <GlobalStyle/>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
