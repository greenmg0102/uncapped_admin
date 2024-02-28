import { useEffect, useState } from 'react';
import clsx from 'clsx'
import { NavLink } from 'react-router-dom';
import RejectedFileLogModal from './RejectedFileLogModal'

const UploadProcess = ({ staticData, validationError, setTotalCount }: any) => {

    const [modalStatus, setModalStatus] = useState(false)

    return (
        <div>
            <div className='flex justify-center'>
                {staticData.totalCount - staticData.rejectedCount === staticData.completedAmonut ?
                    <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-24 h-24"
                    >
                        <path opacity="0.5" d="M4 12.9L7.14286 16.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M20.0002 7.5625L11.4286 16.5625L11.0002 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        </path>
                    </svg>
                    :
                    <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="reload"
                        width="3em"
                        height="3em"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-24 h-24 mb-[24px] animate-spin"
                    >
                        <path d="M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z">
                        </path>
                    </svg>
                }
            </div>
            {staticData.totalCount - staticData.rejectedCount === staticData.completedAmonut ?
                <div>
                    <p className='text-center border-b border-primary border-dashed dark:text-white text-gray-800 text-[26px] pb-4 font-bold transition-all'>
                        The files is uploaded
                    </p>
                    <div className='flex justify-start items-center'>
                        <p className='text-center dark:text-white text-gray-800 pt-4 transition-all text-[18px] leading-10'>
                            <strong className='text-primary font-bold'>Uploading </strong> of all files you selected was ended.<br />
                            Please check the  <strong className="font-bold text-primary"> files that have been rejected for uploading </strong>
                        </p>
                        <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="question-circle"
                            width="100%"
                            height="100%"
                            fill="currentColor"
                            aria-hidden="true"
                            className='w-[1.5em] h-[1.5em] transition-all hover:w-[3em] hover:h-[3em] ml-2 cursor-pointer'
                            onClick={() => setModalStatus(true)}
                        >
                            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                            <path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"></path>
                        </svg>
                    </div>
                </div>
                :
                <div>
                    <p className='text-center border-b border-primary border-dashed dark:text-white text-gray-800 text-[26px] pb-4 font-bold transition-all'>
                        Uploading Files…
                    </p>
                    <p className='text-center dark:text-white text-gray-800 pt-4 transition-all text-[18px]'>
                        <strong>Uploading</strong> of all files you selected is in
                        progress.<br />
                    </p>
                </div>
            }
            <NavLink to="/user/poker/process" className="main-logo flex items-center shrink-0">
                <button
                    type="button"
                    className={clsx(staticData.totalCount - staticData.rejectedCount === staticData.completedAmonut ? 'btn btn-outline-success w-full mt-[24px]' : 'hidden')}
                >
                    Go to Hand List Page
                </button>
            </NavLink>
            <NavLink to="/user/poker/upload" className="main-logo flex items-center shrink-0">
                <button
                    type="button"
                    className={clsx(staticData.totalCount - staticData.rejectedCount === staticData.completedAmonut ? 'btn btn-outline-primary w-full mt-[12px]' : 'hidden')}
                    onClick={() => setTotalCount(0)}
                >
                    Re-Upload the Hands
                </button>
            </NavLink>
            <RejectedFileLogModal
                modalStatus={modalStatus}
                setModalStatus={(bool: any) => setModalStatus(bool)}
                validationError={validationError}
            />
        </div>
    );
};

export default UploadProcess;
