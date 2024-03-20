import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const titleRef = useRef();
  const [inViewRef, inView] = useInView();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const title = titleRef.current;

    if (inView) {
      animateTextContact(title);
    }
  }, [inView]);

  const animateTextContact = (ref) => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <ContactContainer>
      <TitleContainer>
        <Title ref={(node) => { inViewRef(node); titleRef.current = node; }}>Contact</Title>
      </TitleContainer>
      <FormContainer>
        <Form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <FormField>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <label htmlFor="name">Nom:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <label htmlFor="subject">Sujet:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField fullwidth>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </FormField>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </FormContainer>
    </ContactContainer>
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

const ContactContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
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

const FormContainer = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 600px;
  margin-top: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormField = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  label {
    color: white;
    margin-bottom: 5px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #333;
    color: white;
    font-size: 16px;
    transition: background-color 0.3s;
  }

  textarea {
    height: 150px;
  }

  input[type="text"]:focus,
  input[type="email"]:focus,
  textarea:focus {
    outline: none;
  }

  input[type="text"]::placeholder,
  input[type="email"]::placeholder,
  textarea::placeholder {
    color: #FFDEE4;
  }
`;


const SubmitButton = styled.button`
  padding: 10px 150px;
  background-color: #FFDEE4;
  border: none;
  border-radius: 5px;
  color: black;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #FFDEE4;
  }
`;

export default Contact;
