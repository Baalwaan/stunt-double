import React from 'react';
import styled from 'styled-components';
import Card from './Card';

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

const Board = props => {
  const handleProfileStack = card_id => {
    props.updateProfileStack(props.profileStack - 1);
    const updatedList = props.profileList.filter(
      profile => profile.name != card_id
    );
    props.updateProfileList(updatedList);
  };

  const handleUpdateShortlist = card_id => {
    props.updateShortList(props.shortListedStunts.concat(card_id));
    const updatedList = props.profileList.filter(
      profile => profile.name != card_id
    );
    props.updateProfileList(updatedList);
  };

  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData('card_id');

    const trueVal = window.confirm(
      `Are you sure this is what you want to do with ${card_id}. To Proceed click 'OK'.`
    );

    if (trueVal) {
      const card = document.getElementById(card_id);
      card.style.display = 'block';

      if (e.target.id == 'board-two') {
        handleUpdateShortlist(card_id);
      }
      handleProfileStack(card_id);
    } else {
      return false;
    }
  };

  const dragOver = e => {
    e.preventDefault();
  };
  return (
    <Container>
      <IMG
        src={props.img}
        id={props.id}
        className={props.className}
        onDrop={drop}
        onDragOver={dragOver}
      ></IMG>
    </Container>
  );
};

export default Board;
