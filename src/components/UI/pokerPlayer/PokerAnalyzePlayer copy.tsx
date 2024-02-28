import clsx from 'clsx'

const PokerAnalyzePlayer = ({ cheap, seat, activePlayer, critical, status }: any) => {

    return (
        <div
            className={clsx(
                "w-[70px] h-[70px] flex justify-center items-center flex-col rounded-full border border-[2px] hover:border-white cursor-pointer transition-all",
                activePlayer === critical ?
                    "border-red-400"
                    :
                    status && status.type === "F" ?
                        "border-gray-900 text-gray-900"
                        :
                        "border-gray-900 text-white"
            )}
        >
            <p className='font-bold text-[14px]'>{seat}</p>
            <p className='font-bold text-[14px]'>{cheap}</p>
        </div >
    )
}

export default PokerAnalyzePlayer