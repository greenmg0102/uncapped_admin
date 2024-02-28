import { getChipStatus, getBBStatus } from '../../../utils/functions/chipCalculate'
import { chipAmountColor, chipAmountColorInBB } from '../../../utils/reference/playCardArray'
import clsx from 'clsx'

export const ChipStatus = ({ totalBet }: any) => {

    return <div className='flex justify-center items-end'>
        {/* <img
            src={"/assets/images/playCardSymbol/PokerChips.png"}
            className={clsx("transition-all", true ? 'bg-cover' : 'hidden')}
            alt="suit"
            width="50" height="50"
        /> */}
        {Object.keys(getChipStatus(totalBet)).map((key: any, index: any) =>
            <div
                key={index}
                className='mr-[5px] flex flex-col'
            >
                {Array(getChipStatus(totalBet)[key]).fill(0).map((item: any, order: any) =>
                    <div
                        key={order}
                        className='w-[12px] h-[12px] mb-[1px] rounded-full'
                        style={{ background: chipAmountColor[key] }}
                    />
                )}
            </div>
        )}
    </div>
}


export const BBStatus = (totalBet: any, status: any) => {

    return <div>
        <div className='flex justify-center items-end'>
            {/* <img
            src={"/assets/images/playCardSymbol/PokerChips.png"}
            className={clsx("transition-all", true ? 'bg-cover' : 'hidden')}
            alt="suit"
            width="50" height="50"
        /> */}
            {Object.keys(getBBStatus(totalBet)).map((key: any, index: any) =>
                <div
                    key={index}
                    className='flex flex-col'
                >
                    {Array(getBBStatus(totalBet)[key]).fill(0).map((item: any, order: any) =>
                        <div
                            key={order}
                            className='w-[6px] h-[6px] mb-[1px] rounded-full'
                            style={{ background: chipAmountColorInBB[key] }}
                        />
                    )}
                </div>
            )}
        </div>
        <p className={clsx('text-center mb-0 text-[12px]', distinguishColor(status))}>
            {totalBet}
        </p>
    </div>
}

export const distinguishColor = (status: any): any => {
    return "text-gray-200"
}