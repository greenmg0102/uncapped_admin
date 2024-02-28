import { useState } from "react"
import LeftPosition from "./leftPosition"
import AnalysisPanel from "./analysisPanel"
import RightPosition from "./rightPosition"

export default function Range({ leftPosition, rightPosition, critical }: any) {

    const [active, setActive] = useState("")

    return (
        <div className="flex justify-between items-start pt-2">
            <div className="w-[40%]">
                <LeftPosition
                    VillianHands={leftPosition}
                    active={active}
                    activeNodeNumber={critical.left}
                    setActive={(active: any) => setActive(active)}
                />
            </div>
            <div className="w-[20%]">
                <AnalysisPanel />
            </div>
            <div className="w-[40%]">
                <RightPosition
                    VillianHands={rightPosition}
                    active={active}
                    activeNodeNumber={critical.right}
                    setActive={(active: any) => setActive(active)}
                />
            </div>
        </div>
    )
}