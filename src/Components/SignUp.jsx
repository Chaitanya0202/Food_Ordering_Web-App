
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import GoogleLoginComponent from "./GoogleLogin";

export default function SignUp() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const { name, email, password, phone } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(user)
    await axios.post(`http://localhost:8080/saveUser`,user);
    navigate("/logIn");
  };


  
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt2 shadow">
          <h3 className="tex-center text-bold ">Sign Up Page</h3>
          <form
            onSubmit={(e) => onSubmitHandler(e)}
            className="g-3  needs-validation"
            novalidate
          >
            <div className="mb-3">
              <div>
                <label htmlFor="Name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)} required minLength={"2"}
                ></input>
                <div class="valid-feedback">Looks good!</div>
              </div>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)} required
              ></input>

              <label htmlFor="pass" className="form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)} required minLength={"4"} maxLength={"8"}
              ></input>
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Phone"
                name="phone"
                value={phone}
                onChange={(e) => onInputChange(e)} required
                maxlength="10" minLength={"6"}
              ></input>
            </div>
            <button type="submit" className="btn btn-outline-primary m-2">
              Submit
            </button>
            <Link className="btn btn-outline-danger m-2" to={"/"}>
              Cancel
            </Link>
            <GoogleLoginComponent/>
          </form>
        </div>
      </div>
    </div>
  );
}
