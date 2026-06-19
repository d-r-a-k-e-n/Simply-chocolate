import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async (req, res) => {
  try {
    const { items, customer, successUrl, cancelUrl } = req.body;

    if (!items?.length) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    if (!customer?.email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const invalidItem = items.find(
      (item) => !item.priceId || !item.quantity || item.quantity < 1,
    );

    if (invalidItem) {
      return res.status(400).json({ message: 'Invalid cart items' });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: items.map(({ priceId, quantity }) => ({
        price: priceId,
        quantity,
      })),
      success_url: successUrl,
      cancel_url: cancelUrl,
      customer_email: customer.email,
      metadata: {
        firstName: customer.name || '',
        lastName: customer.surname || '',
        phone: customer.phone || '',
        comment: customer.comment || '',
      },
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    res.status(500).json({
      message: 'Error creating checkout session',
      error: error.message,
    });
  }
};
