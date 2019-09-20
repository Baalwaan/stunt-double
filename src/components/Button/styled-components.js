import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
`;

const Img = styled.img`
  cursor: pointer;
  :active {
    transform: scale(1.2);
  }
`;

export { Container, Img };
