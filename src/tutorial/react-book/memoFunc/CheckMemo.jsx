import {useState} from 'react'
import Error from './Error.jsx'
import classes from './styles.module.css'


export default function Form() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState();
  function updateEmailHandler(event) {
    setEnteredEmail(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    if (!enteredEmail.endsWith('.com')) {setErrorMessage('Email must end with .com.');
    }
  }
  return (
    <>
           
    <p>Component using memo to isolate error component for error message so it does not re-render everytime onchnage  the value of each character typed into the input </p>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={enteredEmail}
            onChange={updateEmailHandler}
          />
        </div>
        <Error color={classes.error} message={errorMessage} />
        <button>Sign Up</button>
      </form>

    </>
  );
}
