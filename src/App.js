import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      <Footer />  
    </>
  );
}

class Script extends App {
  componentDidMount() {
    const script = document.createElement("script");    script.async = true;    script.src = "./Javascript.js";    this.div.appendChild(script);  }
  render() {
    return (
      <div className="Script" ref={el => (this.div = el)}>
        {/* Script is inserted here */}
      </div>
    );
  }
}

export default App;
