import React, { useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useInView } from 'react-intersection-observer';

const Competences = () => {
  const titleRef = useRef();
  const [inViewRef, inView] = useInView();

  useEffect(() => {
    const title = titleRef.current;

    if (inView) {
      animateText(title);
    }
  }, [inView]);

  const animateText = (ref) => {
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

  return (
    <CompetencesContainer>
      <TitleContainer>
        <Title ref={(node) => { inViewRef(node); titleRef.current = node; }}>Compétences</Title>
      </TitleContainer>
    </CompetencesContainer>
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
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 200px;
`;

const Title = styled(AnimatedText)`
  letter-spacing: 4px;
`;

export default Competences;
