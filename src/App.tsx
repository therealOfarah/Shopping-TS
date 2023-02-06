import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./Pages/home"
import { Store } from "./Pages/Store"
import { Cart } from "./Pages/cart"
import {  NavbarTop } from "./components/navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
  return(
    <ShoppingCartProvider>
      <NavbarTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      <Container className="mb-4">
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
