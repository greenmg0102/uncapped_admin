import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
import clsx from 'clsx'

import Crypto from './Crypto';
import Classical from './Classical';

export default function PaymentWay({ price, setPayway, isMonthly, premiumId }: any) {

    const categroy = ['Classical', 'Crypto']

    return (
        <div>
            <Tab.Group>
                <Tab.List className="flex flex-wrap">
                    {categroy.map((item: any, index: any) =>
                        <Tab as={Fragment} key={index}>
                            {({ selected }) => (
                                <button
                                    className={
                                        clsx(
                                            premiumId === 0 ?
                                                'pointer-events-none dark:hover:border-b-black -mb-[1px] flex items-center border border-transparent p-3.5 py-2'
                                                :
                                                `${selected ? '!border-white-light !border-b-white text-danger !outline-none dark:!border-[#191e3a] dark:!border-b-black' : ''} dark:hover:border-b-black -mb-[1px] flex items-center border border-transparent p-3.5 py-2 hover:text-danger`
                                        )
                                    }
                                >
                                    {item}
                                </button>
                            )}
                        </Tab>
                    )}
                </Tab.List>

                <Tab.Panels>
                    <Tab.Panel>
                        <div className="pt-5 p-2 ">
                            <Classical
                                premiumId={premiumId}
                                price={price}
                                setPayway={(way: any) => setPayway(way)}
                            />
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className="pt-5 p-2 ">
                            <Crypto
                                isMonthly={isMonthly}
                                premiumId={premiumId}
                                price={price}
                                setPayway={(way: any) => setPayway(way)}
                            />
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}