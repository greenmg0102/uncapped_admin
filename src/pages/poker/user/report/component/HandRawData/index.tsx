import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { hero8Site, hero9Site } from '../../../../../../utils/reference/playCardColor'

export default function HandRawData({ handRawData, activeNodeData, setHandRawData, setActiveUserData, setUserResultModal }: any) {

    const MySwal = withReactContent(Swal);

    const [handData, setHandData] = useState([])
    const [isBB, setIsBB] = useState(false)

    useEffect(() => {

        if (Object.keys(activeNodeData).length > 0) {
            let real = activeNodeData.rawData.split("\n");
            setHandData(real)
        }

    }, [activeNodeData])


    const copyToClipboard = () => {
        navigator.clipboard.writeText(activeNodeData.rawData)
            .then(() => {
                MySwal.fire({
                    title: 'The Hand was copied.',
                    toast: true,
                    position: 'top',
                    showConfirmButton: false,
                    timer: 3000,
                    showCloseButton: true,
                    customClass: {
                        popup: 'color-success',
                    },
                });
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    }

    const changeAsBB = (bool: any) => {

    }

    return (
        <Transition appear show={handRawData} as={Fragment}>
            <Dialog as="div" open={handRawData} onClose={() => setHandRawData(false)}>
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
                <div className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4">

                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel as="div" className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark">
                                <div className='bg-[#fbfbfb] dark:bg-[#121c2c] px-5 py-3'>
                                    <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-start justify-between pb-2">
                                        <h4 className="font-bold text-xl">Hand Data</h4>
                                        <div className='w-[30px] h-[30px] flex justify-center items-center transition-all'>
                                            <svg
                                                width="100%"
                                                height="100%"
                                                viewBox="0 0 1024 1024"
                                                className="w-[20px] hover:cursor-pointer hover:w-[40px] transition-all"
                                                onClick={() => {
                                                    setActiveUserData(activeNodeData._id)
                                                    setUserResultModal(true)
                                                    setHandRawData(false)
                                                }}
                                            >
                                                <path d="M391.166 156.304H501.7c228.857 0 422.263 184.597 422.263 403.115C923.963 780.312 742.427 960 519.315 960c-235.128 0-419.278-193.554-419.278-440.625 0-10.564 8.584-19.11 19.109-19.11h113.159c10.602 0 19.11 8.546 19.11 19.11 0 218.781 138.391 296.747 267.9 296.747 134.92 0 253.27-123.2 253.27-263.605 0-131.897-124.059-243.34-270.885-243.34l-106.555-3.227-3.979-149.646z" fill="#FF3B30" /><path d="M407.884 309.176v77.275c0 6.941-3.73 13.267-9.777 16.664-6.011 3.398-13.398 3.209-19.295-0.375L128.305 249.013c-5.71-3.508-9.147-9.669-9.147-16.383 0.078-6.681 3.585-12.876 9.333-16.312L378.998 66.729c5.894-3.542 13.285-3.657 19.221-0.221 6.008 3.358 9.665 9.702 9.665 16.609V309.176z" fill="#FF3B30" />
                                                <path d="M439.717 307.301l40.724-150.999h-72.557v150.035z" fill="#070707" />
                                            </svg>

                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center flex-wrap px-5 mt-2 border border-dashed p-2 rounded-[6px] border-gray-500'>
                                        <div className=''>
                                            <p className='mr-2 text-center text-gray-200 font-bold'>{hero8Site[activeNodeData.reportContent.heroPosition]}</p>
                                            <p className='mr-2 text-center'>Hero Position</p>
                                        </div>
                                        <div className=''>
                                            <p className='mr-2 text-center text-gray-200 font-bold'>{activeNodeData.reportContent.stackDepth}</p>
                                            <p className='mr-2 text-center'>Stack Depth</p>
                                        </div>
                                        <div className=''>
                                            <p className='mr-2 text-center text-gray-200 font-bold'>{activeNodeData.bigBlind}</p>
                                            <p className='mr-2 text-center'>Big Blind</p>
                                        </div>
                                        {/* <div className=''>
                                            <p className='mr-2 text-center text-gray-200 font-bold'>{hero8Site[activeNodeData.buttonSeat]}</p>
                                            <p className='mr-2 text-center'>Button Seat</p>
                                        </div> */}
                                    </div>
                                </div>
                                <div className='flex justify-between items-center px-5 mt-1'>
                                    <p className='text-right mb-0 text-primary'>Played Time: <span className='text-gray-500'>{activeNodeData.handTime}</span></p>
                                    <p className='text-right mb-0'>{activeNodeData.handDate}</p>
                                </div>
                                <div className='flex justify-end items-center px-5 pt-2'>

                                    <Tippy content={isBB ? "Convert to bb" : "Convert to chips"}>
                                        <p
                                            className='mb-0 font-bold cursor-pointer mr-2 hover:text-primary hover:border-primary transition-all cursor-pointer p-[1px] px-[2px] border border-gray-400 rounded-[6px]'
                                            onClick={() => setIsBB(!isBB)}
                                        >
                                            {isBB ? "BB" : "Ch"}
                                        </p>
                                    </Tippy>

                                    <Tippy content="Copy to clipboard">
                                        <svg
                                            viewBox="64 64 896 896"
                                            focusable="false"
                                            data-icon="copy"
                                            width="1.5em"
                                            height="1.5em"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className='cursor-pointer hover:text-primary transition-all cursor-pointer'
                                            onClick={() => copyToClipboard()}
                                        >
                                            <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path>
                                        </svg>
                                    </Tippy>
                                </div>
                                <div className="p-5 pt-2">
                                    <div className='h-[400px] overflow-y-scroll'>
                                        {handData.map((item: any, index: any) =>
                                            <p
                                                key={index}
                                                className='transition-all font-bold border-l border-[#805DCA] text-[16px] px-2 mb-[3px] hover:text-gray-400 cursor-pointer'
                                            >
                                                {item}
                                            </p>
                                        )}
                                    </div>
                                    <div className="flex justify-end items-center mt-8">
                                        <button type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4" onClick={() => setHandRawData(false)}>
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition >
    )
}