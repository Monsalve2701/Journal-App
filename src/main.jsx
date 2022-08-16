import React from "react";
import ReactDOM from "react-dom/client";
import { JournalApp } from "../JournalApp";
import { BrowserRouter } from "react-router-dom";
import "./Styles.css";
import { Provider } from "react-redux";
import { storeDefault } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={ storeDefault }>

      <BrowserRouter>

        <JournalApp />

      </BrowserRouter>

    </Provider>
  </React.StrictMode>
);
