import clsx from 'clsx'

const GradientReportItem = ({ data, handResult }: any) => {

    return (
        <div className={clsx("relative rounded-[2px] h-[2.2em] cursor-pointer transition-all bg-gray-900")}>
            <div className="flex justify-center items-center rounded-[2px] bg-gray-900 dark:hover:bg-gray-800 hover:bg-gray-900 cursor-pointer transition-all">
                <p className="absolute text-[1em] text-green-600 z-[1] left-0 top-0">
                    {data}
                </p>
            </div>
            <div
                className='absolute top-0 left-0 h-[2.2em] btn-warning rounded-tl-[2px] rounded-bl-[2px]'
                style={{
                    width: `${100 - handResult.played[0] * 100}%`
                }}
            >
            </div>
            <p className={clsx(1 - handResult.played[0] > 0 ? "absolute bottom-[-2px] right-[0px] text-gray-100 text-[12px]" : "hidden")}>{(1 - handResult.played[0]).toFixed(2)}</p>
        </div>
    );
};

export default GradientReportItem;