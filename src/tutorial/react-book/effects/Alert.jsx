import { useState, useEffect } from "react";
import styled from "styled-components";

function Alert() {
  const [alertMsg, setAlertMsg] = useState("Expired!");
  const [errorMessage, setErrorMessage] = useState("");

  function changeAlertMsgHandler(event) {
    const value = event.target.value;
    setAlertMsg(value);

    const nonLetterPattern = /[^a-zA-Z]/;

    if (nonLetterPattern.test(value)) {
      setErrorMessage("must contain only letters and no special character");
    } else {
      setErrorMessage(""); // Clear error message if validation passes
    }
  }

  function setAlert() {
    setTimeout(function () {
      console.log(alertMsg);
    }, 2000);
  }

  useEffect(
    function () {
      setAlert();
    },
    [alertMsg],
  ); // Re-run the timeout when alertMsg changes

  return (
    <Section>
      <p>{alertMsg}</p>
      <p className="red-text">{errorMessage}</p>
      <input type="text" onChange={changeAlertMsgHandler} value={alertMsg} />
    </Section>
  );
}

export default Alert;

const Section = styled.section`
  p.red-text {
    color: red;
  }
`;
