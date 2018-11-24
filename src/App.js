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
      </div>
    );
  }
}

export default App;
