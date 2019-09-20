import React from 'react';
import './app.css';

import Main from './components/MainContainer';
import Board from './components/Board';
import Modal from './components/Modal';

import ShortList from './assets/list-icon.png';
import Bin from './assets/trash-icon.png';

// utils;
import utils from './components/utils';

const App = () => {
  const profiles = utils.map(profile => profile);
  const [profileList, updateProfileList] = React.useState(profiles);
  const [profileStack, updateProfileStack] = React.useState(profiles.length);
  const [shortListedStunts, updateShortList] = React.useState([]);
  const [currentProfile, updateCurrentProfile] = React.useState(
    profiles[0].name
  );
  return (
    <>
      <h1>Find your stunt doubles!</h1>
      <div className="App">
        <Board
          id="board-one"
          profileList={profileList}
          updateProfileList={updateProfileList}
          img={Bin}
          profileStack={profileStack}
          updateProfileStack={updateProfileStack}
        />
        <Main
          profileList={profileList}
          updateProfileList={updateProfileList}
          profiles={profiles}
          profileStack={profileStack}
          updateProfileStack={updateProfileStack}
          currentProfile={currentProfile}
          updateCurrentProfile={updateCurrentProfile}
          shortListedStunts={shortListedStunts}
          updateShortList={updateShortList}
        />
        <Board
          id="board-two"
          profileList={profileList}
          updateProfileList={updateProfileList}
          img={ShortList}
          profileStack={profileStack}
          updateProfileStack={updateProfileStack}
          updateShortList={updateShortList}
          shortListedStunts={shortListedStunts}
        />
      </div>

      {profileStack === 0 ? (
        <Modal
          profiles={profiles}
          shortListedStunts={shortListedStunts}
          profileStack={profileStack}
        />
      ) : null}
    </>
  );
};

export default App;
