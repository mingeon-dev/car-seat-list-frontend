import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import Thumbnail from '../common/Thumbnail';
import LikeButton from '../common/LikeButton';

const ProductListBlock = styled(Responsive)`
  margin-top: 2rem;
`;

const ProductItemBlock = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }

  .title {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .contents {
    display: flex;
    align-items: center;
  }
`;

const ProductItem = ({ product }) => {
  const {
    name,
    likes,
    company,
    country,
    minAge,
    maxAge,
    group,
    url,
    urlToImage,
    tags,
  } = product;
  return (
    <ProductItemBlock>
      <div className="title">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </h2>
        <LikeButton likes={likes} />
      </div>
      <div className="contents">
        {urlToImage && (
          <Thumbnail url={url} urlToImage={urlToImage}></Thumbnail>
        )}
        <div>
          <SubInfo
            company={company}
            country={country}
            minAge={minAge}
            maxAge={maxAge}
            group={group}
          ></SubInfo>
          <Tags tags={tags}></Tags>
        </div>
      </div>
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
