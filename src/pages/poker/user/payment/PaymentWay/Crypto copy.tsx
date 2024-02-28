import { useState } from 'react'
import { generateAddress, getAPIStatus, getMinimumPaymentAmount, getEstimatedPrice, createPayment } from '../../../../../utils/payment/crypto'

export default function Crypto({ price }: any) {

    const [cryptoSetting, setCryptoSetting] = useState({
        type: "",
        network: "",
    })

    const generate = async () => {

        if (
            price !== 0 &&
            cryptoSetting.type !== "" &&
            cryptoSetting.network !== ""
        ) {
            let data = {
                price: price,
                apiKey: "8K6XVN8-8W44DYN-N5BTE8W-BF5K3N1",
                IPNKey: "PxlZHwao5FC3es2gGmE+BTeJRSynD37r",
                ...cryptoSetting
            }
            let result1 = await getAPIStatus(data)

            let result2 = await getMinimumPaymentAmount(data)

            let result3 = await getEstimatedPrice(data)

            let result4 = await createPayment(data)

        }
    }

    return (
        <div
            className="p-4 py-1"
            style={{
                height: "calc(100vh - 380px)"
            }}
        >
            <div className="flex justify-between items-center">
                <div className="w-1/3 p-1">
                    <div className="flex justify-start items-center">
                        <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 text-gray-300 text-[24px] mr-[12px]">
                            1
                        </div>
                        <div className="w-full h-[2px] bg-gray-600" style={{ width: "calc(100% - 54px)" }}></div>
                    </div>
                    <p className="text-gray-300 font-bold text-[14px] my-2">Select the Token Which You Wanna Pay</p>
                    <p className="text-gray-400 text-[12px]">Select the token and network you wanna deposit and copy the wallet address shown on this page.</p>
                </div>

                <div className="w-1/3 p-1">
                    <div className="flex justify-start items-center">
                        <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 text-gray-300 text-[24px] mr-[12px]">
                            2
                        </div>
                        <div className="w-full h-[2px] bg-gray-600" style={{ width: "calc(100% - 54px)" }}></div>
                    </div>
                    <p className="text-gray-300 font-bold text-[14px] my-2">Select the Token Which You Wanna Pay</p>
                    <p className="text-gray-400 text-[12px]">Select the token and network you wanna deposit and copy the wallet address shown on this page.</p>
                </div>

                <div className="w-1/3 p-1">
                    <div className="flex justify-start items-center">
                        <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 text-gray-300 text-[24px] mr-[12px]">
                            3
                        </div>
                        <div className="w-full h-[2px] bg-gray-600" style={{ width: "calc(100% - 54px)" }}></div>
                    </div>
                    <p className="text-gray-300 font-bold text-[14px] my-2">Select the Token Which You Wanna Pay</p>
                    <p className="text-gray-400 text-[12px]">Select the token and network you wanna deposit and copy the wallet address shown on this page.</p>
                </div>

            </div>
            <div className="flex justify-between items-start mt-4">
                <div className="w-1/2 p-2">
                    <div>
                        <div className="flex justify-start items-center mb-4">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="check-circle" width="1.5em" height="1.5em" className="text-blue-500" fill="currentColor" aria-hidden="true"><path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
                            <p className="mb-0 font-bold text-gray-300 text-[18px] pl-4">Select Crypto</p>
                        </div>
                        <div className="flex justify-start items-center h-[80px] border border-t-0 border-b-0 border-r-0 border-[2px] border-gray-500 ml-[0.7em] pl-4 mb-4">
                            <select
                                id="ctnSelect1"
                                className="form-select text-white-dark"
                                required
                                onChange={(e: any) => setCryptoSetting({ ...cryptoSetting, type: e.target.value })}
                            >
                                <option>Please Select the Crypto Type</option>
                                <option>BTC</option>
                                <option>RTH</option>
                                <option>USDC</option>
                                <option>USDT</option>
                            </select>
                        </div>
                        <div className="flex justify-start items-center mb-4">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="check-circle" width="1.5em" height="1.5em" className="text-blue-500" fill="currentColor" aria-hidden="true"><path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
                            <p className="mb-0 font-bold text-gray-300 text-[18px] pl-4">Select Crypto</p>
                        </div>
                        <div className="flex justify-start items-center h-[80px] border border-t-0 border-b-0 border-r-0 border-[2px] border-gray-500 ml-[0.7em] pl-4">
                            <select
                                id="ctnSelect1"
                                className="form-select text-white-dark"
                                required
                                onChange={(e: any) => setCryptoSetting({ ...cryptoSetting, network: e.target.value })}
                            >
                                <option>Please Select the Network</option>
                                <option>Bitcoin(BTC)</option>
                                <option>BTC-LOOP</option>
                                <option>BNB Smart Chanin(BEP20)</option>
                            </select>
                        </div>
                        <div className="flex justify-start items-center mb-4">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="check-circle" width="1.5em" height="1.5em" className="text-blue-500" fill="currentColor" aria-hidden="true"><path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
                            <p className="mb-0 font-bold text-gray-300 text-[18px] pl-4">Deposit Address</p>
                        </div>
                        <div
                            className="flex justify-start items-center h-[80px] border border-t-0 border-b-0 border-r-0 border-[2px] border-gray-500 ml-[0.7em] pl-4"
                            onClick={() => generate()}
                        >
                            step 1
                        </div>


                        <div
                            className="flex justify-start items-center h-[80px] border border-t-0 border-b-0 border-r-0 border-[2px] border-gray-500 ml-[0.7em] pl-4"
                            onClick={() => generate()}
                        >
                            step 2
                        </div>
                    </div>
                </div>
                <div className="w-1/2 p-2 flex justify-center items-center flex-col">
                    <div className="w-2/3 mb-8">
                        <p className="text-gray-300 font-bold border border-blue-400 border-[3px] border-t-0 border-r-0 border-b-0 pl-2 text-[16px] mb-2">Tips</p>
                        <p className="text-gray-400 pl-2">This address only supports deposit of TRC assets. Do not deposit other assests to this address as the assets will not be credited or recoverable.</p>
                        <p className="text-gray-400 pl-2">Please note: If the signle deposit amount is less than the minimum deposit amount. it will not be credited. The platform will not be liable for any loss of assets resulting from this. Thank you for your understanding and support!</p>
                    </div>
                    <div className="w-2/3">
                        <div className="flex justify-between items-start">
                            <p className="text-gray-300 font-bold border border-blue-400 border-[3px] border-t-0 border-r-0 border-b-0 pl-2 text-[16px] mb-2">Deposit FAQ</p>
                            <p className="text-blue-600 pl-2">View More</p>
                        </div>
                        <div className="flex justify-start items-center pl-2">
                            <div className="w-[8px] h-[8px] rounded-full bg-primary" />
                            <p className="text-gray-400 pl-2">How to Deposit on Radar Poker?</p>
                        </div>
                        <div className="flex justify-start items-center pl-2">
                            <div className="w-[8px] h-[8px] rounded-full bg-primary" />
                            <p className="text-gray-400 pl-2">Deposit Hasn't Been Xredited To My Account?</p>
                        </div>
                        <div className="flex justify-start items-center pl-2">
                            <div className="w-[8px] h-[8px] rounded-full bg-primary" />
                            <p className="text-gray-400 pl-2">Wrong Deposit Return Application?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}