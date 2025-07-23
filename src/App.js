import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import "../src/styles/style.css";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import github from "../src/img/github.png";
import insta from "../src/img/insta.jpg";
import tg from "../src/img/tg.png";
import { slide as Menu } from "react-burger-menu";
import React from "react";

function App() {
  gsap.registerPlugin(ScrollToPlugin);
  const home = useRef(null);
  const technologies = useRef(null);
  const projects = useRef(null);
  const scrollTo = (target) =>
    gsap.to(window, { duration: 0.6, scrollTo: target });

  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

   useEffect(() => {
    const handleClickOutside = (e) => {
      const menu = document.querySelector(".bm-menu-wrap");
      const burgerIcon = document.querySelector(".bm-burger-button");
      if (
        menuOpen &&
        menu &&
        !menu.contains(e.target) &&
        (!burgerIcon || !burgerIcon.contains(e.target))
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);


  return (
    <div className="App">
      <header>
        <div className="left">
          <h3>Product Name</h3>
        </div>

        <div className="right desktop-menu">
          <span className="a" onClick={() => scrollTo(home.current)}>
            Home
          </span>
          <span className="a" onClick={() => scrollTo(technologies.current)}>
            Technologies
          </span>
          <span className="a" onClick={() => scrollTo(projects.current)}>
            Projects
          </span>
        </div>

        <Menu
           isOpen={menuOpen}
            onStateChange={handleStateChange}
            width={"200px"}
            right
        className="right mobile-menu">
          <a onClick={() => { scrollTo(home.current); closeMenu(); }} className="menu-item" href="#home">Home</a>
          <a onClick={() => { scrollTo(technologies.current); closeMenu(); }} className="menu-item" href="#tech">Technologies</a>
          <a onClick={() => { scrollTo(projects.current); closeMenu(); }} className="menu-item" href="#projects">Projects</a>
        </Menu>
      </header>

      <main>
        <div className="text-block" ref={home}>
          <h1>
            Hi, my name is <span>Denis</span>
          </h1>
          <h3>a fronted developer</h3>
          <h6>with passion for learning and creating</h6>
        </div>

        <div className="circle">
          <img src="" alt="" />
        </div>
      </main>

      <div className="main-block" ref={technologies}>
        <h1>Frontend</h1>
        <p>JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, NPM, BootStrap,</p>
        <p>MaterialUI, Yarn, TailwindCDD, StyledComponents</p>

        <h1>Backend</h1>
        <p>NodeJS, MySQL, MongoDB</p>
      </div>

      <div className="projects" ref={projects}>
        <h1>Projects</h1>
        <div className="slider">
          <Splide
            options={{
              type: "loop",
              perPage: 3,
              snap: true,
              autoScroll: {
                pauseOnHover: true,
                pauseOnFocus: true,
                speed: 0.3,
              },
            }}
            extensions={{ AutoScroll }}
          >
            <SplideSlide className="SplideSlide">
              <div className="wrapper">
                <a href="https://github.com/MyNameIsDenis/weather_project" target="blank" className="box b1"></a>
                <p>Weather App</p>
              </div>
            </SplideSlide>
            <SplideSlide className="SplideSlide">
              <div className="wrapper">
                <a href="https://github.com/MyNameIsDenis/chat" target="blank" className="box b2"></a>
                <p>Chat</p>
              </div>
            </SplideSlide>
            <SplideSlide className="SplideSlide">
              <div className="wrapper">
                <a href="https://github.com/MyNameIsDenis/Marketplace" target="blank" className="box b3"></a>
                <p>Marketplace</p>
              </div>
            </SplideSlide>
            <SplideSlide className="SplideSlide">
              <div className="wrapper">
                <a href="https://github.com/MyNameIsDenis/Quiz" target="blank" className="box b4"></a>
                <p>Quiz</p>
              </div>
            </SplideSlide>
            <SplideSlide className="SplideSlide">
              <div className="wrapper">
                <a href="https://github.com/MyNameIsDenis/Paint" target="blank" className="box b5"></a>
                <p>Paint</p>
              </div>
            </SplideSlide>
            <SplideSlide className="SplideSlide">
              <div className="wrapper">
                <a href="https://github.com/MyNameIsDenis/FlappyBird" target="blank" className="box b6"></a>
                <p>Flappy Bird</p>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>

      <div className="footer">
        <div className="logos">
          <a href="https://github.com/MyNameIsDenis" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/helloiamdenis/" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram" />
          </a>
          <a href="https://web.telegram.org/k/" target="_blank" rel="noopener noreferrer">
            <img src={tg} alt="Telegram" />
          </a>
        </div>
        <div className="name">
          <p>© Product Name</p>
        </div>
      </div>
    </div>
  );
}

export default App;
