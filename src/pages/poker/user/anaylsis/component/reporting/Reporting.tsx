import { Fragment } from 'react'
import SumAverageReporting from './sumAverageReporting'
import FoldReporting from './FoldReporting'
import CallReporting from './CallReporting'
import RaiseReporting from './RaiseReporting'
import AllinReporting from './AllinReporting'

import { Tab } from '@headlessui/react'

export default function Reporting({ reportingResult, userInfoResult }: any) {

    const tabBar = ["Folds", "Calls", "Raises", "All-in", "Sum Average"]

    return (
        <div className="h-[595px] overflow-y-auto">
            <Tab.Group defaultIndex={0}>
                <Tab.List className="mt-1 flex flex-wrap border-b border-white-light dark:border-[#191e3a]">
                    {tabBar.map((item: any, index: any) =>
                        <Tab as={Fragment} key={index}>
                            {({ selected }) => (
                                <button
                                    className={
                                        `${selected ? '!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black ' : ''}
                                                dark:hover:border-b-black' -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary`}
                                >
                                    {item}
                                </button>
                            )}
                        </Tab>
                    )}
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        <FoldReporting
                            handList={reportingResult}
                        />
                    </Tab.Panel>
                    <Tab.Panel>
                        <CallReporting
                            handList={userInfoResult}
                        />
                    </Tab.Panel>
                    <Tab.Panel>
                        <RaiseReporting
                            handList={userInfoResult}
                        />
                    </Tab.Panel>
                    <Tab.Panel>
                        <AllinReporting
                            handList={userInfoResult}
                        />
                    </Tab.Panel>
                    <Tab.Panel>
                        <SumAverageReporting
                            handList={userInfoResult}
                            type={"sum"}
                        />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}