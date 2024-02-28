import { useState } from 'react';
import OriginChanged from './component/OriginChanged'
import PokerTable from './component/PokerTable'

const Detail = ({ handData }: any) => {

    const [stepRaw, setStepRaw] = useState('')
    const [isAnimation, setIsAnimation] = useState(true)

    const receiveRaw = (raw: any, bool: any) => {
        setStepRaw(raw)
        setIsAnimation(bool)
    }

    return (
        <div>
            <div className="flex justify-between flex-wrap items-start transition-all mt-[12px]">
                <div className="w-full lg:w-4/5 mb-4 pr-0 lg:pr-4 transition-all">
                    <div className="flex justify-center items-center flex-col">
                        <PokerTable
                            handData={handData}
                            isAnimation={isAnimation}
                            receiveRaw={(raw: any, bool: any) => receiveRaw(raw, bool)}
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/5 transition-all">
                    <div className="">
                        <OriginChanged
                            stepRaw={stepRaw}
                            handData={handData}
                            receiveRaw={(raw: any, bool: any) => receiveRaw(raw, bool)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
