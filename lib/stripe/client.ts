import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-01-28.clover',
  typescript: true,
});

export const PRIVATE_TRANSFER_PRICE = 2500;
export const NON_PLAYER_PRICE = 300;

export const PRIVATE_TRANSFER_STRIPE = {
  productId: 'prod_U0XuGyQmacBoe8',
  priceId: 'price_1T2WpIKdGFJYbCXkRr7obLLK',
};

export const NON_PLAYER_STRIPE = {
  productId: 'prod_U0XuSILhjyC807',
  priceId: 'price_1T2WpJKdGFJYbCXkqNOfPPjy',
};
