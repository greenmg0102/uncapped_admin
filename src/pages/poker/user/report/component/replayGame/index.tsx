import { useState } from 'react'
import PokerTable from '../../../handDetail/component/PokerTable'

export default function ReplayGame({ gameData }: any) {

    const [receiveRaw, setReceiveRaw] = useState("")

    return (
        <div className='pr-4'>
            <PokerTable
                handData={gameData}
                isAnimation={true}
                receiveRaw={(raw: any) => setReceiveRaw(raw)}
            />
        </div>
    )
}