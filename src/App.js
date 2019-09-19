import React from 'react';

import Card from './components/Card';

// utils
// import utils from './components/common/utils';

// imgs

import Ramsay from './assets/ramsay.jpg';
import JonSnow from './assets/jon_snow.jpg';
import AryaStark from './assets/arya_stark.jpg';
import Cersei from './assets/cersei.jpg';

const utils = [
  {
    name: 'Jon Snow',
    img_url: JonSnow,
    quote: 'Wdh do you know about being a bastard boy'
  },
  {
    name: 'Cersei Lannister',
    img_url: Cersei,
    quote: 'I would burn cities to the ground!'
  },
  {
    name: 'Ramsay Bolton',
    img_url: Ramsay,
    quote: "Let's play a game. Which body part do you need the least?"
  },
  {
    name: 'Arya Stark',
    img_url: AryaStark,
    quote: 'A girl has no name'
  }
];

const App = () => (
  <div>
    hello world
    {utils.map(profile => (
      <Card
        name={profile.name}
        quote={profile.quote}
        img_url={profile.img_url}
      ></Card>
    ))}
  </div>
);

export default App;
