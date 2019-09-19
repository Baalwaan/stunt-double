import React from 'react';
import './app.css';

import Main from './components/MainContainer';

import ShortList from './assets/list-icon.png';
import Bin from './assets/trash-icon.png';

// utils
// import utils from './components/common/utils';

// imgs

const App = () => (
  <>
    <h1>Find your stunt doubles!</h1>
    <div className="App">
      <img src={Bin}></img>
      <Main />
      <img src={ShortList}></img>
    </div>
  </>

  // ?
  // if card.length == 0 show modal with list of names that had yes clicked on them
);

export default App;
