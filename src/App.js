import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom"
import { createContext, useState } from "react"

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
      setTheme ((curr) => (curr === "dark" ? "light" : "dark"));
  };
  return (
    <>
      <Header />
      <ThemeContext.Provider value={{ theme, toggleTheme }}> 
          <Routes id="dark">
            <Route path="/" element={<Portfolio />} />
            <Route path="/About" element={<About />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </ThemeContext.Provider>
      <Footer />  
    </>
  );
}

export default App;
