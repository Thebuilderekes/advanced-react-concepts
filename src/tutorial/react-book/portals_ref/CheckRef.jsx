import React from 'react';
import { useState, useRef } from 'react';
import styled from 'styled-components';
export default function CheckRef() {
  const [count, setCount] = useState(5);
  const countRef = useRef(5);

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current++;

    console.log('State:', count);
    console.log('Ref:', countRef.current);
  };

  return (
    <Section>
      <p>
        The counter below is showing how <code>useRef.current</code> is used to fetch the current value of
        ref and <code>useState</code> makes sure the value is displayed after every component re-render on each increment{' '}
      </p>
      Count: {countRef.current} <br />
      <button onClick={handleIncrement}>Increment</button>
    </Section>
  );
}

const Section = styled.section`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
