import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Login from "./pages/Login"
import Login from "./pages/Login"
import Login from "./pages/Login"
import Login from "./pages/Login"

  function App() {
          
    return (<>
      <Routes>
        <Route path={"/"} element=<Home /> />
        <Route path={"/login"} element=<Home /> />
        <Route path={"/products"} element=<Home /> />
        <Route path={"/cart"} element=<Home /> />
        <Route path={"/dashboard"} element=<Home /> />
        <Route path={"/product/:id"} element=<Home /> />
        <Route path={"*"} element=<Home /> />
      </Routes>
      <h1>React E-Commerce</h1>
      </>
          )}
export default App;