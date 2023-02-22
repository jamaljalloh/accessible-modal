import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import reportAccessibility from "./utils/reportWebAccessibility";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportAccessibility(React);
reportWebVitals();
