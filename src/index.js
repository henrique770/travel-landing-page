import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';
import { global } from './styles/global';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={global} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
