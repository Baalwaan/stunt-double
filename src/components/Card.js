import React from 'react';
import styled from 'styled-components';

const Profile = styled.div`
  border-radius: 4%;
  width: 15em;
  min-height: 22em;
  border: solid black 2px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-contents: center;
  text-align: center;
  box-shadow: 3px 3px 3px gray;
  padding: 1em;
  position: absolute;
  background: #f5f5dc;
  cursor: pointer;
`;

const Img = styled.img`
  max-width: 12em;
  height: 15em;
  margin: 0.5em;
`;

const Card = props => {
  const dragStart = e => {
    const target = e.target;
    e.dataTransfer.setData('card_id', target.id);
    // console.log('this is', e.target.firstChild.textContent);
  };

  const dragOver = e => {
    e.stopPropagation();
  };

  return (
    <Profile
      id={props.id}
      draggable="true"
      onDragStart={dragStart}
      onDragOver={dragOver}
      className={'profiles'}
    >
      <h1>{props.name}</h1>
      <Img draggable="false" src={props.img} />
      <p>{props.quote}</p>
      {/* {props.children} */}
    </Profile>
  );
};

export default Card;
