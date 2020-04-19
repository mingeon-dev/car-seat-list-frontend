import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const TagsBlock = styled.div`
  margin-top: 0.5rem;
  .tag {
    display: inline-block;
    color: ${palette.teal[7]};
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover {
      color: ${palette.teal[6]};
    }
  }
`;

const Tags = ({ tags }) => {
  return (
    <TagsBlock>
      {tags.map((tag) => (
        <span className="tag" key={tag}>
          #{tag}
        </span>
      ))}
    </TagsBlock>
  );
};

export default Tags;
