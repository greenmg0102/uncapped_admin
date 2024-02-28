import clsx from 'clsx'
import { rangeArray } from '../../../../../../utils/reference/playCardArray'

const InfoAndOption = ({ range, actionType, currentChart, isShowCryptoMenu, setActionType, setRange, setIsShowCryptoMenu }: any) => {

    return (
        <div className="md:flex justify-between items-center flex-wrap p-2 border-b border-[#ebedf2] dark:border-[#191e3a]">
            <div className="flex-1 flex items-start ltr:pr-4 rtl:pl-4">
                <button onClick={() => setIsShowCryptoMenu(!isShowCryptoMenu)} type="button" className="xl:hidden hover:text-primary block ltr:mr-5 rtl:ml-5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 7L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path opacity="0.5" d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M20 17L4 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </button>
                <div>
                    <div className="flex items-center">
                        <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">{currentChart.title}</div>
                        <div className="font-semibold text-xs text-white-dark uppercase">({currentChart.alias})</div>
                    </div>
                    <div className={`flex items-center mt-2 ${currentChart.isUp ? 'text-success' : 'text-danger'}`}>
                        <div className="min-w-20 text-2xl ltr:mr-3 rtl:ml-3">{currentChart.value}</div>

                        {currentChart.isUp && (
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mb-px" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                        )}

                        {!currentChart.isUp && (
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-danger w-4 h-4 mb-px" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                        )}
                        <div className="font-medium text-sm mb-px">{currentChart.perc}%</div>
                    </div>
                </div>
            </div>

            <div className={clsx(currentChart.id === 2 || currentChart.id === 3 ? "" : "hidden")}>
                <select
                    className={clsx("form-select text-white-dark w-[100px] mr-2")}
                    value={range}
                    required
                    onChange={(e: any) => setRange(e.target.value)}
                >
                    {rangeArray.map((item: any, index: any) =>
                        <option
                            key={index}
                            value={item}
                        >
                            {item} range
                        </option>
                    )}
                </select>
            </div>

            <div className={clsx(currentChart.id === 1 || currentChart.id === 2 || currentChart.id === 3 ? "" : "hidden")}>
                <select
                    className="form-select text-white-dark w-[100px]"
                    value={actionType}
                    onChange={(e: any) => setActionType(e.target.value)}
                    required
                >
                    <option value="fold">Fold</option>
                    <option value="call">Call</option>
                    <option value="raise">Raise</option>
                    <option value="allin">Allin</option>
                </select>
            </div>

            <ul className="ltr:md:ml-auto rtl:md:mr-auto grid grid-cols-2 sm:grid-cols-4 font-semibold sm:divide-x rtl:divide-x-reverse divide-[#ebedf2] dark:divide-[#253b5c] text-white-dark mt-5 sm:mt-0">
                <li className="px-4 py-1">
                    Total Hands
                    <span className="text-lg mt-1.5 block text-black dark:text-white-light">{currentChart.marketcap}K</span>
                </li>
                <li className="px-4 py-1">
                    Winning Case
                    <span className="text-lg mt-1.5 block text-black dark:text-white-light">{currentChart.volume}K</span>
                </li>
                <li className="px-4 py-1">
                    Losing Case
                    <span className="text-lg mt-1.5 block text-black dark:text-white-light">{currentChart.supply}K</span>
                </li>
                <li className="px-4 py-1">
                    Result luck
                    <span className="text-lg mt-1.5 block text-black dark:text-white-light">{currentChart.highest}</span>
                </li>
            </ul>
        </div>
    );
};

export default InfoAndOption;



