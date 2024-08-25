import { useState } from "react";

import { Todos } from "./List.jsx";
import styled from "styled-components";

export default function Conditional() {
  const [todoList, setTodoList] = useState([
    "Learn React",
    "Recommend this book",
  ]);
  const [todoItem, setTodoItem] = useState("");

  function handleTodoChange(e) {
    setTodoItem(e.target.value);
  }
  function addTodoHandler(e) {
    // Prompt user for input (replace with your preferred method)

    e.preventDefault();
    if (todoItem) {
      // Check if user entered a value
      setTodoList([...todoList, todoItem]);
    }
  }
  return (
    <Section>
      <h3>Conditional rendering</h3>

      <Todos
        todoList={todoList}
        value={todoItem}
        onChange={handleTodoChange}
        onSubmit={addTodoHandler}
      />
    </Section>
  )
}

const Section = styled.section`

text-align: center;

`
