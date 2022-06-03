import react from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Screen from "./components/screen/Screen";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import ProductScreen from "./components/screen/ProductScreen";

function App() {
  return (
    <div className="App">
      <Header />

      <Container>
        <Routes>
          <Route path="/" element={<Screen />} />
          <Route path="/:id" element={<ProductScreen />}></Route>
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
