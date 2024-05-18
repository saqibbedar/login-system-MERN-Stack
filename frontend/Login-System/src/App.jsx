import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Components/Home/Home"
import Register from "./Components/Register/Register"
import Login from "./Components/Login/Login"

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/home/:id' element={<Home/> }/>
        <Route path='/sign-up' element={<Register/> }/>
        <Route path='/login' element={<Login/> }/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
