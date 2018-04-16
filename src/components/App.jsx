import React from 'react';
import PropTypes from 'prop-types';
import { connect } from '../store';
import { plus, plusIfOdd } from '../actions/counter';

const mapStateToProps = state => ({
  count: state.counter.count
});

const mapDispatchToProps = dispatch => ({
  plusNum: num => () => dispatch(plus(num)),
  plusNumIfOdd: num => () => dispatch(plusIfOdd(num))
});

const App = ({ count, plusNum, plusNumIfOdd }) => (
  <main>
    {count}
    <button onClick={plusNum(1)}>+1</button>
    <button onClick={plusNumIfOdd(1)}>+1 if odd</button>
  </main>
);

App.propTypes = {
  count: PropTypes.number.isRequired,
  plusNum: PropTypes.func.isRequired,
  plusNumIfOdd: PropTypes.func.isRequired
};

export default connect(App, { mapStateToProps, mapDispatchToProps });
