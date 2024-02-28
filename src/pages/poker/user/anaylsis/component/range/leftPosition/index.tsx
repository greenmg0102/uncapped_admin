import { useState } from 'react';
import Dropdown from '../../../../../../../components/Dropdown';
import { rangeCategory } from '../../../../../../../utils/reference/reportingSettingList'
import { playCardArray } from '../../../../../../../utils/reference'
import { hero8Site } from '../../../../../../../utils/reference/playCardColor'
import LeftPositionItem from './LeftPositionItem'

export default function LeftPosition({ VillianHands, active, setActive, activeNodeNumber }: any) {

    const [category, setCategory] = useState("Strategy")

    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="flex justify-start items-center hover:text-gray-200 transition-all cursor-pointer">
                    <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="copy"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path>
                    </svg>
                    <p className='ml-1'> Copy </p>
                </div>
                <div className="flex justify-start items-center">
                    <p className='mr-2 text-gray-300 font-bold w-[40px]'>
                        {hero8Site[activeNodeNumber]}
                    </p>
                    <div className="inline-flex">
                        <button className="btn btn-sm btn-outline-primary ltr:rounded-r-none rtl:rounded-l-none">{category}</button>
                        <div className="dropdown">
                            <Dropdown
                                placement={`${false ? 'bottom-start' : 'bottom-end'}`}
                                btnClassName="btn btn-outline-primary ltr:rounded-l-none rtl:rounded-r-none dropdown-toggle before:border-[5px] before:border-l-transparent before:border-r-transparent before:border-t-inherit before:border-b-0 before:inline-block hover:before:border-t-white-light h-full"
                                button={<span className="sr-only">Toggle dropdown</span>}
                            >
                                <ul className="!min-w-[170px]">
                                    {rangeCategory.map((item: any, index: any) =>
                                        <li key={index}>
                                            <button
                                                type="button"
                                                onClick={() => setCategory(item.title)}
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

            </div>
            <div className='flex justify-between items-center flex-wrap mt-[12px] bg-gray-900 rounded-[4px]'>
                {playCardArray.map((item, index) =>
                    <div
                        key={index}
                        className='cursor-pointer'
                        style={{ width: "7.693%", padding: "1px" }}
                    >
                        {
                            category === "Strategy" &&
                            <LeftPositionItem
                                data={item}
                                handResult={VillianHands[item]}
                                rangeOption={true}
                                active={active}
                                selectItem={(active: any) => setActive(active)}
                            />
                        }
                    </div>
                )}
            </div>
        </div>
    )
}