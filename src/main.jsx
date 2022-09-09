import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
// import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
// Swiper
import "swiper/css/bundle";

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import "./index.css";
// import { Provider } from "react-redux";
// import store from "./sagas/configureStore";

// const container = document.getElementById("root");
// const root = createRoot(container);

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
