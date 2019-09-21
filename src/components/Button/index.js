import React from 'react';

// styledcomponents
import { Container, Img } from './styled-components';

// images of yes no buttons
import Yes from '../../assets/yes.png';
import No from '../../assets/no.png';

const Buttons = props => {
  //Length of profileList
  const length = props.profileList.length;

  const handleYes = () => {
    const currentProfile = props.profileList[length - 1].name;
    props.updateShortList(props.shortListedStunts.concat(currentProfile));
    props.updateProfileStack(props.profileStack - 1);
    const updatedList = props.profileList.filter(
      profile => profile.name !== currentProfile
    );
    props.updateProfileList(updatedList);
  };

  const handleNo = () => {
    const currentProfile = props.profileList[length - 1].name;
    props.updateProfileStack(props.profileStack - 1);
    const updatedList = props.profileList.filter(
      profile => profile.name !== currentProfile
    );
    props.updateProfileList(updatedList);
  };

  return (
    <Container>
      <Img src={Yes} onClick={handleYes} title="Yes" alt="Yes button" />
      <Img src={No} onClick={handleNo} title="No" alt="No Button" />
    </Container>
  );
};

export default Buttons;
