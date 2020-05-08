import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const SubInfoBlock = styled.div`
  color: ${palette.gray[7]};

  span + span:before {
    color: ${palette.gray[4]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }

  .link {
    display: inline-block;
    color: ${palette.teal[7]};
    text-decoration: none;
    &:hover {
      color: ${palette.teal[6]};
    }
  }
`;

const SubInfo = ({ company, country, minAge, maxAge, group }) => {
  return (
    <SubInfoBlock>
      <span className="link">
        <Link to={`/?company=${company}`}>{company}</Link>
      </span>
      <span>{country}</span>
      <span>{group.reduce((acc, cur) => `${acc}/${cur}`)}</span>
      <span>
        {minAge > 0 && minAge < 12
          ? `${minAge}개월~${maxAge / 12}세`
          : `${minAge / 12}~${maxAge / 12}세`}
      </span>
    </SubInfoBlock>
  );
};

export default SubInfo;
