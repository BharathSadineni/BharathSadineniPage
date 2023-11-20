// src/components/ContactMe.js
import React from 'react';
import styled from 'styled-components';

const ContactMeWrapper = styled.div`
  background-color: #262626;
  color: #fff;
  font-family: 'Courier New', Courier, monospace;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContactForm = styled.form`
  width: 80%;
  max-width: 400px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const ContactMe = () => {
  return (
    <ContactMeWrapper>
      <h2>Contact Me</h2>
      <ContactForm>
        <Input type="text" placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <TextArea placeholder="Your Message" />
        <Button>Send Message</Button>
      </ContactForm>
    </ContactMeWrapper>
  );
};

export default ContactMe;
