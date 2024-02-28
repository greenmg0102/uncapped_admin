import { useState, useEffect } from 'react';
import Dropdown from '../../../components/Dropdown';
import { payLogRead } from '../../../utils/payment/crypto'
import Invoice from './Invoice'

export default function PaymentHistory() {

    const [payList, setPayList] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    const [activeId, setActiveId] = useState("")

    const bufferOpen = (bool: any, id: any) => {
        setIsOpen(bool)
        setActiveId(id)
    }

    useEffect(() => {
        async function fetchData() {
            let result = await payLogRead({})
            setPayList(result)
        }
        fetchData()
    }, [])



    return (
        <div className="panel">
            <Invoice
                isOpen={isOpen}
                setIsOpen={(bool: any) => setIsOpen(bool)}
                data={payList.find((item: any) => item._id === activeId)}
            />
            <div className="flex items-center justify-between mb-5">
                <h5 className="font-semibold text-lg dark:text-white-light">Payment History</h5>
            </div>
            <div className='h-[13em] overflow-y-auto pr-[4px]'>
                {payList.map((item: any, index: any) =>

                    <div key={index} className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                        <div className="flex items-center justify-between py-2">
                            <h6 className="text-[#515365] font-semibold dark:text-white-dark">
                                {item.createdAt.toString().slice(0, 10).split("-").join(" / ")}
                                <div className='flex justify-start items-center'>

                                    <span className="text-white-light w-[150px]">{item.premium.title}  Membership</span>
                                    <span className="text-red-600 mr-2">{item.price} $</span>
                                    {item.currentType === 0 ?
                                        <div className='p-[2px] px-1 border border-primary border-dashed rounded-[4px] mr-2'>
                                            <span className="text-white-light mr-2">Paypal</span>
                                        </div>
                                        :
                                        <div className='p-[2px] pb-0 px-1 border border-primary border-dashed rounded-[4px] mr-2'>
                                            <span className="text-white-light text-[10px] mb-0">Crypto</span>
                                        </div>
                                    }
                                    {item.period === 0 ?
                                        <div className='p-[2px] px-1 border border-primary border-dashed rounded-[4px] mr-2'>
                                            <span className="text-white-light text-[10px] mb-0">Monthly</span>
                                        </div>
                                        :
                                        <div className='p-[2px] pb-0 px-1 border border-primary border-dashed rounded-[4px] mr-2'>
                                            <span className="text-white-light text-[10px] mb-0">Yearly</span>
                                        </div>
                                    }
                                </div>
                            </h6>
                            <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                <p className="font-semibold">90%</p>
                                <div className="dropdown ltr:ml-4 rtl:mr-4">
                                    <Dropdown
                                        offset={[0, 5]}
                                        placement='bottom-end'
                                        btnClassName="hover:text-primary"
                                        button={
                                            <svg className="w-5 h-5 text-black/70 dark:text-white/70 hover:!text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                                <circle opacity="0.5" cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                                <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                            </svg>
                                        }
                                    >
                                        <ul className="!min-w-[150px]">
                                            <li>
                                                <button type="button" onClick={() => bufferOpen(true, item._id)}>View Invoice</button>
                                            </li>
                                            <li>
                                                <button type="button">Download Invoice</button>
                                            </li>
                                        </ul>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}