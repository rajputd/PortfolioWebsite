import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../scss/SocialBar.scss';

const SocialBar = (props) => (
  <div id="social-bar">
    {
      props.socialButtons.map(
        (button, index) => {
          return  <a href={button.link} key={index}>
                    <FontAwesomeIcon icon={button.icon} size="lg"/>
                  </a>;
        }
      )
    }
  </div>
)

export default SocialBar;