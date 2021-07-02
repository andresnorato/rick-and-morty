import React, { useState } from "react";
import Characters from "../components/Characters";
import Header from "../components/Header";
import "../styles/Global.css";
import ThemeContext from "../context/ThemeContext";
import Footer from "../components/Footer";


const App = () => {
  const [theme, setTheme] = useState("lightmode");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>
        <Header />
        <Characters />
        <Footer/>
      </div>
    </ThemeContext.Provider>
  );
};
export default App;
    