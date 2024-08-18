import { useState } from "react";
import styled from "styled-components";

export default function Styling() {
  const [chosenPriority, setChosenPriority] = useState("low-prio");
  function choosePriorityHandler(event) {
    setChosenPriority(event.target.value);
  }
  return (
    <Section>
      {
        "here the value of the input and the classname value to control the styling of the value both share the same name "
      }
      <p className={chosenPriority}>Chosen Priority: {chosenPriority}</p>
      <select onChange={choosePriorityHandler}>
        <option value="low-prio">Low</option>
        <option value="high-prio">High</option>
      </select>
    </Section>
  );
}
const Section = styled.section`
  .low-prio {
    color: blue;
  }

  .high-prio {
    color: green;
  }
`;
