import React, { useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import Anagram from 'react-anagram-animation';

const Apropos = () => {
  const titleRef = useRef();
  //const cloudsCanvasRef = useRef();
  const [inViewRef, inView] = useInView();

  useEffect(() => {
    const title = titleRef.current;

    if (inView) {
      animateTextApropos(title);
      //animateCloudsApropos(cloudsCanvasRef.current);
    }
  }, [inView]);

  const animateTextApropos = (ref) => {
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


  
  
  /*const animateCloudsApropos = (canvas) => {
    const ctx = canvas.getContext('2d');
    const clouds = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < 5; i++) {
      let cloud;
      do {
        cloud = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          width: Math.random() * 70 + 100,
          height: Math.random() * 50 + 20,
          opacity: Math.random() * 0.5 + 0.3,
        };
      } while (clouds.some(existingCloud => distance(cloud, existingCloud) < cloud.width + existingCloud.width));

      clouds.push(cloud);
    }

    function distance(point1, point2) {
      const dx = point1.x - point2.x;
      const dy = point1.y - point2.y;
      return Math.sqrt(dx * dx + dy * dy);
    }

    function drawClouds() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const cloud of clouds) {
        const wavePoints = createWavePoints(cloud);

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${cloud.opacity})`;

        for (const point of wavePoints) {
          ctx.ellipse(
            point.x,
            point.y,
            cloud.width / 2,
            cloud.height / 2,
            0,
            0,
            2 * Math.PI
          );
        }

        ctx.fill();
      }
    }

    function createWavePoints(cloud) {
      const points = [];
      const waveFrequency = 0.1;
      const waveAmplitude = 10;

      for (let x = cloud.x; x < cloud.x + cloud.width; x += 2) {
        const y = cloud.y + cloud.height / 2 + Math.sin((x - cloud.x) * waveFrequency) * waveAmplitude;
        points.push({ x, y });
      }

      return points;
    }

    function animateClouds() {
      drawClouds();

      for (const cloud of clouds) {
        cloud.x += 0.1;

        if (cloud.x > canvas.width) {
          cloud.x = -cloud.width;
        }
      }

      requestAnimationFrame(animateClouds);
    }

    animateClouds();
  };*/

  return (
    <AproposContainer>
      <TitleContainer>
        <Title ref={(node) => { inViewRef(node); titleRef.current = node; }}>Qui suis-je ?</Title>
      </TitleContainer>
      <ParagraphContainer>
        <Paragraph>
      <Anagram words={['Bonjour ! Je suis Elodie.', 
                       'jourBon ! ej isus diloee.']} />
                        <Anagram words={['Actuellement Apprentie développeuse web junior,', 
                       'teelucatelmn prniApete eupoeédsplve wbe rjunio,']} />
                        <Anagram words={['j\'effectue ma dernière année de mastère expert en développement web.', 
                       'j\'eecuftfe am eènrderi néane ed tsamère xeeptr ne teeplvdéeopmn ewb.']} />
      </Paragraph>
      </ParagraphContainer>
    </AproposContainer>
  );
};

/*const CloudsCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  pointer-events: none;
  margin-top: 50px;
`;*/

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
    &.shuffle-animation {
      transition: transform 1s ease-in-out; // Transition de 1 seconde
    }
  }

  ${({ hide }) => hide && hideText};
`;

const AproposContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleContainer = styled.div`
width: 100%;
text-align: center;
margin-top: 30px;
`;

const Title = styled(AnimatedText)`
  letter-spacing: 4px;
`;

const ParagraphContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 150px;
`;

const Paragraph = styled(AnimatedText)`
  font-size: 1.5em;
`;

export default Apropos;
