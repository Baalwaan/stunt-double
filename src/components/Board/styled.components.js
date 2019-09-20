import styled from 'styled-components';

const Container = styled.div`
  width: 10em;
  height: 10em;
  // border: solid black 2px;
  // margin: auto;

  @media only screen and (max-width: 680px) {
    display: none;
  }
`;

const IMG = styled.img`
  width: 100%;
  height: 100%;
`;

export { Container, IMG };
