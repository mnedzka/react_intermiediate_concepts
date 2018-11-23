import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "reducers";
import async from "middlewares/async";

export default ({ children, initialState = {} }) => {
  const store = createStore(reducers, initialState, applyMiddleware(async));
  return (
    <div>
      <Provider store={store}>{children}</Provider>
    </div>
  );
};
