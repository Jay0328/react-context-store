import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { Provider } from './store';
import App from './components/App';

const history = createBrowserHistory();

render(
  <Provider>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('app')
);
