import clsx from 'clsx'

const StreetItem = ({ item, userResult, userTab, setUserTab }: any) => {

    return (
        <div
            className={clsx(
                "mr-1 mt-1 rounded-[4px] py-[2px] px-2 font-bold cursor-pointer hover:opacity-50 transition-all flex justify-center items-center",
                userTab === item.id ? "h-[26px] opacity-100 border border-yellow-100" : "h-[20px] opacity-30"
            )}
            style={{ backgroundColor: item.color }}
            onClick={() => setUserTab(item.id)}
        >
            <p className="text-center font-bold text-[16px] text-white text-gray-900" style={{ textShadow: "1px 1px #000000" }}>{item.stage}</p>
        </div>
    );
};

export default StreetItem;