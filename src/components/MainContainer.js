import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Buttons from './Buttons';

const Container = styled.div`
width: 30em
border: solid black 2px;
margin: auto;
padding: 1em;
height: 100vh;
background: transparent;
display: flex; 
flex-direction: column;
justify-content: center;
align-items: center;
`;

const ProfileHolder = styled.div`
  position: relative;
//   border: solid purple 10px;
  width: 18em;
  height: 25em;
  margin 1em 0;
`;

const MainContainer = props => {
  return (
    <Container>
      <ProfileHolder>
        {props.profiles.map(profile => (
          <Card
            id={profile.name}
            name={profile.name}
            quote={profile.quote}
            img_url={profile.img_url}
          ></Card>
        ))}
      </ProfileHolder>

      <Buttons></Buttons>
    </Container>
  );
};

export default MainContainer;
