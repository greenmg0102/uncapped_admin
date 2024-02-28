
import { useState, useEffect } from "react"
import ReactApexChart from 'react-apexcharts';
import { hero8Site } from '../../../../../utils/reference/playCardColor'

export default function StackPosition({ deviations }: any) {

    const [option, setOption] = useState<any>({
        series: [
            // {
            //     name: 'RFI',
            //     data: [
            //         { x: 10, y: 0, z: 47 },
            //         { x: 15, y: 1, z: 38 },
            //         { x: 20, y: 2, z: 100 },
            //         { x: 25, y: 3, z: 48 },
            //         { x: 30, y: 4, z: 13 },
            //         { x: 40, y: 5, z: 83 },
            //         { x: 50, y: 6, z: 36 },
            //         { x: 60, y: 7, z: 42 },
            //         { x: 80, y: 0, z: 57 },
            //         { x: 100, y: 0, z: 47 }
            //     ]
            // },
            // {
            //     name: 'vs RFI',
            //     data: [
            //         { x: 40, y: 5, z: 26 },
            //         { x: 60, y: 7, z: 47 },
            //     ]
            // }
        ],
        options: {
            chart: {
                height: 300,
                type: 'bubble',
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                opacity: 0.8
            },
            xaxis: {
                // categories: [10, 15, 20, 25, 30, 40, 50, 60, 80, 100],
                // type: 'numeric',
            },
            yaxis: {
                labels: {
                    formatter: (value: any) => { return hero8Site[value] },
                },
            }
        },
    })

    useEffect(() => {

        
        if (deviations.length !== 0) {
            console.log('deviations2222', deviations);
            setOption({ ...option, series: deviations })
        }

    }, [deviations])

    console.log("option", option);
    

    return (
        <div>
            <p className="px-4 h-[35px]">
                asdfasdf
            </p>
            <ReactApexChart options={option.options} series={option.series} type="bubble" height={300} />
        </div>
    )
}


