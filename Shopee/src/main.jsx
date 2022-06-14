import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {store} from "./Stote/Store";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
