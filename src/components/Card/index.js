import React from 'react';

// styledcomponents
import { Profile, Img } from './styled-componets';

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
