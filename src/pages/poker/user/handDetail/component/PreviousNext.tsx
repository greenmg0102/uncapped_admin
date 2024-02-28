import clsx from 'clsx'

const PreviousNext = ({ nextPrevious, status }: any) => {

    return (
        <div className='w-1/4 flex justify-end items-center pr-2'>
            <div
                className={
                    clsx(
                        'w-1/2 flex justify-center items-center rounded-tl-full rounded-bl-full border-[2px] border-green-800 p-2 border-r-0 transition-all hover:border-green-500 hover:border-r-[2px] hover:text-green-500 cursor-pointer'
                    )
                }
                style={{ cursor: status === 0 ? "not-allowed" : "pointer" }}
                // onClick={() => setStatus(
                //     status === 0 ? 0 : status === 3 ? status - 3 : status - 1
                // )}
                onClick={() => nextPrevious(-1)}
            >
                <p className='text-[16px] font-bold'>
                    Previous
                </p>
            </div>
            <div
                className={
                    clsx(
                        'w-1/2 flex justify-center items-center rounded-tr-full rounded-br-full border-[2px] border-green-800 p-2 transition-all hover:border-green-500 hover:border-r-[2px] hover:text-green-500 cursor-pointer'
                    )
                }
                style={{ cursor: status === 5 ? "not-allowed" : "pointer" }}
                // onClick={() => setStatus(
                //     status === 5 ? 5 : status === 0 ? status + 3 : status + 1
                // )}
                onClick={() => nextPrevious(1)}
            >
                <p className='text-[16px] font-bold'>
                    Next
                </p>
            </div>
        </div>
    );
};

export default PreviousNext;
