import Dropdown from '../../../../../../components/Dropdown';
import Flatpickr from 'react-flatpickr';

export default function DataFilters({ pokerType, filter, tableSize, valueStatus, setFilter, bufferRange, searchApply }: any) {

    return (
        <div className=''>
            <p className='text-center font-bold text-[16px] text-gray-300 rounded-[4px] mb-2'>
                Data Filters
            </p>
            <div className='pl-1 mb-1 flex justify-start flex-wrap'>
                <div className="flex justify-start items-center mb-2 mr-2">
                    <p className="w-[80px] text-left mr-0">Poker Type </p>
                    <div className="inline-flex">
                        <button className="btn btn-outline-primary ltr:rounded-r-none rtl:rounded-l-none btn-sm">{filter.pokerType}</button>
                        <div className="dropdown">
                            <Dropdown
                                placement='bottom-end'
                                btnClassName="btn  btn-sm btn-outline-primary ltr:rounded-l-none rtl:rounded-r-none dropdown-toggle before:border-[5px] before:border-l-transparent before:border-r-transparent before:border-t-inherit before:border-b-0 before:inline-block hover:before:border-t-white-light h-full"
                                button={<span className="sr-only"></span>}
                            >
                                <ul className="!min-w-[170px]">
                                    {pokerType.map((item: any, index: any) =>
                                        <li key={index}>
                                            <button
                                                type="button"
                                                onClick={() => setFilter({ ...filter, pokerType: item.value })}
                                            >
                                                {item.title}
                                            </button>
                                        </li>
                                    )}
                                </ul>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start items-center mb-2 mr-2">
                    <p className="w-[80px] text-left mr-0">Table Size </p>
                    <div className="inline-flex">
                        <button className="btn btn-outline-primary ltr:rounded-r-none rtl:rounded-l-none btn-sm">{filter.tableSize}</button>
                        <div className="dropdown">
                            <Dropdown
                                placement='bottom-end'
                                btnClassName="btn  btn-sm btn-outline-primary ltr:rounded-l-none rtl:rounded-r-none dropdown-toggle before:border-[5px] before:border-l-transparent before:border-r-transparent before:border-t-inherit before:border-b-0 before:inline-block hover:before:border-t-white-light h-full"
                                button={<span className="sr-only"></span>}
                            >
                                <ul className="!min-w-[170px]">
                                    {tableSize.map((item: any, index: any) =>
                                        <li key={index}>
                                            <button
                                                type="button"
                                                onClick={() => setFilter({ ...filter, tableSize: item.value })}
                                            >
                                                {item.title}
                                            </button>
                                        </li>
                                    )}
                                </ul>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mb-2">
                    <p className="w-[25px] text-left mr-0 hidden 2xl:block">Date </p>
                    <Flatpickr
                        options={{
                            mode: 'range',
                            dateFormat: 'Y-m-d',
                            position: 'auto left',
                        }}
                        value={filter.range}
                        className="form-input form-input-sm  !border-primary !w-[150px] !px-1 !py-[5px]"
                        onChange={(range: any) => bufferRange(range)}
                    />
                </div>
                {/* <div className='flex justify-between items-center'>
                    <button
                        type="button"
                        disabled={
                            valueStatus.action !== "" &&
                                filter.pokerType !== "N/A" &&
                                filter.tableSize !== "N/A" &&
                                filter.range !== "2023-11-20 to 2023-11-23"
                                ? false : true
                        }
                        className="btn btn-outline-success btn-sm w-1/3 disable"
                        onClick={searchApply}
                    >
                        Apply
                    </button>

                    <button
                        type="button"
                        className="btn btn-outline-info btn-sm w-1/3"
                        onClick={() => setFilter({
                            pokerType: "N/A",
                            tableSize: "N/A",
                            heroPosition: "N/A",
                            range: "'2023-11-20 to 2023-11-23'"
                        })}
                    >
                        Clean
                    </button>
                </div> */}
            </div>
        </div>
    )
}