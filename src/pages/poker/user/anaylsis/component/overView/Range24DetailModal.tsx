
const Range24DetailModal = ({ handResult }: any) => {

    return (
        <div>
            {handResult.evs.length > 0 ?
                <div>
                    <div className="flex justify-between items-center">
                        <p className="w-1/3 text-[#7d1f1f]">Allin</p>
                        <p className="w-1/3 text-[#7d1f1f] font-bold text-center">
                            {(handResult.evs[3]).toFixed(1)}
                        </p>
                        <p className="w-1/3 text-[#7d1f1f] font-bold text-right">
                            {(handResult.played[3] * 100).toFixed(1)} %
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="w-1/3 text-[#ff0000]">Raise</p>
                        <p className="w-1/3 text-[#ff0000] font-bold text-center">
                            {(handResult.evs[2]).toFixed(1)}
                        </p>
                        <p className="w-1/3 text-[#ff0000] font-bold text-right">
                            {(handResult.played[2] * 100).toFixed(1)} %
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="w-1/3 text-[#00cf00]">Call</p>
                        <p className="w-1/3 text-[#00cf00] font-bold text-center">
                            {(handResult.evs[1]).toFixed(1)}
                        </p>
                        <p className="w-1/3 text-[#00cf00] font-bold text-right">
                            {(handResult.played[1] * 100).toFixed(1)} %
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="w-1/3 text-[#3d7cb8]">Fold</p>
                        <p className="w-1/3 text-[#3d7cb8] font-bold text-center">
                            {((handResult.evs[0])).toFixed(1)}
                        </p>
                        <p className="w-1/3 text-[#3d7cb8] font-bold text-right">
                            {((handResult.played[0]) * 100).toFixed(1)} %
                        </p>
                    </div>
                </div>

                :
                null
            }

        </div>
    );
};

export default Range24DetailModal;
