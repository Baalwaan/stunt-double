import React from 'react';
import styled from 'styled-components';

import Internet from '../assets/internet-icon.png';
import Phone from '../assets/phone-icon.png';
import Email from '../assets/email-icon.png';

const BgModal = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(192, 192, 192, 0.6);
  color: white;
`;

const Title = styled.h2`
  text-align: center;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20em;
  border: solid rgb(16, 61, 16) 0.5em;
  background: rgb(5, 121, 52);
  border-radius: 5%;
  padding: 1em;
  margin: 1em;
`;

const CandidateList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Profile = styled.div`
display flex;
align-items: center
width: 100%; 
`;

const Img = styled.img`
border: solid 2px black
  margin: 1em;
  width: 3.5em;
  height: 3.5em;
`;

const P = styled.p`
  font-size: 1em;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const IconContainer = styled.div`
  margin: 0.3em 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  width: 7em;
`;

const A = styled.a`
  text-decoration: none;
`;

const ContactIcon = styled.img`
  width: 1.5em;
  height: 1.5em;
`;

const Button = styled.button`
cursor: pointer;
margin: auto;
background: grey
  padding: 0.5em;
  color: white;

  font-weight: bold;
font-size: 1.1em
  border-radius: 2%;
  outline: none;
  :hover{
    background: #79cadc;
      transition: 1s;
      color: black;

  }
`;

const Modal = props => {
  const HandleApp = props => {
    props.incrementID(props.id + 1);
  };
  return (
    <BgModal>
      <ModalContainer>
        {props.shortListedStunts && props.profileStack === 0 ? (
          <Title style={{ margin: '1em' }}>
            You have not shortlisted anyone.
          </Title>
        ) : (
          <Title>List of people you have shortlisted</Title>
        )}

        <CandidateList>
          {props.shortListedStunts.map(name => {
            const img = props.profiles.filter(profile =>
              profile.name.includes(name) ? profile.img : null
            );
            return (
              <Profile>
                <Img src={img[0].img}></Img>
                <Contact>
                  <P>{name}</P>
                  <IconContainer>
                    <A href="http://www.google.com" target="_blank" alt="Phone">
                      <ContactIcon src={Phone} />
                    </A>
                    <A href="http://www.google.com" target="_blank" alt="Email">
                      <ContactIcon src={Email} />
                    </A>
                    <A
                      href="http://www.google.com"
                      target="_blank"
                      alt="Portfolio"
                    >
                      <ContactIcon src={Internet} />
                    </A>
                  </IconContainer>
                </Contact>
              </Profile>
            );
          })}
        </CandidateList>
        <Button onClick={() => window.location.reload()}>search more</Button>
      </ModalContainer>
    </BgModal>
  );
};

export default Modal;
