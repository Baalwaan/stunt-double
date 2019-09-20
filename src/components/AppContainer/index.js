import React from 'react';

// styledcomponent
import Container from './styled-components';

import ShortList from '../../assets/list-icon.png';
import Bin from '../../assets/trash-icon.png';

import Main from '../MainContainer/index';
import Board from '../Board/index';
// import Modal from './components/Modal';

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
