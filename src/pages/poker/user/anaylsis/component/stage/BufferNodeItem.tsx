import { useState, useEffect } from 'react';
import clsx from 'clsx'
import { hero8Site } from '../../../../../../utils/reference/playCardColor'

const NodeItem = ({ stageStatus, active, whichStage, order, nodeData, decideNode, activeNode, activeNodeNumber, stackSize, bettingList, isClickable }: any) => {

    const typePair: any = { "F": "Fold", "C": "Call", "R": "Raise", "A": "All in" }
    const [actionOption, setActionOption] = useState(null)

    const selectAction = (type: any, node: any, index: any, order: any, chipAmount: any) => {
        if (node && isClickable) {
            decideNode(type, node, order, hero8Site[nodeData.player], chipAmount)
            setActionOption(index)
        }
    }

    const stackSizeFormat = (type: any, stack: any) => {
        return stack === 398750 ? 40 : stack === 0 ? type === 'total' ? 0 : undefined : (stack / 10000).toFixed(1)
    }

    const totalChipDecide = () => {
        let count = 0
        for (let i = 0; i < order; i++) {
            if (bettingList[i] && bettingList[i].position === hero8Site[nodeData.player]) count += bettingList[i].chipAmount
        }

        if (hero8Site[nodeData.player] === "SB") return stackSizeFormat('total', stackSize - count - 5000)
        if (hero8Site[nodeData.player] === "BB") return stackSizeFormat('total', stackSize - count - 10000)

        return stackSizeFormat('total', stackSize - count)
    }

    const makingOption = (option: any, index: any, order: any) => {
        return <div
            key={index}
            className={
                clsx(
                    "flex justify-between items-center hover:font-bold mb-1",
                    isClickable ? "cursor-pointer" : "cursor-not-allowed",
                    activeNodeNumber === order && option.node ? "text-gray-200 font-bold" : "",
                    stageStatus === true ? 'hidden' : actionOption === index ? "bg-gray-800 rounded-[4px] text-white" : ""
                )
            }
            onClick={() => selectAction('bufferType', option.node, index, order, option.amount)}
        >
            <p className={clsx("mr-1")}>
                {nodeData.actions.length - 1 === index ? typePair["A"] : typePair[option.type]}
            </p>
            <p className={clsx("mr-1")}>
                {stackSizeFormat('option', option.amount)}
            </p>
        </div>
    }

    const bufferactiveNode = (type: any, player: any, order: any) => {
        activeNode(type, player, order)
    }

    return (
        <div
            className={clsx(
                "trasition-all",
                activeNodeNumber === order ? "dark:border-red-500" : "",
                stageStatus === true ? 'w-[8em] h-[2.5em] p-1' : 'w-[8em] h-[10em] p-1', "relative rounded-[4px] dark:bg-gray-900 bg-gray-700 dark:border-gray-900 border-gray-700 dark:border-gray-900 border-[3px] hover:dark:border-red-900 hover:border-green-500 mr-1 cursor-pointer transition-all"
            )}
            onClick={() => bufferactiveNode('bufferType', nodeData.player, order)}
        >
            <div className="flex justify-between items-end mb-1">
                <p className={clsx(whichStage === order ? 'text-green-500 dark:text-red-500 text-[20px] font-bold' : 'text-white text-[16px]', "text-gray-100 transition-all")}>
                    {hero8Site[nodeData.player]}
                </p>
                <p className={clsx(whichStage === order ? 'text-green-500 dark:text-red-500' : 'text-white', "font-bold text-[16px] transition-all")}>
                    {Number(totalChipDecide()) < 0 ? 0 : Number(totalChipDecide())}
                </p>
                <p className={clsx(stageStatus === true ? 'text-white text-[20px] font-bold' : 'hidden')}>
                    {/* {sequenceData} */}
                </p>
            </div>

            {nodeData.actions.map((item: any, index: any) => makingOption(item, index, order))}
        </div>
    );
};

export default NodeItem;