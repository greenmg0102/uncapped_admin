import { useState } from "react";
import clsx from "clsx"
import HandRawData from '../HandRawData'
import ChipPlayCard from '../../../../../../components/UI/playcard/ChipPlayCard';
import FilteringOption from './FilteringOption'
import './index.css'

export default function UserDetailList({ userResultList, page, pageSize, activeUserData, setActiveUserData, setPageSize, setPage, PAGE_SIZES, interestingPair, setUserResultModal }: any) {

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

  const [sortingCondition, setSortingCondition] = useState({
    bb: false,
    heroRank: false
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

      <div className={clsx('flex justify-between items-center mb-1 py-2 pt-1 px-1 pr-2 transition-all')} >
        <p className='w-[20px] text-left text-gray-400 text-[12px] mr-2'>No</p>
        <p className='w-[80px] text-center text-gray-400 text-[12px] mr-2'>Hold Cards</p>
        <div
          className={clsx(filteringCheckOption.BBWon ? 'w-[65px] text-center text-gray-400 text-[12px] flex justify-between items-center cursor-pointer' : 'hidden')}
          onClick={() => setSortingCondition({ ...sortingCondition, bb: !sortingCondition.bb })}
        >
          BB Won
          {sortingCondition.bb ?
            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-up" width="1em" height="1em" fill="currentColor" aria-hidden="true" className="w-[20px]">
              <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
            </svg>
            :
            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true" className="w-[20px]">
              <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
            </svg>
          }
        </div>
        <div className="flex justify-between items-center">
          <p className={clsx(filteringCheckOption.FlopCard ? 'w-[64px] text-center text-gray-400 text-[12px] mr-2' : 'hidden')}>Flop</p>
          <p className={clsx(filteringCheckOption.TurnCard ? 'w-[30px] text-center text-gray-400 text-[12px] mr-2' : 'hidden')}>Turn</p>
          <p className={clsx(filteringCheckOption.FlopCard ? 'w-[30px] text-right text-gray-400 text-[12px]' : 'hidden')}>River</p>
        </div>

        <div
          className={clsx(filteringCheckOption.WinningHand ? 'w-[112px] text-center text-gray-400 text-[12px] flex justify-center items-center cursor-pointer' : 'hidden')}
          onClick={() => setSortingCondition({ ...sortingCondition, heroRank: !sortingCondition.heroRank })}
        >
          Winning Hand
          {sortingCondition.heroRank ?
            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-up" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
            </svg>
            :
            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
            </svg>
          }
        </div>
      </div>
      {
        userResultList && userResultList.result.length === 0 ?
          <div className='h-[420px] flex flex-col justify-center items-center w-full'>
            <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 105.44" className='w-24' fill="#00cf55"><g><path d="M4.85,12.96L53.22,0l-0.06,3.12l-3.27,0.88L14.98,64.46l3.29,12.26l34.63-59.98l-0.12,6.2L19.36,80.81l3.28,12.26 L52.4,41.52l-0.12,6.2L24.21,96.35c-0.14,0.23-0.32,0.42-0.54,0.54l0.78,2.93c0.25,0.94,0.87,1.69,1.65,2.14 c0.78,0.45,1.74,0.61,2.68,0.36l2.99-0.8c0.01-0.23,0.07-0.47,0.2-0.69L51.92,66.3l-0.12,6.2l-16.15,27.98L47.9,97.2l3.53-6.12 l-0.16,8.32l-21.71,5.81c-1.74,0.47-3.51,0.18-4.96-0.66c-1.45-0.84-2.58-2.23-3.05-3.97L0.22,20.97 c-0.47-1.74-0.18-3.51,0.66-4.96C1.72,14.56,3.11,13.43,4.85,12.96L4.85,12.96z M64.69,4.65h51.66c1.8,0,3.43,0.74,4.62,1.92 c1.18,1.18,1.92,2.82,1.92,4.62v82.43c0,1.8-0.74,3.43-1.92,4.62c-1.18,1.18-2.82,1.92-4.62,1.92H64.69 c-1.79,0-3.43-0.74-4.61-1.92h-0.01c-1.18-1.18-1.92-2.82-1.92-4.62V11.19c0-1.8,0.74-3.43,1.92-4.62l0.09-0.08 C61.34,5.35,62.94,4.65,64.69,4.65L64.69,4.65z M107.24,85.97l0.6,0.09l2.54,7.25h1.71l2.52-7.25l0.59-0.09v-1h-2.84v1l0.58,0.1 l-0.37,1.15h-2.7l-0.37-1.15l0.58-0.1v-1h-2.84V85.97L107.24,85.97z M110.26,88.45h1.91l-0.94,2.94h-0.04L110.26,88.45 L110.26,88.45z M65.65,19l0.6-0.09l2.54-7.25h1.71l2.52,7.25L73.61,19v1h-2.84v-1l0.58-0.1l-0.37-1.15h-2.7l-0.37,1.15l0.58,0.1v1 h-2.84V19L65.65,19z M68.68,16.52h1.91l-0.94-2.94h-0.04L68.68,16.52L68.68,16.52z M95.54,67.21l-3.03-6.98 c5.42,5.12,13.69,2.34,13.89-5.65c0.14-5.74-5.34-13.24-16.1-22.94c-10.69,9.7-16.22,17.15-15.64,22.94 c0.71,7.02,7.77,10.22,13.21,5.65l-2.15,6.98H95.54L95.54,67.21z M116.34,7.65H64.69c-0.94,0-1.8,0.37-2.44,0.98l-0.06,0.06 c-0.64,0.64-1.04,1.53-1.04,2.5v82.43c0,0.97,0.4,1.86,1.04,2.5c0.64,0.64,1.53,1.04,2.5,1.04h51.66c0.97,0,1.86-0.4,2.5-1.04 c0.64-0.64,1.04-1.53,1.04-2.5V11.19c0-0.97-0.4-1.86-1.04-2.5C118.2,8.04,117.32,7.65,116.34,7.65L116.34,7.65z M17.18,12.76 l-10.97,19L9.5,44.01L29.44,9.47L17.18,12.76L17.18,12.76z M5.12,27.66l7.98-13.81l-7.47,2c-0.94,0.25-1.69,0.87-2.14,1.65 c-0.45,0.79-0.61,1.75-0.36,2.69L5.12,27.66L5.12,27.66z M33.53,8.38L10.59,48.11l3.29,12.26L45.79,5.09L33.53,8.38L33.53,8.38z" /></g></svg>
            <p className='text-[20px] mt-4'>There is no hands.</p>
          </div>
          :
          <div className="overflow-y-auto cursor-pointer h-[420px]">
            {
              userResultList &&
              userResultList.result &&
              userResultList.result.map((item: any, index: any) =>
                <div
                  key={index}
                  className={clsx('flex justify-between items-center mb-0 py-[6px] px-1 transition-all rounded-[6px] hover:bg-gray-900', activeUserData === item._id ? "bg-gray-900" : "")}
                  onClick={() => bufferActiveNode(item)}
                >
                  <div className='w-[20px] text-left text-gray-400 text-[12px] mr-2'>{(page - 1) * pageSize + index + 1}</div>
                  <div className='w-[80px] text-gray-500 text-[12px] flex justify-center items-center mr-2'>

                    {Array.isArray(item.holeCards) ?
                      item.holeCards[0].cards.map((item: any, index: any) => <div key={index}>{holdCard(item)}</div>)
                      :
                      item.holeCards.cards.map((item: any, index: any) => <div key={index}>{holdCard(item)}</div>)
                    }

                  </div>
                  <div className={clsx(filteringCheckOption.BBWon ? 'w-[65px] text-center text-gray-400 text-[12px]' : "hidden")}>{(item.summary.collected[0].amount / item.bigBlind).toFixed(2)} bb</div>

                  <div className="flex justify-start items-center">

                    <div className={clsx(filteringCheckOption.FlopCard ? 'text-[12px] mr-2' : "hidden")}>
                      <div className='flex justify-center items-center w-[64px]'>
                        {item.communityCards.slice(0, 3).map((item: any, index: any) =>
                          <div key={index}>{holdCard(item)}</div>
                        )}
                      </div>
                    </div>

                    <div className={clsx(filteringCheckOption.TurnCard ? 'text-[12px] mr-2 w-[30px]' : "hidden")}>
                      <div className='flex justify-center items-center'>
                        {item.communityCards.slice(3, 4).map((item: any, index: any) =>
                          <div key={index}>{holdCard(item)}</div>
                        )}
                      </div>
                    </div>

                    <div className={clsx(filteringCheckOption.RiverCard ? 'text-[12px] w-[30px]' : "hidden")}>
                      <div className='flex justify-center items-center'>
                        {item.communityCards.slice(4, 5).map((item: any, index: any) =>
                          <div key={index}>{holdCard(item)}</div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div
                    className={
                      clsx(
                        filteringCheckOption.WinningHand ? "" : "hidden",
                        'w-[112px] text-center text-[12px]', item.communityCards.length === 5 ? ' text-gray-500' : ' text-gray-500'
                      )
                    }
                  >
                    {item.communityCards.length === 5 ?
                      ""
                      :
                      "Did not show"
                    }
                  </div>
                </div>
              )
            }
          </div>
      }


      <div className="flex justify-between items-center mt-0">
        <div className="flex justify-start items-center">
          <div className="p-1 hover:bg-gray-800 rounded-full mr-1 transition-all" onClick={() => setPage(1)}>
            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="fast-backward" width="1.4em" height="1.4em" fill="currentColor" aria-hidden="true" >
              <path d="M517.6 273.5L230.2 499.3a16.14 16.14 0 000 25.4l287.4 225.8c10.7 8.4 26.4.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7zm320 0L550.2 499.3a16.14 16.14 0 000 25.4l287.4 225.8c10.7 8.4 26.4.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7zm-620-25.5h-51.2c-3.5 0-6.4 2.7-6.4 6v516c0 3.3 2.9 6 6.4 6h51.2c3.5 0 6.4-2.7 6.4-6V254c0-3.3-2.9-6-6.4-6z"></path>
            </svg>
          </div>
          <div className="p-1 hover:bg-gray-800 rounded-full mr-1 transition-all" onClick={() => setPage(page - 1)}>
            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="step-backward" width="1.4em" height="1.4em" fill="currentColor" aria-hidden="true" >
              <path d="M347.6 528.95l383.2 301.02c14.25 11.2 35.2 1.1 35.2-16.95V210.97c0-18.05-20.95-28.14-35.2-16.94L347.6 495.05a21.53 21.53 0 000 33.9M330 864h-64a8 8 0 01-8-8V168a8 8 0 018-8h64a8 8 0 018 8v688a8 8 0 01-8 8"></path>
            </svg>
          </div>
          <div className="p-1 hover:bg-gray-800 rounded-full mr-1 transition-all" onClick={() => setPage(page + 1)}>
            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="step-forward" width="1.4em" height="1.4em" fill="currentColor" aria-hidden="true" >
              <path d="M676.4 528.95L293.2 829.97c-14.25 11.2-35.2 1.1-35.2-16.95V210.97c0-18.05 20.95-28.14 35.2-16.94l383.2 301.02a21.53 21.53 0 010 33.9M694 864h64a8 8 0 008-8V168a8 8 0 00-8-8h-64a8 8 0 00-8 8v688a8 8 0 008 8"></path>
            </svg>
          </div>
          <div className="p-1 hover:bg-gray-800 rounded-full mr-1 transition-all" onClick={() => setPage(Math.round(userResultList.totalCount / pageSize))}>
            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="fast-forward" width="1.4em" height="1.4em" fill="currentColor" aria-hidden="true" >
              <path d="M793.8 499.3L506.4 273.5c-10.7-8.4-26.4-.8-26.4 12.7v451.6c0 13.5 15.7 21.1 26.4 12.7l287.4-225.8a16.14 16.14 0 000-25.4zm-320 0L186.4 273.5c-10.7-8.4-26.4-.8-26.4 12.7v451.5c0 13.5 15.7 21.1 26.4 12.7l287.4-225.8c4.1-3.2 6.2-8 6.2-12.7 0-4.6-2.1-9.4-6.2-12.6zM857.6 248h-51.2c-3.5 0-6.4 2.7-6.4 6v516c0 3.3 2.9 6 6.4 6h51.2c3.5 0 6.4-2.7 6.4-6V254c0-3.3-2.9-6-6.4-6z"></path>
            </svg>
          </div>
          <p>{page} / {Math.round(userResultList.totalCount / pageSize)}</p>
        </div>

        <select className="bg-[#060818] border border-gray-900">
          {[10, 20, 30, 40, 50, 100].map((item: any) =>
            <option key={item} value={item}>{item}</option>
          )}
        </select>
      </div>
    </div >
  )
}