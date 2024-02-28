import clsx from 'clsx'


export default function VillianPokerTable({ villianPokerTable, premiumStatus, setPremiumStatus }: any) {

    const bufferVillian = (position: any) => {
        if (premiumStatus.VillianPosition.includes(position)) setPremiumStatus({ ...premiumStatus, VillianPosition: premiumStatus.VillianPosition.filter((item: any) => item !== position) })
        else setPremiumStatus({ ...premiumStatus, VillianPosition: [...premiumStatus.VillianPosition, position] })
    }

    return (
        <div className="flex justify-center items-center h-[203px]">
            <div className="relative w-2/3 flex justify-center items-center border border-[2px] border-gray-600 rounded-full h-[95px]">
                <p className="fond-bold text-[20px]">Uncapped</p>
                {villianPokerTable.map((item: any, index: any) =>
                    <div
                        key={index}
                        className={
                            clsx(
                                "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] rounded-full border border-[2px] border-gray-800 flex justify-center items-center flex-col cursor-pointer hover:border-gray-200 hover:bg-red-800 hover:text-gray-100 transition-all",
                                item.postion === premiumStatus.heroPosition ? "bg-blue-800 text-blue-100 font-bold" : premiumStatus.VillianPosition.includes(item.postion) ? "bg-red-800 text-gray-100 font-bold" : ""
                            )
                        }
                        style={{
                            top: `${item.gps.top}%`,
                            left: `${item.gps.left}%`,
                        }}
                        onClick={() => bufferVillian(item.postion)}
                    >
                        <p className="text-center text-[12px]">{item.title}</p>
                        <p className={clsx(premiumStatus.stackDepth !== undefined ? "text-center" : "opacity-0")} >{premiumStatus.stackDepth}</p>
                    </div>
                )}
            </div>
        </div>
    )
}