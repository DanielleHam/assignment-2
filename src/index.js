import React from "react";
import ReactDOM from "react-dom/client";
import "./styling/index.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import Startup from "./components/Startup/Startup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Startup />
  </React.StrictMode>
);
