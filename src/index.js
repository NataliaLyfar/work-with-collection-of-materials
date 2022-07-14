import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import {GlobalStyle} from 'styleConfig/GlobalStyle';
import {theme} from 'styleConfig/theme';
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);
