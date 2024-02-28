import { playCardArray } from '../../../../../../utils/reference'
import CallItem from "./CallItem"
import ColorChart from './ColorChart'

export default function CallReporting({ handList }: any) {

    return (
        <div>
            <div className='flex justify-between items-start'>

                <div className='flex justify-start flex-wrap w-full pr-[4px]'>
                    {
                        Object.keys(handList).length > 0 &&
                        playCardArray.map((item, index) =>
                            <div
                                key={index}
                                className='cursor-pointer'
                                style={{ width: "7.692%", padding: "2px" }}
                            >
                                <CallItem
                                    data={item}
                                    handResult={handList[item]}
                                />
                            </div>
                        )}
                </div>
                <ColorChart
                    type={"call"}
                />
            </div>
        </div>
    )
}