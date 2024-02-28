import ReactApexChart from 'react-apexcharts';
import { profiteChartOption, lossChartOption } from './setting'

const Category = ({ data, currentChart, setCurrentChart, setIsShowCryptoMenu, isShowCryptoMenu }: any) => {

    return (
        <button
            type="button"
            className={`${data.id === currentChart.id ? 'bg-gray-100 dark:bg-[#192A3A]' : ''} w-full flex items-center p-2 hover:bg-gray-100 dark:hover:bg-[#192A3A]`}
            onClick={() => {
                setCurrentChart(data);
                setIsShowCryptoMenu(!isShowCryptoMenu);
            }}
        >
            <div className="ltr:pr-4 rtl:pl-4">
                <div className="flex items-baseline font-semibold">
                    <div className="text-md ltr:mr-1 rtl:ml-1">{data.title}</div>
                    {/* <div className="text-xs text-white-dark uppercase">({data.alias})</div> */}
                </div>
                <div className={`flex items-center mt-2 ${data.isUp ? 'text-success' : 'text-danger'}`}>
                    <div className="min-w-20 text-xl ltr:mr-3 rtl:ml-3">{data.value}</div>

                    <div className="flex items-center font-normal">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={data.isUp ? 'rotate-180' : ''}>
                            <path d="M12 4L12 20M12 20L18 14M12 20L6 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="font-medium text-sm">{data.perc}%</div>
                    </div>
                </div>
            </div>
            <div className="flex-1 overflow-hidden">
                <ReactApexChart
                    series={data.series}
                    options={data.isUp ? profiteChartOption : lossChartOption}
                    height={45}
                />
            </div>
        </button>
    );
};

export default Category;



