import React from 'react';
import '../scss/Card.scss';

const Card = (props) => (
  <div className="card">
  <a href={props.link}>
    <img src={props.img} alt={"Screenshot of " + props.title + " project"}/>
    <header className="center-text">{props.title}</header>
    <div className="card-content">
      <p>{props.description}</p>
      <p>Built with {props.tech.join(", ")}</p>
    </div>
  </a>
</div>
);

export default Card;