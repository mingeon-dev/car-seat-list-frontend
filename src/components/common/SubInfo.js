import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const SubInfoBlock = styled.div`
  color: ${palette.gray[6]};

  span + span:before {
    color: ${palette.gray[4]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }
`;

const SubInfo = ({ price, company, country }) => {
  return (
    <SubInfoBlock>
      <span>{price}원</span>
      <span>{company}</span>
      <span>{country}</span>
    </SubInfoBlock>
  );
};

export default SubInfo;
