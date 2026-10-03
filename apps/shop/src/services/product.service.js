import api from './axios';

export const productService = {
  getAll: async (params = {}) => {
    const { data } = await api.get('/product', { params });
    return data;
  },

  getById: async (id) => {
    const { data } = await api.get(`/product/${id}`);
    return data;
  },
};
