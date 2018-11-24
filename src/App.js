import React, { Component } from 'react';
import NavMenu from './components/NavMenu';
import ParticleContainer from './components/ParticleContainer';
import SocialBar from './components/SocialBar';

import './scss/App.scss';

//get font awesome icon components
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
]

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
      </div>
    );
  }
}

export default App;
