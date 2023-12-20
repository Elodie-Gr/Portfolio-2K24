import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <CopyrightContainer>
        <span>&copy; 2023 Elodie GEORGES. Tous droits réservés.</span>
      </CopyrightContainer>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: black;
  padding: 20px;
  text-align: center;
`;

const CopyrightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-left: 10px;
    color:white
  }
`;

export default Footer;
