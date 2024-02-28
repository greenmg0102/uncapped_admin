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
import { extractPairs, extractPairsValue } from '../../../../../../../utils/system/chartService'

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

export const options = {
    responsive: true,
    interaction: {
        mode: 'index' as const,
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
            display: true,
            text: 'Chart.js Line Chart - Multi Axis',
        }
    },
    scales: {
        y: {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
        },
        y1: {
            type: 'linear' as const,
            display: true,
            position: 'right' as const,
            grid: {
                drawOnChartArea: false,
            }
        }
    }
};

const labels = extractPairs();

export default function Pair({ handList, userInfoResult, action }: any) {

    let datasets = [
        {
            type: 'line' as const,
            label: 'GTO Fold Tracker',
            borderColor: '#3d7cb8',
            borderWidth: 4,
            fill: false,
            data: extractPairsValue(handList, 0),
        },
        {
            type: 'bar' as const,
            label: 'GTO Fold',
            backgroundColor: '#3d7cb8',
            data: extractPairsValue(handList, 0),
            borderColor: 'white',
            borderWidth: 2
        },
        {
            type: 'line' as const,
            label: 'GTO Call Track',
            borderColor: '#00cf00',
            borderWidth: 4,
            fill: false,
            data: extractPairsValue(handList, 1),
        },
        {
            type: 'bar' as const,
            label: 'GTO Call',
            backgroundColor: '#00cf00',
            data: extractPairsValue(handList, 1),
            borderColor: 'white',
            borderWidth: 4
        },
        {
            type: 'line' as const,
            label: 'GTO Raise Track',
            borderColor: '#ff0000',
            borderWidth: 4,
            fill: false,
            data: extractPairsValue(handList, 2),
        },
        {
            type: 'bar' as const,
            label: 'GTO Raise',
            backgroundColor: '#ff0000',
            data: extractPairsValue(handList, 2),
            borderColor: 'white',
            borderWidth: 2
        },

        {
            type: 'line' as const,
            label: 'Hero Fold Tracker',
            borderColor: '#3d7cb8',
            borderWidth: 2,
            fill: false,
            data: extractPairsValue(userInfoResult, 0),
        },
        {
            type: 'bar' as const,
            label: 'Hero Fold',
            backgroundColor: '#3d7cb8',
            data: extractPairsValue(userInfoResult, 0),
            borderColor: 'white',
            borderWidth: 0
        },
        {
            type: 'line' as const,
            label: 'Hero Call Track',
            borderColor: '#00cf00',
            borderWidth: 2,
            fill: false,
            data: extractPairsValue(userInfoResult, 1),
        },
        {
            type: 'bar' as const,
            label: 'Hero Call',
            backgroundColor: '#00cf00',
            data: extractPairsValue(userInfoResult, 1),
            borderColor: 'white',
            borderWidth: 0
        },
        {
            type: 'line' as const,
            label: 'Hero Raise Track',
            borderColor: '#ff0000',
            borderWidth: 2,
            fill: false,
            data: extractPairsValue(userInfoResult, 2),
        },
        {
            type: 'bar' as const,
            label: 'Hero Raise',
            backgroundColor: '#ff0000',
            data: extractPairsValue(userInfoResult, 2),
            borderColor: 'white',
            borderWidth: 0
        },
    ]

    const data = {
        labels,
        datasets: datasets.filter((item: any, index: any) => index === action * 2 || index === action * 2 + 1 || index === action * 2 + 6 || index === action * 2 + 7)
    };

    return (
        <Chart type='bar' options={options} data={data} />
    )
}