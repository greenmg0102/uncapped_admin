import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Analyze from './Analyze'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { getPreflopModel } from '../../../../utils/functions/user/analysis/getPreflopModel'
import { MiddlewareCurrentOption, MiddlewareReportingOption } from '../../../../interface/user/analysis/analysis.dto'

const GameAnalyze = () => {

    const navigate = useNavigate();

    const [nodeList, setNodeList] = useState<any>([]);
    const [bufferNodeList, setBufferNodeList] = useState<any>([]);
    const [bettingList, setBettingList] = useState<any>([]);
    const [activeNodeNumber, setActiveNodeNumber] = useState<any>(0);
    const [activeNodeData, setActiveNodeData] = useState<any>(null)
    const [loadingStatus, setloadingStatus] = useState(false)
    const [bufferAction, setBufferAction] = useState(false)
    const [isClickable, setIsClickable] = useState(true)

    const [reportingOption, setReportingOption] = useState({
        heroPosiotionList: [],
        villianPosiotionList: [],
        stackDepthList: [],
        actionList: []
    })

    const [currentOption, setCurrentOption] = useState({
        gameType: 'ChipEV',
        stackSize: 398750,
        players: '8',
        Limps: false,
        Cold: false
    })
    const MySwal = withReactContent(Swal);

    const middlewareCurrentOption = async (total: MiddlewareCurrentOption) => {

        setCurrentOption({ ...total })
        const data = {
            nodeNumber: 0,
            chipAmount: total.stackSize,
            maxUser: total.players
        }
        let zeroNode = await getPreflopModel(data).then()
        let real: Array<any> = [];
        real.push(zeroNode);

        setNodeList(() => real);
        setActiveNodeData(zeroNode);
    }

    const middlewareReportingOption = async (total: any) => setReportingOption(total)

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        if (accessToken === null && refreshToken === null) navigate('/auth/boxed-signin');
    }, [])

    useEffect(() => {
        async function fetchData() {
            const data = {
                nodeNumber: 0,
                chipAmount: currentOption.stackSize,
                maxUser: currentOption.players
            }
            let zeroNode = await getPreflopModel(data).then()
            setIsClickable(false)
            recursiveGetNode(0)

            if (nodeList.length === 0) {
                let real = nodeList
                real.push(zeroNode)
                setNodeList(() => real)
                setActiveNodeData(zeroNode)
            }
        }
        fetchData()
    }, [])


    const reset = async () => {
        setActiveNodeNumber((previousValue: any) => 0)
        setBufferNodeList((previousValue: any) => [])
        setBettingList((previousValue: any) => [])
        const data = {
            nodeNumber: 0,
            chipAmount: currentOption.stackSize,
            maxUser: currentOption.players
        }
        let zeroNode = await getPreflopModel(data).then()
        setIsClickable(false)
        recursiveGetNode(0)

        let real: any = []
        real.push(zeroNode)
        setNodeList(() => real)
        setActiveNodeData(zeroNode)
    }

    const decideNode = async (type: string, node: number, order: number, position: string, chipAmount: number) => {

        if (type === 'realType') {
            setIsClickable(false)
            setBufferNodeList([])
            recursiveGetNode(node)

            setloadingStatus(true)
            const data = {
                nodeNumber: node,
                chipAmount: currentOption.stackSize,
                maxUser: currentOption.players
            }
            await getPreflopModel(data)
                .then((jsonData) => {

                    let realBetting = order < bettingList.length - 1 ? bettingList.slice(0, order + 1) : bettingList
                    realBetting.push({
                        position: position,
                        chipAmount: chipAmount
                    })
                    setBettingList(() => realBetting)

                    let real = order < nodeList.length - 1 ? nodeList.slice(0, order + 1) : nodeList
                    real.push(jsonData)
                    setNodeList(() => {
                        setloadingStatus(false)
                        setActiveNodeNumber(() => order + 1)
                        setActiveNodeData(jsonData)
                        return real
                    })
                })
                .catch((error: any) => {
                    setloadingStatus(false)
                    noActionNodification()
                });

        } else if (type === 'bufferType') {
            let real = [...nodeList, ...bufferNodeList.slice(1, order - nodeList.length + 2)]
            setIsClickable(false)
            setBufferNodeList([])
            recursiveGetNode(node)
            setNodeList(real)
            setBufferAction(true)
        }
    }

    const activeNode = async (type: string, nodeNumber: number, order: number) => {
        setActiveNodeNumber(() => order)
        setActiveNodeData(type === 'realType' ? nodeList[order] : bufferNodeList[order - nodeList.length + 1])
    }

    const noActionNodification = () => {
        MySwal.fire({
            title: 'There is no action.',
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true
        });
    };

    const recursiveGetNode = async (requestingNodeNumber: number): Promise<any> => {
        const data = {
            nodeNumber: requestingNodeNumber,
            chipAmount: currentOption.stackSize,
            maxUser: currentOption.players
        }
        let nextNode: any = await getPreflopModel(data).then((response: any) => response);

        setBufferNodeList((prevBufferNodeList: any) => [...prevBufferNodeList, nextNode]);

        if (nextNode.actions[0].node !== undefined) return recursiveGetNode(nextNode.actions[0].node);
        else setIsClickable(true)
    }

    return (
        <div>
            {activeNodeData !== null &&
                <Analyze
                    reset={reset}
                    nodeList={nodeList}
                    isClickable={isClickable}
                    bettingList={bettingList}
                    bufferAction={bufferAction}
                    currentOption={currentOption}
                    loadingStatus={loadingStatus}
                    bufferNodeList={bufferNodeList}
                    activeNodeData={activeNodeData}
                    reportingOption={reportingOption}
                    activeNodeNumber={activeNodeNumber}
                    setCurrentOption={(total: MiddlewareCurrentOption) => middlewareCurrentOption(total)}
                    setReportingOption={(total: MiddlewareReportingOption) => middlewareReportingOption(total)}
                    activeNode={(type: string, nodeNumber: number, order: number) => activeNode(type, nodeNumber, order)}
                    decideNode={(type: string, nodeNumber: number, order: number, position: string, chipAmount: number) => decideNode(type, nodeNumber, order, position, chipAmount)}
                />
            }
        </div>
    )
}

export default GameAnalyze;
