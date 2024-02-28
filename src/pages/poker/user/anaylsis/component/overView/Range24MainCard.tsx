import clsx from 'clsx'

const Range24MainCard = ({ handResult, once, rangeOption }: any) => {

    return (
        <div className={clsx(once || rangeOption ? "absolute w-full bottom-[0px] left-0 p-0" : "hidden")}>
            <div
                className="relative w-full"
                style={{
                    height: `calc(${3}em)`
                }}
            >
                <div
                    className='absolute bg-[#3d7cb8] h-full'
                    style={{
                        width: (handResult.played[0]) * 100 + "%",
                    }}
                >
                </div>
                <div
                    className="absolute bg-[#00cf00] h-full"
                    style={{
                        width: (handResult.played[1]) * 100 + "%",
                        left: (handResult.played[0]) * 100 + "%",
                    }}
                />
                <div
                    className="absolute bg-[#ff0000] h-full"
                    style={{
                        width: (handResult.played[2] === undefined ? 0 : handResult.played[2]) * 100 + "%",
                        left: ((handResult.played[0]) + (handResult.played[1])) * 100 + "%",
                    }}
                />
                <div
                    className="absolute bg-[#7d1f1f] h-full"
                    style={{
                        width: (handResult.played[3] === undefined ? 0 : handResult.played[3]) * 100 + "%",
                        left: ((handResult.played[0]) + (handResult.played[1]) + (handResult.played[2] === undefined ? 0 : handResult.played[2])) * 100 + "%",
                    }}
                />
            </div>
        </div>
    );
};

export default Range24MainCard;
