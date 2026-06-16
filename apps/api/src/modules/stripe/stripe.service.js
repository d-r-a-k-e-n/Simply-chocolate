import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const getStripeProducts = async (req, res) => {
  try {
    const products = await stripe.products.list({
      active: true,
      expand: ['data.default_price'],
    });

    res.json(products.data);
  } catch (error) {
    res.status(500).json({ message: 'Error Stripe', error });
  }
};
