import { useState, createContext } from 'react';
import Gif from "./aden.gif";

export const ThemeContext = createContext(null);

//this isn't working - Priority 2
export default function Footer () {
    const [theme, setTheme] = useState("dark")

    const toggleTheme = () => {
          setTheme ((curr) => (curr === "dark" ? "light" : "dark"));
    };
    return <footer className="footer">
        <div className="socials">
            <section>
                <a href="https://github.com/AJDStudios" target="blank" rel="noreferrer" alt=""><i className="fa-brands fa-github"></i></a>
            </section>	
            <section>
                <a href="https://www.youtube.com/channel/UCIWsjkVvj1LASyBDxuix7Hw" target="blank" rel="noreferrer" alt=""><i className="fa-brands fa-youtube"></i></a>
            </section>
            <section>
                <a href="https://www.twitch.tv/ajdstudios" target="_blank" rel="noreferrer" alt=""><i className="fa-brands fa-twitch"></i></a>
            </section>
            <section>
                <a href="https://discord.gg/tMMVKstvac" target="_blank" rel="noreferrer">
                <img className="animated-gif" alt="" src={ Gif } />
                </a>
            </section>
            <section className="darktoggle">
                <input type="checkbox" className="checkbox" id="chk" onChange={toggleTheme} checked={theme === "light"}/>
                <label className="label" htmlFor="chk">
                    <i className="fas fa-sun"></i>
                    <i className="fas fa-moon"></i>
                    <div className="ball"></div>
                </label>
            </section>
        </div>    
    </footer>
}