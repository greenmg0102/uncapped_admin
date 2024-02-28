
export default function Compare() {

    return (
        <div>
            <div
                id="compare"
                className="sm:flex"
                style={{
                    height: "calc(100vh - 125px)",
                }}
            >
                <div className="relative mx-auto mb-5 sm:mb-0 ltr:sm:mr-8 rtl:sm:ml-8 z-[2] before:absolute before:top-12 before:left-1/2 before:-bottom-[15px] before:-translate-x-1/2 before:border-l-2 before:border-[#ebedf2] before:w-0 before:h-auto before:-z-[1] dark:before:border-[#191e3a] before:hidden sm:before:block">
                    <img src="/assets/images/profile-17.jpg" alt="img" className="w-12 h-12 mx-auto rounded-full shadow-[0_4px_9px_0_rgba(31,45,61,0.31)]" />
                </div>
                <div className="flex-1">
                    <h4 className="text-primary text-xl font-bold text-center ltr:sm:text-left rtl:sm:text-right">What is the difference between the other platform?</h4>
                    <p className="text-center ltr:sm:text-left rtl:sm:text-right">New Brand Poker Strategy Analyzing platform</p>
                    <p className="text-center ltr:sm:text-left rtl:sm:text-right"></p>
                    <div className="mt-1 sm:mt-1 w-full pr-0 md:pr-24">
                        <div
                            className='relative flex justify-center md:justify-between items-center w-ull'
                            style={{
                                height: "calc(100vh - 205px)",
                            }}
                        >
                            <div className="absolute w-full flex justify-center my-[60px]">
                                <img src="/assets/images/pokerImage/compare.png" alt="radar" className="w-1/2 opacity-[10%] hidden lg:block transition-all" />
                            </div>

                            <div className='pl-0 md:pl-4'>
                                <p className='text-[38px] leading-[64px] font-bold text-primary text-center md:text-left'>Compare your game with</p>
                                <p className='text-[38px] leading-[64px] font-bold text-primary text-center md:text-left'>Thousands of modern high accuracy preflop solutions</p>
                                <p className='text-[20px] leading-[32px] font-bold pl-0 md:pl-8 text-center md:text-left'>Creating preflop charts is a relative process and should be tailored to your gam. For this reason, we are introducing dynamic inputs such as limps and cold calls so you can get a closer comparison to what happens out in the field.</p>
                            </div>

                            <div className='absolute right-0 w-[100%] lg:w-[70%] transition-all'>
                                <img src="/assets/images/pokerImage/comparebg.png" alt="radar" className=" opacity-[45%]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="review" className="mb-24 opacity-0">1</div>
        </div>
    )
}