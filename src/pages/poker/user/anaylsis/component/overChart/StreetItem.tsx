import clsx from 'clsx'

const StreetItem = ({ item, userResult }: any) => {

    return (
        <div className='w-1/4 px-1'>
            <div
                className={clsx(
                    "transition-all",
                    "relative rounded-[4px] h-[80px] hover:opacity-80 cursor-pointer"
                )}
                style={{ width: "100%", backgroundColor: item.color }}
            >
                <div className="absolute top-[12px] left-[12px] flex justify-start items-center">
                    <p className="font-bold text-[20px] text-white  text-gray-900" style={{ textShadow: "1px 1px #000000" }}>{item.stage}</p>
                    <p className="font-bold text-[20px] text-white text-gray-900" style={{ textShadow: "1px 1px #000000" }}>{item.amount}</p>
                </div>
                <div className="absolute bottom-[8px] left-[8px]">
                    <p className="font-bold text-[20px] text-gray-900">{userResult[item.stage]}%</p>
                </div>
            </div>
        </div>
    );
};

export default StreetItem;
