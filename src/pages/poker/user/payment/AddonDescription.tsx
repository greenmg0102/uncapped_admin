

export default function AddonDescription({ price, tabOrder, isMonthly, pay }: any) {

    return (
        <div className="relative p-4">

            <div className="flex justify-between items-center">
                <p className={`${isMonthly ? '' : ''} text-[42px] w-[120px] text-center text-green-700"`}> {price} $ </p>
                <div className=" text-center flex justify-center items-center space-x-4 rtl:space-x-reverse font-semibold text-base">
                    <span className={`''${!isMonthly ? 'text-primary' : 'text-white-dark'}`}>Monthly</span>
                    <label className="w-12 h-6 relative">
                        <input
                            id="custom_switch_checkbox1"
                            type="checkbox"
                            className="custom_switch absolute ltr:left-0 rtl:right-0 top-0 w-full h-full opacity-0 z-10 cursor-pointer peer"
                            onChange={() => pay(isMonthly ? 29 : 299, !isMonthly, tabOrder)}
                        />
                        <span className="outline_checkbox bg-icon border-2 border-[#ebedf2] dark:border-white-dark block h-full rounded-full before:absolute ltr:before:left-1 rtl:before:right-1 before:bg-[#ebedf2] dark:before:bg-white-dark before:bottom-1 before:w-4 before:h-4 before:rounded-full before:bg-[url(/assets/images/close.svg)] before:bg-no-repeat before:bg-center ltr:peer-checked:before:left-7 rtl:peer-checked:before:right-7 peer-checked:before:bg-[url(/assets/images/checked.svg)] peer-checked:border-primary peer-checked:before:bg-primary before:transition-all before:duration-300"></span>
                    </label>
                    <span className={`${!isMonthly ? 'text-white-dark' : 'text-primary'}`}>Yearly (20% save)</span>
                </div>
                <img src="/assets/images/pokerImage/freeBadge256.png" alt="img" className="w-32 h-32 rounded-full" />
            </div>

            <div className="flex justify-center mt-0">
                <div>
                    <div className="flex justify-start items-center mb-4">
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true" className="text-green-700"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
                        <p className="text-[16px] text-gray-400 ml-4">Multiway Package</p>
                    </div>
                    <div className="flex justify-start items-center mb-4 pl-8">
                        <div className="w-[5px] h-[5px] bg-blue-400 rounded-full" />
                        <p className="text-[16px] text-gray-400 ml-4">Multiway Reporting</p>
                    </div>
                    <div className="flex justify-start items-center mb-4">
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true" className="text-green-700"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
                        <p className="text-[16px] text-gray-400 ml-4">Blinds Battle</p>
                    </div>
                    <div className="flex justify-start items-center mb-4 pl-8">
                        <div className="w-[5px] h-[5px] bg-blue-400 rounded-full" />
                        <p className="text-[16px] text-gray-400 ml-4">Blind vs Blind Expanded Reporting</p>
                    </div>
                    <div className="flex justify-start items-center mb-4">
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true" className="text-green-700"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
                        <p className="text-[16px] text-gray-400 ml-4">Hand History Addon</p>
                    </div>
                </div>
            </div>
        </div>
    )
}