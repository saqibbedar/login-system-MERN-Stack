import "./Home.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { baseURL } from "../../../url";

const Home = () => {
  const { id } = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [active, setActive] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${baseURL}/getUser/${id}`)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setEmail(result.data.email);
      })
      .catch((err) => console.log(err));
  });

  const deleteUser = () => {
    axios
      .delete(`${baseURL}/deleteUser/${id}`)
      .then((result) => {
        console.log(result);
        alert("Account was deleted successfully!");
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  const activateClass = () => {
    setActive(!active);
    if (!setActive()) document.querySelector(".danger").classList.add("active");
  };
  const removeActiveClass = () => {
    if (!setActive()) {
      document.querySelector(".danger").classList.remove("active");
    }
  };

  return (
    <>
      <div className="home">
        <h1>Welcome {name}</h1>
        <h3>{email}</h3>
        <div className="btns">
          <button onClick={() => navigate("/login")} style={{ color: "black" }}>
            Logout
          </button>
          <button style={{ background: "red" }} onClick={activateClass}>
            Delete
          </button>
        </div>
        <div className="danger ">
          <p>Are you sure to delete your account permenantally?</p>
          <div className="confirm-buttons">
            <button style={{ background: "red" }} onClick={deleteUser}>
              Yes, Delete
            </button>
            <button
              style={{ background: "lightgray", color: "black" }}
              onClick={removeActiveClass}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
