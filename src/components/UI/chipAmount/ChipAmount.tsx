import clsx from 'clsx';
import { BBStatus } from '../chipStatus'

const ChipAmount = ({ playSeatInfo, item, retrunBB, order, status, nodeData }: any) => {

    const colorCombine = {
        allin: "#7d1f1f",
        raise: "#ff0000",
        call: "#00cf00",
    }

    return (
        <div
            className={clsx(
                'absolute flex justify-center items-center font-bold text-gray-100',
                retrunBB(order) === undefined || retrunBB(order) === "0.0" || retrunBB(order) === "NaN" ? "hidden" : "",
            )}
            style={{
                top: (playSeatInfo[item].cheapPosition && playSeatInfo[item].cheapPosition.x) + "%",
                left: (playSeatInfo[item].cheapPosition && playSeatInfo[item].cheapPosition.y) + "%"
            }}
        >
            {/* <div
                className={clsx(
                    'w-[8px] h-[8px] rounded-full mr-[3px]',
                    nodeData &&
                        nodeData.sequence[nodeData.sequence.length - 1] &&
                        nodeData.sequence[nodeData.sequence.length - 1].type === "C" ?
                        "bg-[#00cf00]"
                        :
                        nodeData &&
                            nodeData.sequence[nodeData.sequence.length - 1] &&
                            nodeData.sequence[nodeData.sequence.length - 1].type === "R" ?
                            'bg-[#ff0000]'
                            :
                            'bg-[#7d1f1f]',
                )}
            /> */}
            {status && status.type &&
                <div className='text-center text-[12px]'>
                    {/* {Number(retrunBB(order))} */}
                    {/* {ChipStatus(order)} */}
                    {BBStatus(Number(retrunBB(order)), status)}
                </div>
            }

        </div>
    )
}

export default ChipAmount;
