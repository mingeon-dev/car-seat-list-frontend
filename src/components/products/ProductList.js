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

const ProductItem = ({ product }) => {
  const {
    name,
    price,
    company,
    country,
    minAge,
    maxAge,
    group,
    tags,
  } = product;
  return (
    <ProductItemBlock>
      <h2>{name}</h2>
      <SubInfo
        price={price}
        company={company}
        country={country}
        minAge={minAge}
        maxAge={maxAge}
        group={group}
      ></SubInfo>
      <Tags tags={tags}></Tags>
    </ProductItemBlock>
  );
};

const ProductList = ({ products, loading, error }) => {
  if (error) {
    return <ProductListBlock>에러가 발생했습니다.</ProductListBlock>;
  }

  return (
    <ProductListBlock>
      {!loading && products && (
        <div>
          {products.map((product) => (
            <ProductItem product={product} key={product._id} />
          ))}
        </div>
      )}
    </ProductListBlock>
  );
};

export default ProductList;
