import styled from "styled-components";

export function List() {
  const employees = [
    { employeeName: "Daren", job: "designer", age: 34 },

    { employeeName: "Joke", job: "designer", age: 43 },

    { employeeName: "Johnson ", job: "designer", age: 33 },
  ];

  return (
    <Section>
      <h4>Conditionally rendering list of names from an array of objects</h4>
      <ul>
        {employees.map((employee) => (
          <li>{employee.employeeName}</li>
        ))}
      </ul>
    </Section>
  );
}

export function Todos({ onSubmit, onChange, value, todoList }) {
  return (
    <Section>
      <h3>
        {" "}
        Updating and rendering to do list items with prompt to add to do.
      </h3>
      <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChange} />
      </form>
      <ul>
        {todoList.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </Section>
  );
}

const Section = styled.section`
  ul {
    list-style: none;
  }
`;
