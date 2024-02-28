

import { pokerType, tableSize } from '../../../../../../utils/reference/uploadingFilter'
import { pokerMarkList } from '../../../../../../utils/reference'
import 'flatpickr/dist/flatpickr.css';

import ReportFilter from './ReportFilter'
import UserInfo from './UserInfo'
import DataFilters from './DataFilters'

export default function FilterInfo({ userTab, filter, valueStatus, userInfoResult, defaultReportSetting, setFilter, searchApply, interruptValueStatus, pokerTypeCount, setUserTab }: any) {

    const bufferRange = (range: any) => {
        const startDate = new Date(Date.parse(range[0]));
        const endDate = new Date(Date.parse(range[1]));
        const formattedRange = `${startDate.toISOString().split('T')[0]} to ${endDate.toISOString().split('T')[0]}`;
        setFilter({ ...filter, range: formattedRange });
    }

    return (
        <div className='relative w-full 2xl:w-1/2 p-2 border border-gray-700 rounded-[8px] 2xl:rounded-tl-[0px] 2xl:rounded-bl-[0px] 2xl:border-l-[0px] 2xl:pb-[43px] p-1 2xl:h-[205px] flex justify-between items-start flex-wrap'>
            <div className='w-full sm:w-[33.33%] p-1 h-[185px] border-r-[0px] sm:border-r-[1px] border border-dashed border-t-0 border-l-0 border-b-0 border-primary'>
                <ReportFilter
                    userTab={userTab}
                    valueStatus={valueStatus}
                    userInfoResult={userInfoResult}
                    defaultReportSetting={defaultReportSetting}
                    setUserTab={(order: any) => setUserTab(order)}
                    interruptValueStatus={(type: string, value: number) => interruptValueStatus(type, value)}
                />
            </div>

            <div className='w-full sm:w-[33.33%] p-1 h-[185px] border-r-[0px] sm:border-r-[1px] border border-dashed border-t-0 border-l-0 border-b-0 border-primary'>
                <UserInfo
                    pokerTypeCount={pokerTypeCount}
                    pokerMarkList={pokerMarkList}
                />
            </div>

            <div className='w-full sm:w-[33.33%] p-1 h-[185px]'>
                <DataFilters
                    pokerType={pokerType}
                    filter={filter}
                    tableSize={tableSize}
                    valueStatus={valueStatus}
                    setFilter={({ filer, pokerType }: any) => setFilter({ filer, pokerType })}
                    bufferRange={(range: any) => bufferRange(range)}
                    searchApply={searchApply}
                />
            </div>
        </div>
    )
}