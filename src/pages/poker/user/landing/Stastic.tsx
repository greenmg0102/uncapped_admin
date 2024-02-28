import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { NavLink } from 'react-router-dom';
import { getInfo } from '../../../../utils/functions/user/landing/statistic'

export default function Stastic() {

    const [totalStatistic, setTotalStatistic] = useState<any>({
        totalUser: 0,
        totalHand: 0,
        totalVisit: 0
    })

    useEffect(() => {

        let userCount = localStorage.getItem('uncapped-poker-totalUser')
        let handCount = localStorage.getItem('uncapped-poker-totalHand')
        let visitCount = localStorage.getItem('uncapped-poker-totalVisit')

        setTotalStatistic({ ...totalStatistic, totalUser: userCount, totalHand: handCount, totalVisit: visitCount })

        async function fetchData() {
            let result = await getInfo()

            localStorage.setItem('uncapped-poker-totalUser', result.totalUser);
            localStorage.setItem('uncapped-poker-totalHand', result.totalHand);
            localStorage.setItem('uncapped-poker-totalVisit', result.totalVisit);

            setTotalStatistic({ ...totalStatistic, totalUser: result.totalUser, totalHand: result.totalHand, totalVisit: result.totalVisit })
        }
        fetchData()
    }, [])

    return (
        <div className='pb-5 mt-4 md:mt-0'>
            <div className='flex justify-between md:justify-around lg:justify-between items-center mt-1'>
                <div className='flex justify-center items-center flex-col'>
                    <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="user"
                        width="1.6em"
                        height="1.6em"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
                    </svg>
                    <p className='text-center mt-2'>
                        <CountUp start={0} end={totalStatistic.totalUser} duration={2} className="text-primary text-xl sm:text-xl text-center"></CountUp>
                    </p>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="property-safety"
                        width="1.6em"
                        height="1.6em"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6zM430.5 318h-46c-1.7 0-3.3.4-4.8 1.2a10.1 10.1 0 00-4 13.6l88 161.1h-45.2c-5.5 0-10 4.5-10 10v21.3c0 5.5 4.5 10 10 10h63.1v29.7h-63.1c-5.5 0-10 4.5-10 10v21.3c0 5.5 4.5 10 10 10h63.1V658c0 5.5 4.5 10 10 10h41.3c5.5 0 10-4.5 10-10v-51.8h63.4c5.5 0 10-4.5 10-10v-21.3c0-5.5-4.5-10-10-10h-63.4v-29.7h63.4c5.5 0 10-4.5 10-10v-21.3c0-5.5-4.5-10-10-10h-45.7l87.7-161.1a10.05 10.05 0 00-8.8-14.8h-45c-3.8 0-7.2 2.1-8.9 5.5l-73.2 144.3-72.9-144.3c-1.7-3.4-5.2-5.5-9-5.5z"></path>
                    </svg>
                    <p className='text-center mt-2'>
                        <CountUp start={0} end={totalStatistic.totalVisit} duration={1.5} className="text-primary text-xl sm:text-xl text-center"></CountUp>
                    </p>
                </div>

                <div className='flex justify-center items-center flex-col'>
                    <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="database"
                        width="1.6em"
                        height="1.6em"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208zM304 240a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0z"></path>
                    </svg>
                    <p className='text-center mt-1'>
                        <CountUp start={0} end={totalStatistic.totalHand} duration={5} className="text-primary text-xl sm:text-xl text-center"></CountUp>
                    </p>
                </div>
            </div>

            <div className='block sm:flex sm:justify-between lg:block'>

                <div className="flex flex-wrap w-full justify-center mb-1 mt-1">
                    <div className="w-full border border-gray-500/20 rounded-md shadow-[rgb(31_45_61_/_10%)_0px_2px_10px_1px] dark:shadow-[0_2px_11px_0_rgb(6_8_24_/_39%)] p-6 pt-8 mt-8 relative">
                        <div className="absolute text-white-light ltr:left-6 rtl:right-6 -top-8 w-16 h-16 rounded-md flex items-center justify-center mb-2 mx-auto">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="dollar" width="3em" height="3em" fill="currentColor" aria-hidden="true" className='text-red-600'><path d="M512 64C264.6 64 64 264.6 64 512s250.6 448 448 448 448-250.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z"></path></svg>
                        </div>
                        <h4 className="text-dark text-lg font-semibold mb-1.5 dark:text-white-light my-4 text-center lg:text-left">Get Started</h4>

                        <div className='flex justify-around flex-col items-start sm:flex-row lg:flex-col sm:items-start'>
                            <div>
                                <div className='flex justify-start sm:justify-start items-center mb-2 mt-4'>
                                    <div className='w-[6px] h-[6px] rounded-full bg-green-500 mr-2' />
                                    <p className="text-white-dark text-[15px] mb-0 sm:text-left">Poker Study</p>
                                </div>
                                <div className='flex justify-start sm:justify-start items-center mb-2'>
                                    <div className='w-[6px] h-[6px] rounded-full bg-green-500 mr-2' />
                                    <p className="text-white-dark text-[15px] mb-0 sm:text-left">Bucketed Report Section</p>
                                </div>
                                <div className='flex justify-start sm:justify-start items-center mb-2'>
                                    <div className='w-[6px] h-[6px] rounded-full bg-green-500 mr-2' />
                                    <p className="text-white-dark text-[15px] mb-0 sm:text-left">10K hands data upload</p>
                                </div>
                                <div className='flex justify-start sm:justify-start items-center mb-2'>
                                    <div className='w-[6px] h-[6px] rounded-full bg-green-500 mr-2' />
                                    <p className="text-white-dark text-[15px] mb-0 sm:text-left">Hand Reply</p>
                                </div>
                            </div>
                            <div>
                                <div className='flex justify-start sm:justify-start items-center mb-2 mt-4'>
                                    <div className='w-[6px] h-[6px] rounded-full bg-red-500 mr-2' />
                                    <p className="text-white-dark text-[15px] mb-0 sm:text-left">Unlimited Hands Upload</p>
                                </div>
                                <div className='flex justify-start sm:justify-start items-center mb-2'>
                                    <div className='w-[6px] h-[6px] rounded-full bg-red-500 mr-2' />
                                    <p className="text-white-dark text-[15px] mb-0 sm:text-left">More detailed Report Section</p>
                                </div>
                                <div className='flex justify-start sm:justify-start items-center mb-2'>
                                    <div className='w-[6px] h-[6px] rounded-full bg-red-500 mr-2' />
                                    <p className="text-white-dark text-[15px] mb-0 sm:text-left">Involoving Poker Study Lesson</p>
                                </div>
                                <div className='flex justify-start sm:justify-start items-center mb-2'>
                                    <div className='w-[6px] h-[6px] rounded-full bg-red-500 mr-2' />
                                    <p className="text-white-dark text-[15px] mb-0 sm:text-left">Hand Reply</p>
                                </div>
                            </div>
                        </div>

                        <NavLink
                            to="/user/payment"
                            className="btn btn-outline-danger mt-8"
                        >
                            Get Started
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className='flex justify-around items-center mt-2'>

                <a href='https://discord.com/invite/PTYJz3kw' target='_blank'>
                    <svg width="2em" height="2em" viewBox="0 -28.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                        <g><path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="#5865F2" fillRule="nonzero"></path></g>
                    </svg>
                </a>
                <a href='https://discord.com/invite/PTYJz3kw' target='_blank'>
                    <svg width="2em" height="2em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7208)" />
                        <path d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z" fill="white" />
                        <defs>
                            <linearGradient id="paint0_linear_87_7208" x1="16" y1="2" x2="16" y2="29.917" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#18ACFE" />
                                <stop offset="1" stopColor="#0163E0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </a>
                <a href='https://discord.com/invite/PTYJz3kw' target='_blank'>
                    <svg width="2em" height="2em" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="512" cy="512" r="512" style={{ fill: "#1da1f2" }} />
                        <path d="M778 354.8c-18.8 8.3-38.9 13.9-60.1 16.5 21.6-13 38.2-33.5 46-57.9-20.2 11.8-42.7 20.4-66.5 25.2-19.1-20.4-46.2-33.2-76.4-33.2-57.8 0-104.7 46.9-104.7 104.6 0 8.3 1 16.3 2.7 23.9-87-4.1-164.2-45.9-215.8-109.1-9.1 15.4-14.2 33.2-14.2 52.7 0 36.4 18.5 68.4 46.6 87.2-17.2-.6-33.3-5.3-47.4-13.1v1.3c0 50.8 36 93.1 84 102.7-8.8 2.4-18.1 3.6-27.6 3.6-6.7 0-13.1-.6-19.5-1.8 13.4 41.6 52 71.9 98 72.7-35.7 28.1-81.1 44.8-129.8 44.8-8.3 0-16.6-.5-24.9-1.4 46.6 29.7 101.5 47 160.8 47C621.7 720.5 727 561 727 422.9c0-4.4 0-8.9-.3-13.4 20.4-14.7 38.3-33.2 52.3-54.2l-1-.5z" style={{ fill: "#fff" }} />
                    </svg>
                </a>
                <a href='https://discord.com/invite/PTYJz3kw' target='_blank'>
                    <svg width="2em" height="2em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z" /></svg>
                </a>
                <a href='https://discord.com/invite/PTYJz3kw' target='_blank'>
                    <svg width="2em" height="2em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_87_7153)" />
                        <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint1_radial_87_7153)" />
                        <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint2_radial_87_7153)" />
                        <path d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z" fill="white" />
                        <defs>
                            <radialGradient id="paint0_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)">
                                <stop stopColor="#B13589" />
                                <stop offset="0.79309" stopColor="#C62F94" />
                                <stop offset="1" stopColor="#8A3AC8" />
                            </radialGradient>
                            <radialGradient id="paint1_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)">
                                <stop stopColor="#E0E8B7" />
                                <stop offset="0.444662" stopColor="#FB8A2E" />
                                <stop offset="0.71474" stopColor="#E2425C" />
                                <stop offset="1" stopColor="#E2425C" stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="paint2_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)">
                                <stop offset="0.156701" stopColor="#406ADC" />
                                <stop offset="0.467799" stopColor="#6A45BE" />
                                <stop offset="1" stopColor="#6A45BE" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                    </svg>
                </a>
            </div>
        </div>
    )
}