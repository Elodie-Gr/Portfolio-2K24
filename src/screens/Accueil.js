import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const Accueil = () => {
  const nameRef = useRef();
  const jobTitleRef = useRef();
  const canvasRef = useRef();
  const [showJobTitle, setShowJobTitle] = useState(false);

  useEffect(() => {
    const name = nameRef.current;
    const jobTitle = jobTitleRef.current;
    const canvas = canvasRef.current;

    animateText(name, () => {
      setTimeout(() => {
        setShowJobTitle(true);
        animateText(jobTitle);
      }, 100);
    });

    // Add stars animation
    animateStars(canvas);
  }, []);

  const animateText = (ref, callback) => {
    const text = ref.textContent;
    const letters = text.split('');

    ref.textContent = '';

    letters.forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter === ' ' ? '\u00A0' : letter;
      span.style.animationDelay = `${index * 0.1}s`;
      ref.appendChild(span);

      if (index === letters.length - 1) {
        span.addEventListener('animationend', callback);
      }
    });
  };

  const animateStars = (canvas) => {
    const ctx = canvas.getContext('2d');
    const stars = [];

    canvas.width = 800;
    canvas.height = 600;

    for (let i = 0; i < 500; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 2;
      const opacity = Math.random();
      stars.push({ x, y, radius, opacity });
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      }
    }

    function animateStars() {
      drawStars();

      for (const star of stars) {
        star.y += 0.1;

        if (star.y > canvas.height) {
          star.y = 0;
        }
      }

      requestAnimationFrame(animateStars);
    }

    animateStars();
  };

  return (
    <AccueilContainer>
      <TextContainer>
      <Canvas ref={canvasRef}></Canvas>
      <ContainerText>
        <Name ref={nameRef}>Elodie GEORGES,</Name>
        <JobTitle ref={jobTitleRef} show={showJobTitle}>
          Développeuse web & mobile
        </JobTitle>
        <ContactButton to="/contact">Me contacter</ContactButton>
      </ContainerText>
      </TextContainer>
      <ScrollDownButton href="/qui-suis-je" />
    </AccueilContainer>
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

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const AccueilContainer = styled.div`
  width: 100%;
  height: 100vh;
`;


const TextContainer = styled.div`
  position: relative;
  background-color: black;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AnimatedText = styled.span`
  color: white;
  font-size: 70px;
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

const Name = styled(AnimatedText)`
align-self: flex-start;
`;

const JobTitle = styled(AnimatedText)`
  span {
    display: inline-block;
    animation: ${fadeIn} 0.5s ease-in-out forwards;
    animation-delay: 0.5s; /* Delay for job title */
  }

  ${({ show }) => !show && hideText};
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 80px;
`;

const ContactButton = styled.a`
display: inline-block;
margin-top: 20px;
padding: 10px 20px;
background-color: #FFDEE4;
color: black;
font-size: 16px;
text-decoration: none;
border-radius: 20px;
cursor: pointer;
transition: background-color 0.3s ease;

&:hover {
  background-color: white
}
`;

const ScrollDownButton = styled.a`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #FFDEE4;
  padding: 20px;
  border-radius: 50%;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: white;
  }

  &::after {
    content: ' ';
    display: block;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 15px solid black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default Accueil;
