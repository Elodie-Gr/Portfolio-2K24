import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarteMonde from '../images/carteMonde.jpg';
import Bookolect from '../images/bookolect.jpg';
import GuideTouristique from '../images/guide.png';
import Tickat from '../images/tickat.png';
import QrCode from '../images/qrcode.jpg';
import Formulaire from '../images/formulaire.jpg';
import { MdClose } from 'react-icons/md';

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
          autoPlay={true}
          autoPlaySpeed={2000} 
        >
          {/* Contenu du carrousel */}
          <CarouselItem
            onClick={() => openModal({ title: "Countriestive - Apprendre les pays par coeur",  description: (
              <>
                <DescriptionItem>Cette application mobile a été conçue avec React Native.</DescriptionItem>
                <DescriptionItem>Elle permet d'en apprendre plus sur les pays du monde entier grâce à une description. Possibilité de les mettre en favoris.</DescriptionItem>
                <DescriptionItem>Pour en savoir plus, consultez la démonstration présente dans le ReadMe <a href="https://github.com/Elodie-Gr/ynov-webMobile">https://github.com/Elodie-Gr/ynov-webMobile</a></DescriptionItem>
              </>
            ), image: CarteMonde })}
          >
            <CarouselImage src={CarteMonde} alt="Carte du monde" />
            <TitleItem>Countriestive - Apprendre les pays par coeur</TitleItem>
            <DescriptionItem>Application mobile en React Native</DescriptionItem>
          </CarouselItem>
          <CarouselItem
            onClick={() => openModal({ title: "Bookolect - gérer sa bibliothèque de livres", description: (
              <>
                <DescriptionItem>Cette application mobile a été conçue avec Flutter.</DescriptionItem>
                <DescriptionItem>Son utilisation est simple : il suffit de scanner le code barre de votre livre. Vous pouvez les gérer et trier.</DescriptionItem>
                <DescriptionItem>Pour en savoir plus, consultez le PDF <a href="https://github.com/Elodie-Gr/Bookolect/blob/main/Bookolect.pdf">https://github.com/Elodie-Gr/Bookolect/blob/main/Bookolect.pdf</a></DescriptionItem>
              </>
            ), image: Bookolect })}
          >
            <CarouselImage src={Bookolect} alt="Livres" />
            <TitleItem>Bookolect - gérer sa bibliothèque de livres</TitleItem>
            <DescriptionItem>Application mobile avec Flutter</DescriptionItem>
          </CarouselItem>
          <CarouselItem
            onClick={() => openModal({ title: "Guide touristique des villes de France", description: (
              <>
                <DescriptionItem>Ce site web a été conçue avec Notion.</DescriptionItem>
                <DescriptionItem>Il partage les incontournables à voir dans chaque ville de France que j’ai pu visiter. </DescriptionItem>
                <DescriptionItem>Pour y accéder, <a href="https://guidetouristique.notion.site/Guide-touristique-des-villes-de-France-75fc71f9dae7417fa077e1a4387b8def?pvs=4">cliquez ici !</a></DescriptionItem>
              </>
            ), image: GuideTouristique })}
          >
            <CarouselImage src={GuideTouristique} alt="Guide touristique" />
            <TitleItem>Guide touristique des villes de France</TitleItem>
            <DescriptionItem>Site web avec l'outil Notion</DescriptionItem>
          </CarouselItem>
          <CarouselItem
            onClick={() => openModal({ title: "Tickat - Outil de ticketting pour les entreprises", description: (
              <>
                <DescriptionItem>Ce site web a été conçue avec PHP, HTML, CSS et Javascript.</DescriptionItem>
                <DescriptionItem>Il permet aux entreprises de communiquer avec leurs clients à l'aide de tickets. </DescriptionItem>
                <DescriptionItem>Pour en savoir plus, consulter le PDF <a href="https://github.com/Elodie-Gr/Tickat/blob/main/03-Documentation_Utilisateur_tick.pdf"> ici !</a></DescriptionItem>
              </>
            ), image: Tickat })}
          >
            <CarouselImage src={Tickat} alt="Tickat" />
            <TitleItem>Tickat - Outil de ticketting pour les entreprises</TitleItem>
            <DescriptionItem>Site web en HTML, CSS, Javascript et PHP</DescriptionItem>
          </CarouselItem>
          <CarouselItem
            onClick={() => openModal({ title: "Module de pointage par QR Code pour les salariés", description: (
              <>
                <DescriptionItem>Ce site web a été conçue avec C# en architecture MVC.</DescriptionItem>
                <DescriptionItem>Il permet aux entreprises de créer des QR Code pour leur site afin que les agents qui le visitent puisse signaler leur présence. </DescriptionItem>
                <DescriptionItem>Je ne peux pas communiquer de code sur ce projet car c'est un projet d'entreprise.</DescriptionItem>
              </>
            ), image: QrCode })}
          >
            <CarouselImage src={QrCode} alt="Qr Code" />
            <TitleItem>Module de pointage par QR Code pour les salariés</TitleItem>
            <DescriptionItem>Module utilisant C# avec l'architecture MVC</DescriptionItem>
          </CarouselItem>
          <CarouselItem
            onClick={() => openModal({ title: "Formulaire de questions pour les salariés", description: (
              <>
                <DescriptionItem>Ce module a été conçu avec Windev mobile.</DescriptionItem>
                <DescriptionItem>Il permet aux agents des entreprises de répondre à des formulaires de questions. </DescriptionItem>
                <DescriptionItem>Je ne peux pas communiquer de code sur ce projet car c'est un projet d'entreprise.</DescriptionItem>
              </>
            ), image: Formulaire })}
          >
            <CarouselImage src={Formulaire} alt="Formulaire" />
            <TitleItem>Formulaire de questions pour les salariés</TitleItem>
            <DescriptionItem>Application mobile Windev</DescriptionItem>
          </CarouselItem>
        </Carousel>
      </CarouselContainer>
      {/* Modal */}
      {showModal && (
        <ModalContainer>
          <ModalContent>
          <CloseButton onClick={closeModal}><MdClose/></CloseButton>
            <img src={selectedItem.image} alt={selectedItem.title} style={{ width: "300px", height: "200px", marginBottom: "10px", marginTop: "20px"  }} />
            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.description}</p>
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
  width: 100%;
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

const CarouselImage = styled.img`
  width: 300px;
  height: 200px;
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
  text-align: justify; /* Justifier le texte */
  line-height: 0.5; /* Réduire l'espacement entre les lignes */
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
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  max-width: 50%;
  max-height: 50%;
  overflow: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  font-size: 20px;
`;


export default Projet;
