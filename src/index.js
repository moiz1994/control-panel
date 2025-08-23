import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// PrimeReact theme (pick one)
// import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/themes/lara-light-purple/theme.css";

// Core PrimeReact styles
import "primereact/resources/primereact.min.css";

// PrimeFlex utilities (optional but useful for layouts)
import "primeflex/primeflex.css";

// PrimeIcons (needed for icons in DataTable like sort/filter icons)
import "primeicons/primeicons.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
