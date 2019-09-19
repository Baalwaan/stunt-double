import React from 'react';
import styled from 'styled-components';

const Profile = styled.div`
  width: 15em;
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
    console.log('this is', e.target.firstChild.textContent);
    setTimeout(() => (target.style.display = 'none'), 0);
  };

  const dragOver = e => {
    e.stopPropagation();
  };

  return (
    <Profile
      id={props.id}
      draggable={true}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      <h1>{props.name}</h1>
      <Img src={props.img_url} />
      <p>{props.quote}</p>
    </Profile>
  );
};

export default Card;
