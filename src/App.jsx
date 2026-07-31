import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Products from "./pages/Products"
import NotFound from "./pages/NotFound"
import ProductDetails from "./pages/ProductDetails"
import Dashboard from "./pages/Dashboard"
import Cart from "./pages/Cart"
import ProtectedRoute from "./components/ProtectedRoute"

  function App() {
          
    return (<>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path="/dashboard"
 element={
    <ProtectedRoute>
        <Dashboard />
    </ProtectedRoute>
 }
/>
        <Route path={"/product/:id"} element={<ProductDetails />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
      <h1>React E-Commerce</h1>
      </>
          )}
export default App;