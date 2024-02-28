import clsx from 'clsx'

const SequenceItem = ({ item, pokerKind, stageStatus, active, order, whichStage, actions }: any) => {

    const typePair: any = {
        "F": "Fold",
        "C": "Call",
        "R": "Raise"
    }

    const makingOption = (option: any, index: any) => {
        return <div
            key={index}
            className={clsx(stageStatus === true ? 'hidden' : 'flex justify-between items-center hover:font-bold mb-1')}
        >
            <p className={clsx("dark:text-gray-400 mr-1")}>
                {typePair[option.type]}
            </p>
            <p className={clsx("dark:text-gray-400 mr-1")}>{option.amount === 398750 ? 40 : option.amount === 0 ? undefined : (option.amount / 10000).toFixed(1)}</p>
        </div>
    }

    return (
        <div
            className={clsx(
                stageStatus === true ?
                    ' w-[10em] h-[2.5em] p-1'
                    :
                    ' w-[10em] h-[10em] py-2 px-3', "relative rounded-[4px] dark:bg-gray-900 bg-gray-700 dark:border-gray-900 border-gray-700 dark:border-gray-900 border-[3px] hover:dark:border-red-500 hover:border-green-500 mr-1 cursor-pointer transition-all"
            )}
            onMouseEnter={() => active(order)}
            onMouseLeave={() => active(-1)}
        >
            <div className="flex justify-between items-end mb-1">
                <p className={clsx(whichStage === order ? 'text-green-500 dark:text-red-500 text-[20px] font-bold' : 'text-white text-[16px]', "text-gray-100 transition-all")}>{pokerKind}</p>
                <p className={clsx(whichStage === order ? 'text-green-500 dark:text-red-500' : 'text-white', "font-bold text-[16px] transition-all")}>40</p>
                <p className={clsx(stageStatus === true ? 'text-white text-[20px] font-bold' : 'hidden')}>{item.type}</p>
            </div>

            {actions.map((item: any, index: any) => makingOption(item, index))}

        </div>
    );
};

export default SequenceItem;
