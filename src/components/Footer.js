import { useState, createContext } from 'react';
import Gif from "./aden.gif";

export const ThemeContext = createContext(null);

export default function Footer () {
    const [theme, setTheme] = useState("dark")

    const toggleTheme = () => {
          setTheme ((curr) => (curr === "dark" ? "light" : "dark"));
    };
    return <footer className="footer">
        <div className="socials">
            <section>
                <a href="https://github.com/AJDStudios" target="blank"><i className="fa-brands fa-github"></i></a>
            </section>	
            <section>
                <a href="https://www.youtube.com/channel/UCIWsjkVvj1LASyBDxuix7Hw" target="blank"><i className="fa-brands fa-youtube"></i></a>
            </section>
            <section>
                <a href="https://www.twitch.tv/ajdstudios" target="_blank"><i className="fa-brands fa-twitch"></i></a>
            </section>
            <section>
                <a href="https://discord.gg/tMMVKstvac" target="_blank">
                <img className="animated-gif" src={ Gif } />
                </a>
            </section>
            <section className="darktoggle">
                <input type="checkbox" className="checkbox" id="chk" onChange={toggleTheme} checked={theme === "light"}/>
                <label className="label" for="chk">
                    <i className="fas fa-sun"></i>
                    <i className="fas fa-moon"></i>
                    <div className="ball"></div>
                </label>
            </section>
        </div>    
    </footer>
}