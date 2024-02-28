import { useEffect, Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Tab } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import DefaultButtonGroup from './component/default/DefaultButtonGroup'
import CompareHeatReport from './component/Compare/Report'
import CompareHeatUser from './component/Compare/User'
import MACD from './component/MACD'
import DetailTable from './component/DetailTable'
import GradientUser from './component/Gradient/GradientUser'
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import PreflopChart from './component/PreflopChart'
import { defaultReportSetting } from '../../../../utils/reference/reporting'
import { reportEachPair, reportIntegration, userHandInfo, mainDataHandInfo, detailedTableGet, conditionPair } from '../../../../utils/functions/user/report/Report'
import { validationSeatWhenDefiningAction } from '../../../../utils/reference/playCardColor'
import { getGloabalOpertunity } from '../../../../utils/functions/user/report/Report'
import { handPair } from '../../../../utils/functions/user/report/MACD'

import IsHeat from './component/IsHeat'
import { defineOpacity } from '../../../../utils/actionValidation/reporting/defineOpacity'
import UserDataDetail from './component/userDataDetail'
import UserDetailList from './component/userDetailList'
import HeatMap from './component/Gradient/HeatMap'
import { toggleLoadingStatus } from "../../../../store/utilConfigSlice"
import FilterInfo from './component/FilterInfo'
import Premium from './component/Premium'
import { getGlobalFrequency } from '../../../../utils/actionValidation/reporting/getGlobalFrequency'
import { ReportingResultInterFace, valueStatusInterFace } from '../../../../interface/user/report'

