import styles from './PokerTableAnaylsis.module.css'
import PokerAnalyzePlayer from '../pokerPlayer/PokerAnalyzePlayer';
import ChipAmount from '../chipAmount/ChipAmount'
import { hero8Site, hero9Site } from '../../../utils/reference/playCardColor'
import { positionSet } from '../../../utils/reference/playCardColor'
import clsx from 'clsx';

const PokerTableAnalysis = ({ maxSeat, nodeList, activePlayer, currentOption, activeNodeNumber, bettingList }: any) => {

    // console.log("nodeList", nodeList);
    // console.log("activePlayer", activePlayer);
    // console.log("currentOption", currentOption);
    // console.log("activeNodeNumber", activeNodeNumber);
    // console.log("bettingList", bettingList);

    let playSeatInfo = positionSet[maxSeat]

    const retrunBB = (index: any) => {

        let totalAmount = 0
        if (index === 6) totalAmount = 5000
        if (index === 7) totalAmount = 10000

        for (let i = 0; i <= activeNodeNumber; i++) {
            if (nodeList[i].player === index) totalAmount += Number(eachAmount(i))
        }

        return totalAmount > 398750 ? 40 : totalAmount === undefined ? 0 : (totalAmount / 10000).toFixed(1)
        // return totalAmount === 398750  ? 40 : totalAmount === undefined ? 0 : (totalAmount / 10000).toFixed(1)
    }

    const eachAmount = (index: any) => {
        let pureAmount = nodeList[index + 1] &&
            nodeList[index + 1].sequence[nodeList[index + 1].sequence.length - 1] &&
            nodeList[index + 1].sequence[nodeList[index + 1].sequence.length - 1].amount

        return pureAmount === undefined ? 0 : pureAmount
    }

    return (
        <div className={styles.playcard_table}>
            {Object.keys(playSeatInfo).map((item: any, index: any) =>
                <div
                    key={index}
                    className={styles.playcard_table_user}
                    style={{
                        top: (playSeatInfo[item].y - 5) + "%", left: (playSeatInfo[item].x - 5) + "%"
                    }}
                >
                    <PokerAnalyzePlayer
                        critical={index}
                        bettingList={bettingList}
                        currentOption={currentOption}
                        seat={maxSeat > 9 ? hero9Site[index] : hero8Site[index]}
                        activePlayer={maxSeat > 9 ? hero9Site[activePlayer] : hero8Site[activePlayer]}
                        status={nodeList[index + 1] && nodeList[index + 1].sequence[nodeList[index + 1].sequence.length - 1]}
                    />

                    <ChipAmount
                        item={item}
                        order={index}
                        playSeatInfo={playSeatInfo}
                        nodeData={nodeList[index + 1]}
                        retrunBB={(index: any) => retrunBB(index)}
                        status={nodeList[index + 1] && nodeList[index + 1].sequence[nodeList[index + 1].sequence.length - 1]}
                    />

                    <div
                        className={clsx(
                            'absolute flex justify-center bg-gray-100 hover:bg-red-500 rounded-full font-bold w-[20px] h-[20px] text-black hover:text-white cursor-pointer transition-all',
                            playSeatInfo[item].dealer ? '' : 'hidden'
                        )}
                        style={{
                            top: (playSeatInfo[item].dealerPosition.x) + "%", left: (playSeatInfo[item].dealerPosition.y) + "%"
                        }}
                    >
                        D
                    </div>
                </div>
            )}
            {/* <div className={clsx(styles.poker_tracker, "")}>
                <p className={clsx(styles.poker_tracker_profix, 'w-full text-center')}>
                    Uncapped
                </p>
                <p className='w-full text-center text-[16px] mt-4'>
                    Poker Solution
                </p>
            </div> */}
            <div className={clsx(styles.logo_transparent, "")}>
                <img className="w-52" src="/assets/images/pokerImage/Transparent_Logo.png" alt="logo" />
            </div>

            {/* <div className={styles.bet_amount}>
                <div className='flex justify-center items-end'>
                    <p className='text-white font-bold mr-1'>12.5 BB</p>
                    <p className='text-gray-400 font-bold text-[12px]'>39 %</p>
                </div>
                <p className='text-center font-bold text-gray-300 text-[12px]'>1.5 BB</p>
            </div> */}
            <div className={styles.playcard_table_place}>
            </div>
        </div >
    );
};

export default PokerTableAnalysis;
