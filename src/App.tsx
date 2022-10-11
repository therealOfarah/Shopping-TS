import { Container } from "react-bootstrap"
import {Routes, Route} from "react-router-dom"
import { Home } from "./Pages/home"
import { About } from "./Pages/About"
import { Store } from "./Pages/Store"
import { Navbar } from "./components/navbar"
function App() {
  return (
    <>
    <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={< Home/>}>Home</Route>
        <Route path="/about" element={< About/>}>About</Route>
        <Route path="/store" element={< Store/>}>Store</Route>
      </Routes>
    </Container>
    </>
  ) 
}

export default App
