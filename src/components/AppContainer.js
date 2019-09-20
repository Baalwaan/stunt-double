import React from 'react';
import styled from 'styled-components';

import ShortList from '../assets/list-icon.png';
import Bin from '../assets/trash-icon.png';

import Main from './MainContainer';
import Board from './Board';
// import Modal from './components/Modal';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  /* border: solid red 5px; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* background: green; */
`;

const AppContainer = props => {
  return (
    <Container>
      <Board
        id="board-one"
        profileList={props.profileList}
        updateProfileList={props.updateProfileList}
        profileStack={props.profileStack}
        updateProfileStack={props.updateProfileStack}
        img={Bin}
      />
      <Main
        profileList={props.profileList}
        updateProfileList={props.updateProfileList}
        profileStack={props.profileStack}
        updateProfileStack={props.updateProfileStack}
        currentProfile={props.currentProfile}
        updateCurrentProfile={props.updateCurrentProfile}
        shortListedStunts={props.shortListedStunts}
        updateShortList={props.updateShortList}
        profiles={props.profiles}
      />
      <Board
        id="board-two"
        profileList={props.profileList}
        updateProfileList={props.updateProfileList}
        profileStack={props.profileStack}
        updateProfileStack={props.updateProfileStack}
        updateShortList={props.updateShortList}
        shortListedStunts={props.shortListedStunts}
        img={ShortList}
      />
    </Container>
  );
};

export default AppContainer;
