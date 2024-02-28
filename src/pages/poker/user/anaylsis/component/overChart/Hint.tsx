
const Hint = ({ toolData }: any) => {

    return (
        <div>
            <div className="flex justify-between items-start pt-1 pb-0">
                <div className="w-1/2 p-0 sm:pr-1 sm:mr-1 flex justify-center">
                    <span className="text-center text-[16px] mb-0 bg-gray-900 rounded-tr-[12px] rounded-tl-[12px] pt-1 px-4 font-bold">Yours</span>
                </div>
                <div className="w-1/2 p-0 sm:pr-1 sm:mr-1 flex justify-center">
                    <span className="text-center text-[16px] mb-0 bg-gray-900  rounded-tr-[12px] rounded-tl-[12px] pt-1 px-4 font-bold">Correct</span>
                </div>
            </div>
            <div className="flex justify-between items-start pb-4 pt-0">
                <div className="w-1/2 p-0 sm:pr-1 sm:mr-1 bg-gray-900 rounded-[12px] p-2">
                    <div className="flex justify-between items-center">
                        <p className="text-[#7d1f1f] font-bold">Allin 200</p>
                        <p className="text-[#7d1f1f] font-bold">{toolData.userResult.allin}%</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-[#ff0000] font-bold">Raise 8.5</p>
                        <p className="text-[#ff0000] font-bold">{toolData.userResult.raise}%</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-[#00cf00] font-bold">Call</p>
                        <p className="text-[#00cf00] font-bold">{toolData.userResult.call}%</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-[#3d7cb8] font-bold">Fold</p>
                        <p className="text-[#3d7cb8] font-bold">{toolData.userResult.fold}%</p>
                    </div>
                    <div className="relative w-full h-[10px] bg-[#3d7cb8] rounded-[2px] mt-1">
                    </div>
                </div>
                <div className="w-1/2 p-0 sm:pl-1 sm:ml-1 bg-gray-900 rounded-[12px] p-2">
                    <div className="flex justify-between items-center">
                        <p className="text-[#7d1f1f] font-bold">Allin 200</p>
                        <p className="text-[#7d1f1f] font-bold">{toolData.correctResult.allin}%</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-[#ff0000] font-bold">Raise 8.5</p>
                        <p className="text-[#ff0000] font-bold">{toolData.correctResult.raise}%</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-[#00cf00] font-bold">Call</p>
                        <p className="text-[#00cf00] font-bold">{toolData.correctResult.call}%</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-[#3d7cb8] font-bold">Fold</p>
                        <p className="text-[#3d7cb8] font-bold">{toolData.correctResult.fold}%</p>
                    </div>
                    <div className="relative w-full h-[10px] bg-[#3d7cb8] rounded-[2px] mt-1">
                        <div
                            className="absolute h-[10px] bg-[#ff0000] rounded-[2px]"
                            style={{ width: "6.5%" }}
                        />
                        <div
                            className="absolute h-[10px] bg-[#00cf00] rounded-[2px]"
                            style={{
                                width: "6.5%",
                                left: "6.5%"
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hint;
