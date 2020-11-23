import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { ThemeProvider } from "styled-components"; //一個 <ThemeProvider>的外層 Component 來實踐換網站主題設計的系統

const theme = {
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
      <App />
  </ThemeProvider>,
  document.getElementById('root')
);

