import { useState, useEffect, Fragment } from "react";
import { Tab } from '@headlessui/react';
import StreetItem from './StreetItem'
import PlayCardStaticItem from './PlayCardStaticItem'
import PokerTableAnalysis from '../../../../../../components/UI/pokerTable/PokerTableAnalysis'
import Hint from './Hint'
import { chipAmountColorInBB } from '../../../../../../utils/reference/playCardArray'
import OOPIP from './OOPIP'
import Summary from './Summary'
import { pokerStreetOptionExample } from '../../../../../../utils/reference/playCardColor'

const OverChartCrad = ({ active, selectCard, toolData, hands, currentOption, nodeList, activeNodeData, activeNodeNumber, bettingList, bufferNodeList }: any) => {

    const [category, setCategory] = useState(0)
    const tabBar = ["Table", "Tools", "Hands"]

    useEffect(() => {
        let lastChar = active.slice(-1);
        if (lastChar === 's') setCategory(4)
        else if (lastChar === 'o') setCategory(12)
        else setCategory(6)
    }, [active])

    return (
        <div className="flex flex-col h-flex-grow">

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
                <div className='flex justify-between items-center mb-2'>
                    {pokerStreetOptionExample.filter((each: any, per: any) => each.id !== 4).map((item: any, index: any) =>
                        <StreetItem
                            key={index}
                            item={item}
                            userResult={toolData.userResult}
                        />
                    )}
                </div>
                <Tab.Panels>
                    <Tab.Panel>
                        <div className="w-full h-[425px] pt-24 flex justify-start items-center relative">
                            <PokerTableAnalysis
                                nodeList={bufferNodeList.length > 0 ? nodeList.concat(bufferNodeList.slice(1)) : nodeList}
                                bettingList={bettingList}
                                currentOption={currentOption}
                                activeNodeNumber={activeNodeNumber}
                                activePlayer={activeNodeData.player}
                                maxSeat={Number(currentOption.players)}
                            />
                            <div className='absolute top-[10px] left-[10px] w-full flex justify-center'>
                                {Object.keys(chipAmountColorInBB).map(Number).sort((a, b) => a - b).map((key: any, index: any) =>
                                    <div
                                        key={index}
                                        className='flex justify-start items-center w-[50px] cursor-pointer text-gray-400 hover:text-gray-100 hover:font-bold transition-all'
                                    >
                                        <div
                                            className='w-[6px] h-[6px] rounded-full'
                                            style={{ background: chipAmountColorInBB[key] }}
                                        />
                                        <div className='ml-[4px] flex justify-start'>{key}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* <OOPIP
                            activeNodeData={activeNodeData}
                            maxSeat={Number(currentOption.players)}
                        /> */}
                    </Tab.Panel>
                    <Tab.Panel>
                        {/* <Hint toolData={toolData} /> */}
                        <Summary
                            hands={hands}
                            active={active}
                            selectCard={(card: string) => selectCard(card)}
                        />
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className="flex justify-between items-center flex-wrap h-[510px]">
                            {Array(category).fill(0).map((item: any, index: any) =>
                                <PlayCardStaticItem
                                    key={index}
                                    order={index}
                                    active={active}
                                    height={category === 12 ? "25%" : "50%"}
                                    width={category === 4 ? "50%" : "33.33%"}
                                />
                            )}
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
};

export default OverChartCrad;
