
import clsx from 'clsx'

export default function FilteringOption({ isFilterModal, filteringCheckOption, setIsFilterModal, setFilteringCheckOption }: any) {

    return (
        <div
            className={clsx(
                "absolute h-[450px] border transition-all duration-[0.3s] right-0 overflow-hidden bg-gray-800 !z-[222222] rounded-tl-[8px] rounded-bl-[8px] border-gray-500 opacity-[93%]",
                isFilterModal ? "w-full p-4" : "w-[0px] p-0"
            )}
        >
            <p className='text-center text-[16px] mb-6 mt-4'>Please select <span className='text-primay'>Fitering Option</span> what you want</p>

            <label className="inline-flex w-1/2 mb-4">
                <input type="checkbox" className="form-checkbox text-success" defaultChecked disabled />
                <span className='text-gray-400'>Hold Cards</span>
            </label>

            <label className="inline-flex w-1/2 mb-4">
                <input type="checkbox" className="form-checkbox text-success" checked={filteringCheckOption.BBWon} onChange={() => setFilteringCheckOption({ ...filteringCheckOption, BBWon: !filteringCheckOption.BBWon })} />
                <span className='text-gray-400'>BB Won</span>
            </label>

            <label className="inline-flex w-1/2 mb-4">
                <input type="checkbox" className="form-checkbox text-success" checked={filteringCheckOption.FlopCard} onChange={() => setFilteringCheckOption({ ...filteringCheckOption, FlopCard: !filteringCheckOption.FlopCard })} />
                <span className='text-gray-400'>Flop Card</span>
            </label>

            <label className="inline-flex w-1/2 mb-4">
                <input type="checkbox" className="form-checkbox text-success" checked={filteringCheckOption.TurnCard} onChange={() => setFilteringCheckOption({ ...filteringCheckOption, TurnCard: !filteringCheckOption.TurnCard })} />
                <span className='text-gray-400'>Turn Card</span>
            </label>

            <label className="inline-flex w-1/2 mb-4">
                <input type="checkbox" className="form-checkbox text-success" checked={filteringCheckOption.RiverCard} onChange={() => setFilteringCheckOption({ ...filteringCheckOption, RiverCard: !filteringCheckOption.RiverCard })} />
                <span className='text-gray-400'>River Card</span>
            </label>

            <label className="inline-flex w-1/2 mb-4">
                <input type="checkbox" className="form-checkbox text-danger" checked={filteringCheckOption.WinningHand} onChange={() => setFilteringCheckOption({ ...filteringCheckOption, WinningHand: !filteringCheckOption.WinningHand })} />
                <span className='text-gray-400'>Winning Hand</span>
            </label>

            <label className="inline-flex w-1/2 mb-4">
                <input type="checkbox" className="form-checkbox text-danger" checked={filteringCheckOption.PlayedDate} onChange={() => setFilteringCheckOption({ ...filteringCheckOption, PlayedDate: !filteringCheckOption.PlayedDate })} />
                <span className='text-gray-400'>Played Date</span>
            </label>

            <label className="inline-flex w-1/2 mb-4">
                <input type="checkbox" className="form-checkbox text-danger" checked={filteringCheckOption.PlayedTime} onChange={() => setFilteringCheckOption({ ...filteringCheckOption, PlayedTime: !filteringCheckOption.PlayedTime })} />
                <span className='text-gray-400'>Played Time</span>
            </label>

            <label className="inline-flex w-1/2 mb-4">
                <input type="checkbox" className="form-checkbox text-danger" checked={filteringCheckOption.HeroPosition} onChange={() => setFilteringCheckOption({ ...filteringCheckOption, HeroPosition: !filteringCheckOption.HeroPosition })} />
                <span className='text-gray-400'>Hero Position</span>
            </label>

            <label className="inline-flex w-1/2 mb-4">
                <input type="checkbox" className="form-checkbox text-danger" checked={filteringCheckOption.StackDepth} onChange={() => setFilteringCheckOption({ ...filteringCheckOption, StackDepth: !filteringCheckOption.StackDepth })} />
                <span className='text-gray-400'>Stack Depth</span>
            </label>

            <label className="inline-flex w-1/2 mb-4 w-1/2">
                <input type="checkbox" className="form-checkbox text-secondary" checked={filteringCheckOption.MainDataFrequency} onChange={() => setFilteringCheckOption({ ...filteringCheckOption, MainDataFrequency: !filteringCheckOption.MainDataFrequency })} />
                <span className='text-gray-400'>Main Data Frequency</span>
            </label>

            <label className="inline-flex w-1/2 mb-4">
                <input type="checkbox" className="form-checkbox text-secondary" checked={filteringCheckOption.UserDataFrequency} onChange={() => setFilteringCheckOption({ ...filteringCheckOption, UserDataFrequency: !filteringCheckOption.UserDataFrequency })} />
                <span className='text-gray-400'>User Data Frequency</span>
            </label>

            <label className="inline-flex w-1/2 mb-4">
                <input type="checkbox" className="form-checkbox text-secondary" checked={filteringCheckOption.Difference} onChange={() => setFilteringCheckOption({ ...filteringCheckOption, Difference: !filteringCheckOption.Difference })} />
                <span className='text-gray-400'>Difference</span>
            </label>

            <div className='flex justify-center mt-8'>
                <button type="button" className="btn btn-success btn-sm" onClick={() => setIsFilterModal(!isFilterModal)}>Filter Apply</button>
            </div>
        </div>
    )
}