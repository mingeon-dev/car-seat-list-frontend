import React from 'react';
import styled from 'styled-components';

const ThumbnailBlock = styled.div`
  margin-right: 1rem;
  img {
    display: block;
    width: 140px;
    height: 140px;
    object-fit: contain;
  }
`;

const Thumbnail = ({ url, urlToImage }) => {
  return (
    <ThumbnailBlock>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={urlToImage} alt="thumbnail" />
      </a>
    </ThumbnailBlock>
  );
};

export default Thumbnail;
