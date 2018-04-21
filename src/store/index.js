import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import reducers from '../reducers';

const initialState = Object
  .keys(reducers)
  .reduce((ret, r) => ({
    ...ret,
    [r]: reducers[r](undefined, {})
  }), {});

const Context = React.createContext({ ...initialState });

const { Consumer } = Context;

export class Provider extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  dispatch = (action, getState = () => this.state) => {
    /* eslint no-useless-return: 0 */
    if (!action) return;
    else if (typeof action === 'function') {
      action(this.dispatch, getState);
    }
    else {
      const newState = Object
        .keys(reducers)
        .reduce((ret, r) => ({
          ...ret,
          [r]: reducers[r](this.state[r], action)
        }), {});
      this.setState({
        ...this.state,
        ...newState
      });
    }
  }

  render() {
    const { state, dispatch } = this;
    const store = {
      ...state,
      dispatch
    };
    return (
      <Context.Provider value={store}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const connect = (Component, { mapStateToProps, mapDispatchToProps }) => {
  const ConnectComponent = props => (
    <Consumer>
      {store => (
        <Component
          {...(mapStateToProps ? mapStateToProps(store) : {})}
          {...(mapDispatchToProps ? mapDispatchToProps(store.dispatch) : {})}
          {...props}
        />
      )}
    </Consumer>
  );
  ConnectComponent.displayName = `Connect(${Component.displayName || Component.name || 'Component'})`;
  return ConnectComponent;
};
