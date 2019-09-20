import React from 'react';

// styledcomponents
import { Container, ProfileHolder } from './styled-components';

// components
import Card from '../Card/index';
import Buttons from '../Button/index';

const MainContainer = props => {
  return (
    <Container>
      <ProfileHolder>
        {props.profileList.map(profile => (
          <Card
            key={profile.name}
            id={profile.name}
            name={profile.name}
            quote={profile.quote}
            img={profile.img}
          ></Card>
        ))}
      </ProfileHolder>

      <Buttons
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
