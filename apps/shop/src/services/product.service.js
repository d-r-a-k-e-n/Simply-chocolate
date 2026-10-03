const URL = `${import.meta.env.VITE_SERVER_URL}/product`;

export const productService = {
  getAll: async () =>
    await fetch(`${URL}`)
      .then((res) => res.json())
      .then((data) => data),

  getById: async (id) => {
    const res = await fetch(`${URL}/${id}`);

    if (!res.ok) {
      throw new Error('Product not found');
    }

    return res.json();
  },
};
