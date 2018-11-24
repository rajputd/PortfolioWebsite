import React from 'react';

import '../scss/ParticleContainer.scss';

//needs to match the value of num-particles in ParticleContainer.scss
const particleNum = 30;

const ParticleContainer = (props) => {

  return (
    <div id="particle-container">
      {
        Array(particleNum).fill(0).map((val, index) => {
          return <div key={index} className="particle"></div>
        })
      }
    </div>
  )
}

export default ParticleContainer;