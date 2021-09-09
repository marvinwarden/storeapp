const stripe = require('stripe')('sk_test_51J9vdaErXRPDm3aLsRJP4SngVSd1n1ZKUF8WkkvOOO2Dsu4j2n9W9Fa34cIgrRAldD2wK9eabm2bhZFuTdkqYGfg00mryYxUwr');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4242';




app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  });

  res.redirect(303, session.url)
});


app.listen(4242, () => console.log('Running on port 4242'));



