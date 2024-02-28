import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import clsx from 'clsx'
// import { cryptoPayMessage } from '../../../../../utils/reference/payment'
import { paymentStatus, getAPIStatus, payLogCreate, createPayment } from '../../../../../utils/payment/crypto'

export default function Crypto({ price, premiumId, isMonthly }: any) {

    const navigate = useNavigate();

    const [availableCurrency, setAvailableCurrency] = useState([])
    const [regeneratingSecond, setRegeneratingSecond] = useState(300)
    const [generating, setGenerating] = useState(false)
    const [triedCount, setTriedCount] = useState(0)

    const [cryptoSetting, setCryptoSetting] = useState({
        paymentId: "",
        crypto: "",
        amount: "",
        depositeAddress: ""
    })

    const MySwal = withReactContent(Swal);

    useEffect(() => {
        if (triedCount > 2) {
            navigate("/");
            MySwal.fire({
                title: 'The address was created multiple times.',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                showCloseButton: true,
                customClass: {
                    popup: 'color-info',
                },
            });
        }
    }, [triedCount])

    useEffect(() => {

        setAvailableCurrency([])
        const apiKey = "8K6XVN8-8W44DYN-N5BTE8W-BF5K3N1"
        async function fetchData() {
            let apiStatus = await getAPIStatus(apiKey)
            if (typeof apiStatus !== "string") {
                let result = apiStatus.filter((item: any) => item.min_amount < price && item.max_amount > price)
                setAvailableCurrency(result)
            }
        }
        fetchData()
    }, [price])

    useEffect(() => {
        if (cryptoSetting.depositeAddress !== "") {
            const interval = setInterval(() => {
                setRegeneratingSecond(prevSecond => {
                    if (prevSecond === 0) {
                        clearInterval(interval);
                        return 0;
                    } else {
                        return prevSecond - 1;
                    }
                });
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [cryptoSetting.depositeAddress, regeneratingSecond]);

    useEffect(() => {
        if (cryptoSetting.depositeAddress !== "") {
            const interval = setInterval(async () => {
                let data = {
                    paymentId: cryptoSetting.paymentId,
                    apiKey: "8K6XVN8-8W44DYN-N5BTE8W-BF5K3N1"
                }
                let result = await paymentStatus(data)

                if (result.payment_status !== "waiting") {
                    let data = {
                        profilesId: "65849f7fdafd57880710c9ab",
                        price: price,
                        currentType: 1,
                        period: isMonthly === true ? 1 : 0,
                        premiumId: premiumId,
                        invoice: { ...result }
                    }
                    let resultInvoice = await payLogCreate(data)

                    if (resultInvoice === true) {
                        MySwal.fire({
                            title: 'Registered correctly.',
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            showCloseButton: true,
                            customClass: {
                                popup: 'color-info',
                            },
                        });
                        navigate("/users/profile");
                    } else {
                        MySwal.fire({
                            title: 'There was a problem.',
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            showCloseButton: true,
                            customClass: {
                                popup: 'color-danger',
                            },
                        });
                    }
                }

            }, 10000);
            return () => clearInterval(interval);
        }
    }, [cryptoSetting]);

    useEffect(() => {
        if (regeneratingSecond === 0) deposit()
    }, [regeneratingSecond])

    const deposit = async () => {

        if (cryptoSetting.crypto === "") {
            MySwal.fire({
                title: 'Please select the Crypto Type !',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                showCloseButton: true,
                customClass: {
                    popup: 'color-info',
                },
            });
        } else {
            let data = {
                apiKey: "8K6XVN8-8W44DYN-N5BTE8W-BF5K3N1",
                price_amount: price,
                pay_currency: cryptoSetting.crypto,
            }
            let result = await createPayment(data)

            setCryptoSetting({ ...cryptoSetting, paymentId: result.payment_id, depositeAddress: result.pay_address })
            setRegeneratingSecond(300)
            setTriedCount(preTriedCount => preTriedCount + 1)
        }

        return true
    }

    const copyToClipboard = (text: any) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                MySwal.fire({
                    title: 'The address was copied.',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    showCloseButton: true,
                    customClass: {
                        popup: 'color-success',
                    },
                });
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    }

    return (
        <div
            className="p-4 py-1"
        >
            <div className="flex justify-between items-center flex-wrap">
                <div className="w-full md:w-1/3 p-1">
                    <div className="flex justify-start items-center">
                        <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 text-gray-300 text-[24px] mr-[12px]">
                            1
                        </div>
                        <div className="w-full h-[2px] bg-gray-600" style={{ width: "calc(100% - 54px)" }}></div>
                    </div>
                    <p className="text-gray-300 font-bold text-[14px] my-2">Select the Token Which You Wanna Pay</p>
                    <p className="text-gray-400 text-[12px]">Select the token and network you wanna deposit and copy the wallet address shown on this page.</p>
                </div>

                <div className="w-full md:w-1/3 p-1">
                    <div className="flex justify-start items-center">
                        <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-blue-600 text-gray-300 text-[24px] mr-[12px]">
                            2
                        </div>
                        <div className="w-full h-[2px] bg-gray-600" style={{ width: "calc(100% - 54px)" }}></div>
                    </div>
                    <p className="text-gray-300 font-bold text-[14px] my-2">Select the Token Which You Wanna Pay</p>
                    <p className="text-gray-400 text-[12px]">Select the token and network you wanna deposit and copy the wallet address shown on this page.</p>
                </div>

                <div className="w-full md:w-1/3 p-1">
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
            <div className="flex justify-between items-start flex-wrap mt-4">
                <div className="w-full md:w-1/2 p-2">
                    <div>
                        <div className="flex justify-start items-center mb-4">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="check-circle" width="1.5em" height="1.5em" className="text-blue-500" fill="currentColor" aria-hidden="true"><path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
                            <p className="mb-0 font-bold text-gray-300 text-[18px] pl-4">Type the amount</p>
                        </div>
                        <div className="flex justify-start items-center h-[80px] border border-t-0 border-b-0 border-r-0 border-[2px] border-gray-500 ml-[0.7em] pl-4">
                            <input
                                type="number"
                                placeholder="Amount"
                                className="form-input"
                                required
                                value={price}
                                onChange={(e: any) => setCryptoSetting({ ...cryptoSetting, amount: e.target.value })}
                                readOnly
                            />
                        </div>
                        <div className="flex justify-start items-center mb-4">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="check-circle" width="1.5em" height="1.5em" className="text-blue-500" fill="currentColor" aria-hidden="true"><path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
                            <p className="mb-0 font-bold text-gray-300 text-[18px] pl-4">Select Crypto</p>
                        </div>
                        <div className="flex justify-start items-center h-[80px] border border-t-0 border-b-0 border-r-0 border-[2px] border-gray-500 ml-[0.7em] pl-4 mb-4">
                            <select
                                id="ctnSelect1"
                                className="form-select text-white-dark"
                                required
                                onChange={(e: any) => setCryptoSetting({ ...cryptoSetting, crypto: e.target.value })}
                            >
                                <option>Please Select the Crypto Type</option>
                                {availableCurrency.map((item: any, index: any) =>
                                    <option key={index}>{item.currency}</option>
                                )}
                            </select>
                        </div>

                        <div className="flex justify-start items-center mb-4">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="check-circle" width="1.5em" height="1.5em" className="text-blue-500" fill="currentColor" aria-hidden="true"><path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
                            <p className="mb-0 font-bold text-gray-300 text-[18px] pl-4">Deposit Address</p>
                        </div>
                        <div className="flex justify-center items-center flex-col h-[80px] border border-t-0 border-b-0 border-r-0 border-[2px] border-gray-500 ml-[0.7em] pl-4">
                            {cryptoSetting.depositeAddress !== "" ?
                                <div className='flex justify-between items-center mt-5'>
                                    <p className='mr-4 font-bold'>{cryptoSetting.depositeAddress} </p>
                                    <Tippy content="Copy to clipboard">
                                        <svg
                                            viewBox="64 64 896 896"
                                            focusable="false"
                                            data-icon="copy"
                                            width="1.5em"
                                            height="1.5em"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            onClick={() => copyToClipboard(cryptoSetting.depositeAddress)}
                                        >
                                            <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path>
                                        </svg>
                                    </Tippy>
                                </div>
                                :
                                ""
                            }
                            <button
                                type="button"
                                className="btn btn-outline-primary rounded-full mt-4"
                                onClick={() => deposit()}
                            >
                                {cryptoSetting.depositeAddress !== "" ?
                                    <p>
                                        <svg viewBox="0 0 1024 1024" focusable="false" data-icon="loading" width="2em" height="2em" fill="currentColor" aria-hidden="true" className='animate-spin'><path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path></svg>
                                        Regenerating the Address
                                    </p>
                                    :
                                    "Generating Address"
                                }
                            </button>

                            <p className={clsx(cryptoSetting.depositeAddress !== "" ? 'mt-2' : "hidden")}>
                                Please send to this address within <span className='text-[24px] text-red-400'>{regeneratingSecond}</span> seconds.
                            </p>
                        </div>
                        {/* 
                        <div
                            className="flex justify-start items-center h-[80px] border border-t-0 border-b-0 border-r-0 border-[2px] border-gray-500 ml-[0.7em] pl-4"
                            onClick={() => generate()}
                        >
                            step 2
                        </div> */}
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-2 pl-4 flex justify-start items-start md:items-center flex-col">
                    <div className="w-full mb-8">
                        <p className="text-gray-300 font-bold border border-blue-400 border-[3px] border-t-0 border-r-0 border-b-0 pl-2 text-[16px] mb-2">Tips</p>
                        <p className="text-gray-400 pl-2">This address only supports deposit of TRC assets.</p>
                        <p className="text-gray-400 pl-2">Please note: If the signle deposit amount is less than the minimum deposit amount.</p>
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between items-start md:items-center">
                            <p className="text-gray-300 font-bold border border-blue-400 border-[3px] border-t-0 border-r-0 border-b-0 pl-2 text-[16px] mb-2">Deposit FAQ</p>
                            <p className="text-blue-600 pl-2">View More</p>
                        </div>
                        <div className="flex justify-start items-start md:items-center pl-2">
                            <div className="w-[8px] h-[8px] rounded-full bg-primary" />
                            <p className="text-gray-400 pl-2">How to Deposit on Radar Poker?</p>
                        </div>
                        <div className="flex justify-start items-start md:items-center pl-2">
                            <div className="w-[8px] h-[8px] rounded-full bg-primary" />
                            <p className="text-gray-400 pl-2">Deposit Hasn't Been Xredited To My Account?</p>
                        </div>
                        <div className="flex justify-start items-start md:items-center pl-2">
                            <div className="w-[8px] h-[8px] rounded-full bg-primary" />
                            <p className="text-gray-400 pl-2">Wrong Deposit Return Application?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}