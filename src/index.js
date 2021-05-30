import ReactDOM from "react-dom";

import App from "./App";
import DialogProvider from "./context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <DialogProvider>
    <App />
  </DialogProvider>,
  rootElement
);
