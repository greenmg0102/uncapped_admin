import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import Carousel from "nuka-carousel"
import CountUp from 'react-countup';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export default function Landing() {

    const [loading] = useState(false);

    const salesByCategory: any = {
        series: [98.5, 73.7, 27],
        options: {
            chart: {
                type: 'donut',
                height: 460,
                fontFamily: 'Nunito, sans-serif',
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 25,
                colors: '#0e1726',
            },
            colors: ['#5c1ac3', '#e2a03f', '#e7515a', '#e2a03f'],
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                fontSize: '14px',
                markers: {
                    width: 10,
                    height: 10,
                    offsetX: -2,
                },
                height: 50,
                offsetY: 20,
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '65%',
                        background: 'transparent',
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                fontSize: '29px',
                                offsetY: -10,
                            },
                            value: {
                                show: true,
                                fontSize: '26px',
                                color: '#bfc9d4',
                                offsetY: 16,
                                formatter: (val: any) => {
                                    return val;
                                },
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                color: '#888ea8',
                                fontSize: '29px',
                                formatter: (w: any) => {
                                    return w.globals.seriesTotals.reduce(function (a: any, b: any) {
                                        return a + b;
                                    }, 0);
                                },
                            },
                        },
                    },
                },
            },
            labels: ['GG', '888', 'WPN'],
            states: {
                hover: {
                    filter: {
                        type: 'none',
                        value: 0.15,
                    },
                },
                active: {
                    filter: {
                        type: 'none',
                        value: 0.15,
                    },
                },
            },
        },
    };

    return (
        <div className="relative flex justify-start items-start">

            <div className='w-4/5 pt-[20px] pr-6'>

                <div className='flex justify-center items-center rounded-[8px]'>
                    <div className='w-4/5 rounded-[8px]'>
                        <Carousel>
                            <img src="/assets/images/pokerImage/bg-1.jpg" alt="cover" className="w-full h-full object-cover rounded-[8px]" />
                            <img src="/assets/images/pokerImage/bg-2.jpg" alt="cover" className="w-full h-full object-cover rounded-[8px]" />
                        </Carousel>
                    </div>
                </div>

                <div className='relative h-[700px] flex justify-between items-center my-24'>
                    <div className="absolute flex justify-center my-[60px]">
                        <img src="/assets/images/pokerImage/radar.png" alt="radar" className="w-2/5 opacity-[15%]" />
                    </div>

                    <div className='w-2/5 pl-24'>
                        <p className='text-[45px] leading-[64px] font-bold text-primary'>RADAR</p>
                        <p className='text-[24px] leading-[64px] font-bold pl-8'>Poker Solutions</p>

                        <p className='text-[45px] leading-[64px] font-bold text-primary'>Track, Analyze, and</p>
                        <p className='text-[45px] leading-[64px] font-bold text-primary'>accelerate your growth</p>

                        <p className='text-[24px] leading-[64px] font-bold pl-8'>Leak Tracking and Database</p>
                        <p className='text-[24px] leading-[64px] font-bold pl-8'>Surveillance Tool</p>

                    </div>
                    <div className='w-3/5 pl-24 pr-4'>
                        <img src="/assets/images/pokerImage/study.jpg" alt="radar" className="opacity-[85%]" />
                    </div>
                </div>

                <div className='relative h-[700px] flex justify-between items-center'>
                    <div className="absolute flex justify-center my-[60px]">
                        <img src="/assets/images/pokerImage/chart.png" alt="radar" className="w-2/5 opacity-[15%]" />
                    </div>

                    <div className='w-3/5 pl-24 pr-4'>
                        <img src="/assets/images/pokerImage/report.jpg" alt="radar" className=" opacity-[85%]" />
                    </div>

                    <div className='w-2/5 pl-24'>
                        <p className='text-[45px] leading-[64px] font-bold text-primary'>Equity Definition</p>
                        <p className='text-[24px] leading-[64px] font-bold pl-8'>Poker Solutions</p>

                        <p className='text-[45px] leading-[64px] font-bold text-primary'>Track, Analyze, and</p>
                        <p className='text-[45px] leading-[64px] font-bold text-primary'>accelerate your growth</p>

                        <p className='text-[24px] leading-[64px] font-bold pl-8'>Leak Tracking and Database</p>
                        <p className='text-[24px] leading-[64px] font-bold pl-8'>Surveillance Tool</p>

                    </div>
                </div>

                <div className="mb-5">
                    <div className="max-w-[1140px] mx-auto mt-20 dark:text-white-dark">
                        <div className="md:flex justify-between space-y-14 md:space-y-0 md:space-x-4 rtl:space-x-reverse">
                            <div className="border border-white-light dark:border-[#1b2e4b] rounded transition-all duration-300 group w-1/3">
                                <div className="border-b border-white-light dark:border-[#1b2e4b] p-5 pt-0">
                                    <span className="bg-white dark:bg-black text-[#3b3f5c] dark:text-white-light border-2 border-primary w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] rounded flex justify-center items-center text-xl lg:text-3xl font-bold -mt-[30px] shadow-[0_0_15px_1px_rgba(113,106,202,0.20)] transition-all duration-300 group-hover:-translate-y-[10px] cursor-pointer">
                                        $0
                                    </span>
                                    <h3 className="text-xl lg:text-2xl mt-4 mb-2.5">Free</h3>
                                    <p className="text-[15px] ">You can use 55% of PlatForm's services for free. You can win to the Poker</p>
                                </div>
                                <div className="p-5">
                                    <ul className="space-y-2.5 mb-5 font-semibold">
                                        <li>Poker Study</li>
                                        <li>Bucketed Report Section</li>
                                        <li>10K hands data upload</li>
                                        <li>Hand Reply</li>
                                    </ul>
                                    <button type="button" className="btn btn-primary w-full">
                                        Get Started Free
                                    </button>
                                </div>
                            </div>
                            <div className="border border-white-light dark:border-[#1b2e4b] rounded transition-all duration-300 group w-1/3">
                                <div className="border-b border-white-light dark:border-[#1b2e4b] p-5 pt-0">
                                    <span className="bg-white dark:bg-danger text-[#3b3f5c] dark:text-white-light border-2 border-primary w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] rounded flex justify-center items-center text-xl lg:text-3xl font-bold -mt-[30px] shadow-[0_0_15px_1px_rgba(113,106,202,0.20)] transition-all duration-300 group-hover:-translate-y-[10px] cursor-pointer">
                                        $9.9
                                    </span>
                                    <h3 className="text-xl lg:text-2xl mt-4 mb-2.5">Monthly</h3>
                                    <p className="text-[15px] ">Please analysis your poker game and find the correct direction per month</p>
                                </div>
                                <div className="p-5">
                                    <ul className="space-y-2.5 mb-5 font-semibold">
                                        <li>Unlimited hands</li>
                                        <li>More detailed Report Section</li>
                                        <li>Involoving Poker Study Section</li>
                                        <li>24/7 Supporting for Poker</li>
                                    </ul>
                                    <button type="button" className="btn btn-danger w-full">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                            <div className="border border-white-light dark:border-[#1b2e4b] rounded transition-all duration-300 group w-1/3">
                                <div className="border-b border-white-light dark:border-[#1b2e4b] p-5 pt-0">
                                    <span className="bg-white dark:bg-secondary text-[#3b3f5c] dark:text-white-light border-2 border-primary w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] rounded flex justify-center items-center text-xl lg:text-3xl font-bold -mt-[30px] shadow-[0_0_15px_1px_rgba(113,106,202,0.20)] transition-all duration-300 group-hover:-translate-y-[10px] cursor-pointer">
                                        $99
                                    </span>
                                    <h3 className="text-xl lg:text-2xl mt-4 mb-2.5">Yearly</h3>
                                    <p className="text-[15px]">Save the money and enjoy the poker, then gain your incoming per Year</p>
                                </div>
                                <div className="p-5">
                                    <ul className="space-y-2.5 mb-5 font-semibold">
                                        <li>Unlimited hands</li>
                                        <li>More detailed Report Section</li>
                                        <li>Involoving Poker Study Section</li>
                                        <li>24/7 Supporting for Poker</li>
                                    </ul>
                                    <button type="button" className="btn btn-secondary w-full">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 
                <p className='text-center font-semibold text-[32px] mx-32 py-6 mb-6 border border-dashed border-t-0 border-r-0 border-l-0 border-gray-700'>Who are we</p>
                <div className='flex justify-around items-center'>
                    <div className="mb-5 flex items-center justify-center">
                        <div className="max-w-[19rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                            <div className="py-7 px-6">
                                <div className="-mt-7 mb-7 -mx-6 rounded-tl rounded-tr h-[215px] overflow-hidden">
                                    <img src="/assets/images/profile-28.jpeg" alt="cover" className="w-full h-full object-cover" />
                                </div>
                                <h5 className="text-[#3b3f5c] text-xl font-semibold mb-4 dark:text-white-light">CLI Based</h5>
                                <p className="text-white-dark">Etiam sed augue ac justo tincidunt posuere. Vivamus euismod eros, nec risus malesuada.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5 flex items-center justify-center">
                        <div className="max-w-[19rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                            <div className="py-7 px-6">
                                <div className="-mt-7 mb-7 -mx-6 rounded-tl rounded-tr h-[215px] overflow-hidden">
                                    <img src="/assets/images/profile-28.jpeg" alt="cover" className="w-full h-full object-cover" />
                                </div>
                                <h5 className="text-[#3b3f5c] text-xl font-semibold mb-4 dark:text-white-light">CLI Based</h5>
                                <p className="text-white-dark">Etiam sed augue ac justo tincidunt posuere. Vivamus euismod eros, nec risus malesuada.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-5 flex items-center justify-center">
                        <div className="max-w-[19rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                            <div className="py-7 px-6">
                                <div className="-mt-7 mb-7 -mx-6 rounded-tl rounded-tr h-[215px] overflow-hidden">
                                    <img src="/assets/images/profile-28.jpeg" alt="cover" className="w-full h-full object-cover" />
                                </div>
                                <h5 className="text-[#3b3f5c] text-xl font-semibold mb-4 dark:text-white-light">CLI Based</h5>
                                <p className="text-white-dark">Etiam sed augue ac justo tincidunt posuere. Vivamus euismod eros, nec risus malesuada.</p>
                            </div>
                        </div>
                    </div>
                </div> */}

            </div>
            <div className='fixed w-1/5 right-[35px] top-[100px] border border-gray-700 border-dashed rounded-[12px] p-6'>
                <div className='flex justify-between items-center mt-6'>
                    <div className='flex justify-center items-center flex-col'>
                        <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="user"
                            width="2em"
                            height="2em"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
                        </svg>
                        <p className='text-center mt-4'>
                            <CountUp start={0} end={710} duration={2} className="text-primary text-xl sm:text-3xl text-center"></CountUp>
                        </p>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="property-safety"
                            width="2em"
                            height="2em"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6zM430.5 318h-46c-1.7 0-3.3.4-4.8 1.2a10.1 10.1 0 00-4 13.6l88 161.1h-45.2c-5.5 0-10 4.5-10 10v21.3c0 5.5 4.5 10 10 10h63.1v29.7h-63.1c-5.5 0-10 4.5-10 10v21.3c0 5.5 4.5 10 10 10h63.1V658c0 5.5 4.5 10 10 10h41.3c5.5 0 10-4.5 10-10v-51.8h63.4c5.5 0 10-4.5 10-10v-21.3c0-5.5-4.5-10-10-10h-63.4v-29.7h63.4c5.5 0 10-4.5 10-10v-21.3c0-5.5-4.5-10-10-10h-45.7l87.7-161.1a10.05 10.05 0 00-8.8-14.8h-45c-3.8 0-7.2 2.1-8.9 5.5l-73.2 144.3-72.9-144.3c-1.7-3.4-5.2-5.5-9-5.5z"></path>
                        </svg>
                        <p className='text-center mt-4'>
                            <CountUp start={0} end={542} duration={1.5} className="text-primary text-xl sm:text-3xl text-center"></CountUp>
                        </p>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="like"
                            width="2em"
                            height="2em"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 00-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 00471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0142.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"></path>
                        </svg>

                        <p className='text-center mt-4'>
                            <CountUp start={0} end={325} duration={1} className="text-primary text-xl sm:text-3xl text-center"></CountUp>
                        </p>
                    </div>
                </div>

                <div className='flex justify-center items-center my-12 w-full h-[7em]'>
                    <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="like"
                        width="5em"
                        height="5em"
                        fill="currentColor"
                        aria-hidden="true"
                        className='hover:w-[6.5em] hover:h-[6.5em] transition-all cursor-pointer hover:text-red-700'
                    >
                        <path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 00-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 00471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0142.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"></path>
                    </svg>
                </div>

                <div className="rounded-lg overflow-hidden">
                    {loading ? (
                        <div className="min-h-[325px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] ">
                            <span className="animate-spin border-2 border-black dark:border-white !border-l-transparent  rounded-full w-5 h-5 inline-flex"></span>
                        </div>
                    ) : (
                        <ReactApexChart series={salesByCategory.series} options={salesByCategory.options} type="donut" height={460} />
                    )}
                </div>

                {/* <div className="flex flex-wrap w-full justify-center mb-5 mt-12">
                    <div className="border border-gray-500/20 rounded-md shadow-[rgb(31_45_61_/_10%)_0px_2px_10px_1px] dark:shadow-[0_2px_11px_0_rgb(6_8_24_/_39%)] p-6 pt-12 mt-8 relative">
                        <div className="absolute text-white-light ltr:left-6 rtl:right-6 -top-8 w-16 h-16 rounded-md flex items-center justify-center mb-5 mx-auto">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="carry-out" width="3em" height="3em" fill="currentColor" aria-hidden="true" className='text-green-600'><path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v584zM688 420h-55.2c-5.1 0-10 2.5-13 6.6L468.9 634.4l-64.7-89c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0026 0l212.6-292.7c3.8-5.4 0-12.8-6.5-12.8z"></path></svg>
                        </div>
                        <h5 className="text-dark text-lg font-semibold mb-3.5 dark:text-white-light">Get Started Free</h5>
                        <p className="text-white-dark text-[15px]  mb-3.5">Lorem ipsum dolor sit amet, labore et dolore magna aliqua.</p>
                        <button type="button" className="btn btn-outline-success">Get Started Free</button>{' '}
                    </div>
                </div>

                <div className="flex flex-wrap w-full justify-center mb-5">
                    <div className="border border-gray-500/20 rounded-md shadow-[rgb(31_45_61_/_10%)_0px_2px_10px_1px] dark:shadow-[0_2px_11px_0_rgb(6_8_24_/_39%)] p-6 pt-12 mt-8 relative">
                        <div className="absolute text-white-light ltr:left-6 rtl:right-6 -top-8 w-16 h-16 rounded-md flex items-center justify-center mb-5 mx-auto">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="dollar" width="3em" height="3em" fill="currentColor" aria-hidden="true" className='text-red-600'><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z"></path></svg>
                        </div>
                        <h5 className="text-dark text-lg font-semibold mb-3.5 dark:text-white-light">Get Started Premium</h5>
                        <p className="text-white-dark text-[15px]  mb-3.5">Lorem ipsum dolor sit amet, labore et dolore magna aliqua.</p>
                        <button type="button" className="btn btn-outline-danger">Get Started Premium</button>{' '}
                    </div>
                </div> */}

            </div>
        </div>
    )
}