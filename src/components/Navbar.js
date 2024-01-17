import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import LogoImage from '../images/4.png';

const Navbar = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    const threshold = 50;

    if (offset > threshold) {
      setIsNavbarFixed(true);
    } else {
      setIsNavbarFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <NavbarContainer isFixed={isNavbarFixed}>
      <Logo src={LogoImage} alt="Logo" />
      <NavList>
        <NavItem onClick={() => smoothScrollTo('accueil')}>
        <a href="#apropos" style={{ color: 'white', textDecoration: 'none' }}>
          Qui suis-je
        </a>
        </NavItem>
        <NavItem onClick={() => smoothScrollTo('apropos')}>
        <a href="#parcours" style={{ color: 'white', textDecoration: 'none' }}>
          Parcours
        </a>
        </NavItem>
        <NavItem onClick={() => smoothScrollTo('parcours')}>
        <a href="#competences" style={{ color: 'white', textDecoration: 'none' }}>
          Compétences
        </a>
        </NavItem>
        <NavItem onClick={() => smoothScrollTo('projets')}>
        <a href="#projets" style={{ color: 'white', textDecoration: 'none' }}>
          Projets
        </a>
        </NavItem>
        <NavItem onClick={() => smoothScrollTo('contact')}>
        <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>
          Contact
        </a>
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
  position: ${props => (props.isFixed ? 'fixed' : 'relative')};
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.3s ease;
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
