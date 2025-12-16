import React from "react";
import ReactDOM from "react-dom/client"; // Importing from 'react-dom/client' in React 18+
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    {" "}
    <App />
  </Router>
);
