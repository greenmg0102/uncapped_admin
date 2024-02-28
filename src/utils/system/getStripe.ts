import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;

const getStripe = (): Promise<Stripe | null> => {
    if (!stripePromise) {
        stripePromise = loadStripe("pk_test_51OPfU2F9Pl7uN3pFi7nWHK0vaYLIXRRHfK5sZGo7u2NkDkBCo4PxMqnSdtoi3Y15c9Xo0y604bDgKQfzcRzhf0Ny00FRS8iuCc");
    }
    return stripePromise;
};

export default getStripe;
