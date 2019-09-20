import Ramsay from '../assets/ramsay.jpg';
import JonSnow from '../assets/jon_snow.jpg';
import AryaStark from '../assets/arya_stark.jpg';
import Cersei from '../assets/cersei.jpg';
import TyrionLannister from '../assets/tyrion_lannister.jpg';

const utils = [
  {
    name: 'Jon Snow',
    img: JonSnow,
    quote: '"Wdh do you know about being a bastard boy"'
  },
  {
    name: 'Cersei Lannister',
    img: Cersei,
    quote: '"I would burn cities to the ground!"'
  },
  {
    name: 'Ramsay Bolton',
    img: Ramsay,
    quote: '"Let\'s play a game. Which body part do you need the least?"'
  },
  {
    name: 'Arya Stark',
    img: AryaStark,
    quote: '"A girl has no name."'
  },
  {
    name: 'Tyrion Lanister',
    img: TyrionLannister,
    quote: 'A Lannister always pays his debt'
  }
];

utils.sort(() => Math.random() - 0.5);

export default utils;
