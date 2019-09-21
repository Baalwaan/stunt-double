import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import Modal from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <App>
      <Modal />
    </App>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
