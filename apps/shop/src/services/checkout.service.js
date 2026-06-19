const URL = `${import.meta.env.VITE_SERVER_URL}/checkout`;

export const checkoutService = {
  createSession: async ({ items, customer, successUrl, cancelUrl }) => {
    const response = await fetch(`${URL}/create-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items, customer, successUrl, cancelUrl }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to create checkout session');
    }

    return data;
  },
};
