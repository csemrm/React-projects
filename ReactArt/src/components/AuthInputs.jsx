import { useState } from 'react';
import cssClassess from './AuthInputs.module.css';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className={`${cssClassess['auth-inputs']}`} >
      <div className={`${cssClassess.controls}`} >
        <p>
          <label>Email</label>
          <input
            type="email"
            className={emailNotValid ? cssClassess.invalid : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <label>Password</label>
          <input
            type="password"
            className={passwordNotValid ? cssClassess.invalid : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </div>
      <div className={`${cssClassess.actions}`}>
        <button type="button" className={cssClassess["text-button"]}>
          Create a new account
        </button>
        <button className={`${cssClassess.button}`} onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
