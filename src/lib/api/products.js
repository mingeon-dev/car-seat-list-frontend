import qs from 'qs';
import client from './client';

export const listProducts = ({ page, tag, company }) => {
  const queryString = qs.stringify({
    page,
    tag,
    company,
  });
  return client.get(`/api/products?${queryString}`);
};
