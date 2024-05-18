import "./Register.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { baseURL } from "../../../url";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${baseURL}/sign-up`, {name, email, password})
    .then(result => console.log(result))
    .catch(err=> console.log(err));
    navigate("/login")
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit} className="user-form">
        <h1 style={{ textAlign: "center" }}>Sign up</h1>
        <div className="user-name">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="user-email">
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="user-password">
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign up</button>
        <div style={{ textAlign: "center" }}>
          Already have an account?{" "}
          <Link to={"/login"} style={{ color: "green", fontWeight: "500" }}>
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
