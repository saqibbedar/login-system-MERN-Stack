import { Link } from "react-router-dom"


const Main = () => {
  return (
    <div style={{position: "absolute", transform: "translate(-50%, -50%)", top: "50%", left:"50%", width:"100%", textAlign: "center"}}>
      <h1 style={{fontSize:"38px", marginBottom: "8px"}}>Welcome to Login system 👋</h1>
      <h1 style={{ fontSize:"25px", width:"100%", textAlign:"center"}}>Go to <Link style={{color:"green"}} to={"/login"}>Login Page</Link> to get started</h1>
    </div>
  )
}

export default Main
