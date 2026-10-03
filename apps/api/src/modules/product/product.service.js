import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

function getPrice(product) {
  return product.default_price?.unit_amount ?? 0;
}

function sortProducts(products, sort) {
  if (sort === 'asc') {
    return [...products].sort((a, b) => getPrice(a) - getPrice(b));
  }

  if (sort === 'desc') {
    return [...products].sort((a, b) => getPrice(b) - getPrice(a));
  }

  return products;
}

export const getAll = async (req, res) => {
  try {
    const { sort } = req.query;
    const products = await stripe.products.list({
      active: true,
      expand: ['data.default_price'],
    });

    res.json(sortProducts(products.data, sort));
  } catch (error) {
    res.status(500).json({ message: 'Error Stripe', error });
  }
};

export const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await stripe.products.retrieve(id, {
      expand: ['default_price'],
    });

    if (!product || product.active === false) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    if (error?.statusCode === 404 || error?.code === 'resource_missing') {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(500).json({ message: 'Error Stripe', error });
  }
};
