import "../Register/Register.css";
import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from 'axios'
import { baseURL } from "../../../url";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${baseURL}/login`, {email, password})
    .then(result => {
      console.log(result)
      if(result.data.status === "success")
        navigate("/home/"+ result.data.id)
    })
    .catch(err=> console.log(err))
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit} className="user-form">
        <h1 style={{ textAlign: "center" }}>Login</h1>
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
        <button type="submit">Login</button>
        <div style={{ textAlign: "center" }}>
        {"Don't have a account? "}
          <Link to={"/sign-up"} style={{ color: "green", fontWeight: "500" }}>
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
