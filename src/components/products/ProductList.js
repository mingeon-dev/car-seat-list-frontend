import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';

const ProductListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const ProductItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
`;

const ProductItem = () => {
  return (
    <ProductItemBlock>
      <h2>듀얼픽스 i-SIZE</h2>
      <SubInfo price="1125000" country="Germany"></SubInfo>
      <Tags tags={['isofix', 'iSize']}></Tags>
    </ProductItemBlock>
  );
};

const ProductList = () => {
  return (
    <ProductListBlock>
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </ProductListBlock>
  );
};

export default ProductList;
