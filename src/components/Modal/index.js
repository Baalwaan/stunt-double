import React from 'react';

// styledcomponents
import {
  BgModal,
  Title,
  ModalContainer,
  CandidateList,
  Profile,
  Img,
  P,
  Contact,
  IconContainer,
  A,
  ContactIcon,
  Button
} from './styled-components';

import Internet from '../../assets/internet-icon.png';
import Phone from '../../assets/phone-icon.png';
import Email from '../../assets/email-icon.png';

const Modal = props => {
  return (
    <BgModal>
      <ModalContainer>
        {props.shortListedStunts.length === 0 && props.profileStack === 0 ? (
          <Title style={{ margin: '1em' }}>
            You have not shortlisted anyone.
          </Title>
        ) : (
          <Title>List of people you have shortlisted</Title>
        )}

        <CandidateList title="container">
          {props.shortListedStunts.map((name, acc) => {
            ++acc;

            const img = props.profiles.filter(profile =>
              profile.name.includes(name) ? profile.img : null
            );
            return (
              <Profile key={acc}>
                <Img src={img[0].img}></Img>
                <Contact>
                  <P>{name}</P>
                  <IconContainer>
                    <A href="http://www.google.com" target="_blank" alt="Phone">
                      <ContactIcon src={Phone} title="Phone" />
                    </A>
                    <A href="http://www.google.com" target="_blank" alt="Email">
                      <ContactIcon src={Email} title="Email" />
                    </A>
                    <A
                      href="http://www.google.com"
                      target="_blank"
                      alt="Portfolio"
                    >
                      <ContactIcon src={Internet} title="Portfolio" />
                    </A>
                  </IconContainer>
                </Contact>
              </Profile>
            );
          }, 0)}
        </CandidateList>
        <Button onClick={() => window.location.reload()} title="Restart search">
          search more
        </Button>
      </ModalContainer>
    </BgModal>
  );
};

export default Modal;
