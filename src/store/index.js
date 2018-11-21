import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const midlewares = [];

const Store = ({ children, initState = {} }) => {
  const store = createStore(
    reducers,
    initState,
    applyMiddleware(...midlewares)
  );
  return <Provider store={store}>{children}</Provider>;
};

export default Store;
