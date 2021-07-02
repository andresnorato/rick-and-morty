import React, {useState, useContext} from 'react'
import ThemeContext from '../context/ThemeContext';
import '../styles/Header.css';


const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const {theme, setTheme} = useContext(ThemeContext);
    const handleClick = () =>{
        setDarkMode(!darkMode)
        theme === "lightmode" ? setTheme('darkmode') : setTheme('lightmode');
    }

    return(
        <div className="header">
            <h1>Rick and Morty </h1>
            <button type="button" onClick={handleClick} >{darkMode ? 'Dark Mode ' : 'Light Mode'}</button>
        </div>
    );
}
export default Header;