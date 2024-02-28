import { useState, useEffect } from 'react';
import clsx from 'clsx'
import { actionExtract, anteExtract } from '../../../../../utils/actionValidation'
import PokerTableEnv from '../../../../../components/UI/pokerTable/PokerTableEnv'
import { chipAmountColor } from '../../../../../utils/reference/playCardArray'
import Street from './Street'
import PlayControl from './PlayControl'
import PreviousNext from './PreviousNext'

const PokerTable = ({ handData, isAnimation, receiveRaw }: any) => {

    const [actionList, setActionList] = useState([])
    const [actionStep, setActionStep] = useState(-1)
    const [status, setStatus] = useState(0)
    const [currentStatus, setCurrentStatus] = useState({})
    const [isNext, setIsNext] = useState(true)

    const [isPlay, setIsPlay] = useState(false);
    const [conditionMatched, setConditionMatched] = useState(false);
    const [playSpeed, setPlaySpeed] = useState(1000);

    const [preFlopNumber, setPreFlopNumber] = useState(0)
    const [flopNumber, setFlopNumber] = useState(0)
    const [turnNumber, setTurnNumber] = useState(0)
    const [riverNumber, setRiverNumber] = useState(0)

    const nextPrevious = (order: number) => {

        let real = handData.rawData.split("\n");
        setIsNext(() => order > 0 ? true : false)
        setActionStep((previousActionStep: any) => previousActionStep + order)
        receiveRaw(() => real[actionStep + order])
    }

    const viewStreet = (status: any) => {
        setStatus(status)
        let real = handData.rawData.split("\n");
        if (status === 0) receiveRaw(real[preFlopNumber])
        if (status === 3) receiveRaw(real[flopNumber])
        if (status === 4) receiveRaw(real[turnNumber])
        if (status === 5) receiveRaw(real[riverNumber])
    }

    useEffect(() => {

        if (handData.rawData && handData.rawData.split("\n").length > 0 && isPlay) {

            const interval = setInterval(() => {
                nextPrevious(1)
                if (conditionMatched) clearInterval(interval);
            }, playSpeed);
            return () => {
                clearInterval(interval);
            };
        }

    }, [conditionMatched, handData.rawData, playSpeed, isPlay]);

    useEffect(() => {
        if (handData.rawData) {
            let anteCount = 0
            let real = handData.rawData.split("\n");
            setActionList(real.slice(2, real.length));
            real.slice(2, real.length).forEach((element: any, index: any) => {
                if (element.includes("ante")) {
                    anteCount++
                    if (anteCount === handData.players.length) setPreFlopNumber(index);
                }
                if (element.includes("*** FLOP ***")) setFlopNumber(index);
                if (element.includes("*** TURN ***")) setTurnNumber(index);
                if (element.includes("*** RIVER ***")) setRiverNumber(index);
            });
        }
    }, [handData.rawData])

    useEffect(() => {
        let extractingResult = actionExtract(actionList[actionStep]);
        if (typeof extractingResult !== 'undefined') {
            if (extractingResult.category.type === "ante") {
                setCurrentStatus(anteExtract(actionList));
                setActionStep(actionStep + anteExtract(actionList).real.length)
            } else {
                setCurrentStatus(extractingResult.category);
                receiveRaw(extractingResult.action)
            }
        }
        if (actionStep < flopNumber) setStatus(0)
        else if (actionStep === flopNumber) setStatus(3)
        else if (actionStep === turnNumber) setStatus(4)
        else if (actionStep === riverNumber) setStatus(5)

    }, [actionStep])

    return (
        <div className="w-full relative">
            <div className='flex justify-start items-center'>
                <Street
                    status={status}
                    viewStreet={(value: any) => viewStreet(value)}
                />
                <PreviousNext
                    nextPrevious={(value: any) => nextPrevious(value)}
                    status={status}
                />
            </div>
            <div className='mt-[100px]'>
                <PokerTableEnv
                    stage={status}
                    isNext={isNext}
                    handData={handData}
                    isAnimation={isAnimation}
                    currentStatus={currentStatus}
                />
            </div>
            <PlayControl
                playSpeed={playSpeed}
                setPlaySpeed={(value: any) => setPlaySpeed(value)}
                setIsPlay={(value: any) => setIsPlay(value)}
            />
            <div className='absolute top-[200px] right-0'>
                {Object.keys(chipAmountColor).map((key: any, index: any) =>
                    <div
                        key={index}
                        className='flex justify-start items-center w-[100px] mb-[4px] cursor-pointer text-gray-600 hover:text-gray-100 hover:font-bold transition-all'
                    >
                        <div
                            className='w-[12px] h-[12px] mb-[1px] rounded-full'
                            style={{ background: chipAmountColor[key] }}
                        />
                        <div className='ml-[12px] flex justify-start'>{key}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PokerTable;
