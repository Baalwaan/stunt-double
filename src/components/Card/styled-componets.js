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

export { Profile, Img };
