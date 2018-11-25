import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import '../scss/ScrollArrow.scss';

const ScrollArrow = ({ destination, up = false }) => {

  return (
    <a href={destination} className="scrollArrow">
      <FontAwesomeIcon icon={ up ? faAngleDoubleUp: faAngleDoubleDown } size="lg"/>
    </a>

  )
}

export default ScrollArrow