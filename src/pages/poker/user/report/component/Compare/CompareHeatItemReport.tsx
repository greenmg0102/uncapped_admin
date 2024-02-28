import clsx from 'clsx'
import Range24DetailModal from '../../../anaylsis/component/overView/Range24DetailModal'
import ReportingCompareItem from './ReportingCompareItem'

export default function CompareHeatItemReport({ data, handResult, reportItemActive, bufferSetReportItemActive }: any) {

    return (
        <div
            className="relative rounded-[4px] dark:bg-gray-900 bg-gray-700 dark:hover:bg-red-500 hover:bg-gray-900 h-[2.3em] lg:h-[36px] cursor-pointer transition-all"
            onClick={() => bufferSetReportItemActive(data)}
        >
            <div className="flex justify-center items-center rounded-[4px] bg-gray-900 dark:hover:bg-gray-800 hover:bg-gray-900 cursor-pointer transition-all">
                <p className="absolute text-[1em] text-gray-100 z-[1] left-0 top-0">
                    {data}
                </p>

                <ReportingCompareItem
                    handResult={handResult}
                />
            </div>
            <div className={clsx("transition-all duration-[1500]", data === reportItemActive ? "absolute dark:bg-gray-900 z-[4] w-[180px] h-[120px] px-[5px] rounded-[4px] border border-gray-400 border-[2px] top-0 left-0" : "w-0 h-0 hidden")}>
                <p className='text-[20px] mt-[3px] mb-[10px] text-gray-200'>{data}</p>
                <div className="absolute w-full bottom-[1px] left-0 p-1">
                    <Range24DetailModal
                        handResult={handResult}
                    />
                </div>
            </div>
        </div>
    )
}