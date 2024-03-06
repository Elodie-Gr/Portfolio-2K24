import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Projet = () => {
  const titleRef = useRef();
  const [inViewRef, inView] = useInView();
  const [showModal, setShowModal] = useState(false); // État pour la modal
  const [selectedItem, setSelectedItem] = useState({}); // État pour l'élément sélectionné

  useEffect(() => {
    const title = titleRef.current;

    if (inView) {
      animateTextProjets(title);
    }
  }, [inView]);

  const animateTextProjets = (ref) => {
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

  // Fonction pour ouvrir la modal avec l'élément sélectionné
  const openModal = (item) => {
    setShowModal(true);
    setSelectedItem(item);
  };

  // Fonction pour fermer la modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedItem({});
  };

  return (
    <ProjetContainer>
      <TitleContainer>
        <Title ref={(node) => { inViewRef(node); titleRef.current = node; }}>Projets</Title>
      </TitleContainer>
      <CarouselContainer>
        <Carousel
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
              partialVisibilityGutter: 40
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
              partialVisibilityGutter: 30
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              partialVisibilityGutter: 30
            }
          }}
        >
          {/* Contenu du carrousel */}
          <CarouselItem
            onClick={() => openModal({ title: "Titre de l'élément 1", description: "Description de l'élément 1" })}
          >
            <img src="https://via.placeholder.com/300" alt="placeholder" />
            <TitleItem>Titre de l'élément 1</TitleItem>
            <DescriptionItem>Description de l'élément 1</DescriptionItem>
          </CarouselItem>
          <CarouselItem
            onClick={() => openModal({ title: "Titre de l'élément 2", description: "Description de l'élément 2" })}
          >
            <img src="https://via.placeholder.com/300" alt="placeholder" />
            <TitleItem>Titre de l'élément 2</TitleItem>
            <DescriptionItem>Description de l'élément 2</DescriptionItem>
          </CarouselItem>
          <CarouselItem
            onClick={() => openModal({ title: "Titre de l'élément 3", description: "Description de l'élément 3" })}
          >
            <img src="https://via.placeholder.com/300" alt="placeholder" />
            <TitleItem>Titre de l'élément 3</TitleItem>
            <DescriptionItem>Description de l'élément 3</DescriptionItem>
          </CarouselItem>
          <CarouselItem
            onClick={() => openModal({ title: "Titre de l'élément 4", description: "Description de l'élément 4" })}
          >
            <img src="https://via.placeholder.com/300" alt="placeholder" />
            <TitleItem>Titre de l'élément 4</TitleItem>
            <DescriptionItem>Description de l'élément 4</DescriptionItem>
          </CarouselItem>
          <CarouselItem
            onClick={() => openModal({ title: "Titre de l'élément 5", description: "Description de l'élément 5" })}
          >
            <img src="https://via.placeholder.com/300" alt="placeholder" />
            <TitleItem>Titre de l'élément 5</TitleItem>
            <DescriptionItem>Description de l'élément 5</DescriptionItem>
          </CarouselItem>
          <CarouselItem
            onClick={() => openModal({ title: "Titre de l'élément 6", description: "Description de l'élément 6" })}
          >
            <img src="https://via.placeholder.com/300" alt="placeholder" />
            <TitleItem>Titre de l'élément 6</TitleItem>
            <DescriptionItem>Description de l'élément 6</DescriptionItem>
          </CarouselItem>
        </Carousel>
      </CarouselContainer>
      {/* Modal */}
      {showModal && (
        <ModalContainer>
          <ModalContent>
            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.description}</p>
            <button onClick={closeModal}>Fermer</button>
          </ModalContent>
        </ModalContainer>
      )}
    </ProjetContainer>
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

const ProjetContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 50px;
`;

const Title = styled(AnimatedText)`
  letter-spacing: 4px;
`;

const CarouselContainer = styled.div`
  width: 80%;
  max-width: 1000px;
  margin-top: 50px;
`;

const CarouselItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin: 0 10px;
  cursor: pointer;
`;

const TitleItem = styled.h3`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
`;

const DescriptionItem = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: #333;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
`;

export default Projet;
