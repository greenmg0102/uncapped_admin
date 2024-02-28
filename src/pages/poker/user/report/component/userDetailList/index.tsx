import { useState, useEffect } from "react";
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import clsx from "clsx"
import sortBy from 'lodash/sortBy';
import HandRawData from '../HandRawData'
import ChipPlayCard from '../../../../../../components/UI/playcard/ChipPlayCard';
import FilteringOption from './FilteringOption'
import './index.css'

export default function UserDetailList({ userResultList, page, pageSize, activeUserData, setActiveUserData, setPageSize, setPage, PAGE_SIZES, interestingPair, setUserResultModal }: any) {

  const [initialRecords, setInitialRecords] = useState(sortBy(userResultList.totalCount === 0 ? [] : userResultList.result, '_id'));

  const [search, setSearch] = useState('');
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: 'id', direction: 'asc' });

  useEffect(() => {
    if (userResultList.totalCount !== 0) {

      setInitialRecords(() => {
        return userResultList.result.filter((item: any) => {
          return (
            item._id
          );
        });
      });
    }
  }, [search, userResultList]);

  useEffect(() => {
    const data = sortBy(initialRecords, sortStatus.columnAccessor);
    setInitialRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
  }, [sortStatus]);


  const [isFilterModal, setIsFilterModal] = useState(false)
  const [handRawData, setHandRawData] = useState(false)
  const [activeNodeData, setActiveNodeData] = useState({})

  const [filteringCheckOption, setFilteringCheckOption] = useState({
    "BBWon": true,
    "FlopCard": true,
    "TurnCard": true,
    "RiverCard": true,
    "WinningHand": true,
    "PlayedDate": false,
    "PlayedTime": false,
    "HeroPosition": false,
    "StackDepth": false,
    "MainDataFrequency": false,
    "UserDataFrequency": false,
    "Difference": false
  })

  const bufferActiveNode = (node: any) => {
    setActiveNodeData(node)
    setHandRawData(true)
  }

  const holdCard = (holeCardInfo: { rank: string, suit: string }): any => <ChipPlayCard holeCardInfo={holeCardInfo} />

  return (
    <div className='relative w-[full] 2xl:h-[530px]'>
      {
        Object.keys(activeNodeData).length > 0 ?
          <HandRawData
            handRawData={handRawData}
            activeNodeData={activeNodeData}
            setHandRawData={(bool: any) => setHandRawData(bool)}
            setActiveUserData={(id: any) => setActiveUserData(id)}
            setUserResultModal={(bool: any) => setUserResultModal(bool)}
          />
          : null
      }

      <div className="relative w-full h-[40px]">
        <div
          className={clsx(
            "btn btn-sm absolute cursor-pointer right-0 bottom-[10px] flex justify-start items-center border transition-all",
            isFilterModal ? "border border-green-500" : "border border-gray-500"
          )}
          onClick={() => setIsFilterModal(!isFilterModal)}
        >
          <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1.3em" height="1.3em" fill="currentColor" aria-hidden="true" className={clsx("mr-1 transition-all", isFilterModal ? "text-green-500" : "text-gray-500")}><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
          <p className={clsx("mb-0 transition-all", isFilterModal ? "text-green-500" : "text-gray-500")}>Filtering Option</p>
        </div>
      </div>

      <FilteringOption
        isFilterModal={isFilterModal}
        filteringCheckOption={filteringCheckOption}
        setFilteringCheckOption={(total: any) => setFilteringCheckOption(total)}
        setIsFilterModal={(bool: any) => setIsFilterModal(bool)}
      />

      <div className="datatables cursor-pointer">
        <DataTable
          highlightOnHover
          className="whitespace-nowrap table-hover"
          records={initialRecords}
          columns={[
            {
              accessor: 'holeCards',
              title: 'Hold Cards',
              render: ({ holeCards }: any) => (
                <div className='w-[80px] text-gray-500 text-[12px] flex justify-center items-center mr-2'>
                  {Array.isArray(holeCards) ?
                    holeCards[0].cards.map((item: any, index: any) => <div key={index}>{holdCard(item)}</div>)
                    :
                    holeCards.cards.map((item: any, index: any) => <div key={index}>{holdCard(item)}</div>)
                  }
                </div>
              )
            },
            {
              accessor: 'summary',
              title: 'BBWon',
              sortable: true,
              render: ({ summary, bigBlind }: any) => (
                <div className={clsx(filteringCheckOption.BBWon ? 'text-center text-gray-400 text-[14px]' : "hidden")}>{(summary.collected[0].amount / bigBlind).toFixed(2)} bb</div>
              )
            },
            {
              accessor: 'communityCardsFlopCard',
              title: 'FlopCard',
              render: ({ communityCards }: any) => (
                <div className={clsx(filteringCheckOption.FlopCard ? '' : "hidden")}>
                  <div className='flex justify-center items-center w-[64px]'>
                    {communityCards.slice(0, 3).map((item: any, index: any) =>
                      <div key={index}>{holdCard(item)}</div>
                    )}
                  </div>
                </div>
              )
            },
            {
              accessor: 'communityCardsTurnCard',
              title: 'TurnCard',
              render: ({ communityCards }: any) => (
                <div className={clsx(filteringCheckOption.TurnCard ? '' : "hidden")}>
                  <div className='flex justify-center items-center'>
                    {communityCards.slice(3, 4).map((item: any, index: any) =>
                      <div key={index}>{holdCard(item)}</div>
                    )}
                  </div>
                </div>
              )
            },
            {
              accessor: 'communityCardsRiverCard',
              title: 'RiverCard',
              render: ({ communityCards }: any) => (
                <div className={clsx(filteringCheckOption.TurnCard ? '' : "hidden")}>
                  <div className='flex justify-center items-center'>
                    {communityCards.slice(4, 5).map((item: any, index: any) =>
                      <div key={index}>{holdCard(item)}</div>
                    )}
                  </div>
                </div>
              )
            },
            {
              accessor: 'totalCount',
              title: 'WinningHand',
              sortable: true,
              render: ({ communityCards }: any) => (
                <div
                  className={
                    clsx(
                      filteringCheckOption.WinningHand ? "" : "hidden",
                      'w-[112px] text-center text-[12px]', communityCards.length === 5 ? ' text-gray-500' : ' text-gray-500'
                    )
                  }
                >
                  {communityCards.length === 5 ?
                    ""
                    :
                    "Did not show"
                  }
                </div>
              )
            },
            {
              accessor: 'PlayedDate',
              title: 'PlayedDate',
              sortable: true,
              render: ({ _id }: any) => (
                <p>
                  1
                </p>
              )
            },
            {
              accessor: 'PlayedTime',
              title: 'PlayedTime',
              sortable: true,
              render: ({ _id }: any) => (
                <p>
                  1
                </p>
              )
            },
            {
              accessor: 'HeroPosition',
              title: 'HeroPosition',
              sortable: true,
              render: ({ _id }: any) => (
                <p>
                  1
                </p>
              )
            },
            {
              accessor: 'StackDepth',
              title: 'StackDepth',
              sortable: true,
              render: ({ _id }: any) => (
                <p>
                  1
                </p>
              )
            },
            {
              accessor: 'MainDataFrequency',
              title: 'MainDataFrequency',
              sortable: true,
              render: ({ _id }: any) => (
                <p>
                  1
                </p>
              )
            },
            {
              accessor: 'UserDataFrequency',
              title: 'UserDataFrequency',
              sortable: true,
              render: ({ _id }: any) => (
                <p>
                  1
                </p>
              )
            },
            {
              accessor: 'Difference',
              title: 'Difference',
              sortable: true,
              render: ({ _id }: any) => (
                <p>
                  1
                </p>
              )
            }
          ]}
          totalRecords={initialRecords.length}
          recordsPerPage={pageSize}
          page={page}
          onPageChange={(p) => setPage(p)}
          recordsPerPageOptions={PAGE_SIZES}
          onRecordsPerPageChange={setPageSize}
          sortStatus={sortStatus}
          onSortStatusChange={setSortStatus}
          minHeight={10}
        />
      </div>
    </div >
  )
}