import { useState, useEffect } from "react";
import clsx from 'clsx'
import Stages from "./component/stage/Stages";
import OverViewCrad from "./component/overView/OverViewCrad";
import OverChartCrad from "./component/overChart/OverChartCrad";

import { restructure } from '../../../../utils/system/calculateAnalyzeTool'
import { MiddlewareCurrentOption, MiddlewareReportingOption } from '../../../../interface/user/analysis/analysis.dto'

const Analyze = ({ nodeList, decideNode, activeNode, activeNodeNumber, activeNodeData, currentOption, setCurrentOption, loadingStatus, bettingList, bufferNodeList, bufferAction, reportingOption, setReportingOption, isClickable, reset }: any) => {

    const hands = activeNodeData.hands
    const actions = activeNodeData.actions

    const [active, setActive] = useState("")
    const [rangeOption] = useState(true)

    const [toolData, setToolData] = useState({
        userResult: { allin: "0", raise: "0", call: "0", fold: "0" },
        correctResult: { allin: "0", raise: "0", call: "0", fold: "0" }
    })

    useEffect(() => {
        const calculateAverages = async () => {
            const { statistic }: any = await restructure(hands, actions);
            setToolData({ ...toolData, userResult: statistic });
        };
        calculateAverages();
    }, [hands])

    const bufferSetValue = (value: any) => setActive((preValue: any) => preValue === value ? "" : value)

    return (
        <div>
            <Stages
                reset={reset}
                nodeList={nodeList}
                bettingList={bettingList}
                isClickable={isClickable}
                bufferAction={bufferAction}
                currentOption={currentOption}
                loadingStatus={loadingStatus}
                bufferNodeList={bufferNodeList}
                reportingOption={reportingOption}
                activeNodeNumber={activeNodeNumber}
                setReportingOption={(total: MiddlewareReportingOption) => setReportingOption(total)}
                setCurrentOption={(total: MiddlewareCurrentOption) => setCurrentOption({ ...total })}
                activeNode={(type: any, nodeNumber: any, order: any) => activeNode(type, nodeNumber, order)}
                decideNode={(type: any, nodeNumber: any, order: any, position: any, chipAmount: any) => decideNode(type, nodeNumber, order, position, chipAmount)}
            />
            <div className="flex justify-between flex-wrap items-start transition-all mt-[12px]">
                <div className="w-full lg:w-3/5 pr-0 lg:pr-1 transition-all">
                    {
                        activeNodeNumber !== -1 &&
                        <OverViewCrad
                            active={active}
                            nodeList={nodeList}
                            rangeOption={rangeOption}
                            bufferNodeList={bufferNodeList}
                            activeNodeNumber={activeNodeNumber}
                            setActive={(value: string) => bufferSetValue(value)}
                        />
                    }
                </div>
                <div className={clsx(toolData && toolData.userResult ? "w-full lg:w-2/5 pr-0 lg:pr-1 transition-all self-stretch" : "hidden")}>
                    <OverChartCrad
                        hands={hands}
                        active={active}
                        toolData={toolData}
                        nodeList={nodeList}
                        bettingList={bettingList}
                        currentOption={currentOption}
                        bufferNodeList={bufferNodeList}
                        activeNodeData={activeNodeData}
                        activeNodeNumber={activeNodeNumber}
                        selectCard={(cardInfo: string) => setActive(cardInfo)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Analyze;
