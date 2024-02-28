import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import { Dialog, Transition } from '@headlessui/react';
import { useSelector } from 'react-redux';
import AnalysisSetting from './settingModal/Analysis'
import ReportingSetting from './settingModal/Reporting'
import { IRootState } from '../../../../../../store';
import { MiddlewareCurrentOption, MiddlewareReportingOption } from '../../../../../../interface/user/analysis/analysis.dto'

const SettingPreFlop = ({ settingStatus, setSettingStatus, currentOption, defaultOption, setCurrentOption, handleOptionChange, reportingOption, setReportingOption }: any) => {

    const bbData = [10, 15, 20, 25, 30, 398750, 50, 60, 80, 100]
    const tabBar = ["Analysis Settings", "Reporting Setting"]
    const gameType = ['Heads-Up', 'ChipEV', 'PKO']
    const playersList = ['6', '8']

    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    return (
        <div>
            <Transition appear show={settingStatus} as={Fragment}>
                <Dialog as="div" open={settingStatus} onClose={() => setSettingStatus(!settingStatus)} className="relative z-50 w-[900px]" >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </Transition.Child>
                    <div className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
                        <div className="flex min-h-screen items-center justify-center px-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel as="div" className="panel my-8 w-full sm:max-w-[900px] overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                                    <div className="p-5">
                                        <h1 className='text-center text-[24px] text-gray-300 mb-[12px] border-b border-primary border-dashed pb-[12px] mt-[12px] mx-[50px] font-bold' >
                                            Settings
                                        </h1>

                                        <AnalysisSetting
                                            gameType={gameType}
                                            isRtl={isRtl}
                                            currentOption={currentOption}
                                            setCurrentOption={(value: MiddlewareCurrentOption) => setCurrentOption(value)}
                                            playersList={playersList}
                                            handleOptionChange={handleOptionChange}
                                            bbData={bbData}
                                            defaultOption={defaultOption}
                                        />
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default SettingPreFlop;
