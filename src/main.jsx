import React from "react";
import ReactDOM from "react-dom/client";
import Conditional from "./tutorial/react-book/conditional_rendering/Conditional.jsx";
import Styling from "./tutorial/react-book/conditional_rendering/Styling.jsx";
import Texts from "../src/tutorial/react-book/css_modules/TextBox/TextBox.jsx";
import CheckRef from "../src/tutorial/react-book/portals_ref/CheckRef.jsx";
import Button from "../src/tutorial/react-book/conditional_rendering/Button.jsx";
import CheckMemo from "../src/tutorial/react-book/memoFunc/CheckMemo.jsx";


import UseStateComp from "../src/tutorial/react-book/UseState.jsx";
import AlertBox from "../src/tutorial/react-book/effects/Alert.jsx";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Conditional />
    <Styling />
    <Texts />
    <CheckRef />
    <Button />
    <AlertBox />
    <UseStateComp/>
    <CheckMemo/>
  </React.StrictMode>,
);

