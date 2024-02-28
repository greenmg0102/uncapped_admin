import { useState } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";


export default function PaypalCheckout() {

    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const [currency, setCurrency] = useState(options.currency);

    const onCurrencyChange = ({ target: { value } }: any): void => {
        setCurrency(value);
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: value,
            },
        });
    }

    const onCreateOrder = (data: any, actions: any): Promise<string> => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "8.99",
                    },
                },
            ],
        });
    };

    const onApproveOrder = (data: any, actions: any): Promise<void> => {
        return actions.order.capture().then((details: any) => {
            const name: string = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
        });
    }

    return (
        <div>
            {
                isPending ? <p>LOADING...</p> : (
                    <>
                        <select
                            id="ctnSelect1"
                            className="form-select text-white-dark mb-4"
                            required
                            value={currency}
                            onChange={onCurrencyChange}
                        >
                            <option value="USD">💵 USD</option>
                            <option value="EUR">💶 Euro</option>
                        </select>

                        <PayPalButtons
                            style={{ layout: "vertical" }}
                            createOrder={(data, actions) => onCreateOrder(data, actions)}
                            onApprove={(data, actions) => onApproveOrder(data, actions)}
                        />
                    </>
                )
            }
        </div>
    )
}