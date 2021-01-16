import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '../styles/index.scss';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab);

const IndexPage = () => (
  <main>
    <title>Home Page</title>
    <div className="header">
      <div className="header__content">
        <div className="header__title">
          <h3>Hey, I'm Izzy Peskett</h3>
          <h1>
            Junior software developer
            <span> and </span>
            UX designer
            {' '}
            <span>from</span>
            {' '}
            Melbourne, Australia
          </h1>
        </div>
        <div className="header__links">
          <ul>
            <li><a href="https://www.linkedin.com/in/isabelle-peskett-944ab0166/" aria-label="linkedin link"><FontAwesomeIcon icon={['fab', 'linkedin']} size="4x" color="white" /></a></li>
            <li><a href="https://www.linkedin.com/in/isabelle-peskett-944ab0166/" aria-label="linkedin link"><FontAwesomeIcon icon={['fab', 'github']} size="4x" color="white" /></a></li>
            <li><a href="https://www.linkedin.com/in/isabelle-peskett-944ab0166/" aria-label="linkedin link"><FontAwesomeIcon icon={['fab', 'twitter']} size="4x" color="white" /></a></li>
            <li><a href="https://www.linkedin.com/in/isabelle-peskett-944ab0166/" aria-label="linkedin link"><FontAwesomeIcon icon={['fab', 'medium']} size="4x" color="white" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </main>
);

export default IndexPage;
