
import { preflopStatisticalBreakDownIndicator } from '../../../../../../utils/reference/reportingSettingList'

export default function PreflopStatisticalBreakDown() {

    return (
        <div>
            <p className="text-[24px] font-blod text-gray-400 text-center my-[24px]">Preflop Statistical Breakdown</p>

            <div className="flex justify-between items-center my-1">
                <div className="w-[20%] text-center text-[18px] text-gray-300">
                    Stats Abbrev
                </div>
                <div className="w-[20%] text-center text-[18px] text-gray-300">
                    Definition
                </div>
                <div className="w-[20%] text-center text-[18px] text-gray-300">
                    Target
                </div>
                <div className="w-[20%] text-center text-[18px] text-gray-300">
                    Actual
                </div>
                <div className="w-[20%] text-center text-[18px] text-gray-300">
                    Comments
                </div>
            </div>
            {preflopStatisticalBreakDownIndicator.map((item: any, index: any) =>
                <div
                    key={index}
                    className="flex justify-between items-center hover:bg-gray-800 hover:text-gray-100 transition-all my-2 p-2 cursor-pointer"
                >
                    <div className="w-[20%] text-center">
                        {item.abbrev}
                    </div>
                    <div className="w-[20%] text-center">
                        {item.definition}
                    </div>
                    <div className="w-[20%] text-center">
                        {item.firstRange} &lt; X &lt; {item.lastRange}
                    </div>
                    <div
                        className="w-[20%]"
                        style={{
                            backgroundColor: item.Actual ? item.Actual : undefined
                        }}
                    >
                        &nbsp;
                    </div>
                    <div className="w-[20%] text-center">
                    </div>
                </div>
            )}


        </div>
    )
}