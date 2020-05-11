import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
} from 'reactstrap';

const HeaderNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md">
      <div className="container">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="navbar " navbar>
            <div className="row d-flex justify-content-between">
              <div className="col d-flex">
                <div className="nav-title d-flex">
                  Sportsbet.io
                   </div>
              </div>
              <div className="col d-flex">
                <div class="dropdown">
                  <button className="btn btn-primary  dropdown-toggle">
                    English</button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item">Bulgarian</a>
                    <a class="dropdown-item">Spanish action</a>
                    <a class="dropdown-item">Japanese</a>
                    <a class="dropdown-item">Korean</a>
                    <a class="dropdown-item">Russian</a>
                  </div>
                </div>
              </div>
            </div>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
}

export default HeaderNavbar;