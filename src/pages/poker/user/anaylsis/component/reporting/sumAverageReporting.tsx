import { playCardArray } from '../../../../../../utils/reference'
import SumReportingItem from "./SumReportingItem"


export default function SumAverageReporting({ handList }: any) {

    return (
        <div>
            <div className='flex justify-start flex-wrap'>
                {
                    Object.keys(handList).length > 0 &&
                    playCardArray.map((item, index) =>
                        <div
                            key={index}
                            className='cursor-pointer'
                            style={{ width: "7.692%", padding: "2px" }}
                        >
                            <SumReportingItem
                                data={item}
                                handResult={handList[item]}
                            />
                        </div>
                    )}
            </div>
        </div>
    )
}