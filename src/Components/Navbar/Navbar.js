import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import Logo from '../../Assets/logo_harryspell.png';

import './navbar.css';

const Principalnavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar className="navbar-box" color="ligt" light expand="md">
        <NavbarBrand href="/">
            <img src={Logo} width="15%"></img>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* <NavItem>
              <NavLink href="/components/">Characters</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Favorite</NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default Principalnavbar;