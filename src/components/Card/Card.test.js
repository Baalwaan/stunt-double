import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from '../../App';
import Card from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <App>
      <Card />
    </App>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

test('renders Arya Stark profile card', () => {
  const { getByTitle, getByText } = render(
    <App>
      <Card />
    </App>
  );
  getByTitle('Arya Stark profile card'); // profile card container title
  getByText('Arya Stark'); //name shown on profile card
  getByTitle('Arya Stark image'); //title attribute on image
  getByText('"A girl has no name."'); //p tag value in profile card (quote)
});

test('renders Jon Snow  profile card', () => {
  const { getByTitle, getByText } = render(
    <App>
      <Card />
    </App>
  );
  getByTitle('Jon Snow profile card'); //
  getByText('Jon Snow');
  getByTitle('Jon Snow image');
  getByText('"Wdh do you know about being a bastard boy"');
});

test('renders Cersei Lannister profile card', () => {
  const { getByTitle, getByText } = render(
    <App>
      <Card />
    </App>
  );
  getByTitle('Cersei Lannister profile card'); //
  getByText('Cersei Lannister');
  getByTitle('Cersei Lannister image');
  getByText('"I would burn cities to the ground!"');
});

test('renders Ramsay Bolton profile card', () => {
  const { getByTitle, getByText } = render(
    <App>
      <Card />
    </App>
  );
  getByTitle('Ramsay Bolton profile card'); //
  getByText('Ramsay Bolton');
  getByTitle('Ramsay Bolton image');
  getByText('"Let\'s play a game. Which body part do you need the least?"');
});

test('renders Tyrion Lanister profile card', () => {
  const { getByTitle, getByText } = render(
    <App>
      <Card />
    </App>
  );
  getByTitle('Tyrion Lanister profile card'); //
  getByText('Tyrion Lanister');
  getByTitle('Tyrion Lanister image');
  getByText('A Lannister always pays his debt');
});
