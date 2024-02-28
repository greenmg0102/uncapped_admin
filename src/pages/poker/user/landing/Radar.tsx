
export default function Radar() {

    return (
        <div>
            <div
                className="sm:flex transition-all"
                style={{
                    height: "calc(100vh - 13px)",
                }}
            >
                <div className="relative mx-auto mb-5 sm:mb-0 ltr:sm:mr-8 rtl:sm:ml-8 z-[2] before:absolute before:top-12 before:left-1/2 before:-bottom-[15px] before:-translate-x-1/2 before:border-l-2 before:border-[#ebedf2] before:w-0 before:h-auto before:-z-[1] dark:before:border-[#191e3a] before:hidden sm:before:block">
                    <img src="/assets/images/profile-17.jpg" alt="img" className="w-12 h-12 mx-auto rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)]" />
                </div>
                <div className="flex-1">
                    <h4 className="text-primary text-xl font-bold text-center ltr:sm:text-left rtl:sm:text-right">What is the Uncapped Theory Poker?</h4>
                    <p className="text-center ltr:sm:text-left rtl:sm:text-right">New Brand Poker Strategy Analyzing platform</p>
                    <div className="mt-1 sm:mt-1 w-full pr-0 md:pr-24">
                        <div
                            className='relative flex justify-center md:justify-between items-center w-full'
                            style={{
                                height: "calc(100vh - 205px)",
                            }}
                        >
                            <div className="absolute flex justify-center my-[60px]">
                                <img src="/assets/images/pokerImage/radar.png" alt="radar" className="w-1/2 opacity-[10%] hidden lg:block transition-all" />
                            </div>

                            <div className='pl-0 md:pl-4'>
                                <p className='text-[45px] leading-[64px] font-bold text-primary text-center md:text-left'>Uncapped Theory</p>
                                <p className='text-[24px] leading-[64px] font-bold pl-0 md:pl-8 text-center md:text-left'>Poker Solutions</p>

                                <p className='text-[45px] leading-[64px] font-bold text-primary text-center md:text-left'>Track, Analyze, and</p>
                                <p className='text-[45px] leading-[64px] font-bold text-primary text-center md:text-left'>accelerate your growth</p>

                                <p className='text-[24px] leading-[64px] font-bold pl-0 md:pl-8 text-center md:text-left'>Leak Tracking and Database</p>
                                <p className='text-[24px] leading-[64px] font-bold pl-0 md:pl-8 text-center md:text-left'>Surveillance Tool</p>

                            </div>
                            <div className='absolute right-0 w-[100%] lg:w-[50%] transition-all'>
                                <img src="/assets/images/pokerImage/radarbg.png" alt="radar" className="opacity-[45%]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="analyze" className="mb-24 opacity-0">1</div>
        </div>
    )
}