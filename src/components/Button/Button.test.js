import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from '../../App';
import Button from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <App>
      <Button />
    </App>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

test('renders Button container with buttons', () => {
  const { getByTitle } = render(
    <App>
      <Button />
    </App>
  );
  getByTitle('Yes');
  getByTitle('No');
});
