import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const CircleChart = ({ luckWheel }: any) => {

    const [chartValue, setChartValue] = useState<any>({
        series: [50, 50],
        options: {
            chart: {
                type: 'pie',
                height: 350,
            },
            legend: {
                position: 'bottom',
            },
            labels: ['bb / 100', 'Allin Aju bb / 100'],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: 'bottom',
                        },
                    },
                },
            ],
        },
    })

    useEffect(() => {
        if (luckWheel.bb !== 0 || luckWheel.allinBB !== 0) {
            setChartValue((prevState: any) => ({
                ...prevState,
                series: [luckWheel.bb, luckWheel.allinBB]
            }));
        }
    }, [luckWheel, setChartValue]);

    return (
        <ReactApexChart
            series={chartValue.series}
            options={chartValue.options}
            type="pie"
            height={380}
        />
    );
};

export default CircleChart;