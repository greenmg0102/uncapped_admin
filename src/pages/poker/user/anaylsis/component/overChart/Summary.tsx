import { playCardArray } from '../../../../../../utils/reference/playCardArray'

const Summary = ({ selectCard, active, hands }: any) => {

    const symbolPresent = (eachCard: any) => {

        let length = eachCard.length;
        if (length === 2) {
            let realHTML = Array(6).fill(0).map((item: any, index: any) => index).map((item: any, index: any) =>
                sampleHTML("six", eachCard, index, hands[eachCard])
            )
            return realHTML;
        } else {
            if (eachCard.slice(-1) === "s") {
                let realHTML = Array(4).fill(0).map((item: any, index: any) => index).map((item: any, index: any) =>
                    sampleHTML("four", eachCard, index, hands[eachCard])
                )
                return realHTML;
            }
            else {
                let realHTML = Array(8).fill(0).map((item: any, index: any) => index).map((item: any, index: any) =>
                    sampleHTML("eight", eachCard, index, hands[eachCard])
                )
                return realHTML;
            }
        }
    }

    const calculEV = (list: any) => {
        let real = 0
        list.forEach((element: any) => {
            real += Math.abs(element)
        });

        return (real / list.length).toFixed(2)
    }

    const sampleHTML = (type: any, item: any, index: any, handData: any) => {

        return <div
            key={index}
            className="flex justify-start items-center border-b border-gray-500 cursor-pointer hover:bg-gray-800 transition-all"
            onMouseEnter={() => selectCard(item)}
            onMouseLeave={() => selectCard("")}
            id={item}
        >
            <div className="mb-0 flex-grow-0 p-1 w-[70px] text-center text-gray-300 font-bold">
                {pairNumberSymbol(type, item, index)}
            </div>
            <div className="relative mb-0 flex-grow-0 h-[25px] w-[100px]">
                <div
                    className='absolute h-[25px] bg-[#7d1f1f]'
                    style={{
                        width: (handData.played[3] === undefined ? 0 : handData.played[3]) * 100 + "%"
                    }}
                >
                </div>
                <div
                    className="absolute h-[25px] bg-[#ff0000]"
                    style={{
                        width: (handData.played[2] === undefined ? 0 : handData.played[2]) * 100 + "%",
                        left: (handData.played[3] === undefined ? 0 : handData.played[3]) * 100 + "%",
                    }}
                />
                <div
                    className="absolute h-[25px] bg-[#00cf00]"
                    style={{
                        width: (handData.played[1]) * 100 + "%",
                        left: (handData.played[3] === undefined ? 0 : handData.played[3] + handData.played[2] === undefined ? 0 : handData.played[2]) * 100 + "%",
                    }}
                />
                <div
                    className="absolute h-[25px] bg-[#3d7cb8]"
                    style={{
                        width: (handData.played[0]) * 100 + "%",
                        left: (handData.played[3] === undefined ? 0 : handData.played[3] + handData.played[2] === undefined ? 0 : handData.played[2] + handData.played[1]) * 100 + "%",
                    }}
                />
            </div>

            <div className="mb-0 flex-grow-0 p-1 w-[50px] text-center text-gray-300 font-bold">{handData.weight}</div>
            <div className="mb-0 flex-grow-0 p-1 w-[50px] text-center text-gray-300 font-bold">{calculEV(handData.evs)}</div>
            <div className="mb-0 flex-grow-0 p-1 w-[50px] text-center text-gray-300 font-bold"></div>
            <div className="mb-0 flex-grow-0 p-1 w-[55px] text-center text-gray-300 font-bold"></div>
            <div className="mb-0 flex-grow-1"></div>
        </div>
    }

    const pairNumberSymbol = (type: any, item: any, index: any) => {

        if (type === 'six') {
            switch (index) {
                case 0:
                    return <div className='flex justify-center items-center'>
                        <p className='mr-1' style={{ color: '#' }}>{item.substr(0, 1)}&#9824;</p>
                        <p style={{ color: 'red' }}>{item.substr(1, 1)}&hearts;</p>
                    </div>;
                case 1:
                    return <div className='flex justify-center items-center'>
                        <p className='mr-1' style={{ color: '#' }}>{item.substr(0, 1)}&#9824;</p>
                        <p style={{ color: '#3d7cb8' }}>{item.substr(1, 1)}&#9830;</p>
                    </div>;
                case 2:
                    return <div className='flex justify-center items-center'>
                        <p className='mr-1' style={{ color: 'red' }}>{item.substr(0, 1)}&hearts;</p>
                        <p style={{ color: '#3d7cb8' }}>{item.substr(1, 1)}&#9830;</p>
                    </div>;
                case 3:
                    return <div className='flex justify-center items-center'>
                        <p className='mr-1' style={{ color: '#' }}>{item.substr(0, 1)}&#9824;</p>
                        <p style={{ color: 'green' }}>{item.substr(1, 1)}&#9827;</p>
                    </div>;
                case 4:
                    return <div className='flex justify-center items-center'>
                        <p className='mr-1' style={{ color: 'red' }}>{item.substr(0, 1)}&hearts;</p>
                        <p style={{ color: 'green' }}>{item.substr(1, 1)}&#9827;</p>
                    </div>;
                case 5:
                    return <div className='flex justify-center items-center'>
                        <p className='mr-1' style={{ color: '#3d7cb8' }}>{item.substr(0, 1)}&#9830;</p>
                        <p style={{ color: 'green' }}>{item.substr(1, 1)}&#9827;</p>
                    </div>;
                default:
                    return "Unknown";
            }
        } else if (type === 'four') {
            switch (index) {
                case 0:
                    return <div className='flex justify-center items-center'>
                        <p className='mr-1' style={{ color: '#' }}>{item.substr(0, 1)}&#9824;</p>
                        <p style={{ color: '#' }}>{item.substr(1, 1)}&#9824;</p>
                    </div>;
                case 1:
                    return <div className='flex justify-center items-center'>
                        <p className='mr-1' style={{ color: 'red' }}>{item.substr(0, 1)}&hearts;</p>
                        <p style={{ color: 'red' }}>{item.substr(1, 1)}&hearts;</p>
                    </div>;
                case 2:
                    return <div className='flex justify-center items-center'>
                        <p className='mr-1' style={{ color: '#3d7cb8' }}>{item.substr(0, 1)}&#9830;</p>
                        <p style={{ color: '#3d7cb8' }}>{item.substr(1, 1)}&#9830;</p>
                    </div>;
                case 3:
                    return <div className='flex justify-center items-center'>
                        <p className='mr-1' style={{ color: 'green' }}>{item.substr(0, 1)}&#9827;</p>
                        <p style={{ color: 'green' }}>{item.substr(1, 1)}&#9827;</p>
                    </div>;
                default:
                    return "Unknown";
            }
        } else if (type === "eight") {
            switch (index) {
                case 0:
                    return <div className='flex justify-center items-center'>
                        <p className='mr-1' style={{ color: '#' }}>{item.substr(0, 1)}&#9824;</p>
                        <p style={{ color: 'red' }}>{item.substr(1, 1)}&hearts;</p>
                    </div>;
                case 1:
                    return <div className='flex justify-center items-center'>
                        <p className='mr-1' style={{ color: '#' }}>{item.substr(0, 1)}&#9824;</p>
                        <p style={{ color: '#3d7cb8' }}>{item.substr(1, 1)}&#9830;</p>
                    </div>;
                case 2:
                    return <div className='flex justify-center items-center'>
                        <p className='mr-1' style={{ color: '#' }}>{item.substr(0, 1)}&#9824;</p>
                        <p style={{ color: 'green' }}>{item.substr(1, 1)}&#9827;</p>
                    </div>;
                case 3:
                    return <div className='flex justify-center items-center'>
                        <p className='mr-1' style={{ color: 'red' }}>{item.substr(0, 1)}&hearts;</p>
                        <p style={{ color: '#' }}>{item.substr(1, 1)}&#9824;</p>
                    </div>;
                case 4:
                    return <div className='flex justify-center items-center'>
                        <p className='mr-1' style={{ color: 'red' }}>{item.substr(0, 1)}&hearts;</p>
                        <p style={{ color: '#3d7cb8' }}>{item.substr(1, 1)}&#9830;</p>
                    </div>;
                case 5:
                    return <div className='flex justify-center items-center'>
                        <p className='mr-1' style={{ color: 'red' }}>{item.substr(0, 1)}&hearts;</p>
                        <p style={{ color: 'green' }}>{item.substr(1, 1)}&#9827;</p>
                    </div>;
                case 6:
                    return <div className='flex justify-center items-center'>
                        <p className='mr-1' style={{ color: '#3d7cb8' }}>{item.substr(0, 1)}&#9830;</p>
                        <p style={{ color: '#' }}>{item.substr(1, 1)}&#9824;</p>
                    </div>;
                case 7:
                    return <div className='flex justify-center items-center'>
                        <p className='mr-1' style={{ color: '#3d7cb8' }}>{item.substr(0, 1)}&#9830;</p>
                        <p style={{ color: 'red' }}>{item.substr(1, 1)}&hearts;</p>
                    </div>;
                case 8:
                    return <div className='flex justify-center items-center'>
                        <p className='mr-1' style={{ color: '#3d7cb8' }}>{item.substr(0, 1)}&#9830;</p>
                        <p style={{ color: 'green' }}>{item.substr(1, 1)}&#9827;</p>
                    </div>;
                case 9:
                    return <div className='flex justify-center items-center'>
                        <p className='mr-1' style={{ color: 'green' }}>{item.substr(0, 1)}&#9827;</p>
                        <p style={{ color: '#' }}>{item.substr(1, 1)}&#9824;</p>
                    </div>;
                case 10:
                    return <div className='flex justify-center items-center'>
                        <p className='mr-1' style={{ color: 'green' }}>{item.substr(0, 1)}&#9827;</p>
                        <p style={{ color: 'red' }}>{item.substr(1, 1)}&hearts;</p>
                    </div>;
                case 11:
                    return <div className='flex justify-center items-center'>
                        <p className='mr-1' style={{ color: 'green' }}>{item.substr(0, 1)}&#9827;</p>
                        <p style={{ color: '#3d7cb8' }}>{item.substr(1, 1)}&#9830;</p>
                    </div>;
                default:
                    return "Unknown";
            }
        }
    }

    return (
        <div className='flex flex-col mt-[15px]'>
            <div className='flex justify-start items-center bg-gray-900'>
                <div className='mb-0 flex-grow-0 bg-gray-900 p-1 w-[70px] text-center text-gray-300 font-bold'>Hand</div>
                <div className='mb-0 flex-grow-0 bg-gray-900 p-1 w-[100px] text-center text-gray-300 font-bold'>strategy</div>
                <div className='mb-0 flex-grow-0 bg-gray-900 p-1 w-[50px] text-center text-gray-300 font-bold'>Range</div>
                <div className='mb-0 flex-grow-0 bg-gray-900 p-1 w-[50px] text-center text-gray-300 font-bold'>EV</div>
                <div className='mb-0 flex-grow-0 bg-gray-900 p-1 w-[50px] text-center text-gray-300 font-bold'>EQ %</div>
                <div className='mb-0 flex-grow-0 bg-gray-900 p-1 w-[55px] text-center text-gray-300 font-bold'>EQR %</div>
                <div className='mb-0 flex-grow-1'></div>
            </div>
            <div className='h-[465px] overflow-y-auto'>
                {playCardArray.map((item: any, index: any) =>
                    symbolPresent(item)
                )}
            </div>
        </div>
    );
};

export default Summary;

