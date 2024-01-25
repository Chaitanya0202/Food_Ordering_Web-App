
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useGlobelContext } from "../Context/ProductContext";

function LogIn() {
    let navigate=useNavigate()
  const [logInfo, setLogInfo] = useState({
    email: "",
    password: "",
  });
  const { email, password } = logInfo;
  const { count, cart,loginData,setLoginData } = useGlobelContext();

  const onInputChange = (e) => {
    setLogInfo({ ...logInfo, [e.target.name]: e.target.value });
    // console.log(email);
    // console.log(password);
  };
  const isLogedIn=()=>{
    console.log("lOG IN sUCCESS")
        
    const isLogedIn = localStorage.getItem("isLogedIn");
    localStorage.setItem("isLogedIn", true);
    navigate("/cartPage")

    console.log(isLogedIn)
  }
  const onSubmitHandler= async(e)=>{
    e.preventDefault();
    
    try {
      const result = await axios.get(`http://localhost:8080/getUserByEmail/${email}`);
    
    
    if(result.data.password===password){
        
      isLogedIn()
       
    }
    else{
      alert("Invalid Email")
    }
    } catch (error) {
      console.log(error)
      alert("Enter Valid Creadintial..!")
    }
  }

  return (
    <>
    
    <div className="container mt-5">
    
    <h3 className="tex-center text-bold ">lOG iN Page</h3>
      <form  onSubmit={(e)=>onSubmitHandler(e)}>
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt2 shadow">
          
            <div className="mb-3">
            
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="pass" className="form-label mx-4">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>
           
            <button type="submit" className="btn btn-primary mb-4">
              Log In
            </button>
            <Link className="btn btn-outline-danger mx-2 mb-4"   to={"/"}>Cancel</Link>
            <GoogleOAuthProvider clientId="413016402359-b165dqc2v0lp0gcmses7paj9mrrvgvm7.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const decoded = jwtDecode(credentialResponse.credential);
                setLoginData(decoded)
                console.log(decoded);
                isLogedIn()
                console.log("log in data is ",loginData)
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </GoogleOAuthProvider>
          </div>
        </div>
        </form>
        
      </div>
    </>
  );
}

export default LogIn;
