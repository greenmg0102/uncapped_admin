import styles from './ChipPlayCard.module.css'
import { playCardColorSet, playCardSymbolSet } from '../../../utils/reference/playCardColor'

const ChipPlayCard = ({ holeCardInfo }: any) => {

    return (
        <div
            className={styles.playcard_chip_body}
            style={{
                background: `linear-gradient(to bottom, ${playCardColorSet[holeCardInfo.suit] && playCardColorSet[holeCardInfo.suit].from}, ${playCardColorSet[holeCardInfo.suit] && playCardColorSet[holeCardInfo.suit].to})`
            }}
        >
            <h2 className="absolute top-[-2px] left-[2px] text-[12px]">{holeCardInfo.rank}</h2>
            <div className='flex justify-end absolute bottom-[4px] right-0'>
                <div className="w-[12px] h-[12px]">
                    <img
                        src={"/assets/images/playCardSymbol/" + playCardSymbolSet[holeCardInfo.suit]}
                        className='bg-cover'
                        alt="suit"
                        width="12" height="12"
                    />
                </div>
            </div>
        </div>
    );
};

export default ChipPlayCard;
