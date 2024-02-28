import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { scatterChart } from '../../../../utils/functions/user/landing/scatterChart'

import { scatterGet } from '../../../../utils/actionValidation/landing/scatter'
import StackPosition from './scatterComponent/StackPosition';


const StasticData = () => {
    const [deviations, setDeviations] = useState<any>([])

    useEffect(() => {
        async function fetchData() {

            let actionList = ["RFI", "vs RFI"]

            for (let i = 0; i < actionList.length; i++) {

                const data = {
                    action: actionList[i],
                    heroPositionList: [],
                    stackDepthList: [],
                    pokerType: "GGPoker",
                    tableSize: 8,
                    range: `2023-11-30 to 2025-11-30`
                }

                let result = await scatterChart(data)

                let real = scatterGet(result.mainData, result.userData, actionList[i], "raise")

                let buffer = {
                    name: actionList[i],
                    data: real
                }

                console.log("buffer", buffer);

                let deviationsReal = deviations
                deviationsReal.push(buffer)

                console.log("deviationsReal", deviationsReal);
                
                setDeviations(deviationsReal)
            }
        }
        fetchData()
    }, [])

    console.log("deviations1111", deviations);
    

    return (
        <div className='py-2 px-0'>
            <StackPosition deviations={deviations} />
        </div>
    );
};

export default StasticData;