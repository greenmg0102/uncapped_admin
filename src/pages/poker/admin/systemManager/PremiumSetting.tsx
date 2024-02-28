import { useState, useEffect } from 'react';
import CreatingModal from './PremiumAdminComponent/CreatingModal'
import PremiumList from './PremiumAdminComponent/PremiumList'
import { premiumRead, premiumRegist } from '../../../../utils/functions/admin/PremiumManaging/PremiumManaging'

const PremiumSetting = () => {

    const [isOpen, setIsOpen] = useState(false)

    const [premiumList, setPremiumList] = useState([])

    useEffect(() => {
        async function fetchData() {
            let result = await premiumRead()
            setPremiumList(result)
        }
        fetchData()
    }, [])

    const regist = async (premiumOption: any) => {
        let result = await premiumRegist(premiumOption)
        setPremiumList(result)
    }

    return (
        <div>
            <div className="flex justify-between items-center w-full pr-2 mb-2">
                <h2 className="text-xl mb-4">Premium Setting</h2>
                <button
                    type="button"
                    className="btn btn-secondary rounded-l"
                    onClick={() => setIsOpen(true)}
                >
                    Regist
                </button>
                <CreatingModal
                    CreatingModal={isOpen}
                    setIsOpen={(bool: any) => setIsOpen(bool)}
                    regist={(premiumOption: any) => regist(premiumOption)}
                />
            </div>
            <div className="rounded-[8px] bg-gray-900 p-4">
                <PremiumList
                    premiumList={premiumList}
                />
                
            </div>
        </div>
    );
};

export default PremiumSetting;