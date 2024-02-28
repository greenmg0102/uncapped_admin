import { useState, Fragment } from 'react'
import Dropdown from '../../../../../../components/Dropdown';
import { Tab } from '@headlessui/react'
import Pair from './pair/Pair'
import Suited from './suited/Suited'
import Offsuit from './offsuit/Offsuit'

export default function Chart({ reportingResult, userInfoResult }: any) {

    const [actionValue, setActionValue] = useState(1)

    const tabBar = ["Pairs", "Suited", "Offsuit"]

    const actionList = [
        {
            title: "Flop",
            actionNumber: 0
        },
        {
            title: "Calls",
            actionNumber: 1
        },
        {
            title: "Raises",
            actionNumber: 2
        },
        {
            title: "All-in",
            actionNumber: 3
        },
    ]

    return (
        <div className='relative'>
            <div className="dropdown absolute top-0 right-0">
                <div className="inline-flex">
                    <button className="btn btn-outline-primary ltr:rounded-r-none rtl:rounded-l-none">{actionList[actionValue].title}</button>
                    <div className="dropdown">
                        <Dropdown
                            placement={'bottom-start'}
                            btnClassName="btn btn-outline-primary ltr:rounded-l-none rtl:rounded-r-none dropdown-toggle before:border-[5px] before:border-l-transparent before:border-r-transparent before:border-t-inherit before:border-b-0 before:inline-block hover:before:border-t-white-light h-full"
                            button={<span className="sr-only">Toggle dropdown</span>}
                        >
                            <ul className="!min-w-[170px]">
                                {actionList.map((item: any, index: any) =>
                                    <li key={index}>
                                        <button
                                            type="button"
                                            onClick={() => setActionValue(item.actionNumber)}
                                        >
                                            {item.title}
                                        </button>
                                    </li>
                                )}
                            </ul>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <Tab.Group defaultIndex={0}>
                <Tab.List className="ml-16 mt-1 flex flex-wrap border-b border-white-light dark:border-[#191e3a]">
                    {tabBar.map((item: any, index: any) =>
                        <Tab as={Fragment} key={index}>
                            {({ selected }) => (
                                <button
                                    className={
                                        `${selected ? '!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black ' : ''}
                                        dark:hover:border-b-black' -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary`
                                    }
                                >
                                    {item}
                                </button>
                            )}
                        </Tab>
                    )}
                </Tab.List>
                {
                    Object.keys(reportingResult).length > 0 &&
                    Object.keys(userInfoResult).length > 0 &&
                    <Tab.Panels>
                        <Tab.Panel>
                            <Pair
                                action={actionValue}
                                handList={reportingResult}
                                userInfoResult={userInfoResult}
                            />
                        </Tab.Panel>
                        <Tab.Panel>
                            <Suited
                                handList={reportingResult}
                                userInfoResult={userInfoResult}
                            />
                        </Tab.Panel>
                        <Tab.Panel>
                            <Offsuit
                                handList={reportingResult}
                                userInfoResult={userInfoResult}
                            />
                        </Tab.Panel>
                    </Tab.Panels>
                }
            </Tab.Group>
        </div>
    )
}