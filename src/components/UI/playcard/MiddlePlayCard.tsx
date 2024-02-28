import styles from './MiddlePlayCard.module.css'
import { playCardColorSet, playCardSymbolSet } from '../../../utils/reference/playCardColor'

const MiddlePlayCard = ({ holeCardInfo }: any) => {

    return (
        <div>
            <div
                className={styles.playcard_middle_body}
                style={{
                    background: `linear-gradient(to bottom, ${playCardColorSet[holeCardInfo.suit] && playCardColorSet[holeCardInfo.suit].from}, ${playCardColorSet[holeCardInfo.suit] && playCardColorSet[holeCardInfo.suit].to})`
                }}
            >
                <h2 className={styles.playcard_middle_number}>{holeCardInfo.rank}</h2>
                <div className='flex justify-center'>
                    <div className="w-[32px] h-[32px]">
                        <img
                            src={"/assets/images/playCardSymbol/" + playCardSymbolSet[holeCardInfo.suit]}
                            className='bg-cover'
                            alt="suit"
                            width="32" height="32"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddlePlayCard;
