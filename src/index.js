import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux';
import { store } from './redux/store'

const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'Apercu Arabic Pro';
    src: local('Apercu Arabic Pro Regular'), local('ApercuArabicPro-Regular'),
    url('fonts/ApercuArabicPro-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
`


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Global/>
    <App />
  </Provider>
);

