import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CoursesApi from "./ContextApi/CoursesApi";
import { GlobalStyle } from "./GlobalStyles/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <CoursesApi>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CoursesApi>
  </React.StrictMode>
);
