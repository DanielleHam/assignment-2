import React from "react";
import ReactDOM from "react-dom/client";
import "./styling/index.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import Startup from "./components/Startup/Startup";
import { UserProvider } from "./UserContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Translation from "./components/Translation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Startup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/translation" element={<Translation />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
