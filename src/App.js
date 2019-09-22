import React from 'react';

import Modal from './components/Modal/';

// utils;
import utils from './components/utils';
import AppContainer from './components/AppContainer';

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
      <h1>Find your Game of Thrones stunt doubles</h1>
      <AppContainer
        profileList={profileList}
        updateProfileList={updateProfileList}
        profileStack={profileStack}
        updateProfileStack={updateProfileStack}
        profiles={profiles}
        currentProfile={currentProfile}
        updateCurrentProfile={updateCurrentProfile}
        shortListedStunts={shortListedStunts}
        updateShortList={updateShortList}
      ></AppContainer>

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
