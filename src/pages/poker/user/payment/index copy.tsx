import { Fragment, useState } from 'react';
import { Tab } from '@headlessui/react';

import FreeDescription from './FreeDescription';
import StarterDescription from './StarterDescription';
import PremiumDescription from './PremiumDescription';
import PaymentWay from './PaymentWay';

export default function Payment() {

    const [tabOrder, setTabOrder] = useState(0)
    const [isMonthly, setIsMonthly] = useState(false)
    const [price, setPrice] = useState(0)

    const categroy = ['F r e e', 'S t a r t e r', 'P r e m i u m']

    const pay = (price: number, isMonthly: boolean, tabOrder: number) => {
        setPrice(price)
        setIsMonthly(isMonthly)
        if (tabOrder === 1) setPrice(!isMonthly ? 9 : 89)
        if (tabOrder === 2) setPrice(!isMonthly ? 19 : 189)
    }

    const selectTab = (tabOrder: any) => {
        setTabOrder(tabOrder)
        if (tabOrder === 1) setPrice(!isMonthly ? 9 : 89)
        if (tabOrder === 2) setPrice(!isMonthly ? 19 : 189)
    }

    return (
        <div>
            <p className='text-center text-[32px] font-bold my-8'>P a y m e n t</p>

            <Tab.Group defaultIndex={tabOrder}>
                <Tab.List className="mt-3 flex flex-wrap">
                    {categroy.map((item: any, index: any) =>
                        <Tab as={Fragment} key={index}>
                            {({ selected }) => (
                                <button
                                    className={`${selected ? '!border-secondary text-secondary !outline-none dark:!bg-[#191e3a]' : ''} flex items-center border-t-2 border-transparent bg-[#f6f7f8] p-7 py-3 before:inline-block hover:border-secondary hover:text-secondary dark:bg-transparent dark:hover:bg-[#191e3a] font-bold`}
                                    onClick={() => selectTab(index)}
                                >
                                    {item}
                                </button>
                            )}
                        </Tab>
                    )}
                </Tab.List>
                <Tab.Panel>
                    <div
                        className="active p-4 pt-5 border border-gray-900 rounded-[8px] flex justify-between items-start"
                        style={{
                            height: "calc(100vh - 280px)"
                        }}
                    >
                        <div
                            className='w-1/2 border border-dashed border-primary border-t-0 border-b-0 border-l-0'
                            style={{
                                height: "calc(100vh - 320px)"
                            }}
                        >
                            <FreeDescription
                                isMonthly={isMonthly}
                                pay={(price: number, bool: any) => pay(price, bool, 0)}
                            />
                        </div>
                        <div className='w-1/2 pl-2'>
                            <PaymentWay tabOrder={tabOrder} />
                        </div>
                    </div>
                </Tab.Panel>
                <Tab.Panel>
                    <div
                        className="active p-4 pt-5 border border-gray-900 rounded-[8px] flex justify-between items-start"
                        style={{
                            height: "calc(100vh - 280px)"
                        }}
                    >
                        <div
                            className='w-1/2 border border-dashed border-primary border-t-0 border-b-0 border-l-0'
                            style={{
                                height: "calc(100vh - 320px)"
                            }}
                        >
                            <StarterDescription
                                price={price}
                                tabOrder={tabOrder}
                                isMonthly={isMonthly}
                                pay={(price: number, bool: any, tabOrder: number) => pay(price, bool, tabOrder)}
                            />
                        </div>
                        <div className='w-1/2 pl-2'>
                            <PaymentWay
                                price={price}
                                tabOrder={tabOrder}
                            />
                        </div>
                    </div>
                </Tab.Panel>
                <Tab.Panel>
                    <div
                        className="active p-4 pt-5 border border-gray-900 rounded-[8px] flex justify-between items-start"
                        style={{
                            height: "calc(100vh - 280px)"
                        }}
                    >
                        <div
                            className='w-1/2 border border-dashed border-primary border-t-0 border-b-0 border-l-0'
                            style={{
                                height: "calc(100vh - 320px)"
                            }}
                        >
                            <PremiumDescription
                                price={price}
                                tabOrder={tabOrder}
                                isMonthly={isMonthly}
                                pay={(price: number, bool: any, tabOrder: number) => pay(price, bool, tabOrder)}
                            />
                        </div>
                        <div className='w-1/2 pl-2'>
                            <PaymentWay
                                price={price}
                                tabOrder={tabOrder}
                            />
                        </div>
                    </div>
                </Tab.Panel>
            </Tab.Group>
        </div>
    )
}