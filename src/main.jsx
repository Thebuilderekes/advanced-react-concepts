import React from "react";
import ReactDOM from "react-dom/client";
//import App from './App'
import "./index.css";
import Conditional from "./tutorial/react-book/conditional_rendering/Conditional.jsx";
import Styling from "./tutorial/react-book/conditional_rendering/Styling.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Conditional />
    <Styling />
  </React.StrictMode>,
);
