import { useState } from "react";
import "./loginForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
export default function LoginForm() {
  const history = useHistory();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    isvalid: false,
  });

  const [errors, setErrors] = useState({
    emailErr: null,
    passwordErr: null,
  });

  const [passwordShown, setPasswordShown] = useState(false);

  const changeData = (e) => {
    if (e.target.name === "email") {
      setLoginData({
        ...loginData,
        email: e.target.value,
      });

      var regex = /^[a-zA-Z0-9]+@[a-zA-Z]+.com$/;
      if (e.target.value.match(regex)) {
        loginData.isvalid = true;
      }

      setErrors({
        ...errors,
        emailErr:
          e.target.value.length === 0
            ? "This field is required"
            : e.target.value.length < 3
            ? "Minimum length is 3 characters"
            : loginData.isvalid === false
            ? "Invalid Email"
            : null,
      });
    } else if (e.target.name === "password") {
      setLoginData({
        ...loginData,
        password: e.target.value,
      });

      setErrors({
        ...errors,
        passwordErr:
          e.target.value === 0
            ? "This field is required"
            : e.target.value.length < 8
            ? "Minimum length is 8 characters"
            : null,
      });
    }
  };

  const submitLoginData = (e) => {
    e.preventDefault();
    if (!errors.emailErr && !errors.passwordErr) {
      history.push("/movies");
      console.log(loginData);
    }
  };

  const togglePassword = () => {
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="container py-5">
      <h1>Login Form</h1>
      <div className="form-group">
        <form onSubmit={(e) => submitLoginData(e)}>
          <div className="mb-3">
            <label htmlFor="emailID" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className={`form-control ${
                errors.emailErr ? "border-danger" : ""
              }`}
              id="emailID"
              aria-describedby="email"
              value={loginData.email}
              onChange={(e) => changeData(e)}
              name="email"
            />
            <div id="email" className="form-text text-danger">
              {errors.emailErr}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="passwordID" className="form-label">
              Password
            </label>
            <div className="pass">
              <input
                type={passwordShown ? "text" : "password"}
                className={`form-control ${
                  errors.passwordErr ? "border-danger" : ""
                }`}
                id="passwordID"
                value={loginData.password}
                onChange={(e) => changeData(e)}
                name="password"
              />
              <span>
                <img
                  onClick={togglePassword}
                  className="eye-icon"
                  src="https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-eye-9.png"
                  alt="eye-icon"
                />
              </span>
            </div>
            <div id="password" className="form-text text-danger">
              {errors.passwordErr}
            </div>
          </div>
          <button
            type="submit"
            disabled={errors.passwordErr || errors.emailErr}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
