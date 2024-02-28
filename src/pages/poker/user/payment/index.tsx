import { Fragment, useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import ProPlanItem from './PaymentWay/ProPlanItem'

import PaymentWay from './PaymentWay';
import { premiumRead } from '../../../../utils/functions/admin/PremiumManaging/PremiumManaging'

export default function Payment() {

    const [tabOrder, setTabOrder] = useState("")
    const [isMonthly, setIsMonthly] = useState(false)
    const [price, setPrice] = useState(0)
    const [payway, setPayway] = useState("Free")

    const [premiumList, setPremiumList] = useState([])

    const filteredItem = premiumList.find((item: any) => item._id === tabOrder);

    useEffect(() => {
        async function fetchData() {
            let result = await premiumRead()
            setTabOrder(result[0]._id)
            setPremiumList(result)
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (tabOrder !== "") {
            let temporary = premiumList.find((item: any) => item._id === tabOrder) as { monthly: number, yearly: number } | undefined;
            if (temporary) setPrice(!isMonthly ? temporary.monthly : temporary.yearly);
        }
    }, [tabOrder, premiumList, isMonthly]);


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
        if (tabOrder === 3) setPrice(!isMonthly ? 29 : 299)
    }

    return (
        <Tab.Group>
            <Tab.List className="mt-3 flex flex-wrap">
                {premiumList.map((item: any, index: any) =>
                    <Tab as={Fragment} key={index}>
                        {({ selected }) => (
                            <button
                                className={`${selected ? ' transition-all !border-secondary text-secondary !outline-none dark:!bg-[#191e3a]' : ''} flex items-center border-t-2 border-transparent bg-[#f6f7f8] px-4 py-2 md:px-7 md:py-3 before:inline-block hover:border-secondary hover:text-secondary dark:bg-transparent dark:hover:bg-[#191e3a] font-bold`}
                                onClick={() => {
                                    selectTab(item._id)
                                    setPayway(item.title)
                                }}
                            >
                                {item.title}
                            </button>
                        )}
                    </Tab>
                )}
            </Tab.List>

            <div
                className="active p-4 pt-5 border border-gray-900 rounded-[8px] flex justify-between items-start flex-wrap"
            >
                <div
                    className='w-full xl:w-2/5 border-r-[0px] xl:border-r-[1px] border border-dashed border-primary border-t-0 border-b-0 border-l-0 pr-4 transition-all'
                >
                    {tabOrder === "" ? null :
                        <ProPlanItem
                            price={price}
                            payway={payway}
                            isMonthly={isMonthly}
                            proPlan={filteredItem}
                            filteredItem={filteredItem}
                            pay={(price: number, bool: any) => pay(price, bool, 0)}
                        />
                    }
                </div>
                {
                    payway === 'Free' ?
                        undefined
                        :
                        <div className='w-full xl:w-3/5 pl-2 mt-4 xl:mt-0 transition-all'>
                            <PaymentWay
                                price={price}
                                premiumId={tabOrder}
                                isMonthly={isMonthly}
                                setPayway={(way: any) => setPayway(way)}
                            />
                        </div>
                }

            </div>

        </Tab.Group>
    )
}