import { useState } from "react";
import styled from "styled-components";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [charLimitMessage, setCharLimitMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 5) {
      setCharLimitMessage("password must be more than 5 characters");
    } else {
      setCharLimitMessage("");
    }

    setNumchars(email.length);
  };
  return (
    <Section>
      <h3>Forms and useState hook</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>{charLimitMessage}</p>
    </Section>
  );
}

const Section = styled.section`
  margin-top: 50px;
`;
