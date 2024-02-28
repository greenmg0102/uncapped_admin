import styles from './PokerTableAnaylsis.module.css'
import PokerAnalyzePlayer from '../pokerPlayer/PokerAnalyzePlayer';
import { hero8Site, hero9Site } from '../../../utils/reference/playCardColor'
import { positionSet, cheapTest } from '../../../utils/reference/playCardColor'
import clsx from 'clsx';

const PokerTableAnalysis = ({ maxSeat, nodeList, activePlayer }: any) => {

    let playSeatInfo = positionSet[maxSeat]

    const retrunBB = (index: any) => {

        let pureAmount = nodeList[index + 1] &&
            nodeList[index + 1].sequence[nodeList[index + 1].sequence.length - 1] &&
            nodeList[index + 1].sequence[nodeList[index + 1].sequence.length - 1].amount

        return pureAmount === 398750 ? 40 : pureAmount === undefined ? undefined : (pureAmount / 10000).toFixed(1)
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
                        seat={maxSeat > 8 ? hero9Site[nodeList[index] && nodeList[index].player] : hero8Site[nodeList[index] && nodeList[index].player]}
                        status={nodeList[index + 1] && nodeList[index + 1].sequence[nodeList[index + 1].sequence.length - 1]}
                        activePlayer={activePlayer}
                        cheap={cheapTest[index]}
                        critical={index}
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
                    <div
                        className={clsx(
                            'absolute flex justify-center items-center font-bold text-gray-100',
                            nodeList[index] &&
                                nodeList[index].sequence[nodeList[index].sequence.length - 1] &&
                                nodeList[index].sequence[nodeList[index].sequence.length - 1].type === "F" ? 'hidden' : '',
                            retrunBB(index) === undefined || retrunBB(index) === "0.0" ? "hidden" : "",
                            // playSeatInfo[item].cheapPosition &&
                            //     playSeatInfo[item].cheapPosition.x ?
                            //     ''
                            //     :
                            //     'hidden',
                        )}
                        style={{
                            top: (playSeatInfo[item].cheapPosition && playSeatInfo[item].cheapPosition.x) + "%", left: (playSeatInfo[item].cheapPosition && playSeatInfo[item].cheapPosition.y) + "%"
                        }}
                    >
                        <div
                            className={clsx(
                                'w-[8px] h-[8px] rounded-full bg-blue-500 mr-[3px]',

                            )}
                        />
                        <p className='text-center text-[12px]'>
                            {retrunBB(index)}
                        </p>
                    </div>
                </div>
            )}
            <div className={styles.poker_tracker}>
                <span className={styles.poker_tracker_profix}>
                    Fish
                </span>
                <span>
                    Evolver
                </span>
            </div>
            <div className={styles.bet_amount}>
                {/* <div className='flex justify-center items-end'>
                    <p className='text-white font-bold mr-1'>12.5 BB</p>
                    <p className='text-gray-400 font-bold text-[12px]'>39 %</p>
                </div>
                <p className='text-center font-bold text-gray-300 text-[12px]'>1.5 BB</p> */}
            </div>
            <div className={styles.playcard_table_place}>
            </div>
        </div >
    );
};

export default PokerTableAnalysis;
