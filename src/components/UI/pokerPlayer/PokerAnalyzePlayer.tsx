import clsx from 'clsx'

const PokerAnalyzePlayer = ({ seat, activePlayer, status, currentOption, bettingList }: any) => {

    // console.log("seat", seat);
    // console.log("activePlayer", activePlayer);
    // console.log("status", status);
    // console.log("currentOption", currentOption);
    // console.log("bettingList", bettingList);
    

    const stackSizeFormat = (type: any, stack: any) => {
        return stack > 398750 ? 40 : stack === 0 ? type === 'total' ? 0 : undefined : (stack / 10000).toFixed(1)
        // return stack === 398750 ? 40 : stack === 0 ? type === 'total' ? 0 : undefined : (stack / 10000).toFixed(1)
    }

    const totalChipDecide = () => {

        let count = 0

        for (let i = 0; i < bettingList.length; i++) {
            if (bettingList[i] && bettingList[i].position === seat) {
                count += bettingList[i].chipAmount
            }
        }

        if (seat === "SB") return stackSizeFormat('option', currentOption.stackSize - count - 5000)
        if (seat === "BB") return stackSizeFormat('option', currentOption.stackSize - count - 10000)

        return stackSizeFormat('total', currentOption.stackSize - count)
        // return stackSizeFormat('option', currentOption.stackSize - count)
    }

    return (
        <div
            className={clsx(
                "w-[70px] h-[70px] flex justify-center items-center flex-col rounded-full border border-[2px] hover:border-white cursor-pointer transition-all",
                activePlayer === seat ?
                    "border-red-500"
                    :
                    status && status.type === "F" || bettingList.filter((item: any) => item.position === seat).length < 1 ?
                        "border-gray-700 text-gray-700"
                        :
                        "border-gray-700 text-white"
            )}
        >
            <p className='font-bold text-[14px]'>{seat}</p>
            <p className='font-bold text-[14px]'>{Number(totalChipDecide()) < 0 ? 0 : Number(totalChipDecide())}bb</p>
        </div>
    )
}

export default PokerAnalyzePlayer