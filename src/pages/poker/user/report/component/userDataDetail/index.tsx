import { Fragment } from 'react';
import ReplayGame from '../replayGame'
import { Dialog, Transition } from '@headlessui/react';
import UserDetailList from '../userDetailList'

export default function UserDataDetail({
    userResultModal,
    setUserResultModal,
    userResultList,
    page,
    pageSize,
    activeUserData,
    setActiveUserData,
    setPageSize,
    setPage,
    PAGE_SIZES,
    interestingPair
}: any) {

    return (
        <Transition appear show={userResultModal} as={Fragment}>
            <Dialog as="div" open={userResultModal} onClose={() => setUserResultModal(!userResultModal)} className="relative z-50" >
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
                            <Dialog.Panel as="div" className="panel my-8 w-full sm:max-w-[1900px] overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                                <div className="p-4 relative">
                                    <h1 className='text-center text-[24px] text-gray-300 mb-[12px] border-b border-primary border-dashed pb-[12px] font-bold' >
                                        Specific Progress
                                    </h1>
                                    <div className='flex justify-between items-start flex-wrap'>
                                        <div className='w-full xl:w-[70%] p-1'>
                                            <ReplayGame
                                                gameData={userResultList.result.find((item: any) => item._id === activeUserData)}
                                            />
                                        </div>
                                        <div className='w-full xl:w-[30%] h-[700px] bg-gray-900 p-2 rounded-[8px] mt-8 xl:mt-0'>
                                            <UserDetailList
                                                page={page}
                                                pageSize={pageSize}
                                                PAGE_SIZES={PAGE_SIZES}
                                                userResultList={userResultList}
                                                interestingPair={interestingPair}
                                                activeUserData={activeUserData}
                                                setActiveUserData={(activeId: any) => setActiveUserData(activeId)}
                                                setPage={(e: any) => setPage(e)}
                                                setUserResultModal={(bool: boolean) => setUserResultModal(bool)}
                                                setPageSize={(e: any) => setPageSize(e)}
                                                onPageChange={(p: any) => setPage(p)}
                                            />
                                        </div>
                                    </div>
                                    <div className='absolute top-[12px] right-[12px]'>
                                        <svg viewBox="64 64 896 896" focusable="false" data-icon="fullscreen-exit" width="1.5em" height="1.5em" fill="currentColor" aria-hidden="true" className='hover:text-gray-200 text-primary cursor-pointer' onClick={() => setUserResultModal(false)}>
                                            <path d="M391 240.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L280 333.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L401 410c5.1.6 9.5-3.7 8.9-8.9L391 240.9zm10.1 373.2L240.8 633c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824a8.03 8.03 0 000 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7A8.01 8.01 0 00391 783l18.9-160.1c.6-5.1-3.7-9.4-8.8-8.8zm221.8-204.2L783.2 391c6.6-.8 9.4-8.9 4.7-13.6L744 333.6 877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3a8.03 8.03 0 00-11.3 0L690.3 279.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L614.1 401c-.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L623 614c-5.1-.6-9.5 3.7-8.9 8.9L633 783.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}