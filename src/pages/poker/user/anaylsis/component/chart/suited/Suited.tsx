import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

import { extractSuited, extractPairsValue } from '../../../../../../../utils/system/chartService'

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
);

const labels = extractSuited()


export default function Suited({ handList, userInfoResult }: any) {

    const data = {
        labels,
        datasets: [
            {
                type: 'line' as const,
                label: 'Dataset 1',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                fill: false,
                data: extractPairsValue(handList, 0)
            },
            {
                type: 'bar' as const,
                label: 'Dataset 2',
                backgroundColor: 'rgb(75, 192, 192)',
                data: extractPairsValue(handList, 1),
                borderColor: 'white',
                borderWidth: 2
            },
            {
                type: 'bar' as const,
                label: 'Dataset 3',
                backgroundColor: 'rgb(53, 162, 235)',
                data: extractPairsValue(handList, 2)
            },
        ],
    };
    return (
        <Chart type='bar' data={data} />
    )
}