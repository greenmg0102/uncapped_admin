import clsx from 'clsx'


export default function Street({ status, viewStreet }: any) {

    return (
        <div className='w-3/4 pr-0 sm:pr-4 flex justify-between items-center'>


            <div
                className={clsx("w-[40px] h-[40px] p-10 rounded-full border border-[4px] flex justify-center items-center cursor-pointer transition-all hover:border-white hover:text-white",
                    status < 0 ? "border-gray-800" : "border-green-600")}
                onClick={() => viewStreet(0)}
            >
                <p className={clsx("transition-all", status === 0 ? "text-[20px] font-bold text-green-500" : "text-[16px]")}>
                    Preflop
                </p>
            </div>
            <div className={clsx('w-full h-[5px] mx-6 transition-all', status < 3 ? "bg-gray-800" : "bg-green-600")} />
            <div
                className={clsx("w-[40px] h-[40px] p-10 rounded-full border border-[4px] flex justify-center items-center cursor-pointer transition-all hover:border-white hover:text-white",
                    status < 3 ? "border-gray-800" : "border-green-600")}
                onClick={() => viewStreet(3)}
            >
                <p className={clsx("transition-all", status === 3 ? "text-[20px] font-bold text-green-500" : "text-[16px]")}>
                    Flop
                </p>
            </div>

            <div className={clsx('w-full h-[5px] mx-6 transition-all', status < 4 ? "bg-gray-800" : "bg-green-600")} />
            <div
                className={clsx("w-[40px] h-[40px] p-10 rounded-full border border-[4px] flex justify-center items-center cursor-pointer transition-all hover:border-white hover:text-white",
                    status < 4 ? "border-gray-800" : "border-green-600")}
                onClick={() => viewStreet(4)}
            >
                <p className={clsx("transition-all", status === 4 ? "text-[20px] font-bold text-green-500" : "text-[16px]")}>
                    Turn
                </p>
            </div>
            <div className={clsx('w-full h-[5px] mx-6 transition-all', status < 5 ? "bg-gray-800" : "bg-green-600")} />
            <div
                className={clsx("w-[40px] h-[40px] p-10 rounded-full border border-[4px] flex justify-center items-center cursor-pointer transition-all hover:border-white hover:text-white",
                    status < 5 ? "border-gray-800" : "border-green-600")}
                onClick={() => viewStreet(5)}
            >
                <p className={clsx("transition-all", status === 5 ? "text-[20px] font-bold text-green-500" : "text-[16px]")}>
                    River
                </p>
            </div>
        </div>
    )
}