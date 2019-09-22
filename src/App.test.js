import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('testing if Yes/No buttons are clickable', () => {
  const { getByTitle, getByText } = render(<App></App>);

  const yesButton = getByTitle('Yes');
  const noButton = getByTitle('No');

  const profileCard = getByTitle(`Arya Stark profile card`);

  fireEvent.click(yesButton);
  fireEvent.click(noButton);
  fireEvent.click(yesButton);
  fireEvent.click(noButton);
  fireEvent.click(noButton);
  const searchAgainButton = getByText('search more');
});
