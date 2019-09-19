import React from 'react';
import './app.css';

import Main from './components/MainContainer';
import Board from './components/Board';

import ShortList from './assets/list-icon.png';
import Bin from './assets/trash-icon.png';

// utils;
import utils from './components/utils';

// imgs

const App = () => {
  const [profileStack, updateProfileStack] = React.useState(utils.length);

  const profiles = utils.map(profile => profile);

  // React.useEffect(() => {
  //   return console.log('this is rerendered with ', profileStack);
  // }, [profileStack]);

  return (
    <>
      <h1>Find your stunt doubles!</h1>
      <div className="App">
        <Board
          id="board-one"
          img={Bin}
          profileStack={profileStack}
          updateProfileStack={updateProfileStack}
        />
        <Main profiles={profiles} />
        <Board
          id="board-two"
          img={ShortList}
          profileStack={profileStack}
          updateProfileStack={updateProfileStack}
        />

        {/* logic below needs fixing!!! needs to reference length of stuntment in list not profile stack */}
        {profileStack === 0
          ? alert(`No more stunt men you have ${profileStack} stuntmen`)
          : null}
      </div>
    </>
  );
};

export default App;
