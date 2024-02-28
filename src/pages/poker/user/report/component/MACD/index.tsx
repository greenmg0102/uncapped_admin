import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { profiteChartOption, lossChartOption, selectedBitCoinChart } from './setting'
import Category from './Category'
import InfoAndOption from './InfoAndOption'
import { macdSortCard } from '../../../../../../utils/actionValidation/reporting/macd'
import { macePairSort } from '../../../../../../utils/actionValidation/reporting/macePairSort'
import { maceDate } from '../../../../../../utils/actionValidation/reporting/maceDate'
import { macd_pair, macd_suited, macd_offsuited, macd_bb100, macd_allin_bb100, macd_BB100, accordingToDate } from '../../../../../../utils/functions/user/report/MACD'

const MACD = ({ range, actionType, userInfoResult, reportingResult, setHandType, setActionType, setRange }: any) => {

    const [allValue, setAllValue] = useState<any>({
        Pairs: {
            id: 1,
            title: 'Pairs',
            alias: 'AA',
            value: 170.46,
            perc: 2.35,
            marketcap: 148.75,
            volume: 22.9,
            supply: 18.17,
            highest: '19,891.00',
            isUp: true,
            series: []
        },
        Suited: {
            id: 2,
            title: 'Suited',
            alias: 'AKs',
            value: 140.67,
            perc: 1.24,
            marketcap: 130.89,
            volume: 32.0,
            supply: 23.56,
            highest: '18,568.23',
            isUp: true,
            series: []
        },
        Offsuit: {
            id: 3,
            title: 'Offsuit',
            alias: 'AKo',
            value: 58.41,
            perc: 1.35,
            marketcap: 150.26,
            volume: 22.23,
            supply: 12.25,
            highest: '19,256.35',
            isUp: true,
            series: []
        },
        bb100: {
            id: 4,
            title: 'bb100',
            alias: 'bb luck histogram',
            value: 180.36,
            perc: 2.0,
            marketcap: 150.36,
            volume: 24.25,
            supply: 15.5,
            highest: '18,056.00',
            isUp: true,
            series: []
        },
        Date: {
            id: 7,
            title: 'Date',
            alias: 'Playing count per month',
            value: 170.84,
            perc: 1.9,
            marketcap: 185.25,
            volume: 25.25,
            supply: 20.47,
            highest: '19,800.00',
            isUp: true,
            series: []
        }
    })

    const [currentChart, setCurrentChart] = useState(allValue["Pairs"]);
    const [isShowCryptoMenu, setIsShowCryptoMenu] = useState(false);
    const [xAxiosList, setXAxiosList] = useState({
        Pairs: [],
        Suited: [],
        Offsuit: [],
        Date: [],
        bb100: []
    })

    const bufferCurrentChart = (data: any) => {
        setHandType(data.title)
        setCurrentChart(data)
    }

    console.log("allValue", allValue);
    

    useEffect(() => {

        if (
            Object.keys(userInfoResult).length > 0 &&
            Object.keys(reportingResult).length > 0
        ) {

            let { pair, suited, Offsuit } = macePairSort(reportingResult, userInfoResult, actionType, range)

            let realPair = allValue.Pairs
            realPair.series = [
                { type: 'line', name: "GTO", data: pair.reportResult },
                { type: 'line', name: "User Hand", data: pair.userResult },
                { type: 'bar', name: "Difference", data: pair.differeceResult }
            ]

            let realSuited = allValue.Suited
            realSuited.series = [
                { type: 'line', name: "GTO", data: suited.reportResult },
                { type: 'line', name: "User Hand", data: suited.userResult },
                { type: 'bar', name: "Difference", data: suited.differeceResult }
            ]

            let realOffSuited = allValue.Offsuit
            realOffSuited.series = [
                { type: 'line', name: "GTO", data: Offsuit.reportResult },
                { type: 'line', name: "User Hand", data: Offsuit.userResult },
                { type: 'bar', name: "Difference", data: Offsuit.differeceResult }
            ]

            setAllValue({ ...allValue, Pairs: realPair, Suited: realSuited, Offsuit: realOffSuited })
            setXAxiosList({ ...xAxiosList, Pairs: pair.pairX, Suited: suited.suitedX, Offsuit: Offsuit.offSuitedX })

            async function fetchDataDate() {
                let dateResult = await accordingToDate({})
                let { count, xAxios } = maceDate(dateResult, 'count', 'date')

                let realDate = allValue.Date
                realDate.series = [
                    { type: 'line', name: "count", data: count },
                ]

                setAllValue({ ...allValue, Date: realDate })
                setXAxiosList(prevState => ({ ...prevState, Date: xAxios }));

            }
            fetchDataDate()

            async function fetchDatabb100() {

                let bb100Result = await macd_bb100({})
                let allinbb100Result = await macd_allin_bb100({})

                let { count: bbCount, xAxios: bbXAxios } = maceDate(bb100Result, 'bb100', '_id')
                let { count: allbbCount, xAxios: allbbXAxios } = maceDate(allinbb100Result, 'allinbb100', '_id')

                let realbb100 = allValue.bb100

                realbb100.series = [
                    { type: 'line', name: "bb/100", data: bbCount },
                    { type: 'line', name: "Allin Aju bb/100", data: allbbCount }
                ]

                setAllValue({ ...allValue, bb100: realbb100 })
                setXAxiosList(prevState => ({ ...prevState, bb100: bbXAxios }));

            }
            fetchDatabb100()

            async function fetchDataallinbb100() {

                let allinbb100Result = await macd_allin_bb100({})
                let { count, xAxios } = maceDate(allinbb100Result, 'allinbb100', '_id')

                let realAllinbb100 = allValue.Allinbb100
                realAllinbb100.series = [
                    { type: 'line', name: "Allin Aju bb/100", data: count },
                ]
                setAllValue({ ...allValue, Allinbb100: realAllinbb100 })
                setXAxiosList(prevState => ({ ...prevState, Allinbb100: xAxios }));

            }
            fetchDataallinbb100()
        }

    }, [userInfoResult, reportingResult, actionType, range])

    console.log("!!!!", selectedBitCoinChart(xAxiosList, currentChart.title).options);
    

    return (
        <div>
            {
                allValue.Pairs.series.length === 0 &&
                    allValue.Suited.series.length === 0 &&
                    allValue.Offsuit.series.length === 0 ?
                    <div className='h-[250px] sm:h-[450px] flex flex-col justify-center items-center w-full'>
                        <svg version="1.1" id="Layer_1" className='w-24' fill="#00cf55" x="0px" y="0px" width="122.879px" height="122.102px" viewBox="0 0 122.879 122.102" enableBackground="new 0 0 122.879 122.102"><g><path d="M9.96,0h102.96c2.744,0,5.232,1.117,7.035,2.919c1.801,1.803,2.924,4.288,2.924,7.032v102.201 c0,2.74-1.123,5.229-2.924,7.031c-1.803,1.805-4.291,2.918-7.035,2.918H9.96c-2.745,0-5.233-1.113-7.035-2.918 C1.123,117.381,0,114.893,0,112.152V9.951c0-2.745,1.123-5.229,2.925-7.032C4.727,1.117,7.215,0,9.96,0L9.96,0z M80.629,41.732 h7.365V17.8c0-1.031,0.416-1.96,1.088-2.634c0.678-0.674,1.605-1.088,2.633-1.088c1.029,0,1.961,0.414,2.631,1.088 c0.674,0.674,1.092,1.603,1.092,2.634v23.932h7.359c2.205,0,4.01,1.804,4.01,4.009l0,0c0,2.206-1.805,4.009-4.01,4.009h-7.359 v36.488c0,1.027-0.418,1.959-1.092,2.629c-0.67,0.672-1.602,1.092-2.631,1.092c-1.027,0-1.955-0.42-2.633-1.092 c-0.672-0.67-1.088-1.602-1.088-2.629V49.75h-7.365c-2.205,0-4.008-1.804-4.008-4.009l0,0 C76.621,43.536,78.424,41.732,80.629,41.732L80.629,41.732z M50.165,58.956h7.362V17.8c0-1.031,0.417-1.96,1.091-2.634 c0.671-0.674,1.603-1.088,2.633-1.088c1.022,0,1.956,0.414,2.628,1.088c0.674,0.674,1.088,1.603,1.088,2.634v41.155h7.365 c2.205,0,4.01,1.804,4.01,4.009l0,0c0,2.205-1.805,4.01-4.01,4.01h-7.365v19.264c0,1.027-0.414,1.959-1.088,2.629 c-0.672,0.672-1.605,1.092-2.628,1.092c-1.031,0-1.962-0.42-2.633-1.092c-0.674-0.67-1.091-1.602-1.091-2.629V66.975h-7.362 c-2.205,0-4.009-1.805-4.009-4.01l0,0C46.155,60.759,47.959,58.956,50.165,58.956L50.165,58.956z M19.971,41.35h7.194V17.8 c0-1.031,0.419-1.96,1.094-2.634c0.671-0.674,1.603-1.088,2.63-1.088c1.026,0,1.957,0.414,2.631,1.088 c0.674,0.674,1.088,1.603,1.088,2.634V41.35h7.53c2.205,0,4.009,1.804,4.009,4.009l0,0c0,2.205-1.804,4.009-4.009,4.009h-7.53 v36.871c0,1.027-0.415,1.959-1.088,2.629c-0.674,0.672-1.605,1.092-2.631,1.092c-1.028,0-1.959-0.42-2.63-1.092 c-0.674-0.67-1.094-1.602-1.094-2.629V49.368h-7.194c-2.205,0-4.009-1.804-4.009-4.009l0,0 C15.962,43.153,17.766,41.35,19.971,41.35L19.971,41.35z M91.715,95.18c2.205,0,4.203,0.895,5.658,2.346l0.006-0.004 c1.449,1.451,2.346,3.453,2.346,5.668c0,2.199-0.896,4.201-2.346,5.652l-0.012,0.018c-1.455,1.445-3.457,2.338-5.652,2.338 c-2.209,0-4.213-0.896-5.662-2.344l-0.123-0.139c-1.377-1.439-2.227-3.387-2.227-5.525c0-2.215,0.9-4.217,2.35-5.668 C87.502,96.074,89.506,95.18,91.715,95.18L91.715,95.18z M94.449,100.447c-0.691-0.693-1.66-1.123-2.734-1.123 c-1.064,0-2.033,0.432-2.732,1.131c-0.697,0.697-1.135,1.662-1.135,2.734c0,1.025,0.4,1.955,1.043,2.646l0.092,0.084 c0.699,0.699,1.668,1.131,2.732,1.131c1.074,0,2.043-0.426,2.734-1.123l0.008-0.008c0.691-0.695,1.127-1.662,1.127-2.73 c0-1.072-0.436-2.037-1.135-2.734l0.006-0.002L94.449,100.447L94.449,100.447z M61.249,95.18c2.205,0,4.207,0.895,5.658,2.346 l0.004-0.004c1.451,1.451,2.35,3.453,2.35,5.668c0,2.205-0.898,4.203-2.354,5.658l0.004,0.006 c-1.445,1.447-3.451,2.344-5.662,2.344c-2.202,0-4.199-0.896-5.655-2.344l-0.014-0.018c-1.448-1.451-2.339-3.447-2.339-5.646 c0-2.215,0.897-4.217,2.348-5.668l0.132-0.123C57.159,96.025,59.109,95.18,61.249,95.18L61.249,95.18z M63.982,100.447 c-0.697-0.693-1.662-1.123-2.734-1.123c-1.028,0-1.959,0.391-2.648,1.037l-0.083,0.094c-0.7,0.697-1.134,1.662-1.134,2.734 c0,1.068,0.428,2.035,1.125,2.73l0.009,0.008c0.691,0.697,1.659,1.123,2.73,1.123c1.068,0,2.031-0.432,2.734-1.131l0.006,0.002 l0.002-0.002c0.695-0.695,1.123-1.662,1.123-2.73c0-1.072-0.432-2.037-1.131-2.734l0.006-0.002L63.982,100.447L63.982,100.447z M30.89,95.18c2.211,0,4.216,0.895,5.661,2.342c1.451,1.451,2.351,3.453,2.351,5.668c0,2.205-0.9,4.203-2.354,5.658l0.003,0.006 c-1.445,1.447-3.45,2.344-5.661,2.344c-2.202,0-4.201-0.896-5.658-2.344l-0.012-0.018c-1.448-1.451-2.342-3.447-2.342-5.646 c0-2.215,0.896-4.217,2.348-5.668l0.131-0.123C26.797,96.025,28.748,95.18,30.89,95.18L30.89,95.18z M33.621,100.455 c-0.697-0.699-1.665-1.131-2.731-1.131c-1.028,0-1.959,0.391-2.647,1.037l-0.085,0.094c-0.7,0.697-1.131,1.662-1.131,2.734 c0,1.068,0.429,2.035,1.123,2.73l0.009,0.008c0.691,0.697,1.662,1.123,2.733,1.123c1.066,0,2.034-0.432,2.731-1.131l0.006,0.002 l0.003-0.002c0.696-0.695,1.125-1.662,1.125-2.73C34.754,102.117,34.323,101.152,33.621,100.455L33.621,100.455z M112.92,4.981 H9.96c-1.369,0-2.611,0.56-3.51,1.463c-0.903,0.9-1.463,2.145-1.463,3.507v102.201c0,1.361,0.56,2.607,1.463,3.506 c0.899,0.906,2.142,1.461,3.51,1.461h102.96c1.369,0,2.611-0.555,3.51-1.461c0.902-0.898,1.463-2.145,1.463-3.506V9.951 c0-1.363-0.561-2.607-1.463-3.507C115.531,5.541,114.289,4.981,112.92,4.981L112.92,4.981z"/></g></svg>
                        <p className='text-[20px] mt-4'>Please select more detail filtering option.</p>
                    </div>
                    :
                    <div className="flex flex-col xl:flex-row gap-2 relative">
                        <div className={`${isShowCryptoMenu ? '!block h-full xl:h-auto' : ''} panel absolute xl:relative p-0 flex-none w-80 border-0 h-[525px] overflow-y-auto z-10 xl:block divide-y divide-[#ebedf2] dark:divide-[#191e3a] hidden`}>
                            <button onClick={() => setIsShowCryptoMenu(!isShowCryptoMenu)} type="button" className="xl:hidden hover:text-primary block ltr:mr-5 rtl:ml-5">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 7L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path opacity="0.5" d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M20 17L4 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </button>
                            {Object.keys(allValue).sort((a, b) => allValue[a].id - allValue[b].id).map((key: any) => {
                                return (
                                    <Category
                                        key={allValue[key].id}
                                        data={allValue[key]}
                                        setCurrentChart={(data: any) => bufferCurrentChart(data)}
                                        setIsShowCryptoMenu={(bool: boolean) => setIsShowCryptoMenu(bool)}
                                        isShowCryptoMenu={isShowCryptoMenu}
                                        currentChart={currentChart}
                                    />
                                );
                            })}

                        </div>

                        <div className="panel p-0 flex-1">

                            <InfoAndOption
                                range={range}
                                actionType={actionType}
                                currentChart={currentChart}
                                isShowCryptoMenu={isShowCryptoMenu}
                                setRange={(range: any) => setRange(() => range)}
                                setActionType={(actionType: any) => setActionType(() => actionType)}
                                setIsShowCryptoMenu={(bool: any) => setIsShowCryptoMenu(bool)}
                            />

                            <div className="flex-1 px-4 overflow-hidden">
                                <ReactApexChart
                                    series={currentChart.series}
                                    options={selectedBitCoinChart(xAxiosList, currentChart.title).options}
                                    height={431}
                                />
                            </div>
                        </div>
                    </div>
            }

        </div>
    );
};

export default MACD;



