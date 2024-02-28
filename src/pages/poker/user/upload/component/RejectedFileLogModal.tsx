import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const RejectedFileLogModal = ({ modalStatus, setModalStatus, validationError }: any) => {

    return (
        <div>
            <Transition appear show={modalStatus} as={Fragment}>
                <Dialog as="div" open={modalStatus} onClose={() => setModalStatus(!modalStatus)} className="relative z-50 w-[900px]" >
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
                                        {validationError.length > 0 ?
                                            <div className='py-8 px-4'>
                                                <h1 className='text-center mb-4 text-gray-100 font-bold text-[24px]'>Validataion Error List</h1>
                                                <div className='flex justify-between items-center mb-[20px]'>
                                                    <p className='mb-0 w-1/6 text-center text-gray-400 font-bold'>Error Type</p>
                                                    <p className='mb-0 w-4/6 text-center text-gray-400 font-bold'>Detected File</p>
                                                    <p className='mb-0 w-1/6 text-center text-gray-400 font-bold'>Action</p>
                                                </div>
                                                {validationError.map((item: any, index: any) =>
                                                    <div
                                                        key={index}
                                                        className='flex justify-between items-center mb-[12px] transition-all hover:text-gray-100 cursor-pointer text-gray-400'
                                                    >
                                                        <p className='mb-0 w-1/6 text-center'>{item.cause}</p>
                                                        <p className='mb-0 w-4/6 text-center'>{item.name}</p>
                                                        <p className='mb-0 w-1/6 flex justify-center'>
                                                            <svg
                                                                viewBox="64 64 896 896"
                                                                focusable="false"
                                                                data-icon="upload"
                                                                width="1.5em"
                                                                height="1.5em"
                                                                fill="currentColor"
                                                                aria-hidden="true"
                                                                className='cursor-pointer'
                                                            >
                                                                <path d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path></svg>
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                            :
                                            <div className='py-8 px-4'>
                                                <h1 className='text-center mb-4 text-gray-100 font-bold text-[24px]'>All hand data was successfully uploaded! </h1>
                                                <div className='flex justify-center'>
                                                    <svg
                                                        viewBox="64 64 896 896"
                                                        focusable="false"
                                                        data-icon="smile"
                                                        width="7em"
                                                        height="7em"
                                                        fill="currentColor"
                                                        className='text-green-500'
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M288 421a48 48 0 1096 0 48 48 0 10-96 0zm352 0a48 48 0 1096 0 48 48 0 10-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 01248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 01249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 01775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 01775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 00-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 00-8-8.4z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        }

                                        <div className="flex items-center justify-end">
                                            <button type="button" className="btn btn-outline-danger" onClick={() => setModalStatus(!modalStatus)}>
                                                Close
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

export default RejectedFileLogModal;
