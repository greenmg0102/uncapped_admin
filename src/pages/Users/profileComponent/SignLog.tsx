import { DataTable } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { activityLogRead } from '../../../utils/functions/usage/profile/profile'

const SignLog = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Basic Table'));
    });
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [recordsData, setRecordsData] = useState([]);
    const [realLog, setRealLog] = useState([]);

    useEffect(() => { setPage(1) }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecordsData(realLog.slice(from, to));
    }, [page, pageSize, realLog]);

    useEffect(() => {
        async function fetchData() {
            let data = {
                page: page,
                pageSize: pageSize,
            }
            let result = await activityLogRead(data).then()

            setRealLog(result)
        }
        fetchData()
    }, [])

    return (
        <div className="panel mt-6">
            <h5 className="font-semibold text-lg dark:text-white-light mb-5">Activity Log</h5>
            <div className="datatables">
                <DataTable
                    noRecordsText="No results match your search query"
                    highlightOnHover
                    className="whitespace-nowrap table-hover"
                    records={recordsData}
                    columns={[
                        { accessor: 'Date', title: 'Date & Time' },
                        { accessor: 'Country', title: 'Country' },
                        { accessor: 'Ip', title: 'IP address' },
                        { accessor: 'Activity', title: 'Activity' },
                    ]}
                    totalRecords={realLog.length}
                    recordsPerPage={pageSize}
                    page={page}
                    onPageChange={(p) => setPage(p)}
                    recordsPerPageOptions={PAGE_SIZES}
                    onRecordsPerPageChange={setPageSize}
                    minHeight={200}
                    paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                />
            </div>
        </div>
    );
};

export default SignLog;
