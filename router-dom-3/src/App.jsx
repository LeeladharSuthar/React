import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GitHub from "./pages/GitHub";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/github" element={<GitHub />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
