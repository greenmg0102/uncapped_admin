import { useState, useEffect } from "react";
import clsx from "clsx";

export default function LeftPositionItem({ data, handResult, rangeOption, selectItem, active }: any) {

    const [once, setOnce] = useState(false)

    const activeItem = (data: any) => {
        selectItem(data)
        setOnce(true)
    }

    return (
        <div
            className="relative flex justify-center items-center w-full h-[1.8em]"
            onClick={() => activeItem(data)}
        >

            <p className="text-[12px] text-[12px] p-[1px] text-white z-[1]">
                {data}
            </p>
            {handResult.played.length === 4 || handResult.played.length === 2 ?
                <div className={clsx(once || rangeOption ? "absolute w-full bottom-[0px] left-0 p-0" : "hidden")}>
                    <div
                        className="relative w-full"
                        style={{
                            height: `calc(${1.8}em)`
                        }}
                    >
                        <div
                            className='absolute bg-[#3d7cb8] h-full'
                            style={{
                                width: (handResult.played[0]) * 100 + "%",
                            }}
                        >
                        </div>
                        <div
                            className="absolute bg-[#00cf00] h-full"
                            style={{
                                width: (handResult.played[1]) * 100 + "%",
                                left: (handResult.played[0]) * 100 + "%",
                            }}
                        />
                        <div
                            className="absolute bg-[#ff0000] h-full"
                            style={{
                                width: (handResult.played[2] === undefined ? 0 : handResult.played[2]) * 100 + "%",
                                left: ((handResult.played[0]) + (handResult.played[1])) * 100 + "%",
                            }}
                        />
                        <div
                            className="absolute bg-[#7d1f1f] h-full"
                            style={{
                                width: (handResult.played[3] === undefined ? 0 : handResult.played[3]) * 100 + "%",
                                left: ((handResult.played[0]) + (handResult.played[1]) + (handResult.played[2] === undefined ? 0 : handResult.played[2])) * 100 + "%",
                            }}
                        />
                    </div>
                </div>
                :
                <div className={clsx(once || rangeOption ? "absolute w-full bottom-[0px] left-0 p-0" : "hidden")}>
                    <div
                        className="relative w-full"
                        style={{
                            height: `calc(${1.8}em)`
                        }}
                    >
                        <div
                            className='absolute bg-[#3d7cb8] h-full'
                            style={{
                                width: (handResult.played[0]) * 100 + "%",
                            }}
                        >
                        </div>
                        <div
                            className="absolute bg-[#ff0000] h-full"
                            style={{
                                width: (handResult.played[1]) * 100 + "%",
                                left: (handResult.played[0]) * 100 + "%",
                            }}
                        />
                        <div
                            className="absolute bg-[#7d1f1f] h-full"
                            style={{
                                width: (handResult.played[2] === undefined ? 0 : handResult.played[2]) * 100 + "%",
                                left: ((handResult.played[0]) + (handResult.played[1])) * 100 + "%",
                            }}
                        />
                        <div
                            className="absolute bg-[#7d1f1f] h-full"
                            style={{
                                width: (handResult.played[3] === undefined ? 0 : handResult.played[3]) * 100 + "%",
                                left: ((handResult.played[0]) + (handResult.played[1]) + (handResult.played[2] === undefined ? 0 : handResult.played[2])) * 100 + "%",
                            }}
                        />
                    </div>
                </div>
            }
            <div
                className={clsx(
                    "transition-all duration-[1500] overflow-hidden",
                    active === data ?
                        "absolute w-[14em] h-[9em] top-0 left-0 border border-white border-[2px] rounded-[4px] dark:bg-gray-900 bg-[green] dark:hover:border-red-500 hover:bg-gray-900 z-10"
                        :
                        "absolute w-0 h-0 z-10"
                )}
                onClick={() => activeItem(data)}
            >
                <p className="text-[18px] text-[1.5em] p-2 font-bold text-white">
                    {data}
                </p>
                <div className="absolute w-full bottom-[1px] left-0 p-1">
                    {handResult.played.length === 4 || handResult.played.length === 2 ?
                        <div>
                            <div className="flex justify-between items-center">
                                <p className="text-[12px] w-1/3 text-[#7d1f1f]">Allin</p>
                                <p className="text-[12px] w-1/3 text-[#7d1f1f] font-bold text-center">
                                    {(handResult.evs[3] === undefined ? 0 : handResult.evs[3]).toFixed(2)}
                                </p>
                                <p className="text-[12px] w-1/3 text-[#7d1f1f] font-bold text-right">
                                    {(handResult.played[3] === undefined ? 0 : handResult.played[3] * 100).toFixed(2)} %
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-[12px] w-1/3 text-[#ff0000]">Raise</p>
                                <p className="text-[12px] w-1/3 text-[#ff0000] font-bold text-center">
                                    {(handResult.evs[2] === undefined ? 0 : handResult.evs[2]).toFixed(2)}
                                </p>
                                <p className="text-[12px] w-1/3 text-[#ff0000] font-bold text-right">
                                    {(handResult.played[2] === undefined ? 0 : handResult.played[2] * 100).toFixed(2)} %
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-[12px] w-1/3 text-[#00cf00]">Call</p>
                                <p className="text-[12px] w-1/3 text-[#00cf00] font-bold text-center">
                                    {(handResult.evs[1]).toFixed(2)}
                                </p>
                                <p className="text-[12px] w-1/3 text-[#00cf00] font-bold text-right">
                                    {(handResult.played[1] * 100).toFixed(2)} %
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-[12px] w-1/3 text-[#3d7cb8]">Fold</p>
                                <p className="text-[12px] w-1/3 text-[#3d7cb8] font-bold text-center">
                                    {((handResult.evs[0])).toFixed(2)}
                                </p>
                                <p className="text-[12px] w-1/3 text-[#3d7cb8] font-bold text-right">
                                    {((handResult.played[0]) * 100).toFixed(2)} %
                                </p>
                            </div>
                        </div>
                        :
                        <div>
                            <div className="flex justify-between items-center">
                                <p className="text-[12px] w-1/3 text-[#7d1f1f]">Allin</p>
                                <p className="text-[12px] w-1/3 text-[#7d1f1f] font-bold text-center">
                                    {(handResult.evs[2] === undefined ? 0 : handResult.evs[2]).toFixed(2)}
                                </p>
                                <p className="text-[12px] w-1/3 text-[#7d1f1f] font-bold text-right">
                                    {(handResult.played[2] === undefined ? 0 : handResult.played[2] * 100).toFixed(2)} %
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-[12px] w-1/3 text-[#ff0000]">Raise</p>
                                <p className="text-[12px] w-1/3 text-[#ff0000] font-bold text-center">
                                    {(handResult.evs[1]).toFixed(2)}
                                </p>
                                <p className="text-[12px] w-1/3 text-[#ff0000] font-bold text-right">
                                    {(handResult.played[1] * 100).toFixed(2)} %
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-[12px] w-1/3 text-[#00cf00]">Call</p>
                                <p className="text-[12px] w-1/3 text-[#00cf00] font-bold text-center">
                                    {(handResult.evs[3] === undefined ? 0 : handResult.evs[3]).toFixed(2)}
                                </p>
                                <p className="text-[12px] w-1/3 text-[#00cf00] font-bold text-right">
                                    {(handResult.played[3] === undefined ? 0 : handResult.played[3] * 100).toFixed(2)} %
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-[12px] w-1/3 text-[#3d7cb8]">Fold</p>
                                <p className="text-[12px] w-1/3 text-[#3d7cb8] font-bold text-center">
                                    {((handResult.evs[0])).toFixed(2)}
                                </p>
                                <p className="text-[12px] w-1/3 text-[#3d7cb8] font-bold text-right">
                                    {((handResult.played[0]) * 100).toFixed(2)} %
                                </p>
                            </div>
                        </div>
                    }

                    {handResult.played.length === 4 || handResult.played.length === 2 ?
                        <div className="relative h-[6px] w-full">
                            <div
                                className='absolute h-[6px] bg-[#3d7cb8]'
                                style={{
                                    width: (handResult.played[0]) * 100 + "%",
                                }}
                            >
                            </div>
                            <div
                                className="absolute h-[6px] bg-[#00cf00]"
                                style={{
                                    width: (handResult.played[1]) * 100 + "%",
                                    left: (handResult.played[0]) * 100 + "%",
                                }}
                            />
                            <div
                                className="absolute h-[6px] bg-[#ff0000]"
                                style={{
                                    width: (handResult.played[2] === undefined ? 0 : handResult.played[2]) * 100 + "%",
                                    left: ((handResult.played[0]) + (handResult.played[1])) * 100 + "%",
                                }}
                            />
                            <div
                                className="absolute h-[6px] bg-[#7d1f1f]"
                                style={{
                                    width: (handResult.played[3] === undefined ? 0 : handResult.played[3]) * 100 + "%",
                                    left: ((handResult.played[0]) + (handResult.played[1]) + (handResult.played[2] === undefined ? 0 : handResult.played[2])) * 100 + "%",
                                }}
                            />
                        </div>
                        :
                        <div className="relative h-[6px] w-full">
                            <div
                                className='absolute h-[6px] bg-[#3d7cb8]'
                                style={{
                                    width: (handResult.played[0]) * 100 + "%",
                                }}
                            >
                            </div>
                            <div
                                className="absolute h-[6px] bg-[#ff0000]"
                                style={{
                                    width: (handResult.played[1]) * 100 + "%",
                                    left: (handResult.played[0]) * 100 + "%",
                                }}
                            />
                            <div
                                className="absolute h-[6px] bg-[#7d1f1f]"
                                style={{
                                    width: (handResult.played[2] === undefined ? 0 : handResult.played[2]) * 100 + "%",
                                    left: ((handResult.played[0]) + (handResult.played[1])) * 100 + "%",
                                }}
                            />
                            <div
                                className="absolute h-[6px] bg-[#00cf00]"
                                style={{
                                    width: (handResult.played[3] === undefined ? 0 : handResult.played[3]) * 100 + "%",
                                    left: ((handResult.played[0]) + (handResult.played[1]) + (handResult.played[2] === undefined ? 0 : handResult.played[2])) * 100 + "%",
                                }}
                            />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}