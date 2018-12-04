import React, { Component } from 'react';
import NavMenu from './components/NavMenu';
import ParticleContainer from './components/ParticleContainer';
import SocialBar from './components/SocialBar';
import Card from './components/Card';
import GForm from './components/GForm';
import ScrollArrow from './components/ScrollArrow';
import Content from './Content';
import ReactGA from 'react-ga';

import './scss/App.scss';

//initialize google analytics and track page views
ReactGA.initialize('UA-130405273-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParticleContainer />
        <NavMenu />
        <section id="home">
          <h1>{ Content.home.header }</h1>
          <h4>{ Content.home.subHeader }</h4>
          <SocialBar socialButtons={Content.home.socialBar} />
          <ScrollArrow destination="#about"/>
        </section>
        <section id="about">
          <h2>About</h2>
          {
            Content.about.description.map((paragraph, ind) => <p key={ind}>{paragraph}</p>)
          }
          <h4>tl;dr</h4>
          <p>{ Content.about.tldr }</p>
          <ScrollArrow destination="#portfolio"/>
        </section>
        <section id="portfolio">
          <h2>Portfolio</h2>
          <div id="projects">
            {
              Content.portfolio.map((project, index) => <Card key={index} {...project} />)
            }
          </div>
          <ScrollArrow destination="#contact"/>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>{Content.contact.description}</p>
          <GForm />
          <ScrollArrow destination="#home" up={true}/>
        </section>
      </div>
    );
  }
}

export default App;
