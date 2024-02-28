import clsx from 'clsx'

const Range24SummaryBar = ({ handResult }: any) => {

    return (
        <div className="relative h-[6px] w-full">
            <div
                className='absolute h-[6px] bg-[#3d7cb8]'
                style={{
                    width: (handResult.played[0]) * 100 + "%",
                }}
            >
            </div>
            <div
                className="absolute h-[6px] bg-[#00cf00]"
                style={{
                    width: (handResult.played[1]) * 100 + "%",
                    left: (handResult.played[0]) * 100 + "%",
                }}
            />
            <div
                className="absolute h-[6px] bg-[#ff0000]"
                style={{
                    width: (handResult.played[2] === undefined ? 0 : handResult.played[2]) * 100 + "%",
                    left: ((handResult.played[0]) + (handResult.played[1])) * 100 + "%",
                }}
            />
            <div
                className="absolute h-[6px] bg-[#7d1f1f]"
                style={{
                    width: (handResult.played[3] === undefined ? 0 : handResult.played[3]) * 100 + "%",
                    left: ((handResult.played[0]) + (handResult.played[1]) + (handResult.played[2] === undefined ? 0 : handResult.played[2])) * 100 + "%",
                }}
            />
        </div>
    );
};

export default Range24SummaryBar;
