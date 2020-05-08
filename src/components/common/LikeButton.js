import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

const LikeButtonBlock = styled.button`
  background: none;
  outline: none;
  border: none;
  color: ${palette.pink[7]};
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s background ease-in;
  &:hover {
    color: ${palette.pink[6]};
  }
`;

const LikeButton = ({ liked, likes }) => {
  return (
    <LikeButtonBlock>
      {liked ? <MdFavorite /> : <MdFavoriteBorder />}
      {likes}
    </LikeButtonBlock>
  );
};

export default LikeButton;
