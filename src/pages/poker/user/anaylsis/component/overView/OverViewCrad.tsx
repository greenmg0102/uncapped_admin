import { useState, useEffect } from "react";
import OverViewCradItem from './OverViewCradItem'
import { playCardArray } from '../../../../../../utils/reference'
import { restructure } from '../../../../../../utils/system/calculateAnalyzeTool'

const OverViewCrad = ({ setActive, active, activeNodeNumber, rangeOption, nodeList, bufferNodeList }: any) => {

    const [totalHand, setTotalHand] = useState<any>({})

    useEffect(() => {

        const getChangedArray = (length: number) => Array(length).fill(0).map(() => 0);

        let previousArray = [...nodeList, ...bufferNodeList.slice(1)].slice(0, activeNodeNumber + 1);
        let action = previousArray[activeNodeNumber].actions
        let result = previousArray[activeNodeNumber].hands;

        let { handResult } = restructure(result, action)

        let playerNumber = previousArray[activeNodeNumber].player;

        previousArray.slice(0, activeNodeNumber).forEach((item: any) => {
            if (item.player === playerNumber) {

                Object.keys(item.hands).forEach((key: any) => {
                    if (item.hands[key].played[0] > 0.99) {
                        let a = handResult[key];
                        let changedArray = getChangedArray(handResult[key].played.length);
                        changedArray[0] = 1;
                        a.played = changedArray;
                        handResult[key] = a;
                    }
                });
            }
        });

        setTotalHand(handResult);

    }, [nodeList, bufferNodeList, activeNodeNumber]);


    return (
        <div>
            {Object.keys(totalHand).length > 0 ?
                <div className='flex justify-start flex-wrap'>
                    {playCardArray.map((item, index) =>
                        <div
                            key={index}
                            className='cursor-pointer'
                            style={{ width: "7.692%", padding: "2px" }}
                        >
                            <OverViewCradItem
                                data={item}
                                active={active}
                                rangeOption={rangeOption}
                                handResult={totalHand[item]}
                                selectItem={(value: string) => setActive(value)}
                            />
                        </div>
                    )}
                </div>
                :
                null
            }
        </div>

    );
};

export default OverViewCrad;
