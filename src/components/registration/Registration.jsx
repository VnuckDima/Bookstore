import React, { useState } from "react";
import "./Registration.scss";

import { Link } from "react-router-dom";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCompleted, setEmailCompleted] = useState(false);
  const [passwordCompleted, setPasswordCompleted] = useState(false);
  const [emailError, setEmailError] = useState("Email cannot be empty");
  const [passwordError, setPasswordError] = useState(
    "password cannot be empty"
  );

  const [formValid, setFormValid] = useState(false);

  React.useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const handlerEmail = (e) => {
    setEmail(e.target.value);

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Mail must be in the format 'example@hotmail.com'");
    } else {
      setEmailError("");
    }
  };

  const handlerPassword = (e) => {
    setPassword(e.target.value);

    if (e.target.value.length > 7) {
      setPasswordError("The length of the password must be no more than 7");
    } else {
      setPasswordError("");
    }
  };

  const handlerBlur = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailCompleted(true);
        break;
      case "password":
        setPasswordCompleted(true);
        break;
      default:
        setEmailCompleted(false);
        setPasswordCompleted(false);
    }
  };

  return (
    <div className="registration-wrap">
      <form>
        <div className="registration-fieldset">
          {emailCompleted && emailError && (
            <div style={{ color: "red" }}>{emailError}</div>
          )}
          <div>
            <label>
              <input
                className="input-email"
                onBlur={(e) => handlerBlur(e)}
                onChange={(e) => handlerEmail(e)}
                value={email}
                type="text"
                name="email"
                placeholder=""
              />
              <span className="email-label label-font">Email</span>
            </label>
          </div>
          {passwordCompleted && passwordError && (
            <div style={{ color: "red" }}>{passwordError}</div>
          )}
          <div>
            <label>
              <input
                className="input-pass"
                onBlur={(e) => handlerBlur(e)}
                onChange={(e) => handlerPassword(e)}
                value={password}
                type="text"
                name="password"
              />
              <span className="password-label label-font">Password</span>
            </label>
          </div>
          {email === "admin@mail.ru" && password === "123" ? (
            <Link to="/admin">
              <button className="btn" disabled={!formValid} type="submit">
                Log In
              </button>
            </Link>
          ) : (
            <Link to="/">
              <button className="btn" disabled={!formValid} type="submit">
                Log In
              </button>
            </Link>
          )}
        </div>
      </form>
    </div>
  );
}

export default Registration;
