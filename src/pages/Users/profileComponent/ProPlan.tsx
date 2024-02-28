
export default function ProPlan({ proPlan }: any) {

    if (Object.keys(proPlan).length > 0) {

        return (
            <div className="panel w-full">
                <div className="flex items-center justify-between mb-10">
                    <h5 className="font-semibold text-lg dark:text-white-light">{proPlan.title}</h5>
                    <button className="btn btn-primary">Renew Now</button>
                </div>
                <div className="group h-[20em] overflow-y-auto pr-4">
                    {proPlan.majorInfo.map((item: any, index: any) =>
                        <div key={index}>
                            <div className="flex justify-start items-center mb-4">
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true" className="text-green-700"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
                                <p className="text-[16px] text-gray-400 ml-4">{item.item}</p>
                            </div>
                            {item.subList.map((each: any, order: any) =>
                                <div key={order} className="flex justify-start items-center mb-4 pl-8">
                                    <div className="w-[5px] h-[5px] bg-blue-400 rounded-full" />
                                    <p className="text-[16px] text-gray-400 ml-4">{each}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-between my-4 font-semibold">
                    <p className="flex items-center rounded-full bg-dark px-2 py-1 text-xs text-white-light font-semibold">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ltr:mr-1 rtl:ml-1">
                            <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M12 8V12L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        5 Days Left
                    </p>
                    <p className="text-info">$25 / month</p>
                </div>
                <div className="rounded-full h-2.5 p-0.5 bg-dark-light overflow-hidden mb-5 dark:bg-dark-light/10">
                    <div className="bg-gradient-to-r from-[#f67062] to-[#fc5296] w-full h-full rounded-full relative" style={{ width: '65%' }}></div>
                </div>
            </div>
        )

    } else {
        return (
            <div>
                Free
            </div>
        )
    }
}