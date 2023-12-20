import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoImage from '../images/4.png';

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src={LogoImage} alt="Logo" />
      <NavList>
        <NavItem>
          <Link to="/qui-suis-je" style={{ color: 'white', textDecoration: 'none' }}>
            Qui suis-je
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/parcours" style={{ color: 'white', textDecoration: 'none' }}>
            Parcours
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/competences" style={{ color: 'white', textDecoration: 'none' }}>
            Compétences
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/projets" style={{ color: 'white', textDecoration: 'none' }}>
            Projets
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>
            Contact
          </Link>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  background-color: black;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  max-width: 60px;
  height: auto;
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right:150px;
`;

const NavItem = styled.li`
  margin-left: 35px;
  font-size:18px;
`;

export default Navbar;
