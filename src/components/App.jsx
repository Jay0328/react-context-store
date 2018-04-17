import React, { Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import Counter from './Counter';

const App = () => (
  <Fragment>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/counter/">Counter</Link>
    </nav>
    <Route exact strict path='/' render={() => <main>Home</main>} />
    <Route exact strict path='/counter/' component={Counter} />
  </Fragment>
);

export default App;
