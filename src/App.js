import React, { Component } from 'react';
import NavMenu from './components/NavMenu';
import ParticleContainer from './components/ParticleContainer';
import SocialBar from './components/SocialBar';
import Card from './components/Card';

import './scss/App.scss';

//get font awesome icon components
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

//import images for portfolio section
import cs_player_img from './img/cs_player.png';
import markdown_previewer_img from './img/markdown_previewer.png';
import pomodoro_timer_img from './img/pomodoro_timer.png';
import random_quote_img from './img/random_quote.png';
import react_calc_img from './img/react_calc.png';

//control what icons and links SocialBar will display
const socialBarConfig = [
  {
    icon: faGithubSquare,
    link: "https://github.com/rajputd/",
  },
  {
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/dileep-rajput/",
  },
];

//control contents of portfolio section
const projects = [
  {
    title: "Crowd Sourced Player",
    link: "https://github.com/rajputd/csplayer",
    img: cs_player_img,
    description: "A web application that allows users to collaboratively create, edit, and play a music playlist in realtime.",
    tech: ["Vue", "Express", "Node.js", "Socket.io"]
  },
  {
    title: "Markdown Previewer",
    link: "https://github.com/rajputd/markdown-previewer",
    img: markdown_previewer_img,
    description: "A web application that lets users write markdown and see the rendered output side by side.",
    tech: ["React"]
  },
  {
    title: "Pomodoro Timer",
    link: "https://github.com/rajputd/React-Pomodoro-Timer",
    img: pomodoro_timer_img,
    description: "A Web application that impliments all the features of a standard, physical Pomodoro Timer.",
    tech: ["React"]
  },
  {
    title: "Random Quote Generator",
    link: "https://github.com/rajputd/random-quote-generator",
    img: random_quote_img,
    description: "A web application that displays random quotes gathered from an external Random Quotes API",
    tech: ["React"]
  },
  {
    title: "React Calculator",
    link: "https://github.com/rajputd/React-Calculator",
    img: react_calc_img,
    description: "A web application that impliments all of the features in a four-function calculator.",
    tech: ["React"]
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParticleContainer />
        <NavMenu />
        <section id="home">
          <h1>Dileep Rajput</h1>
          <h4>Software Engineer</h4>
          <SocialBar socialButtons={socialBarConfig} />
        </section>
        <section id="about">
          <h2>About</h2>
          <p>Hi there! My name is Dileep. I am a software engineer with a strong background in full-stack web development and low-level programming. I like to use technology to help people solve problems in their daily lives, businesses, and communities.</p>
          <p>When it comes to the web I love all things JavaScript. Even this portfolio website is written in JavaScript and React. Although I am comfortable with doing equivalent work in Python, PHP, and Java.</p>
          <p>On the hardware side, C is my go to language. It does everything I need it to do. When C cannot, I usually dive into the assembly to squeeze out the full potential of the hardware I am hacking on.</p>
          <h4>tl;dr</h4>
          <p>I enjoy making things. Throw me a line. Maybe we can get together and make a difference.</p>
        </section>
        <section id="portfolio">
          <h2>Portfolio</h2>
          <div id="projects">
            {
              projects.map((project, index) => {
                return <Card key={index} {...project} />
              })
            }
          </div>
        </section>
      </div>
    );
  }
}

export default App;
