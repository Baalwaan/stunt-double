import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import MainContainer from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <App>
      <MainContainer />
    </App>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
