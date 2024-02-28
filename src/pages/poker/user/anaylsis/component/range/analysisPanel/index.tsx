
export default function AnalysisPanel() {

    return (
        <div className="px-1 mt-[44px]">
            <div>
                <div className="flex justify-between items-center mb-[4px]">
                    <p className="text-red-500 font-bold text-[12px]">252.8</p>
                    <p className="text-gray-300 font-bold text-[12px]">Combos</p>
                    <p className="text-green-500 font-bold text-[12px]">1326</p>
                </div>

                <div className="flex justify-between items-center rounded-[6px] bg-gray-800 h-[16px]">
                    <div className="w-1/2 relative">
                        <div
                            className="absolute right-0 top-[-7px] rounded-l-[6px] bg-gray-500 h-[14px]"
                            style={{ width: "86%" }}
                        >
                        </div>
                    </div>
                    <div className="w-1/2 relative">
                        <div
                            className="absolute left-0 top-[-7px] rounded-r-[6px] bg-green-500 h-[14px]"
                            style={{ width: "86%" }}
                        >
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-[12px] mb-[4px]">
                    <p className="font-bold">
                        <span className="text-green-500 font-bold text-[12px]">3.22</span>
                        <span className="text-gray-200 font-bold text-[10px] ml-1">94.78%</span>
                    </p>
                    <p className="text-gray-300 font-bold text-[12px]">EV</p>
                    <p className="font-bold">
                        <span className="text-gray-200 font-bold text-[10px] mr-1">5.22%</span>
                        <span className="text-red-500 font-bold text-[12px]">3.22</span>
                    </p>
                </div>
                <div className="flex justify-between items-center rounded-[6px] bg-gray-800 h-[16px]">
                    <div className="w-1/2 relative">
                        <div
                            className="absolute right-0 top-[-7px] rounded-l-[6px] bg-gray-500 h-[14px]"
                            style={{ width: "94.78%" }}
                        >
                        </div>
                    </div>
                    <div className="w-1/2 relative">
                        <div
                            className="absolute left-0 top-[-7px] rounded-r-[6px] bg-green-500 h-[14px]"
                            style={{ width: "5.22%" }}
                        >
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-[12px] mb-[4px]">
                    <p className="text-gray-500 font-bold text-[12px]">N/A</p>
                    <p className="text-gray-300 font-bold text-[12px]">Equity</p>
                    <p className="text-gray-500 font-bold text-[12px]">N/A</p>
                </div>
                <div className="flex justify-between items-center rounded-[6px] bg-gray-800 h-[16px]">
                    <div className="w-1/2 relative">
                        <div
                            className="absolute right-0 top-[-7px] rounded-l-[6px] bg-gray-500 h-[14px]"
                            style={{ width: "0%" }}
                        >
                        </div>
                    </div>
                    <div className="w-1/2 relative">
                        <div
                            className="absolute left-0 top-[-7px] rounded-r-[6px] bg-green-500 h-[14px]"
                            style={{ width: "0%" }}
                        >
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-[12px] mb-[4px]">
                    <p className="text-gray-500 font-bold text-[12px]">N/A</p>
                    <p className="text-gray-300 font-bold text-[12px]">EQR</p>
                    <p className="text-gray-500 font-bold text-[12px]">N/A</p>
                </div>
                <div className="flex justify-between items-center rounded-[6px] bg-gray-800 h-[16px]">
                    <div className="w-1/2 relative">
                        <div
                            className="absolute right-0 top-[-7px] rounded-l-[6px] bg-gray-500 h-[14px]"
                            style={{ width: "0%" }}
                        >
                        </div>
                    </div>
                    <div className="w-1/2 relative">
                        <div
                            className="absolute left-0 top-[-7px] rounded-r-[6px] bg-green-500 h-[14px]"
                            style={{ width: "0%" }}
                        >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}