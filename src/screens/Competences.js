import React, { useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { Carousel } from 'react-carousel3';
import France from '../images/france.png';
import Angleterre from '../images/angleterre.png';
import Espagne from '../images/espagne.png';
import VS from '../images/vs.png';
import VSCode from '../images/vscode.png';
import AndroidStudio from '../images/android_studio.png';
import Figma from '../images/figma.png';
import Github from '../images/github.png';
import Gitlab from '../images/gitlab.png';
import Penpot from '../images/penpot.png';  
import Photoshop from '../images/photoshop.png';
import SuiteOffice from '../images/suite_office.png';
import XCode from '../images/xcode.png';
import ReactJS from '../images/react.png';
import Sql from '../images/sql.png';
import Python from '../images/python.png';
import Php from '../images/php.png';
import Js from '../images/js.png';
import Html from '../images/html.png';
import Css from '../images/css.png';
import CSharp from '../images/csharp.png';
import Prestashop from '../images/prestashop.png';
import Wordpress from '../images/wordpress.png';
import Telerik from '../images/telrik.png';

const CarouselWithTitle = ({ title, items }) => (
  <div>
    <TitleCarousel>{title}</TitleCarousel>
    <CarouselContent>
    <StyledCarousel>
      <Carousel height={200} width={400} yOrigin={42} yRadius={48} autoPlay={true}>
        {items.map(item => (
          <div key={item.id}>
            <StyledImage alt="" src={item.image} />
          </div>
        ))}
      </Carousel>
      </StyledCarousel>
    </CarouselContent>
  </div>
);

const Competences = () => {
  const titleRef = useRef();
  const [inViewRef, inView] = useInView();

  useEffect(() => {
    const title = titleRef.current;

    if (inView) {
      animateTextCompetences(title);
    }
  }, [inView]);

  const animateTextCompetences = (ref) => {
    const text = ref.textContent;
    const letters = text.split('');

    ref.textContent = '';

    letters.forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter === ' ' ? '\u00A0' : letter;
      span.style.animationDelay = `${index * 0.1}s`;
      ref.appendChild(span);
    });
  };

  const langages = [
    { id: 1, image: ReactJS },
    { id: 2, image: CSharp },
    { id: 3, image: Js },
    { id: 4, image: Sql },
    { id: 5, image: Php },
    { id: 6, image: Python },
    { id: 7, image: Html },
    { id: 8, image: Css },
  ];

  const cms = [
    { id: 1, image: Prestashop },
    { id: 2, image: Wordpress },
    { id: 3, image: Telerik },
  ];

  const logiciel = [
    { id: 1, image: VS },
    { id: 2, image: VSCode },
    { id: 3, image: AndroidStudio },
    { id: 4, image: XCode },
    { id: 5, image: Figma },
    { id: 6, image: Penpot },
    { id: 7, image: Photoshop },
    { id: 8, image: Github },
    { id: 9, image: Gitlab },
    { id: 10, image: SuiteOffice },
  ];

  const langues = [
    { id: 1, image: France },
    { id: 2, image: Angleterre },
    { id: 3, image: Espagne },
  ];

  return (
    <CompetencesContainer>
      <TitleContainer>
        <Title ref={(node) => { inViewRef(node); titleRef.current = node; }}>Compétences</Title>
      </TitleContainer>
      <CarouselContainer>
        <LeftColumn>
          <CarouselWithTitle title="Langages" items={langages} />
          <CarouselWithTitle title="CMS" items={cms} />
        </LeftColumn>
        <RightColumn>
          <CarouselWithTitle title="Logiciels" items={logiciel} />
          <CarouselWithTitle title="Langues" items={langues} />
        </RightColumn>
      </CarouselContainer>
    </CompetencesContainer>
  );
};

const StyledCarousel = styled.div`
  display: flex;
  justify-content: center;
  width: 600px; /* Largeur du carrousel */
  height: 200px; /* Hauteur du carrousel */
  overflow: hidden;
  border-radius: 50%/70% 50% 70% 50%; 
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const hideText = css`
  opacity: 0;
  visibility: hidden;
`;

const AnimatedText = styled.span`
  color: white;
  font-size: 3em;
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;

  span {
    display: inline-block;
    opacity: 0;
    animation: ${fadeIn} 0.5s ease-in-out forwards;
  }

  ${({ hide }) => hide && hideText};
`;

const CompetencesContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 50px;
`;

const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const Title = styled(AnimatedText)`
  letter-spacing: 4px;
`;

const TitleCarousel = styled(AnimatedText)`
  letter-spacing: 4px;
  font-size: 32px;
  text-align: center;
  padding-left: 250px;
  margin-top: 50px;
`;

const CarouselContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const LeftColumn = styled.div`
  width: 45%;
`;

const RightColumn = styled.div`
  width: 45%;
`;

const CarouselContent = styled.div`
  margin-top: 20px;
`;

const StyledImage = styled.img`
  max-width: 30%;
  max-height:30%;
`;

export default Competences;
