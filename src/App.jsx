import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
  function App() {
          
    return (<>
      <Routes>
        <Route path={"/"} element=<Home /> />
      </Routes>
      <h1>React E-Commerce</h1>
      </>
          )}
export default App;