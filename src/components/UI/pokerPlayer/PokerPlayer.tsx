import clsx from 'clsx'
import { hero8Site, hero9Site } from '../../../utils/reference/playCardColor'

const PokerPlayer = ({ type, buttonSeat, playInfo, info }: any) => {

    return (
        <div className="relative">

            <div className={clsx("border border-[3px] bg-gray-300 py-1 pl-2 pr-6 rounded-[12px]", playInfo.playerName === "Hero" ? "border-red-600 " : "border-gray-600 ")}>
                <p
                    className={
                        clsx(
                            '',
                            info.chipAmount ? "text-center text-gray-900 font-bold text-[12px] mb-0" : "opacity-0"
                        )
                    }
                >
                    {info.player === playInfo.playerName ? info.chipAmount : ''}
                </p>
                <p className='text-center text-gray-900 font-bold text-[12px]'>{playInfo.playerName}</p>
            </div>
            <div
                className={clsx('absolute right-[-60px] top-[-15px] w-[80px] h-[80px] rounded-full border border-[3px] flex justify-center items-center font-bold text-gray-900 transition-all',
                    3 === playInfo.seatNumber ? "bg-green-300 border-green-500 text-[20px]" : "bg-gray-400 border-gray-600 text-[16px]"
                )}
            >
                <div>
                    <p className='text-center'>
                        {type === "hero9Site" ? hero9Site[playInfo.seatNumber] : hero8Site[playInfo.seatNumber]}
                    </p>
                    <div className={clsx(buttonSeat === playInfo.seatNumber ? "flex justify-center items-center" : "hidden")}>
                        <img
                            src="https://static.thenounproject.com/png/485972-200.png"
                            className="r48jcc pT0Scc iPVvYb"
                            style={{ maxWidth: 20, height: 20, margin: 0, visibility: "visible", width: 20 }}
                            alt="Vector Icon. Dealer Button With Card Suits For Playing Poker ..."
                            data-xblocker="passed"
                        />
                    </div>
                </div>
            </div>

        </div >
    );
};

export default PokerPlayer;
