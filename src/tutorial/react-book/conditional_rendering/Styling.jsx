import { useState } from "react";
import styled from "styled-components";
export default function Styling() {
  const [chosenPriority, setChosenPriority] = useState("low-priority");
  function choosePriorityHandler(event) {
    setChosenPriority(event.target.value);
  }
  return (
    <div>
      <Section>
        <p>
          The color of this text below changes according depending on the option selected. When setting the state, the value of the option is also the same name as the
          className provided as state to indicate the value of the chosenPriority.

        </p>

        <p> Chosen Priority <span className={chosenPriority}>{chosenPriority}</span></p>
        <select onChange={choosePriorityHandler}>
          <option value="low-priority">Low</option>
          <option value="high-priority">High</option>
        </select>

        <div>
        </div>
      </Section>
    </div>
  );
}

const Section = styled.section`
  .low-priority {
    color: blue;
  }

  .high-priority {
    color: red;
  }

`;
