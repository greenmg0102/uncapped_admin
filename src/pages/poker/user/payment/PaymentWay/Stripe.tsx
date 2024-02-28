import clsx from 'clsx'
import getStripe from '../../../../../utils/system/getStripe';
import type { Stripe } from '@stripe/stripe-js'

export default function Stripe({ price, way, setPayway }: any) {

    async function handleCheckout() {
        const stripe = await getStripe() as Stripe;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [
                {
                    price: "price_1OPfXzF9Pl7uN3pFTtubbnID",
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            successUrl: `http://localhost:3000/success`,
            cancelUrl: `http://localhost:3000/cancel`,
            customerEmail: 'customer@email.com',
        });
        console.warn(error?.message);
    }

    return (
        <div
            className="w-1/3 p-4"
            onClick={() => {
                handleCheckout()
                setPayway("stripe")
            }}
                    onMouseEnter={() => setPayway("stripe")}
                    onMouseLeave={() => setPayway("")}
        >

            <div className="w-full h-[350px] flex justify-center items-center mx-4">
                <div
                    className={
                        clsx
                            (
                                "relative w-[320px] h-[300px] flex justify-center items-center border border-gray-600 border-dashed rounded-[8px] p-4 transition-all hover:w-[350px] hover:h-[315px] hover:border-red-500 cursor-pointer",
                                way === 'stripe' ? "w-full h-[165px] border-red-500" : ""
                            )
                    }
                >
                    <div className="absolute left-[24px] top-[24px]">
                        <img src="/assets/images/pokerImage/stripeMark.png" alt="img" className="w-[100px]" />
                    </div>
                    {/* <button className='p-4 text-[24px] font-bold hover:text-red-500'>Checkout</button> */}
                    <p className={clsx(way === 'stripe' ? "absolute bottom-[24px] right-[12px] text-[32px] font-bold" : "hidden")}>{price} $</p>
                </div>
            </div>
        </div>
    )
}