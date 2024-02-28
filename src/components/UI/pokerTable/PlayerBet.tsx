import { useState, useEffect } from 'react';
import styles from './PokerTable.module.css'
import SmallPlayCard from '../playcard/SmallPlayCard'
import { hero8Site, hero9Site } from '../../../utils/reference/playCardColor'
import clsx from 'clsx'

const PlayerBet = ({ playSeatInfo, item, playCount, handData, players, index, currentStatus, isNext, defaultAnte, calculateBetting }: any) => {

    const type = playCount > 8 ? 'hero9Site' : 'hero8Site'
    const buttonSeat = handData.buttonSeat
    const playInfo = players[index]

    const [info, setInfo] = useState({
        player: '',
        chipAmount: 0,
        anteAmount: 0,
        smallBlind: 0,
        bigBlind: 0,
        dealt: false,
        heroCard: [],
        status: undefined,
        callAmount: undefined,
        raiseFromAmount: undefined,
        raiseToAmount: undefined,
        isAllIn: undefined,
        show: false,
        showCard: []
    })

    useEffect(() => {

        if (currentStatus.type === "chip") {
            if (playInfo.playerName === currentStatus.player) setInfo({ ...info, player: currentStatus.player, chipAmount: currentStatus.amount })
        } else if (currentStatus.type === "ante") {
            let real = 0
            currentStatus.real.forEach((element: any) => {
                real++
                if (playInfo.playerName === element.player) {
                    setInfo({ ...info, anteAmount: element.amount, chipAmount: info.chipAmount - element.amount })
                }
                calculateBetting(element.amount * real)
            });
        } else if (currentStatus.type === "smallBlind") {
            if (playInfo.playerName === currentStatus.player) {
                setInfo({ ...info, player: currentStatus.player, smallBlind: currentStatus.amount, anteAmount: currentStatus.amount, chipAmount: info.chipAmount - currentStatus.amount })
                calculateBetting(currentStatus.amount)
            }
        } else if (currentStatus.type === "bigBlind") {
            if (playInfo.playerName === currentStatus.player) {
                setInfo({ ...info, player: currentStatus.player, bigBlind: currentStatus.amount, anteAmount: currentStatus.amount, chipAmount: info.chipAmount - currentStatus.amount })
                calculateBetting(currentStatus.amount)
            }
        } else if (currentStatus.type === "street") {

            if (currentStatus.status === "HOLE") console.log("now is hole street");
            else if (currentStatus.status === "FLOP") console.log("now is FLOP street");
            else if (currentStatus.status === "TURN") console.log("now is TURN street");
            else if (currentStatus.status === "RIVER") console.log("now is RIVER street");
            else if (currentStatus.status === "SHOWDOWN") console.log("now is SHOWDOWN street")

        } else if (currentStatus.type === "dealt" && currentStatus.player !== "Hero") {
            if (playInfo.playerName === currentStatus.player) setInfo({ ...info, dealt: true })
        } else if (currentStatus.type === "dealt" && currentStatus.player === "Hero") {
            if (playInfo.playerName === currentStatus.player) setInfo({ ...info, dealt: true, heroCard: currentStatus.playCard })
        } else if (currentStatus.type === "actionKind") {
            if (playInfo.playerName === currentStatus.player && currentStatus.status === "folds") {
                setInfo({ ...info, status: currentStatus.status, player: currentStatus.player })
            }
            if (playInfo.playerName === currentStatus.player && currentStatus.status === "calls") {
                calculateBetting(parseInt(currentStatus.amount.replace(",", "")))
                setInfo({ ...info, status: currentStatus.status, callAmount: currentStatus.amount, anteAmount: currentStatus.amount, player: currentStatus.player, chipAmount: info.chipAmount - currentStatus.amount })
            }
            if (playInfo.playerName === currentStatus.player && currentStatus.status === "raises") {
                calculateBetting(parseInt(currentStatus.toNumber.replace(",", "")))
                setInfo({
                    ...info,
                    status: currentStatus.status,
                    raiseFromAmount: currentStatus.raisesNumber,
                    raiseToAmount: currentStatus.toNumber,
                    player: currentStatus.player,
                    anteAmount: currentStatus.toNumber,
                    chipAmount: info.chipAmount - currentStatus.amount
                })
            }
        } else if (currentStatus.type === "showPlaycard") {
            if (playInfo.playerName === currentStatus.player) setInfo({ ...info, dealt: true, show: true, showCard: currentStatus.playCard })
        }
    }, [currentStatus])

    return (
        <div
            className={styles.playcard_table_user}
            style={{
                top: (playSeatInfo[item].y - 5) + "%", left: (playSeatInfo[item].x - 5) + "%"
            }}
        >
            <div className="relative z-[1]">
                <div className={clsx("w-[110px] h-[60px] border border-[3px] bg-gray-300 py-1 pl-2 pr-6 rounded-[12px]", playInfo.playerName === "Hero" ? "border-red-600" : "border-gray-600")}>
                    <div className={clsx(info.chipAmount !== 0 ? 'flex justify-center items-center' : 'opacity-0')}>
                        {/* <img
                            src={"/assets/images/playCardSymbol/PokerChips.png"}
                            className={clsx("transition-all", info.anteAmount ? 'bg-cover' : 'hidden')}
                            alt="suit"
                            width="25" height="25"
                        /> */}
                        <p className='mb-0 text-gray-900 font-bold text-[16px]'>{info.chipAmount}</p>
                    </div>
                    <p className='text-center text-gray-900 font-bold text-[16px]'>{playInfo.playerName}</p>
                </div>
                <div
                    className={
                        clsx(
                            'absolute right-[-60px] top-[-15px] w-[80px] h-[80px] rounded-full border border-[3px] hover:border-white cursor-pointer flex justify-center items-center font-bold text-gray-900 transition-all',
                            currentStatus.player === playInfo.playerName ? "bg-green-300 border-green-500 text-[20px]" : "bg-gray-400 border-gray-600 text-[16px]"
                        )
                    }
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
            </div>
            <div
                className={clsx(
                    info.anteAmount <= defaultAnte ? "hidden" : "",
                    'absolute flex justify-center items-center flex-col font-bold text-gray-100 transition-all',
                    playSeatInfo[item].cheapPosition && playSeatInfo[item].cheapPosition.x ? '' : 'hidden'
                )}
                style={{
                    bottom: "-90%", left: "50%"
                }}
            >
                <img
                    src={"/assets/images/playCardSymbol/PokerChips.png"}
                    className={clsx("transition-all", info.anteAmount ? 'bg-cover' : 'hidden')}
                    alt="suit"
                    width="25" height="25"
                />
                <p className='transition-all text-center text-[14px]'>{info.anteAmount}</p>
            </div>
            <div
                className={
                    clsx(
                        'absolute top-1/2 text-[20px] text-green-100 w-[200px] left-[100%] transform -translate-x-1/2 -translate-y-1/2 font-bold',
                        styles.letter_animation, info.smallBlind === 0 ? styles.letter_animation_pre : styles.letter_animation_run
                    )
                }
            >
                Small Blind
            </div>
            <div
                className={
                    clsx(
                        'absolute top-1/2 text-[20px] text-green-500 w-[200px] left-[100%] transform -translate-x-1/2 -translate-y-1/2 font-bold',
                        styles.letter_animation, info.bigBlind === 0 ? styles.letter_animation_pre : styles.letter_animation_run
                    )
                }
            >
                Big Blind
            </div>
            <div
                className={
                    clsx(
                        'absolute top-1/2 text-[30px] text-red-300 w-[200px] left-[100%] transform -translate-x-1/2 -translate-y-1/2 font-bold',
                        styles.letter_animation, info.status !== 'calls' ? styles.letter_animation_pre : styles.letter_animation_run
                    )
                }
            >
                Call
            </div>
            <div
                className={
                    clsx(
                        'absolute top-1/2 text-[30px] text-red-700 w-[200px] left-[100%] transform -translate-x-1/2 -translate-y-1/2 font-bold',
                        styles.letter_animation, info.status !== 'raises' ? styles.letter_animation_pre : styles.letter_animation_run
                    )
                }
            >
                Raise
            </div>
            {info.status !== "folds" ?
                <div>
                    {info.heroCard.length === 0 ?
                        <div className={clsx('absolute top-[-10px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center transition-all', info.dealt ? '' : 'hidden')} >
                            <img className="w-8 ltr:-ml-1 rtl:-mr-1 inline cursor-pointer hover:w-14 transition-all" src="/assets/images/poker-mark/backPlaycard.png" alt="logo" />
                            <img className="w-8 ltr:-ml-1 rtl:-mr-1 inline cursor-pointer hover:w-14 transition-all" src="/assets/images/poker-mark/backPlaycard.png" alt="logo" />
                        </div>
                        :
                        <div className={clsx('absolute top-[-15px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center transition-all', info.dealt ? '' : 'hidden')} >
                            {info.heroCard.map((item: any, index: any) =>
                                <SmallPlayCard
                                    key={index}
                                    holeCardInfo={{ rank: item.slice(0, 1), suit: item.slice(1, 2) }}
                                />
                            )}
                        </div>
                    }
                </div>
                :
                <div
                    className={
                        clsx(
                            'absolute transition-all text-[24px] font-bold text-white top-[0px]',
                            styles.letter_animation, info.status !== 'folds' ? styles.letter_animation_pre : styles.letter_animation_run_fold
                        )
                    }>
                    Fold
                </div>
            }
        </div>
    );
};

export default PlayerBet;
