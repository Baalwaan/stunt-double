import React from 'react';
import styled from 'styled-components';

import Yes from '../assets/yes.png';
import No from '../assets/no.png';

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
`;

const Img = styled.img`
  cursor: pointer;
  :active {
    transform: scale(1.2);
  }
`;

const Buttons = props => {
  //Length of profileList
  const length = props.profileList.length;

  const handleYes = () => {
    const currentProfile = props.profileList[length - 1].name;
    props.updateShortList(props.shortListedStunts.concat(currentProfile));
    props.updateProfileStack(props.profileStack - 1);
    const updatedList = props.profileList.filter(
      profile => profile.name != currentProfile
    );
    props.updateProfileList(updatedList);
  };

  const handleNo = () => {
    const currentProfile = props.profileList[length - 1].name;
    props.updateProfileStack(props.profileStack - 1);
    const updatedList = props.profileList.filter(
      profile => profile.name != currentProfile
    );
    props.updateProfileList(updatedList);
  };

  return (
    <Container>
      <Img src={Yes} onClick={handleYes} />
      <Img src={No} onClick={handleNo} />
    </Container>
  );
};

export default Buttons;
