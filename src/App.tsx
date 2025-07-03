import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./Pages/home";
import { Store } from "./Pages/Store";
import { Cart } from "./Pages/cart";
import { ItemDetails } from "./Pages/Item";
import { NavbarTop } from "./components/navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { ScrollToTop } from "./components/ScrollToTop"
import "./styles/app.css";

function App() {
  return (
    <ShoppingCartProvider>
      <NavbarTop />
      <ScrollToTop />
      <Container className="my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDetails />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;