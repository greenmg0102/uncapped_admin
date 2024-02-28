import { useState, useEffect, Fragment } from 'react';
import { Tab } from '@headlessui/react';
import clsx from 'clsx'

const OriginChanged = ({ handData, stepRaw, receiveRaw }: any) => {

    const [actionList, setActionList] = useState([])

    useEffect(() => {
        if (handData.rawData) {
            let real = handData.rawData.split("\n");
            setActionList(real.slice(2, real.length));
        }
    }, [handData.rawData])

    return (
        <div>
            <Tab.Group>
                <Tab.List className="mt-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]">
                    <Tab as={Fragment}>
                        {({ selected }) => (
                            <button
                                className={`${selected ? 'text-secondary !outline-none before:!w-full' : ''}
                                                before:inline-block' relative -mb-[1px] flex items-center p-5 py-3 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:h-[1px] before:w-0 before:bg-secondary before:transition-all before:duration-700 hover:text-secondary hover:before:w-full`}
                            >
                                <svg width="20" height="20" className="h-5 w-5 ltr:mr-2 rtl:ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
                                    <ellipse opacity="0.5" cx="12" cy="17" rx="7" ry="4" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                                Origin data
                            </button>
                        )}
                    </Tab>
                    <Tab as={Fragment}>
                        {({ selected }) => (
                            <button
                                className={`${selected ? 'text-secondary !outline-none before:!w-full' : ''}
                                                before:inline-block' relative -mb-[1px] flex items-center p-5 py-3 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:h-[1px] before:w-0 before:bg-secondary before:transition-all before:duration-700 hover:text-secondary hover:before:w-full`}
                            >
                                <svg className="ltr:mr-2 rtl:ml-2" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.00659 6.93309C5.04956 5.7996 5.70084 4.77423 6.53785 3.93723C7.9308 2.54428 10.1532 2.73144 11.0376 4.31617L11.6866 5.4791C12.2723 6.52858 12.0372 7.90533 11.1147 8.8278M17.067 18.9934C18.2004 18.9505 19.2258 18.2992 20.0628 17.4622C21.4558 16.0692 21.2686 13.8468 19.6839 12.9624L18.5209 12.3134C17.4715 11.7277 16.0947 11.9628 15.1722 12.8853"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        opacity="0.5"
                                        d="M5.00655 6.93311C4.93421 8.84124 5.41713 12.0817 8.6677 15.3323C11.9183 18.5829 15.1588 19.0658 17.0669 18.9935M15.1722 12.8853C15.1722 12.8853 14.0532 14.0042 12.0245 11.9755C9.99578 9.94676 11.1147 8.82782 11.1147 8.82782"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                                Forum code
                            </button>
                        )}
                    </Tab>
                </Tab.List>
                <div className='mt-[12px]'>
                    <Tab.Panels>
                        <Tab.Panel>
                            <div className='h-[700px] overflow-y-scroll'>
                                {actionList.map((item: any, index: any) =>
                                    <p
                                        key={index}
                                        className={
                                            clsx(
                                                'transition-all font-bold border-l border-[#805DCA] text-[16px] px-2 mb-[3px] hover:text-gray-400 cursor-pointer',
                                                stepRaw === item ? 'text-gray-300' : 'text-gray-700'
                                            )
                                        }
                                        onClick={() => receiveRaw(item, false)}
                                    >
                                        {item}
                                    </p>
                                )}
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <p
                                className='text-[#bdbdbd] transition-all font-bold border-l border-[#805DCA] p-2'
                                dangerouslySetInnerHTML={{ __html: handData.rawData && handData.rawData.replace(/\r\n/g, '<br>') }}
                            >
                            </p>
                        </Tab.Panel>
                    </Tab.Panels>
                </div>

            </Tab.Group>
        </div>
    );
};

export default OriginChanged;
