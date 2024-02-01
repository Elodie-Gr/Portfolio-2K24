import React, { useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import Arbre from '../images/arbre.png';

const Parcours = () => {
  const titleRef = useRef();
  const [inViewRef, inView] = useInView();

  const TextParcoursMRef = useRef();
  const TextParcoursMR = useRef();
  const TextParcoursRefLP = useRef();
  const TextParcoursRefLPR = useRef();
  const TextParcoursRefBTS = useRef();
  const TextParcoursRefBTSR = useRef();
  const TextParcoursRefTitleL = useRef();
  const TextParcoursRefTitleR = useRef();
  const [leftInViewRef, leftInView] = useInView();
  const [rightInViewRef, rightInView] = useInView();
  const [leftInViewRefLP, leftInViewLP] = useInView();
  const [rightInViewRefLP, rightInViewLP] = useInView();
  const [leftInViewRefBTS, leftInViewBTS] = useInView();
  const [rightInViewRefBTS, rightInViewBTS] = useInView();
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

  useEffect(() => {
    const title = titleRef.current;

    if (inView) {
      animateTextParcours(title);
    }

    const TextParcoursM = TextParcoursMRef.current;
    const TextParcoursMRR = TextParcoursMR.current;
    const TextParcoursLP = TextParcoursRefLP.current;
    const TextParcoursPR = TextParcoursRefLPR.current;
    const TextParcoursBTS = TextParcoursRefBTS.current;
    const TextParcoursBTSR = TextParcoursRefBTSR.current;
    const TextParcoursTitleL = TextParcoursRefTitleL.current;
    const TextParcoursTitleR = TextParcoursRefTitleR.current;

    if (leftInView) {
      animateTextParcours(TextParcoursM);
    }

    if (rightInView) {
      animateTextParcours(TextParcoursMRR);
    }

    if (leftInViewLP) {
      animateTextParcours(TextParcoursLP);
    }

    if (rightInViewLP) {
      animateTextParcours(TextParcoursPR);
    }
    if (leftInViewLP) {
      animateTextParcours(TextParcoursLP);
    }

    if (rightInViewBTS) {
      animateTextParcours(TextParcoursBTSR);
    }

    if (leftInViewBTS) {
      animateTextParcours(TextParcoursBTS);
    }

    if (rightInViewTitle) {
      animateTextParcours(TextParcoursTitleR);
    }

    if (leftInViewRefTitle) {
      animateTextParcours(TextParcoursTitleL);
    }

  }, [inView, leftInView, rightInView, leftInViewLP, rightInViewLP, leftInViewBTS, rightInViewBTS, rightInViewTitle, leftInViewRefTitle]);


  return (
    <ParcoursContainer>
      <TitleContainer>
        <Title ref={(node) => { inViewRef(node); titleRef.current = node; }}>Parcours</Title>
      </TitleContainer>
      <ContentContainer>
        <RowContainer>
        {/* Textes à gauche */}
        <TextParcoursTitleL ref={(node) => { leftInViewRefTitleL(node); TextParcoursRefTitleL.current = node; }}>Scolaire</TextParcoursTitleL>
        <TextParcoursM ref={(node) => { leftInViewRef(node); TextParcoursMRef.current = node; }}>2022-2024</TextParcoursM>
        <TextParcoursLP ref={(node) => { leftInViewRefLP(node); TextParcoursRefLP.current = node; }}>2021-2022</TextParcoursLP>
        <TextParcoursBTS ref={(node) => { leftInViewRefBTS(node); TextParcoursRefBTS.current = node; }}>2019-2021</TextParcoursBTS>
        </RowContainer>
        <Image src={Arbre} />
        <RowContainer>
        {/* Textes à droite */}
        <TextParcoursTitleR ref={(node) => { rightInViewRefTitleR(node); TextParcoursRefTitleR.current = node; }}>Professionnel</TextParcoursTitleR>
        <TextParcoursMRR ref={(node) => { rightInViewRef(node); TextParcoursMR.current = node; }}>2022-2024</TextParcoursMRR>
        <TextParcoursPR ref={(node) => { rightInViewRefLP(node); TextParcoursRefLPR.current = node; }}>2021-2022</TextParcoursPR>
        <TextParcoursBTSR ref={(node) => { rightInViewRefBTS(node); TextParcoursRefBTSR.current = node; }}>2019-2021</TextParcoursBTSR>
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

const TextParcoursM = styled(AnimatedText)`
  letter-spacing: 2px;
  margin-right: 20px;
  padding-bottom:80px;
`;

const TextParcoursMRR = styled(AnimatedText)`
  letter-spacing: 2px;
  margin-left: 20px;
  padding-bottom:80px;
`;

const TextParcoursLP = styled(AnimatedText)`
  letter-spacing: 2px;
  margin-right: 20px;
  padding-top:30px;
`;

const TextParcoursPR = styled(AnimatedText)`
  letter-spacing: 2px;
  margin-left: 20px;
  padding-top:30px;
`;

const TextParcoursBTS = styled(AnimatedText)`
  letter-spacing: 2px;
  margin-right: 20px;
  padding-top:140px;
`;

const TextParcoursBTSR = styled(AnimatedText)`
  letter-spacing: 2px;
  margin-left: 20px;
  padding-top:140px;
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
