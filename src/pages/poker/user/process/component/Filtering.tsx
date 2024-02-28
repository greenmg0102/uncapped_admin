import Dropdown from '../../../../../components/Dropdown';
import Flatpickr from 'react-flatpickr';
import Download from './Download'
import AdvancedFilter from './AdvancedFilter'
import { pokerType, tableSize, heroPosition } from '../../../../../utils/reference/uploadingFilter'
import 'flatpickr/dist/flatpickr.css';

const Filtering = ({ rowData, filter, setFilter, fetchMyAPI, dragModel, setDragModel }: any) => {

    const bufferRange = (range: any) => {
        const startDate = new Date(Date.parse(range[0]));
        const endDate = new Date(Date.parse(range[1]));
        const formattedRange = `${startDate.toISOString().split('T')[0]} to ${endDate.toISOString().split('T')[0]}`;
        setFilter({ ...filter, range: formattedRange });
    }

    return (
        <div>
            <AdvancedFilter
                dragModel={dragModel}
                setDragModel={(bool: any) => setDragModel(bool)}
            />
            <div className="flex justify-between items-center flex-wrap mb-2 z-[3] block">
                <div className="flex justify-center xl:justify-start items-center flex-wrap">
                    <div className='flex justify-start items-center my-[4px] mr-4'>
                        <p className='mb-0 mr-[8px] text-[14px] w-[75px]'>Poker Type</p>
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
                    <div className='flex justify-start items-center my-[4px] mr-4'>
                        <p className='mb-0 mr-[8px] text-[14px] w-[65px]'>Table Size</p>
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
                    <div className='flex justify-start items-center my-[4px] mr-4'>
                        <p className='mb-0 mr-[8px] text-[14px] w-[85px]'>Hero Position</p>
                        <div className="inline-flex">
                            <button className="btn btn-outline-primary ltr:rounded-r-none rtl:rounded-l-none btn-sm">{filter.heroPosition}</button>
                            <div className="dropdown">
                                <Dropdown
                                    placement='bottom-end'
                                    btnClassName="btn  btn-sm btn-outline-primary ltr:rounded-l-none rtl:rounded-r-none dropdown-toggle before:border-[5px] before:border-l-transparent before:border-r-transparent before:border-t-inherit before:border-b-0 before:inline-block hover:before:border-t-white-light h-full"
                                    button={<span className="sr-only"></span>}
                                >
                                    <ul className="!min-w-[170px]">
                                        {heroPosition.map((item: any, index: any) =>
                                            <li key={index}>
                                                <button
                                                    type="button"
                                                    onClick={() => setFilter({ ...filter, heroPosition: item.value })}
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
                    <div className='flex justify-start items-center my-[4px] mr-4'>
                        <p className='mb-0 mr-[4x] text-[14px] w-[40px]'>Date</p>
                        <Flatpickr
                            options={{
                                mode: 'range',
                                dateFormat: 'Y-m-d',
                                position: 'auto left',
                            }}
                            value={filter.range}
                            className="form-input !border-primary !w-[190px] !py-[5px] !pb-[2px] !px-[4px]"
                            onChange={(range: any) => bufferRange(range)}
                        />
                    </div>
                    {/* <button
                        type="button"
                        className="btn btn-outline-info mr-4 btn-sm"
                        onClick={() => setDragModel(true)}
                    >
                        Advanced Filter
                    </button> */}
                </div>
                <div className='flex justify-between xl:justify-start items-center'>
                    <button
                        type="button" className="btn btn-outline-success btn-sm w-[100px]"
                        onClick={fetchMyAPI}
                    >
                        Seach
                    </button>
                </div>
                <Download rowData={rowData} />
            </div >
        </div>
    );
};

export default Filtering;
