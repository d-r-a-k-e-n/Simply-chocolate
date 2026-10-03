import api from './axios';

export const checkoutService = {
  createSession: async ({ items, customer, successUrl, cancelUrl }) => {
    const { data } = await api.post('/checkout/create-session', {
      items,
      customer,
      successUrl,
      cancelUrl,
    });
    return data;
  },
};
