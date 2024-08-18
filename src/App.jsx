import { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Learning from "./tutorial/react-book/Learning";
import Counter from "./tutorial/react-book/Counter";
import LoginForm from "./tutorial/react-book/LoginForm";

import {
  SearchBar,
  Overview,
} from "./tutorial/react-book/lift_state/Overview.jsx";
import {
  InputBar,
  Evaluate,
} from "./tutorial/react-book/lift_state/Calculator.jsx";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputNumber1, setInputNumber1] = useState("");
  const [inputNumber2, setInputNumber2] = useState("");
  const [operationValue, setOperationValue] = useState("*");
  const [result, setResult] = useState(null);

  function updateSearchTermHandler(event) {
    setSearchTerm(event.target.value);
  }

  function evaluateInputNumber1(e) {
    setInputNumber1(e.target.value);
  }

  function evaluateInputNumber2(e) {
    setInputNumber2(e.target.value);
  }

  function evaluateOperationValue(e) {
    setOperationValue(e.target.value);
  }

  function calculateResult() {
    const num1 = parseFloat(inputNumber1);
    const num2 = parseFloat(inputNumber2);
    let calculatedResult;

    if (operationValue === "+") {
      calculatedResult = num1 + num2;
    } else if (operationValue === "-") {
      calculatedResult = num1 - num2;
    } else if (operationValue === "*") {
      calculatedResult = num1 * num2;
    } else if (operationValue === "/") {
      calculatedResult = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
    } else {
      calculatedResult = "Invalid operation";
    }

    setResult(calculatedResult);
  }

  return (
    <Section className="App">
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Router>

        <Learning
          heading="Learning React in depth"
          subHeading="Getting in depth react Knowledge"
          bodyText="My Journey to becoming React developer and professional teacher"
        />
      </div>
      <Counter />
      <LoginForm />
      <div>
        <h3>Lifting state up</h3>
        <SearchBar onUpdateSearch={updateSearchTermHandler} />
        <Overview currentTerm={searchTerm} />
      </div>
      <div>
        <h3>Calculator app</h3>
        <InputBar value={inputNumber1} onChange={evaluateInputNumber1} />
        <Evaluate value={operationValue} onChange={evaluateOperationValue} />
        <InputBar value={inputNumber2} onChange={evaluateInputNumber2} />

        <button onClick={calculateResult}>=</button>
        <p>Result: {result}</p>
      </div>
    </Section>
  );
}

export default App;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
