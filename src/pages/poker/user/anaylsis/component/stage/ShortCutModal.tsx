import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import PokerTableAnalysis from '../../../../../../components/UI/pokerTable/PokerTableAnalysis'
import clsx from 'clsx'

const ShortCutModal = ({ shortCutStatus, setShortCutStatus }: any) => {

    const [position, setPosition] = useState(-1)
    const buttonList = ["SRP", "3Bet", "4Bet", "5Bet", "Squeeze"]

    return (
        <div>
            <Transition appear show={shortCutStatus} as={Fragment}>
                <Dialog as="div" open={shortCutStatus} onClose={() => setShortCutStatus(!shortCutStatus)} className="relative z-50 w-[900px]" >
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
                                <Dialog.Panel as="div" className="panel my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                                    <div className="p-5">
                                        <PokerTableAnalysis
                                            maxSeat={6}
                                        />
                                        <div className='py-8 px-4'>
                                            <h2 className='text-center mb-4'>Preflop action</h2>
                                            <div className='flex justify-center items-center'>
                                                <div className="relative inline-flex align-middle">
                                                    {buttonList.map((item: any, index: any) =>
                                                        <button
                                                            key={index}
                                                            type="button"
                                                            onClick={() => setPosition(index)}
                                                            className={clsx(
                                                                "hover:bg-red-700",
                                                                position === index ? "border border-red-400" : "",
                                                                index === 0 ? "btn btn-dark ltr:rounded-r-none rtl:rounded-l-none" : index === buttonList.length - 1 ? "btn btn-dark ltr:rounded-l-none rtl:rounded-r-none" : "btn btn-dark rounded-none"
                                                            )}
                                                        >
                                                            {item}
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-8 flex items-center justify-end">
                                            <button type="button" className="btn btn-outline-danger" onClick={() => setShortCutStatus(!shortCutStatus)}>
                                                Close
                                            </button>
                                            <button type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4" onClick={() => setShortCutStatus(!shortCutStatus)}>
                                                Confirm
                                            </button>
                                        </div>
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

export default ShortCutModal;
