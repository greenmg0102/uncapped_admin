import { useState, useEffect } from "react";
import clsx from "clsx";

import ColorDistinguish from './ColorDistinguish'
import ColorBar from './ColorBar'

const OverViewCradItem = ({ data, selectItem, active, handResult, rangeOption }: any) => {

    const [once, setOnce] = useState(false)

    useEffect(() => { if (rangeOption) setOnce(false) }, [rangeOption])

    const activeItem = (data: any) => {
        selectItem(data)
        setOnce(true)
    }

    return (
        <div className="relative">
            <div
                className="relative rounded-[4px] dark:bg-gray-900 bg-gray-700 dark:hover:bg-red-500 hover:bg-gray-900 h-[3em] cursor-pointer transition-all hover:opacity-50"
                onClick={() => activeItem(data)}
            >
                <p className="absolute text-[1.1em] p-1 text-white z-[1]">
                    {data}
                </p>

                <ColorDistinguish
                    hight={3}
                    once={once}
                    handResult={handResult}
                    rangeOption={rangeOption}
                />
            </div>
            <div
                className={clsx("transition-all duration-[1500] overflow-hidden", active === data ? "absolute w-[14em] h-[11em] top-0 left-0 border border-white border-[2px] rounded-[4px] dark:bg-gray-900 bg-[green] dark:hover:border-red-500 hover:bg-gray-900 z-10" : "absolute w-0 h-0 z-10")}
                onClick={() => activeItem(data)}
            >
                <p className="text-[2em] p-2 font-bold text-white">
                    {data}
                </p>
                <div className="absolute w-full bottom-[1px] left-0 p-1">
                    <ColorBar
                        handResult={handResult}
                    />
                </div>
            </div>
        </div>
    );
};

export default OverViewCradItem;
