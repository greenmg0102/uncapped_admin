import Dropdown from '../../../../../../../../components/Dropdown';
import clsx from 'clsx'

export default function AnalysisSetting({ currentOption, isRtl, gameType, setCurrentOption, playersList, handleOptionChange, bbData, defaultOption }: any) {
    return (
        <div className='p-2'>
            <div className='flex justify-start items-center my-[24px]'>
                <p className='mb-0 mr-[16px] text-[14px] w-[100px]'>FORMAT</p>
                <div className="inline-flex border p-1 px-2 rounded-[4px] border-gray-700">
                    <p className='mb-0'>ChipEV</p>

                    {/* <button className="btn btn-outline-primary ltr:rounded-r-none rtl:rounded-l-none">{currentOption.gameType}</button>
                    <div className="dropdown">
                        <Dropdown
                            placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                            btnClassName="btn btn-outline-primary ltr:rounded-l-none rtl:rounded-r-none dropdown-toggle before:border-[5px] before:border-l-transparent before:border-r-transparent before:border-t-inherit before:border-b-0 before:inline-block hover:before:border-t-white-light h-full"
                            button={<span className="sr-only">Toggle dropdown</span>}
                        >
                            <ul className="!min-w-[170px]">
                                {gameType.map((item: any, index: any) =>
                                    <li key={index}>
                                        <button
                                            type="button"
                                            onClick={() => setCurrentOption({ ...currentOption, gameType: item })}
                                        >
                                            {item}
                                        </button>
                                    </li>
                                )}
                            </ul>
                        </Dropdown>
                    </div> */}
                </div>
            </div>

            <div className='flex justify-start items-center mb-[24px]'>
                <p className='mb-0 mr-[16px] text-[14px] w-[100px]'>PLAYERS</p>
                {playersList.map((item: any, index: any) =>
                    <label
                        key={index}
                        className="inline-flex mr-[24px]"
                    >
                        <input
                            type="radio"
                            name="default_radio"
                            className="form-radio"
                            value={item}
                            checked={currentOption.players === item.toString() ? true : false}
                            onChange={handleOptionChange}
                        />
                        <span>{item}</span>
                    </label>
                )}
            </div>

            <p className='mb-[4px] text-[14px]'>Average Depth in Big Blinds (Equal Stacks)</p>

            <div className='w-full flex justify-start items-center flex-wrap'>
                {bbData.map((item: any, index: any) =>
                    <div
                        key={index}
                        className='p-1 w-1/5'
                    >
                        <div
                            className={
                                clsx(
                                    "flex justify-center items-center rounded-full w-full h-[45px] transition-all cursor-pointer",
                                    currentOption.stackSize === item ?
                                        "bg-gray-800 text-green-600 text-[20px]"
                                        :
                                        "bg-gray-900 text-[16px] text-green-900 font-bold hover:bg-gray-800 hover:text-[24px] hover:font-bold hover:text-green-600"
                                )
                            }
                            onClick={() => setCurrentOption({ ...currentOption, stackSize: item })}
                        >
                            {item === 398750 ? 40 : item}
                        </div>
                    </div>
                )}
            </div>
            <div className='flex justify-between items-start flex-wrap mt-[24px]'>
                <div className='flex justify-start items-center'>
                    <div className='flex justify-start items-center mr-4'>
                        <label className="inline-flex cursor-pointer">
                            <input
                                type="checkbox"
                                className="form-checkbox rounded-full peer"
                                checked={currentOption.Limps}
                                onChange={() => setCurrentOption({ ...currentOption, Limps: !currentOption.Limps })}
                            />
                            <span className="peer-checked:text-primary transition-all">Limps</span>
                        </label>
                    </div>
                    <div className='flex justify-start items-center'>
                        <label className="inline-flex cursor-pointer">
                            <input
                                type="checkbox"
                                className="form-checkbox rounded-full peer"
                                checked={currentOption.Cold}
                                onChange={() => setCurrentOption({ ...currentOption, Cold: !currentOption.Cold })}
                            />
                            <span className="peer-checked:text-primary transition-all">Cold Calls</span>
                        </label>
                    </div>
                </div>
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => setCurrentOption({ ...currentOption, ...defaultOption })}
                >
                    Reset Settings
                </button>
            </div>
        </div>
    )
}