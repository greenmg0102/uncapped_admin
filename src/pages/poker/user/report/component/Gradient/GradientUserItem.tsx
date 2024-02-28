import clsx from 'clsx'
import { findNearestColor } from '../../../../../..//utils/actionValidation/reporting/getGlobalFrequency'
import { actionNodeDistinguish } from '../../../../../../utils/system/actionNodeDistinguish'

const GradientUserItem = ({ nextObject, userTab, data, subValue, standard, reportingResultItem, handResult, setInterestingPair, bufferSetReportItemActive, reportItemActive }: any) => {

    let total = handResult && handResult.frequency && Object.values(handResult.frequency).reduce((acc: any, val: any) => acc + val, 0);

    return (
        <div
            className={clsx("relative rounded-[2px] h-[36px] cursor-pointer transition-all opacity-[1]")}
            style={{ backgroundColor: findNearestColor(Math.abs((1 - reportingResultItem.played[0]) - nextObject)) }}
            onClick={() => {
                bufferSetReportItemActive(data)
                setInterestingPair(actionNodeDistinguish(handResult, userTab) ? actionNodeDistinguish(handResult, userTab) : [])
            }}
        >
            <div className="flex justify-center items-center rounded-[2px] bg-gray-900 dark:hover:bg-gray-800 hover:bg-gray-900 cursor-pointer transition-all">
                <p className="absolute text-[1em] text-white mix-blend-difference z-[1] left-0 top-0">
                    {data}
                </p>
            </div>

            <p className={clsx(subValue > 0 ? "absolute bottom-[-2px] right-[2px] text-white mix-blend-difference text-[12px]" : "hidden")}>
                {
                    Math.abs((1 - reportingResultItem.played[0]) - nextObject).toFixed(2) === "NaN" || Math.abs((1 - reportingResultItem.played[0]) - nextObject).toFixed(2) === "0.00" ?
                        undefined : Math.abs((1 - reportingResultItem.played[0]) - nextObject).toFixed(2)
                }
            </p>

            <div className={clsx("absolute", reportItemActive === data ? "z-[3] w-[180px] h-[120px] bg-gray-800 top-[-2px] left-[-2px] rounded-[4px] px-[5px] border border-gray-400 border-[2px]" : "w-0 h-0 hidden")}>

                <div className='flex justify-between items-end mt-[3px] mb-[10px] text-[#3d7cb8]'>
                    <p className='text-[20px] text-gray-200'>{data}</p>
                    <p>{total}</p>
                </div>

                <div className='flex justify-between items-center text-[#7d1f1f] font-bold'>
                    <p className='text-[14px] w-1/3 text-left'>Allin</p>
                    <p className='text-[14px] w-1/3 text-center'>{handResult && (handResult.frequency.allin * 100 / total).toFixed(1)}%</p>
                    <p className='text-[14px] w-1/3 text-right'>{handResult && handResult.frequency.allin === undefined ? 0 : handResult && handResult.frequency.allin}</p>
                </div>
                <div className='flex justify-between items-center text-[#ff0000] font-bold'>
                    <p className='text-[14px] w-1/3 text-left'>Raise</p>
                    <p className='text-[14px] w-1/3 text-center'>{handResult && (handResult.frequency.raise * 100 / total).toFixed(1)}%</p>
                    <p className='text-[14px] w-1/3 text-right'>{handResult && handResult.frequency.raise}</p>
                </div>
                <div className='flex justify-between items-center text-[#00cf00] font-bold'>
                    <p className='text-[14px] w-1/3 text-left'>Call</p>
                    <p className='text-[14px] w-1/3 text-center'>{handResult && (handResult.frequency.call * 100 / total).toFixed(1)}%</p>
                    <p className='text-[14px] w-1/3 text-right'>{handResult && handResult.frequency.call}</p>
                </div>
                <div className='flex justify-between items-center text-[#3d7cb8] font-bold'>
                    <p className='text-[14px] w-1/3 text-left'>Fold</p>
                    <p className='text-[14px] w-1/3 text-center'>{handResult && (handResult.frequency.fold * 100 / total).toFixed(1)}%</p>
                    <p className='text-[14px] w-1/3 text-right'>{handResult && handResult.frequency.fold}</p>
                </div>
            </div>
        </div>
    );
};

export default GradientUserItem;
