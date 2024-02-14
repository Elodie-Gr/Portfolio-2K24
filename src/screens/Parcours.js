import React, { useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import Arbre from '../images/arbre.png';

const Parcours = () => {
  const titleRef = useRef();
  const [inViewRef, inView] = useInView();

  const TextParcoursRefTitleL = useRef();
  const TextParcoursRefTitleR = useRef();
  const [leftInViewRefTitleL, leftInViewRefTitle] = useInView();
  const [rightInViewRefTitleR, rightInViewTitle] = useInView();

    //Pour les titres
    const animateTextParcours = (ref) => {
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


const WavyTextAnimation = ({ text }) => {
  return (
    <WavyText  style={{ marginBottom: '150px' }}>
        {text.split('').map((letter, index) => {
        if (letter === ' ') {
          return '\u00A0'; 
        } else if (letter === '|') { 
          return <br key={index} />;
        } else {
          return (
            <AnimatedLetter key={index} delay={`0.${index}s`}>
              {letter}
            </AnimatedLetter>
          );
        }
      })}
    </WavyText>
  );
};

  useEffect(() => {
    const title = titleRef.current;

    if (inView) {
      animateTextParcours(title);
    }
    const TextParcoursTitleL = TextParcoursRefTitleL.current;
    const TextParcoursTitleR = TextParcoursRefTitleR.current;

    if (rightInViewTitle) {
      animateTextParcours(TextParcoursTitleR);
    }

    if (leftInViewRefTitle) {
      animateTextParcours(TextParcoursTitleL);
    }

  }, [inView, rightInViewTitle, leftInViewRefTitle]);


  return (
    <ParcoursContainer>
      <TitleContainer>
        <Title ref={(node) => { inViewRef(node); titleRef.current = node; }}>Parcours</Title>
      </TitleContainer>
      <ContentContainer>
        <RowContainer>
        {/* Textes à gauche */}
        <TextParcoursTitleL ref={(node) => { leftInViewRefTitleL(node); TextParcoursRefTitleL.current = node; }}>Scolaire</TextParcoursTitleL>
        <WavyTextAnimation text="2022-2024 : Mastère expert | en développement web à YNOV" />
        <WavyTextAnimation text="2021-2022 : Licence Professionnelle| Programmation Internet et| Systèmes Mobiles à l'IUT d'Orsay" />
        <WavyTextAnimation text="2019-2021 : BTS SIO SLAM à |l'ISCIO d'Orsay" />
        </RowContainer>
        <Image src={Arbre} />
        <RowContainer>
        {/* Textes à droite */}
        <TextParcoursTitleR ref={(node) => { rightInViewRefTitleR(node); TextParcoursRefTitleR.current = node; }}>Professionnel</TextParcoursTitleR>
        <WavyTextAnimation text="2022-2024 : Apprentie développeuse web |et mobile chez SMS Management" />
        <WavyTextAnimation text="2021-2022 : Apprentie développeuse web |et mobile chez SMS Management" />
        <WavyTextAnimation text="2019-2021 : Technicienne HELPDESK| et maintenance logiciel chez Anaël" />
        </RowContainer>
      </ContentContainer>
    </ParcoursContainer>
  );
};

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

const waveAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-5px);
  }
  75% {
    transform: translateY(5px);
  }
`;

const WavyText = styled.div`
  display: inline-block;
  font-size: 24px;
  color: white;
`;

const AnimatedLetter = styled.span`
  display: inline-block;
  animation: ${waveAnimation} 4s ease-in-out infinite;
  animation-delay: ${(props) => props.delay};
`;

const hideText = css`
  opacity: 0;
  visibility: hidden;
`;

const AnimatedText = styled.span`
  color: white;
  font-size: 1.5em;
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
  
const ParcoursContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled(AnimatedText)`
  letter-spacing: 4px;
  font-size: 3em;
  margin-bottom: 20px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 60vh;
  width: auto;
  height: auto;
  margin: 20px;
`;

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TextParcoursTitleL = styled(AnimatedText)`
  letter-spacing: 2px;
  margin-right: 20px;
  padding-bottom:80px;
`;

const TextParcoursTitleR = styled(AnimatedText)`
  letter-spacing: 2px;
  margin-left: 20px;
  padding-bottom:80px;
`;

export default Parcours;
