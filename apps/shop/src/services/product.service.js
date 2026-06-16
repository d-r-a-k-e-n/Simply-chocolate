const URL = `${import.meta.env.VITE_SERVER_URL}/stripe`;

export const productService = {
  getAll: async () =>
    await fetch(`${URL}`)
      .then((res) => res.json())
      .then((data) => data),
};
