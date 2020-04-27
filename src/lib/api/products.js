import qs from 'qs';
import client from './client';

export const listProducts = ({ page, tag }) => {
  const queryString = qs.stringify({
    page,
    tag,
  });
  return client.get(`/api/products?${queryString}`);
};
