import React from 'react';
import ReactDOM from 'react-dom';
import { defineCustomElements } from '@garfish/web-component';
import App from './app';
import 'antd/dist/antd.css';
import './index.css';

const getLoading = () => {
  let loadingElement = document.createElement('div');
  loadingElement.setAttribute('style', 'font-size:20px; text-align: center;');
  loadingElement.innerHTML = `loading`;
  return loadingElement;
};

const getError = (error) => {
  let loadingElement = document.createElement('div');
  loadingElement.setAttribute('style', 'font-size:20px; text-align: center;');
  loadingElement.innerHTML = `load app get error: ${error.message}`;
  console.error(error);
  return loadingElement;
};

defineCustomElements('micro-portal', {
  loading: ({ isLoading, error }) => {
    if (error) return getError(error);
    if (isLoading) return getLoading();
    return null;
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App basename={'/'} />
  </React.StrictMode>,
  document.querySelector('#root'),
);