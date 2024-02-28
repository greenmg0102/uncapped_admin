import axios from "axios";
import type { AxiosResponse } from "axios";

export async function generateAddress(data: any): Promise<AxiosResponse> {
    const result = await axios.post("payment/crypto/generate-address", data).then((result: any) => { return result.data })
    return result
}

export async function payLogRead(data: any): Promise<any> {
    const result = await axios.post("payment/crypto/paylog-read", data).then((result: any) => { return result.data })
    return result
}

export async function payLogCreate(data: any): Promise<any> {
    const result = await axios.post("payment/crypto/paylog-create", data).then((result: any) => { return result.data })
    return result
}

export async function getAPIStatus(apiKey: any): Promise<any> {
    const result = await axios.get("https://api.nowpayments.io/v1/status").then((result: any) => { return result.data })

    if (result.message === "OK") {
        return await getAvailableCurrencies(apiKey)
    } else {
        return "apiKeyStatus"
    }
}

export async function getAvailableCurrencies(apiKey: any): Promise<any> {
    const result = await axios
        .get(
            "https://api.nowpayments.io/v1/currencies?fixed_rate=true",
            {
                headers: {
                    'x-api-key': apiKey,
                }
            }
        ).then((result: any) => { return result.data.currencies })

    if (result.length > 0) {
        return result
    } else {
        return "getAvailableCurrencies"
    }
}

export async function getMinimumPaymentAmount(data: any): Promise<any> {
    const result = await axios
        .get(
            "https://api.nowpayments.io/v1/min-amount?currency_from=eth&currency_to=trx&fiat_equivalent=usd&is_fixed_rate=False&is_fee_paid_by_user=False",
            {
                headers: {
                    'x-api-key': data.apiKey,
                }
            }
        ).then((result: any) => { return result.data })

    return result
}

export async function getEstimatedPrice(data: any): Promise<any> {
    const result = await axios
        .get(
            "https://api.nowpayments.io/v1/estimate?amount=3999.5000&currency_from=usd&currency_to=btc",
            {
                headers: {
                    'x-api-key': data.apiKey,
                }
            }
        ).then((result: any) => { return result.data })

    return result
}


export async function createPayment(data: any): Promise<any> {

    let settings = {
        "url": "https://api.nowpayments.io/v1/payment",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "x-api-key": data.apiKey,
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "price_amount": data.price_amount,
            "price_currency": "usd",
            "pay_currency": data.pay_currency,
            "ipn_callback_url": "https://nowpayments.io",
            "order_id": Math.floor(Math.random() * 10000000) + 1,
            "order_description": "pay with crypto for buying upgrade the status"
        }),
    };

    const result = await axios(settings).then((result) => { return result.data });

    return result
}


export async function paymentStatus(data: any): Promise<any> {

    let settings = {
        "url": `https://api.nowpayments.io/v1/payment/${data.paymentId}`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "x-api-key": data.apiKey
        },
    };

    const result = await axios(settings).then((result) => { return result.data });

    return result
}
