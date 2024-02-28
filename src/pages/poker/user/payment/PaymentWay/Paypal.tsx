import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PaypalCheckout from './PaypalCheckout'
import clsx from 'clsx'

export default function Paypal({ price, way, setPayway }: any) {

    const initialOptions = {
        clientId: "AdI9mCl04bcqdeLHDfEgZOcoGY5UDI7opreRpdXqMuNVxOUuto1cAhR84PH8gc1iRncBLmrcgOY7AzfP",
        currency: "USD",
        intent: "capture"
    };

    return (
        <div className="w-1/3 p-4">
            <PayPalScriptProvider options={initialOptions}>
                <div className="w-full h-[300px] flex justify-center items-center mx-4">
                    <div
                        className={
                            clsx
                                (
                                    "relative w-[320px] h-[300px] flex justify-center items-center border border-gray-600 border-dashed rounded-[8px] p-4 transition-all hover:w-[350px] hover:h-[315px] hover:border-red-500 cursor-pointer",
                                    way === 'paypal' ? "w-[220px] h-[165px] border-red-500" : ""
                                )
                        }
                        onClick={() => setPayway("paypal")}
                        onMouseEnter={() => setPayway("paypal")}
                        onMouseLeave={() => setPayway("")}
                    >
                        <PaypalCheckout price={price} />
                        <div className="absolute left-[24px] top-[24px]">
                            <img src="/assets/images/pokerImage/paypalMark.png" alt="img" className="w-[100px]" />
                        </div>
                        <p className={clsx(way === 'paypal' ? "absolute bottom-[24px] right-[12px] text-[32px] font-bold" : "hidden")}>{price} $</p>
                    </div>
                </div>
            </PayPalScriptProvider>
        </div>
    )
}