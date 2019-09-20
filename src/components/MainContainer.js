import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Buttons from './Buttons';

const Container = styled.div`
  // width: 30em
  // border: solid black 2px;
  // margin: auto;
  // padding: 1em;
  // height: 100vh;
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
        {props.profileList.map(profile => (
          <Card
            id={profile.name}
            name={profile.name}
            quote={profile.quote}
            img={profile.img}
          ></Card>
        ))}
      </ProfileHolder>

      <Buttons
        // profiles={props.profiles}
        profileStack={props.profileStack}
        updateProfileStack={props.updateProfileStack}
        shortListedStunts={props.shortListedStunts}
        updateShortList={props.updateShortList}
        currentProfile={props.currentProfile}
        updateCurrentProfile={props.updateCurrentProfile}
        profileList={props.profileList}
        updateProfileList={props.updateProfileList}
      ></Buttons>
    </Container>
  );
};

export default MainContainer;
