import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { Provider } from "react-redux";
// import store from "./application/storeRedux.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <Provider store={store}>
  <App />
  // </Provider>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
);
