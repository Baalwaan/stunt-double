import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 20em;
  height: 20em;
  border: solid black 2px;
`;

const Board = props => {
  const handleProfileStack = () =>
    props.updateProfileStack(props.profileStack - 1);

  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData('card_id');

    const card = document.getElementById(card_id);
    card.style.display = 'block';

    e.target.appendChild(card);
    // console.log(e.target);
    e.target.removeChild(card);

    handleProfileStack();
  };

  const dragOver = e => {
    e.preventDefault();
  };
  return (
    <Container
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      <img src={props.img}></img>
      {/* <p>{count}</p> */}
    </Container>
  );
};

export default Board;
