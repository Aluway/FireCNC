import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import Spinner from "./utility/Spinner/Spinner";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import reduxPromise from "redux-promise";

//redux persist setup
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //defaults to localStorage for web
import { PersistGate } from "redux-persist/integration/react";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ["siteModal"], // if you don't want it
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = applyMiddleware(reduxPromise)(createStore)(persistedReducer);
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Spinner />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
