import api from './axios';

export const responseService = {
  getAll: async () => {
    const { data } = await api.get('/response');
    return data;
  },

  create: async (responseData) => {
    const { data } = await api.post('/response/new-response', responseData);
    return data;
  },
};
