import clsx from 'clsx'

const StageOption = ({ item }: any) => {

    return (
        <div className="mr-1 rounded-[6px] w-[55px] hover:w-[65px] py-1 transition-all cursor-pointer border border-[#ff000]">
            <p className={clsx("text-center text-white")}>{item.seat}</p>
            <p className={clsx("text-center text-white")}>{item.score}</p>
        </div>
    );
};

export default StageOption;
