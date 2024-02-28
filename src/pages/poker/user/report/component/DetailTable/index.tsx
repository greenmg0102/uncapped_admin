import { useState, useEffect } from 'react';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import clsx from 'clsx'
import sortBy from 'lodash/sortBy';
import { hero8Site } from '../../../../../../utils/reference/playCardColor'
import CircleChart from "./CircleChart"


const DetailTable = ({ reportSetting, setReportSetting, detailedTable }: any) => {

    const [initialRecords, setInitialRecords] = useState(sortBy(detailedTable, '_id'));

    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: 'id', direction: 'asc' });

    useEffect(() => {
        setInitialRecords(() => {
            return detailedTable.filter((item: any) => {
                return (
                    item._id ||
                    item.totalCount ||
                    item.bb100 ||
                    item.allinbb100 ||
                    item.VPIP ||
                    item.PFR ||
                    item.RFI ||
                    item['vs RFI'] ||
                    item["3-Bet"] ||
                    item["vs 3-Bet"] ||
                    item["4-Bet"] ||
                    item["vs 4-Bet"] ||
                    item["5-Bet"]
                );
            });
        });
    }, [search]);

    useEffect(() => {
        const data = sortBy(initialRecords, sortStatus.columnAccessor);
        setInitialRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
    }, [sortStatus]);

    const [luckWheel, setLuckWheel] = useState({
        bb: 0, allinBB: 0
    })

    useEffect(() => {

        if (Object.keys(detailedTable).length > 0) {

            let bb = 0
            let alliBB = 0

            Object.keys(detailedTable).forEach((key: any) => {
                bb += Number(detailedTable[key].bb100) / (Number(detailedTable[key].totalCount) / 100)
                alliBB += Number(detailedTable[key].allinbb100) / (Number(detailedTable[key].totalCount) / 100)
            })

            setLuckWheel({
                ...luckWheel,
                bb: Number((bb / Object.keys(detailedTable).length).toFixed(2)),
                allinBB: Number((alliBB / Object.keys(detailedTable).length).toFixed(2))
            })
        }

    }, [detailedTable])

    return (
        <div>
            {
                detailedTable.length === 0 ?
                    <div className='h-[250px] sm:h-[450px] flex flex-col justify-center items-center w-full'>
                        <svg className='w-24' fill="#00cf55" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 412 511.56"><path fill-rule="nonzero" d="M32.24 0h229.59a9.06 9.06 0 016.77 3.04l140.63 136.27a8.971 8.971 0 012.74 6.48h.03V479.32c0 8.83-3.63 16.88-9.47 22.74l-.05.05c-5.86 5.83-13.9 9.45-22.72 9.45H32.24c-8.87 0-16.94-3.63-22.78-9.47C3.63 496.26 0 488.19 0 479.32V32.24C0 23.37 3.63 15.3 9.46 9.46 15.3 3.63 23.37 0 32.24 0zm56.24 414.35c-5.01 0-9.08-4.06-9.08-9.07 0-5.01 4.07-9.08 9.08-9.08h235.04c5.01 0 9.07 4.07 9.07 9.08s-4.06 9.07-9.07 9.07H88.48zm0-74.22c-5.01 0-9.08-4.06-9.08-9.07 0-5.01 4.07-9.08 9.08-9.08h231.38c5.01 0 9.08 4.07 9.08 9.08s-4.07 9.07-9.08 9.07H88.48zm0-74.22c-5.01 0-9.08-4.07-9.08-9.08s4.07-9.07 9.08-9.07H275.7c5.01 0 9.08 4.06 9.08 9.07 0 5.01-4.07 9.08-9.08 9.08H88.48zm0-74.23c-5.01 0-9.08-4.06-9.08-9.07 0-5.01 4.07-9.08 9.08-9.08h114.45c5.01 0 9.07 4.07 9.07 9.08s-4.06 9.07-9.07 9.07H88.48zm0-74.22c-5.01 0-9.08-4.06-9.08-9.07a9.08 9.08 0 019.08-9.08h56.29a9.08 9.08 0 019.08 9.08c0 5.01-4.07 9.07-9.08 9.07H88.48zm176.37-92.85v114.4h118.07L264.85 24.61zm129 132.55H255.78c-5.01 0-9.08-4.07-9.08-9.08V18.15H32.24c-3.86 0-7.39 1.59-9.95 4.15-2.55 2.55-4.14 6.08-4.14 9.94v447.08c0 3.86 1.59 7.39 4.14 9.94 2.56 2.56 6.09 4.15 9.95 4.15h347.52c3.89 0 7.41-1.58 9.94-4.11l.04-.04c2.53-2.53 4.11-6.05 4.11-9.94V157.16z" /></svg>
                        <p className='text-[20px] mt-4'>You did not upload any hands</p>
                    </div>
                    :
                    <div className="flex justify-between items-start flex-wrap border border-gray-900 p-[4px] rounded-[12px]">

                        <div className="w-full md:w-1/4 p-[4px] grid grid-cols-1 gap-4 content-between">
                            <div className="w-full flex justify-center items-center">
                                <CircleChart luckWheel={luckWheel} />
                            </div>
                        </div>

                        <div className="w-full md:w-3/4 p-[4px]">

                            <div className="datatables cursor-pointer">
                                <DataTable
                                    highlightOnHover
                                    className="whitespace-nowrap table-hover"
                                    records={initialRecords}
                                    columns={[
                                        {
                                            accessor: '_id',
                                            title: 'Position',
                                            sortable: true,
                                            render: ({ _id }: any) => (
                                                <p
                                                    className={
                                                        clsx(
                                                            "text-center font-bold text-gray-400 ",
                                                            reportSetting.position === _id && reportSetting.action === "" ? "text-blue-500 text-[18px]" : ""
                                                        )
                                                    }
                                                    onClick={() => setReportSetting(_id, "")}
                                                >
                                                    {hero8Site[_id]}
                                                </p>
                                            )
                                        },
                                        {
                                            accessor: 'totalCount',
                                            title: 'Hands',
                                            sortable: true,
                                            render: ({ totalCount }) => (
                                                <p className="text-center">
                                                    {totalCount}
                                                </p>
                                            ),
                                        },
                                        {
                                            accessor: 'bb100',
                                            title: 'bb/100',
                                            sortable: true,
                                            render: ({ bb100, totalCount }) => (
                                                <p
                                                    className={
                                                        clsx(
                                                            "text-center font-bold",
                                                            (Number(bb100) / (Number(totalCount) / 100)) > 0 ? "text-green-500" : "text-red-500"
                                                        )
                                                    }
                                                >
                                                    {(Number(bb100) / (Number(totalCount) / 100)).toFixed(2)}
                                                </p>
                                            ),
                                        },
                                        {
                                            accessor: 'allinbb100',
                                            title: 'All-in bb/100',
                                            sortable: true,
                                            render: ({ allinbb100, totalCount }) => (
                                                <p className={clsx("text-center w-[100px] font-bold", (Number(allinbb100) / (Number(totalCount) / 100)) > 0 ? "text-green-500" : "text-red-500")}>
                                                    {(Number(allinbb100) / (Number(totalCount) / 100)).toFixed(2)}
                                                </p>
                                            ),
                                        },
                                        {
                                            accessor: 'VPIP',
                                            title: 'VPIP',
                                            sortable: true,
                                            render: ({ VPIP, _id, totalCount }) => (
                                                <p
                                                    className={
                                                        clsx(
                                                            "text-center hover:text-yellow-500 hover:text-[18px] transition-all",
                                                            (reportSetting.position === _id && reportSetting.action === "VPIP") ||
                                                                (reportSetting.position === _id && reportSetting.action === "") ? "text-yellow-500 text-[18px]" : ""
                                                        )
                                                    }
                                                    onClick={() => setReportSetting(_id, "VPIP")}
                                                >
                                                    {(Number(VPIP) / (Number(totalCount) / 100)).toFixed(2) === "0.00" ? "-" : (Number(VPIP) / (Number(totalCount) / 100)).toFixed(2)}
                                                </p>
                                            ),
                                        },
                                        {
                                            accessor: 'PFR',
                                            title: 'PFR',
                                            sortable: true,
                                            render: ({ PFR, _id, totalCount }) => (
                                                <p
                                                    className={
                                                        clsx(
                                                            "text-center hover:text-yellow-500 hover:text-[18px] transition-all",
                                                            (reportSetting.position === _id && reportSetting.action === "PFR") ||
                                                                (reportSetting.position === _id && reportSetting.action === "") ? "text-yellow-500 text-[18px]" : ""
                                                        )
                                                    }
                                                    onClick={() => setReportSetting(_id, "PFR")}
                                                >
                                                    {(Number(PFR) / (Number(totalCount) / 100)).toFixed(2) === "0.00" ? "-" : (Number(PFR) / (Number(totalCount) / 100)).toFixed(2)}
                                                </p>
                                            ),
                                        },
                                        {
                                            accessor: 'RFI',
                                            title: 'RFI',
                                            sortable: true,
                                            render: ({ RFI, _id, totalCount }) => (
                                                <p
                                                    className={
                                                        clsx(
                                                            "text-center hover:text-yellow-500 hover:text-[18px] transition-all",
                                                            (reportSetting.position === _id && reportSetting.action === "RFI") ||
                                                                (reportSetting.position === _id && reportSetting.action === "") ? "text-yellow-500 text-[18px]" : ""
                                                        )
                                                    }
                                                    onClick={() => setReportSetting(_id, "RFI")}
                                                >
                                                    {(Number(RFI) / (Number(totalCount) / 100)).toFixed(2) === "0.00" ? "-" : (Number(RFI) / (Number(totalCount) / 100)).toFixed(2)}
                                                </p>
                                            ),
                                        },
                                        {
                                            accessor: 'vs RFI',
                                            title: 'vs RFI',
                                            sortable: true,
                                            render: (item: any) => (
                                                <p
                                                    className={
                                                        clsx(
                                                            "text-center hover:text-yellow-500 hover:text-[18px] transition-all",
                                                            (reportSetting.position === item._id && reportSetting.action === "vs RFI") ||
                                                                (reportSetting.position === item._id && reportSetting.action === "") ? "text-yellow-500 text-[18px]" : ""
                                                        )
                                                    }
                                                    onClick={() => setReportSetting(item._id, "vs RFI")}
                                                >
                                                    {(Number(item["vs RFI"]) / (Number(item.totalCount) / 100)).toFixed(2) === "0.00" ? "-" : (Number(item["vs RFI"]) / (Number(item.totalCount) / 100)).toFixed(2)}
                                                </p>
                                            ),
                                        },
                                        {
                                            accessor: '3-Bet',
                                            title: '3-Bet',
                                            sortable: true,
                                            render: (item: any) => (
                                                <p
                                                    className={
                                                        clsx(
                                                            "text-center hover:text-yellow-500 hover:text-[18px] transition-all",
                                                            (reportSetting.position === item._id && reportSetting.action === "3-Bet") ||
                                                                (reportSetting.position === item._id && reportSetting.action === "") ? "text-yellow-500 text-[18px]" : ""
                                                        )
                                                    }
                                                    onClick={() => setReportSetting(item._id, "3-Bet")}
                                                >
                                                    {(Number(item["3-Bet"]) / (Number(item.totalCount) / 100)).toFixed(2) === "0.00" ? "-" : (Number(item["3-Bet"]) / (Number(item.totalCount) / 100)).toFixed(2)}
                                                </p>
                                            )
                                        },
                                        {
                                            accessor: 'vs 3-Bet',
                                            title: 'vs 3-Bet',
                                            sortable: true,
                                            render: (item: any) => (
                                                <p
                                                    className={
                                                        clsx(
                                                            "text-center hover:text-yellow-500 hover:text-[18px] transition-all",
                                                            (reportSetting.position === item._id && reportSetting.action === "vs 3-Bet") ||
                                                                (reportSetting.position === item._id && reportSetting.action === "") ? "text-yellow-500 text-[18px]" : ""
                                                        )
                                                    }
                                                    onClick={() => setReportSetting(item._id, "vs 3-Bet")}
                                                >
                                                    {(Number(item["vs 3-Bet"]) / (Number(item.totalCount) / 100)).toFixed(2) === "0.00" ? "-" : (Number(item["vs 3-Bet"]) / (Number(item.totalCount) / 100)).toFixed(2)}
                                                </p>
                                            )
                                        },
                                        {
                                            accessor: '4-Bet',
                                            title: '4-Bet',
                                            sortable: true,
                                            render: (item: any) => (
                                                <p
                                                    className={
                                                        clsx(
                                                            "text-center hover:text-yellow-500 hover:text-[18px] transition-all",
                                                            (reportSetting.position === item._id && reportSetting.action === "4-Bet") ||
                                                                (reportSetting.position === item._id && reportSetting.action === "") ? "text-yellow-500 text-[18px]" : ""
                                                        )
                                                    }
                                                    onClick={() => setReportSetting(item._id, "4-Bet")}
                                                >
                                                    {(Number(item["4-Bet"]) / (Number(item.totalCount) / 100)).toFixed(2) === "0.00" ? "-" : (Number(item["4-Bet"]) / (Number(item.totalCount) / 100)).toFixed(2)}
                                                </p>
                                            )
                                        },
                                        {
                                            accessor: 'vs 4-Bet',
                                            title: 'vs 4-Bet',
                                            sortable: true,
                                            render: (item: any) => (
                                                <p
                                                    className={
                                                        clsx(
                                                            "text-center hover:text-yellow-500 hover:text-[18px] transition-all",
                                                            (reportSetting.position === item._id && reportSetting.action === "vs 3-Bet") ||
                                                                (reportSetting.position === item._id && reportSetting.action === "") ? "text-yellow-500 text-[18px]" : ""
                                                        )
                                                    }
                                                    onClick={() => setReportSetting(item._id, "vs 3-Bet")}
                                                >
                                                    {(Number(item["vs 3-Bet"]) / (Number(item.totalCount) / 100)).toFixed(2) === "0.00" ? "-" : (Number(item["vs 3-Bet"]) / (Number(item.totalCount) / 100)).toFixed(2)}
                                                </p>
                                            )
                                        },
                                        {
                                            accessor: '5-Bet',
                                            title: '5-Bet',
                                            sortable: true,
                                            render: (item: any) => (
                                                <p
                                                    className={
                                                        clsx(
                                                            "text-center hover:text-yellow-500 hover:text-[18px] transition-all",
                                                            (reportSetting.position === item._id && reportSetting.action === "5-Bet") ||
                                                                (reportSetting.position === item._id && reportSetting.action === "") ? "text-yellow-500 text-[18px]" : ""
                                                        )
                                                    }
                                                    onClick={() => setReportSetting(item._id, "5-Bet")}
                                                >
                                                    {(Number(item["5-Bet"]) / (Number(item.totalCount) / 100)).toFixed(2) === "0.00" ? "-" : (Number(item["5-Bet"]) / (Number(item.totalCount) / 100)).toFixed(2)}
                                                </p>
                                            )
                                        },
                                    ]}
                                    sortStatus={sortStatus}
                                    onSortStatusChange={setSortStatus}
                                    minHeight={10}
                                />
                            </div>


                        </div>
                    </div>
            }
        </div>
    );
};

export default DetailTable;
