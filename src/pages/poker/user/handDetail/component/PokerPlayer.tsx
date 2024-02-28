import styles from './PokerPlayer.module.css'
import { hero8Site, hero9Site } from '../../../../../utils/reference/playCardColor'

const PokerPlayer = ({ type, buttonSeat, playInfo }: any) => {

    return (
        <div className="absolute">

            <div className={styles.play_card_item_body}>
                <h4 className="text-center" style={{ opacity: 0 }}>
                    {type === "hero9Site" ? hero9Site[playInfo.seatNumber] : hero8Site[playInfo.seatNumber]}
                </h4>
                <h4 className="text-center">
                    {playInfo.playerName}
                </h4>
                <div className={true ? styles.active_player : ""}>
                </div>
            </div>

            <h4 className="text-center text-white font-bold">
                {playInfo.chipCount}
            </h4>

            <h5 className="text-center" style={{ color: "rgb(182, 179, 179)" }}>
                {type === "hero9Site" ? hero9Site[playInfo.seatNumber] : hero8Site[playInfo.seatNumber]}
            </h5>
        </div >
    );
};

export default PokerPlayer;
