import { hero8Site, hero9Site } from '../../../../../../utils/reference//playCardColor'

const OOPIP = ({ activeNodeData, maxSeat }: any) => {

    const seat = maxSeat > 9 ? hero9Site[activeNodeData.player] : hero8Site[activeNodeData.player]

    return (
        <div>

            <div className="flex justify-between items-start pt-1 pb-0">
                <div className="w-1/2 p-0 sm:pr-1 sm:mr-1 flex justify-start">
                    <span className="text-center text-[16px] mb-0 bg-gray-900 rounded-tr-[12px] rounded-tl-[12px] pt-1 px-4 font-bold">{seat}  OOP</span>
                </div>
                <div className="w-1/2 p-0 sm:pl-1 sm:ml-1 flex justify-end">
                    <span className="text-center text-[16px] mb-0 bg-gray-900  rounded-tr-[12px] rounded-tl-[12px] pt-1 px-4 font-bold">CO IP</span>
                </div>
            </div>

            <div className="flex justify-between items-start pb-4 pt-0">
                <div className="w-1/2 flex justify-between items-center p-0 sm:pr-1 sm:mr-1 bg-gray-900 rounded-[12px] rounded-tl-[0px] rounded-bl-[0px] rounded-br-[0px] p-2">
                    <div className="w-1/4 flex justify-center items-center flex-col">
                        <p className="text-center">EV</p>
                        <p className="text-center text-red-600">-0.19</p>
                    </div>
                    <div className="w-1/4 flex justify-center items-center flex-col">
                        <p className="text-center">Equity</p>
                        <p className="text-center text-red-600">-</p>
                    </div>
                    <div className="w-1/4 flex justify-center items-center flex-col">
                        <p className="text-center">EQR</p>
                        <p className="text-center text-red-600">-</p>
                    </div>
                    <div className="w-1/4 flex justify-center items-center flex-col">
                        <p className="text-center">Combos</p>
                        <p className="text-center text-green-600">-90</p>
                    </div>
                </div>
                <div className="w-1/2 p-0 flex justify-between items-center sm:pl-1 sm:ml-1 bg-gray-900 rounded-[12px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[0px] p-2">
                    <div className="w-1/4 flex justify-center items-center flex-col">
                        <p className="text-center">EV</p>
                        <p className="text-center text-red-600">-0.19</p>
                    </div>
                    <div className="w-1/4 flex justify-center items-center flex-col">
                        <p className="text-center">Equity</p>
                        <p className="text-center text-red-600">-</p>
                    </div>
                    <div className="w-1/4 flex justify-center items-center flex-col">
                        <p className="text-center">EQR</p>
                        <p className="text-center text-red-600">-</p>
                    </div>
                    <div className="w-1/4 flex justify-center items-center flex-col">
                        <p className="text-center">Combos</p>
                        <p className="text-center text-green-600">-90</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OOPIP;
