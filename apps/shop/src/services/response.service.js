const URL = `${import.meta.env.VITE_SERVER_URL}/response`;

export const responseService = {
  getAll: async () =>
    await fetch(`${URL}`)
      .then((res) => res.json())
      .then((data) => data),

  create: async (responseData) =>
    await fetch(`${URL}/new-response`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(responseData),
    }),
};
