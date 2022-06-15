import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <h1> Hero </h1>
      <Navbar />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
