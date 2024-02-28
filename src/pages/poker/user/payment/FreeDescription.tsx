

export default function FreeDescription({ isMonthly, pay }: any) {

    return (
        <div className="relative p-4">

            <div className="flex justify-center mt-12">
                <div>
                    <div className="flex justify-start items-center mb-4">
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true" className="text-green-700"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
                        <p className="text-[16px] text-gray-400 ml-4">Bucketed Reporting</p>
                    </div>
                    <div className="flex justify-start items-center mb-4 pl-8">
                        <div className="w-[5px] h-[5px] bg-blue-400 rounded-full" />
                        <p className="text-[16px] text-gray-400 ml-4">Early - UTG, UTG+1, LJ</p>
                    </div>
                    <div className="flex justify-start items-center mb-4 pl-8">
                        <div className="w-[5px] h-[5px] bg-blue-400 rounded-full" />
                        <p className="text-[16px] text-gray-400 ml-4">Middle - LJ, HJ</p>
                    </div>
                    <div className="flex justify-start items-center mb-4 pl-8">
                        <div className="w-[5px] h-[5px] bg-blue-400 rounded-full" />
                        <p className="text-[16px] text-gray-400 ml-4">Late - HJ, CO, BTN</p>
                    </div>
                    <div className="flex justify-start items-center mb-4 pl-8">
                        <div className="w-[5px] h-[5px] bg-blue-400 rounded-full" />
                        <p className="text-[16px] text-gray-400 ml-4">Blinds - SB, BB</p>
                    </div>
                    <div className="flex justify-start items-center mb-4">
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true" className="text-green-700"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
                        <p className="text-[16px] text-gray-400 ml-4">Based Chart Set</p>
                    </div>
                    <div className="mb-4 pl-8">
                        <p className="text-[16px] text-gray-400 mb-2">Standard Accuracy Simulations:</p>
                        <div className="flex justify-start items-center">
                            <div className="w-[5px] h-[5px] bg-blue-400 rounded-full" />
                            <p className="text-[16px] text-gray-400 ml-4">10, 15, 20, 25, 30, 40, 50,60,80, 100</p>
                        </div>
                    </div>
                    <div className="flex justify-start items-center mb-4">
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true" className="text-green-700"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
                        <p className="text-[16px] text-gray-400 ml-4">Base Database Access</p>
                    </div>
                    <div className="flex justify-start items-center mb-4 pl-8">
                        <div className="w-[5px] h-[5px] bg-blue-400 rounded-full" />
                        <p className="text-[16px] text-gray-400 ml-4">20, 000 uploads / month</p>
                    </div>
                    <div className="flex justify-start items-center mb-4 pl-8">
                        <div className="w-[5px] h-[5px] bg-blue-400 rounded-full" />
                        <p className="text-[16px] text-gray-400 ml-4">Base Historical data tracking</p>
                    </div>
                    <div className="flex justify-start items-center mb-4 pl-8">
                        <div className="w-[5px] h-[5px] bg-blue-400 rounded-full" />
                        <p className="text-[16px] text-gray-400 ml-4">Basic Database Filtering</p>
                    </div>
                </div>
            </div>

            {/* <button type="button" className="btn btn-outline-primary w-full mt-24"> Get Started Free </button> */}
        </div>
    )
}