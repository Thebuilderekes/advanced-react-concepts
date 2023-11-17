import React, { useState, useEffect } from "react";

export default function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/",
      );
      const json = await response.json();
      setData(json);
    };
    console.log("effect working");
    fetchData();
  }, []);

  const filteredData = data.filter((todo) => todo.completed);

  return (
    <div>
      {filteredData.map((todo) => (
        <p key={todo.id}>{todo.id}</p>
      ))}
    </div>
  );
}