const Report = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const MySwal = withReactContent(Swal);

    const displayTab = ["Chart Comparison", "Gradient Heat", "Detailed Table", "Histogram"]

    const [displayTabSelect, setDisplayTabSelect] = useState(0)

    const [valueStatus, setValueStatus] = useState<valueStatusInterFace>({
        heroPosition: [],
        heroPositionIndex: -1,
        stackDepth: [],
        VillianPosition: [],
        villianPositionIndex: -1,
        action: ""
    })

    const [pokerTypeCount, setPokerTypeCount] = useState([])
    const [isHeat, setIsHeat] = useState(true)
    const [isGrid, setIsGrid] = useState(true)

    const [disableStatus, setDisableStatus] = useState({
        generalAction: false,
        generalHero: false,
        generalVillin: false,
        generalStack: false
    })

    const [premiumStatus, setPremiumStatus] = useState({
        heroPosition: undefined,
        stackDepth: undefined,
        VillianPosition: [],
        action: ""
    })

    const [actionType, setActionType] = useState("raise")
    const [range, setRange] = useState("A")
    const [handType, setHandType] = useState("")

    const [detailedTable, setDetailedTable] = useState([])

    const [userTab, setUserTab] = useState(0)

    const [reportItemActive, setReportItemActive] = useState("")

    const [reportingResult, setReportingResult] = useState<ReportingResultInterFace>({});
    const [userInfoResult, setUserInfoResult] = useState<ReportingResultInterFace>({});
    const [globalFre, setGlobalFre] = useState<any>({});

    const [page, setPage] = useState(1);
    const PAGE_SIZES = [5, 20, 30, 40, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);

    const [interestingPair, setInterestingPair] = useState([])
    const [reportSetting, setReportSetting] = useState({ position: "", action: "" })


    const [userResultList, setUserResultList] = useState({
        totalCount: 0,
        result: []
    })
    const [userResultModal, setUserResultModal] = useState(false)
    const [advancedOptionModal, setAdvancedOptionModal] = useState(false)
    const [activeUserData, setActiveUserData] = useState("Pairs")

    const currentDate = new Date().toISOString().split('T')[0];

    const [filter, setFilter] = useState({
        pokerType: "GGPoker",
        tableSize: 8,
        range: `2023-11-30 to 2025-11-30`
        // range: `2023-11-30 to ${currentDate}`
    })

    const [mainDataFilter, setMainDataFilter] = useState({
        heroPosition: "UTG",
        stackDepth: 10,
    })

    const bufferSetReportItemActive = (item: any) => {
        setReportItemActive((previous: string) => previous === item ? "" : item)
    }

    const bufferSetValueStatus = (total: any) => {
        let startPosition = (validationSeatWhenDefiningAction[total.action as keyof typeof validationSeatWhenDefiningAction] || [])[0]
        setMainDataFilter({ ...mainDataFilter, heroPosition: startPosition })
        setValueStatus(total)
    }

    const interruptValueStatus = (type: string, value: number) => {

        let real = valueStatus[type as keyof typeof valueStatus] as number[];
        let bufferList: number[] = []

        if (real.includes(value)) {
            bufferList = real.filter((item: any) => item !== value)
        }
        else bufferList = [...real, value]
        bufferSetValueStatus({ ...valueStatus, [type]: bufferList })
    }

    const searchApply = async () => {
        const data = { ...valueStatus, ...filter }
        const response = await reportIntegration(data)
        setUserInfoResult(response.userData)
    }

    const bufferCurrentHand = async (handType: any) => {

        const data = {
            actionType: actionType,
            handType: handType,
            handRange: range,
            reportSetting: reportSetting,
            page: page,
            pageSize: pageSize,
            ...filter
        }

        const response = await handPair(data)
        setUserResultList(response)
    }

    useEffect(() => {
        async function fetchDataAndDispatch() {

            if (handType !== "") {

                const data = {
                    actionType: actionType,
                    handType: handType,
                    handRange: range,
                    reportSetting: reportSetting,
                    page: page,
                    pageSize: pageSize,
                    ...filter
                }
                const response = await handPair(data)
                setUserResultList(response)
            }
        }
        fetchDataAndDispatch();
    }, [actionType, range, handType])

    useEffect(() => {

        if (displayTabSelect === 1) {
            async function fetchDataAndDispatch() {
                const data = {
                    profilesId: "65849f7fdafd57880710c9ab",
                    pokerType: "GGPoker",
                    tableSize: 8,
                    range: `2023-11-30 to 2025-11-30`
                    // range: `2023-11-30 to ${currentDate}`
                }
                const gloabalOpertunity = await getGloabalOpertunity(data);

                let result = getGlobalFrequency(gloabalOpertunity)

                setGlobalFre(result)
            }
            fetchDataAndDispatch();
        }
    }, [displayTabSelect]);

    useEffect(() => {
        async function fetchData() {
            const data = { ...valueStatus, ...filter }
            dispatch(toggleLoadingStatus())

            const response = await reportIntegration(data)
            dispatch(toggleLoadingStatus())

            setUserInfoResult(response.userData)
        }
        fetchData()
    }, [valueStatus, filter])


    useEffect(() => {
        if (reportSetting.position !== "") {
            async function fetchMyAPI() {
                const data = {
                    reportSetting: reportSetting,
                    page: page,
                    pageSize: pageSize,
                    ...filter
                }
                const response = await conditionPair(data)
                setUserResultList(response)
            }
            fetchMyAPI()
        }
    }, [reportSetting, page, pageSize])

    useEffect(() => {
        async function fetchMyAPI() {
            const data = {
                nodeList: interestingPair,
                page: page,
                pageSize: pageSize
            }

            const response = await reportEachPair(data)
            setUserResultList(response)
        }
        fetchMyAPI()
    }, [interestingPair, page, pageSize])


    useEffect(() => {
        if (
            valueStatus.action !== "" &&
            filter.pokerType !== "N/A" &&
            filter.tableSize !== -1 &&
            filter.range !== undefined
        ) {
            async function fetchMyAPI() {

                const data = {
                    action: valueStatus.action,
                    heroPositionList: valueStatus.heroPosition,
                    stackDepthList: valueStatus.stackDepth,
                    ...mainDataFilter,
                    ...filter,
                }

                const response = await mainDataHandInfo(data)
                setReportingResult(response)
            }
            fetchMyAPI()
        } else {
            MySwal.fire({
                title: "Please select the Filtering Option!",
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 2000,
                showCloseButton: true,
                customClass: { popup: "color-info" }
            });
        }

    }, [mainDataFilter, valueStatus, filter])

    useEffect(() => {

        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        if (accessToken === null && refreshToken === null) navigate('/auth/boxed-signin');

        async function fetchMyAPI() {

            const data = {}
            const detailedTableGetData = {
                ...filter
            }

            const response = await userHandInfo(data)
            setPokerTypeCount(response)
            const detailResult = await detailedTableGet(detailedTableGetData)
            setDetailedTable(detailResult)
        }

        fetchMyAPI()
    }, [])

    return (
        <div>
            <div className='relative flex justify-between items-center flex-wrap w-full 2xl:h-[205px]'>
                <div className='relative w-full 2xl:w-1/2 px-2 border border-gray-700 rounded-[8px] 2xl:rounded-tr-[0px] 2xl:rounded-br-[0px] mb-2 2xl:mb-0'>
                    <DefaultButtonGroup
                        valueStatus={valueStatus}
                        disableStatus={disableStatus}
                        defaultReportSetting={defaultReportSetting}
                        setDisableStatus={(total: any) => setDisableStatus(total)}
                        setValueStatus={(total: any) => bufferSetValueStatus(total)}
                        setAdvancedOptionModal={(bool: boolean) => setAdvancedOptionModal(bool)}
                    />
                    <Premium
                        premiumStatus={premiumStatus}
                        advancedOptionModal={advancedOptionModal}
                        defaultReportSetting={defaultReportSetting}
                        setPremiumStatus={(total: any) => setPremiumStatus(total)}
                        setAdvancedOptionModal={(bool: boolean) => setAdvancedOptionModal(bool)}
                        actionPoint={(premiumAction: any) => setValueStatus({ ...valueStatus, action: premiumAction })}
                        arrayPoint={(type: any, premiumArry: any) => setValueStatus({ ...valueStatus, [type]: premiumArry })}
                    />
                </div>
                <FilterInfo
                    filter={filter}
                    userTab={userTab}
                    valueStatus={valueStatus}
                    pokerTypeCount={pokerTypeCount}
                    userInfoResult={userInfoResult}
                    defaultReportSetting={defaultReportSetting}
                    searchApply={searchApply}
                    setFilter={(total: any) => setFilter(total)}
                    setUserTab={(order: any) => setUserTab(order)}
                    interruptValueStatus={(type: string, value: number) => interruptValueStatus(type, value)}
                />
            </div>
            <div className='flex justify-between items-start flex-wrap'>
                <div className='w-full 2xl:w-[75%] pt-0 pr-0 md:pr-1'>
                    <Tab.Group defaultIndex={displayTabSelect}>
                        <div className='pb-[5px] relative'>
                            <Tab.List className="mt-8 flex flex-wrap border-b border-white-light dark:border-[#191e3a]">
                                {displayTab.map((item: any, index: any) =>
                                    <Tab as={Fragment} key={index}>
                                        {({ selected }) => (
                                            <button
                                                className={
                                                    `${selected ? '!border-white-light !border-b-white text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black ' : ''}
                                                dark:hover:border-b-black' -mb-[1px] w-full lg:w-[145px] block border border-transparent p-3.5 py-2 hover:text-primary`}
                                                onClick={() => setDisplayTabSelect(index)}
                                            >
                                                {item}
                                            </button>
                                        )}
                                    </Tab>
                                )}
                            </Tab.List>
                            <IsHeat
                                isHeat={isHeat}
                                isGrid={isGrid}
                                displayTabSelect={displayTabSelect}
                                setIsGrid={(bool: any) => setIsGrid(bool)}
                                setIsHeat={(bool: any) => setIsHeat(bool)}
                            />
                        </div>
                    </Tab.Group>
                    <div>
                        {displayTabSelect === 2 ?
                            <DetailTable
                                detailedTable={detailedTable}
                                reportSetting={reportSetting}
                                setReportSetting={(position: any, action: any) => setReportSetting({ ...reportSetting, position: position, action: action })}
                            />
                            :
                            <div className=''>
                                {displayTabSelect === 3 ?
                                    <MACD
                                        range={range}
                                        actionType={actionType}
                                        userInfoResult={userInfoResult}
                                        reportingResult={reportingResult}
                                        setRange={(range: any) => setRange(range)}
                                        setHandType={(handType: any) => setHandType(handType)}
                                        setActionType={(actionType: any) => setActionType(actionType)}
                                        bufferCurrentHand={(data: any) => bufferCurrentHand(data)}
                                    />
                                    :
                                    <div className='flex justify-between items-start flex-wrap mt-[0px] transition-all'>
                                        <div className='w-full lg:w-1/2 flex justify-center items-center mb-2 lg:mb-0'>
                                            <div className='w-full'>
                                                {
                                                    displayTabSelect === 0 ?
                                                        <CompareHeatReport
                                                            finalResult={reportingResult}
                                                            reportItemActive={reportItemActive}
                                                            bufferSetReportItemActive={(item: any) => bufferSetReportItemActive(item)}
                                                        /> : undefined
                                                }
                                                {
                                                    displayTabSelect === 1 ?
                                                        <CompareHeatReport
                                                            finalResult={reportingResult}
                                                            reportItemActive={reportItemActive}
                                                            bufferSetReportItemActive={(item: any) => bufferSetReportItemActive(item)}
                                                        /> : undefined
                                                }
                                                {displayTabSelect === 4 ? <PreflopChart finalResult={reportingResult} /> : undefined}
                                            </div>
                                        </div>
                                        <div className='w-full lg:w-1/2 flex justify-between items-start'>
                                            <div className='w-full'>
                                                {
                                                    displayTabSelect === 0 ?
                                                        <CompareHeatUser
                                                            userTab={userTab}
                                                            finalResult={userInfoResult}
                                                            reportItemActive={reportItemActive}
                                                            definite={defineOpacity(userInfoResult)}
                                                            setInterestingPair={(pair: any) => setInterestingPair(pair)}
                                                            bufferSetReportItemActive={(item: any) => bufferSetReportItemActive(item)}
                                                        />
                                                        :
                                                        undefined
                                                }
                                                {displayTabSelect === 1 ?
                                                    <div>
                                                        {isHeat === true ?
                                                            <HeatMap
                                                                isGrid={isGrid}
                                                                userTab={userTab}
                                                                globalFre={globalFre}
                                                                userInfoResult={userInfoResult}
                                                                reportingResult={reportingResult}
                                                                reportItemActive={reportItemActive}
                                                                setInterestingPair={(pair: any) => setInterestingPair(pair)}
                                                                bufferSetReportItemActive={(item: any) => bufferSetReportItemActive(item)}
                                                            />
                                                            :
                                                            <GradientUser
                                                                userTab={userTab}
                                                                globalFre={globalFre}
                                                                userInfoResult={userInfoResult}
                                                                reportingResult={reportingResult}
                                                                reportItemActive={reportItemActive}
                                                                setInterestingPair={(pair: any) => setInterestingPair(pair)}
                                                                bufferSetReportItemActive={(item: any) => bufferSetReportItemActive(item)}
                                                            />
                                                        }
                                                    </div> : null
                                                }
                                                {displayTabSelect === 4 ? <PreflopChart finalResult={userInfoResult} /> : undefined}
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        }
                    </div>
                </div>

                <div className='w-full 2xl:w-[25%] p-1 pb-[43px] border border-gray-700 rounded-[8px] p-2 h-[540px] mt-4'>

                    <UserDetailList
                        page={page}
                        pageSize={pageSize}
                        PAGE_SIZES={PAGE_SIZES}
                        interestingPair={interestingPair}
                        userResultList={userResultList}
                        activeUserData={activeUserData}
                        setActiveUserData={(activeId: any) => setActiveUserData(activeId)}
                        setPage={(e: any) => setPage(e)}
                        setUserResultModal={(bool: boolean) => setUserResultModal(bool)}
                        setPageSize={(e: any) => setPageSize(e)}
                        onPageChange={(p: any) => setPage(p)}
                    />
                    <UserDataDetail
                        page={page}
                        pageSize={pageSize}
                        PAGE_SIZES={PAGE_SIZES}
                        userResultList={userResultList}
                        interestingPair={interestingPair}
                        activeUserData={activeUserData}
                        setActiveUserData={(activeId: any) => setActiveUserData(activeId)}
                        setPage={(e: any) => setPage(e)}
                        setPageSize={(e: any) => setPageSize(e)}
                        onPageChange={(p: any) => setPage(p)}
                        userResultModal={userResultModal}
                        setUserResultModal={(bool: boolean) => setUserResultModal(bool)}
                    />

                </div>
            </div>
        </div>
    );
};

export default Report;