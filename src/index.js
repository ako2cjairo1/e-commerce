import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { initialState, reducer } from './reducer';
import { ProductProvider } from './ProductProvider';

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider initialState={initialState} reducer={reducer}>
      <App />
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
