import { useEffect, useState } from 'react';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useNavigate } from "react-router-dom";

import sortBy from 'lodash/sortBy';
import { useDispatch } from 'react-redux';
import clsx from 'clsx'
import Filtering from './Filtering'
import { setPageTitle } from '../../../../../store/themeConfigSlice';
import { getHands } from '../../../../../utils/functions/HandAPI'
import SmallPlayCard from '../../../../../components/UI/playcard/SmallPlayCard';
import { pokerMarkList } from '../../../../../utils/reference'

const Basic = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [rowData, setRowData] = useState<any>([])

    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 40, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(rowData, '_id'));
    const [totalCount, setTotalCount] = useState(0)
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: '_id', direction: 'asc' });

    const [dragModel, setDragModel] = useState(false)

    const currentDate = new Date().toISOString().split('T')[0];

    const [filter, setFilter] = useState({
        pokerType: "N/A",
        tableSize: "N/A",
        heroPosition: "N/A",
        range: `2023-11-30 to ${currentDate}`
    })

    useEffect(() => { dispatch(setPageTitle('Advanced Table')); });
    useEffect(() => { fetchMyAPI() }, [dispatch, pageSize, page])

    async function fetchMyAPI() {
        const data = {
            pageNumber: page,
            pageSize: pageSize,
            ...filter
        }
        const response = await getHands(data)

        setInitialRecords(() => response.data.hands)
        setTotalCount(response.data.totalCount)
    }

    useEffect(() => { setPage(1); }, [pageSize]);

    useEffect(() => {
        const data = sortBy(initialRecords, sortStatus.columnAccessor);
        setInitialRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
        setPage(1);
    }, [sortStatus]);

    const hero8Site = ["UTG", "UTG+1", "LJ", "HJ", "CO", "BTN", "SB", "BB"]

    const hero9Site = ["UTG", "UTG+1", "UTG+2", "LJ", "HJ", "CO", "BTN", "SB", "BB"]

    const heroFinding = (playlist: any): string => {
        let index = playlist.findIndex((item: any, index: number) => {
            return item.playerName === "Hero";
        });

        if (index === -1) return "N/A";
        else {
            if (playlist.length > 8) return hero9Site[index];
            else return hero8Site[index];
        }
    };

    const holdCard = (holeCardInfo: { rank: string, suit: string }): any => <SmallPlayCard holeCardInfo={holeCardInfo} />

    const checkDetailInfo = (_id: any) => navigate("/user/poker/process/" + _id);

    const actionSet: { [key: string]: string } = {
        "fold": 'F',
        "folds": 'F',
        "raise": 'R',
        "all in, raise": 'R',
        "bet": 'B',
        "all in, bet": 'B',
        "call": 'C',
        "all in, call": 'C',
        "check": 'X',
        "all in, check": 'X',
    };

    return (
        <div className="panel">
            <Filtering
                filter={filter}
                rowData={rowData}
                dragModel={dragModel}
                fetchMyAPI={() => fetchMyAPI()}
                setFilter={(total: any) => setFilter(total)}
                setDragModel={(bool: any) => setDragModel(bool)}
            />

            <div className="datatables">
                <DataTable
                    noRecordsText="No results match your search query"
                    highlightOnHover
                    className="whitespace-nowrap table-hover"
                    records={initialRecords}
                    columns={[
                        {
                            accessor: 'handId', title: 'DETAILS', sortable: true, render: ({ handId }) => <div className="text-info flex justify-center items-center">
                                <div className='w-[20px] h-[20px] hover:w-[40px] hover:h-[40px] transition-all'>
                                    <svg
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 1024 1024" 
                                        className="w-[20px] hover:cursor-pointer hover:w-[40px] transition-all"
                                        onClick={() => checkDetailInfo(handId)}
                                    >
                                        <path d="M391.166 156.304H501.7c228.857 0 422.263 184.597 422.263 403.115C923.963 780.312 742.427 960 519.315 960c-235.128 0-419.278-193.554-419.278-440.625 0-10.564 8.584-19.11 19.109-19.11h113.159c10.602 0 19.11 8.546 19.11 19.11 0 218.781 138.391 296.747 267.9 296.747 134.92 0 253.27-123.2 253.27-263.605 0-131.897-124.059-243.34-270.885-243.34l-106.555-3.227-3.979-149.646z" fill="#FF3B30" /><path d="M407.884 309.176v77.275c0 6.941-3.73 13.267-9.777 16.664-6.011 3.398-13.398 3.209-19.295-0.375L128.305 249.013c-5.71-3.508-9.147-9.669-9.147-16.383 0.078-6.681 3.585-12.876 9.333-16.312L378.998 66.729c5.894-3.542 13.285-3.657 19.221-0.221 6.008 3.358 9.665 9.702 9.665 16.609V309.176z" fill="#FF3B30" />
                                        <path d="M439.717 307.301l40.724-150.999h-72.557v150.035z" fill="#070707" />
                                    </svg>
                                    {/* <img
                                        src="/assets/images/pokerImage/replay.png"
                                        alt="/assets/images/pokerImage/replay.png"
                                        className="max-w-[20px] w-full m-auto mx-4 hover:cursor-pointer hover:max-w-[30px]"

                                    /> */}
                                </div>
                            </div>
                        },
                        {
                            accessor: 'pokerRoomId', title: 'PORKER', sortable: true, render: ({ pokerRoomId }) =>
                                <div className="text-info flex justify-center">
                                    <img
                                        src={pokerMarkList.filter((item: any) => item.value === pokerRoomId)[0].image}
                                        alt={pokerMarkList.filter((item: any) => item.value === pokerRoomId)[0].image}
                                        className="max-w-[20px] w-full m-auto mx-4"
                                    />
                                </div>
                        },
                        { accessor: 'gameFormat', title: 'GAME FORMAT', sortable: true, render: ({ gameFormat }) => <strong className="text-info flex justify-center">{gameFormat}</strong> },
                        { accessor: 'maxTableSeats', title: 'TABLE SIZE', sortable: true, render: ({ maxTableSeats }) => <strong className="text-info flex justify-center">{maxTableSeats}-max</strong> },
                        { accessor: 'players', title: 'HERO', sortable: true, render: ({ players }) => <strong className="text-info flex justify-center">{heroFinding(players)}</strong> },
                        {
                            accessor: 'holeCards', title: 'HOLE CARDS', sortable: true, render: ({ holeCards }) => <strong className="text-info flex justify-center">
                                <div className='flex jsutify-center items-center'>
                                    {holeCards[0].cards.map((item: any, index: any) =>
                                        <div key={index}>
                                            {holdCard(item)}
                                        </div>
                                    )}
                                </div>
                            </strong>
                        },
                        {
                            accessor: 'communityCards', title: 'BOARD', sortable: true, render: ({ communityCards }) => <strong className="text-info flex justify-start">
                                <div className='flex jsutify-center items-center'>
                                    {communityCards.map((item: any, index: any) =>
                                        <div key={index}>
                                            {holdCard(item)}
                                        </div>
                                    )}
                                </div>
                            </strong>
                        },
                        {
                            accessor: 'actions', title: 'ACTIONS', sortable: true, render: ({ actions }) =>
                                <strong className="text-info flex justify-start items-center">
                                    <div className={clsx(actions.findIndex((item: any) => item.street === "preFlop") !== -1 ? 'mr-1' : 'hidden')}>
                                        <span className='text-white'>Preflop</span>
                                        <div className='flex justify-center items-center'>
                                            {actions.filter((item: any) => item.street === "preFlop").map((each: any, order: any) =>
                                                <span key={order}>{actionSet[each.action]}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className={clsx(actions.findIndex((item: any) => item.street === "Flop") !== -1 ? 'mr-1' : 'hidden')}>
                                        <span className='text-white'>Flop</span>
                                        <div className='flex justify-center items-center'>
                                            {actions.filter((item: any) => item.street === "Flop").map((each: any, order: any) =>
                                                <span key={order}>{actionSet[each.action]}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className={clsx(actions.findIndex((item: any) => item.street === "Turn") !== -1 ? 'mr-1' : 'hidden')}>
                                        <span className='text-white'>Turn</span>
                                        <div className='flex justify-center items-center'>
                                            {actions.filter((item: any) => item.street === "preFlop").map((each: any, order: any) =>
                                                <span key={order}>{actionSet[each.action]}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className={clsx(actions.findIndex((item: any) => item.street === "River") !== -1 ? 'mr-1' : 'hidden')}>
                                        <span className='text-white'>River</span>
                                        <div className='flex justify-center items-center'>
                                            {actions.filter((item: any) => item.street === "River").map((each: any, order: any) =>
                                                <span key={order} className='text-white'>{actionSet[each.action]}</span>
                                            )}
                                        </div>
                                    </div>
                                </strong>
                        },
                        { accessor: 'handDate', title: 'PLAYED DATE', sortable: true, render: ({ handDate }) => <strong className="text-info flex justify-center">{handDate}</strong> },
                        { accessor: 'date', title: 'UPLOADED DATE', sortable: true, render: ({ date }) => <strong className="text-info flex justify-center">{date.toString().slice(0, 10).split("-").join("/")}</strong> },
                    ]}
                    totalRecords={totalCount}
                    recordsPerPage={pageSize}
                    page={page}
                    onPageChange={(p) => setPage(p)}
                    recordsPerPageOptions={PAGE_SIZES}
                    onRecordsPerPageChange={setPageSize}
                    sortStatus={sortStatus}
                    onSortStatusChange={setSortStatus}
                    minHeight={200}
                    paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                />
            </div>
        </div>
    );
};

export default Basic;
