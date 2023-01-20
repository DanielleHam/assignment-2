import React from "react";
import ReactDOM from "react-dom/client";
import "./styling/index.css";
import App from "./components/App";
import Header from "./components/Header";
import Startup from "./components/Startup/Startup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Startup />
  </React.StrictMode>
);
