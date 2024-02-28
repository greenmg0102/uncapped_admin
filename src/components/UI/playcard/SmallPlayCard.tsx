import styles from './SmallPlayCard.module.css'
import { playCardColorSet, playCardSymbolSet } from '../../../utils/reference/playCardColor'

const SmallPlayCard = ({ holeCardInfo }: any) => {

    return (
        <div>
            <div
                className={styles.playcard_small_body}
                style={{
                    background: `linear-gradient(to bottom, ${playCardColorSet[holeCardInfo.suit] && playCardColorSet[holeCardInfo.suit].from}, ${playCardColorSet[holeCardInfo.suit] && playCardColorSet[holeCardInfo.suit].to})`
                }}
            >
                <h2 className={styles.playcard_small_number}>{holeCardInfo.rank}</h2>
                <div className='flex justify-center'>
                    <div className="w-[16px] h-[16px]">
                        <img
                            src={"/assets/images/playCardSymbol/" + playCardSymbolSet[holeCardInfo.suit]}
                            className='bg-cover'
                            alt="suit"
                            width="16" height="16"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallPlayCard;
