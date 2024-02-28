import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { getFlag } from '../../../../../../utils/functions/user/analysis/getPreflopModel'
import clsx from 'clsx'

const AllBookMark = ({ isAllMark, setIsAllMark }: any) => {

    const [flagList, setFlagList] = useState([])

    useEffect(() => {
        if (isAllMark === true) {
            async function fetchData() {
                const data = {
                    profilesId: "65849f7fdafd57880710c9ab"
                }
                let result = await getFlag(data)
                setFlagList(result)
            }
            fetchData()
        }
    }, [isAllMark])

    return (
        <div>
            <Transition appear show={isAllMark} as={Fragment}>
                <Dialog as="div" open={isAllMark} onClose={() => setIsAllMark(!isAllMark)} className="relative z-50 w-[900px]" >
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
                                <Dialog.Panel as="div" className="panel my-8 w-full max-w-[1000px] overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                                    <div className="p-5">
                                        <h2 className='text-center mb-4 text-[20px]'>BookMark List</h2>

                                        {flagList.map((item: any, index: any) =>
                                            <div key={index}>
                                                <p>{index}</p>
                                                {item.flags.map((each: any, order: any) =>
                                                    <div key={order} className='flex justify-between'>
                                                        <p className='mb-0'>{each.position}</p>
                                                        <p className='mb-0'>{each.chipAmount}</p>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        <div className="mt-8 flex items-center justify-end">
                                            <button type="button" className="btn btn-outline-danger" onClick={() => setIsAllMark(!isAllMark)}>
                                                Close
                                            </button>
                                            <button type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4" onClick={() => setIsAllMark(!isAllMark)}>
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

export default AllBookMark;
