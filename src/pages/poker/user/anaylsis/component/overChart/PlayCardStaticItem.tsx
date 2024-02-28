
const PlayCardStaticItem = ({ width, height, active, order }: any) => {

    const symbolPresent = (eachCard: any, order: any) => {

        let length = eachCard.length;
        if (length === 2) {
            let realHTML = sampleHTML("six", eachCard, order)
            return realHTML;
        } else {
            if (eachCard.slice(-1) === "s") {
                let realHTML = sampleHTML("four", eachCard, order)
                return realHTML;
            }
            else {
                let realHTML = sampleHTML("eight", eachCard, order)
                return realHTML;
            }
        }
    }

    const sampleHTML = (type: any, item: any, index: any) => {

        return <div
            key={index}
            className="flex justify-start items-center cursor-pointer hover:bg-gray-800 transition-all bg-gray-800"
            id={item}
        >
            <div className="mb-0 flex-grow-0 p-1 w-[70px] text-center text-gray-300 font-bold">
                {pairNumberSymbol(type, item, index)}
            </div>
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
        <div
            className="border border-gray-600 bg-[#111827] relative text-[20px]"
            style={{ width: width, height: height }}
        >
            <div className="absolute top-0 left-0">
                {symbolPresent(active, order)}
            </div>
            <div className="absolute bottom-0 left-0 w-full">
                <div className="flex justify-between items-center text-red-600 mb-2 mx-1">
                    <p>Raise</p>
                    <p className="font-bold">14%</p>
                </div>
                <div className="flex justify-between items-center text-green-600 mb-2 mx-1">
                    <p>Call</p>
                    <p className="font-bold">18%</p>
                </div>
                <div className="flex justify-between items-center text-blue-600 mx-1">
                    <p>Fold</p>
                    <p className="font-bold">68%</p>
                </div>
            </div>
        </div>
    );
};

export default PlayCardStaticItem;