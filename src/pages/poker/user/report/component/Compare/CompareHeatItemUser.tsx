import clsx from 'clsx'
import { actionNodeDistinguish } from '../../../../../../utils/system/actionNodeDistinguish'

export default function CompareHeatItemUser({ userTab, data, handResult, standard, setInterestingPair, definite, reportItemActive, bufferSetReportItemActive }: any) {

    let total = handResult && handResult.frequency && Object.values(handResult.frequency).reduce((acc: any, val: any) => acc + val, 0);

    return (
        <div
            className={
                clsx(
                    "transition-all relative w-full h-[2.3em] lg:h-[36px] flex justify-center items-center rounded-[4px] bg-gray-900 dark:hover:bg-gray-800 hover:bg-gray-900 cursor-pointer transition-all",
                    reportItemActive === data ?
                        "border border-yellow-500 border-[2px]"
                        :
                        ""
                )
            }
            onClick={() => {
                bufferSetReportItemActive(data)
                setInterestingPair(actionNodeDistinguish(handResult, userTab) ? actionNodeDistinguish(handResult, userTab) : [])
            }}
        >
            <p className="absolute text-[1.2em] text-gray-400 z-[1] left-0 top-0">
                {data}
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

            {
                handResult &&
                    handResult.frequency &&
                    standard.stage === 'total' ?
                    <p className="absolute text-[1em] text-gray-100 z-[1] bottom-0 right-[3px] text-yellow-500">
                        {total}
                    </p>
                    :
                    <p className="absolute text-[1em] text-gray-100 z-[1] bottom-0 right-0">
                        {
                            (handResult && handResult.frequency && handResult.frequency && handResult.frequency[standard.stage]) === 0 ?
                                undefined : (handResult && handResult.frequency && handResult.frequency && handResult.frequency[standard.stage])
                        }
                    </p>
            }
            {
                handResult &&
                    handResult.frequency &&
                    standard.stage === 'total' ?
                    <div className="relative w-full h-[2.3em] lg:h-[36px]">
                        <div
                            className={clsx("absolute w-full h-[2.3em] lg:h-[36px]", `bg-[${definite.color[standard.stage]}]`)}
                            style={{
                                opacity: handResult &&
                                    handResult.frequency &&
                                    handResult.frequency["total"] !== 0 ? total / definite["total"] : 0
                            }}
                        />
                    </div>
                    :
                    <div className="relative w-full h-[2.3em] lg:h-[36px]">
                        <div
                            className={clsx("absolute w-full h-[2.3em] lg:h-[36px]", `bg-[${definite.color[standard.stage]}]`)}
                            style={{
                                opacity: handResult === undefined || definite[standard.stage] === 0 ? 0
                                    :
                                    handResult &&
                                    handResult.frequency &&
                                    handResult.frequency[standard.stage] / definite[standard.stage]
                            }}
                        />
                    </div>
            }
        </div>
    )
}