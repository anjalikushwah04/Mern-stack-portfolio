import React from 'react'
import './home.css'
import Typewriter from "typewriter-effect";
import Resume from '../../assets/docs/Anjali.pdf'
import { useTheme } from '../../Context/ThemeContext';
import { IoMdMoon } from "react-icons/io";
import { GoSun } from "react-icons/go";
const Home = () => {
  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  }
  return (
    <>
      <div className="container-fluid home-container" id="Home">

        {/* ===Theme=== */}
        
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? <IoMdMoon size={30} /> : <GoSun size={30} />}
        </div>


        {/* ===Home Content=== */}

        <div className="container home-content">
          <h2>Hi👋 I'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "FullStack developer!",
                  "Mern Stack developer!",
                  "React native developer!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
            <a className="btn btn-hire" href="https://api.whatsapp.com/send?phone=1234567890"
            rel='noreferrer' target='_blank'>Hire Me</a>
            {/* <button className="btn btn-hire">Hire Me</button> */}
            <a className="btn btn-cv" href={Resume} download="your_name.pdf">
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
