import React, { Component } from 'react';
import NavMenu from './components/NavMenu';

import './scss/App.scss';
import ParticleContainer from './components/ParticleContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParticleContainer />
        <NavMenu />
      </div>
    );
  }
}

export default App;
