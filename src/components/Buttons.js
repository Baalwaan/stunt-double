import React from 'react';
import styled from 'styled-components';

import Yes from '../assets/yes.png';
import No from '../assets/no.png';

const Container = styled.div`
  width: 80%;
  border: solid red 2px;
  display: flex;
  justify-content: space-around;
`;

const Buttons = () => (
  <Container>
    <img src={Yes} />
    <img src={No} />
  </Container>
);

export default Buttons;
