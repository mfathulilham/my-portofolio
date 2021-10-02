import React from 'react';
import logo from '../logo.png';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    return (    
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container">
              <a className="navbar-brand" href="#"><img src={logo} className="logo" height="80" alt="logo"/></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">                
                <FontAwesomeIcon icon={faBars} className="text-light"/>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  {/* <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Portofolio</a>
                  </li> */}
                  <li className="nav-item">                    
                    <a className="nav-link" href="#">
                      <FontAwesomeIcon icon={faCloudDownloadAlt} className="me-2"/>
                      Download my CV
                    </a>
                  </li>
                  <li className="nav-item">                  
                    <a className="nav-link" href="#">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                </ul>
              </div>
          </div>        
      </nav>
    )
}

export default Navbar
