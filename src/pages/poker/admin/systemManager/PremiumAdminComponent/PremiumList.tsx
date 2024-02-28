
import AnimateHeight from 'react-animate-height';
import { useState } from 'react';

const PremiumList = ({ premiumList }: any) => {

    const [active, setActive] = useState<number>(1);
    const [which, setWhich] = useState<number>(1);
    const togglePara = (value: number, panel: number) => {
        setActive((oldValue) => {
            return oldValue === value ? 0 : value;
        });
        setWhich((oldWhich) => {
            return oldWhich === which ? 0 : which;
        });
    };

    return (
        <div className=''>
            {premiumList.map((item: any, index: any) =>
                <div key={index} className="flex items-start justify-start mb-4">
                    <div className="max-w-[18rem] w-full bg-[#3b3f5c] shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none p-5 mr-4">
                        <div className="text-center text-black-light">
                            <div className="mb-5 w-20 h-20 rounded-full overflow-hidden mx-auto">
                                <img src="/assets/images/profile-34.jpeg" alt="profile" className="w-full h-full object-cover" />
                            </div>
                            <h5 className="text-white text-[15px] font-semibold mb-2">{item.title}</h5>
                            <div className='flex justify-between items-center mb-2'>
                                <h5>Monthly Price</h5>
                                <h5>{item.monthly}</h5>
                            </div>
                            <div className='flex justify-between items-center mb-2'>
                                <h5>Yearly Price</h5>
                                <h5>{item.yearly}</h5>
                            </div>
                            <div className='flex justify-between items-center mb-2'>
                                <h5>Precent</h5>
                                <h5>{item.precent}</h5>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className="border border-[#d3d3d3] rounded dark:border-[#1b2e4b]">
                            {item.majorInfo.map((one: any, unit: any) =>
                                <div key={unit}>
                                    <button
                                        type="button"
                                        className={`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] `}
                                        onClick={() => togglePara(unit, index)}
                                    >
                                        {one.item}
                                        <div className={`ltr:ml-auto rtl:mr-auto `}>
                                        </div>
                                    </button>
                                    <div>
                                        {one.subList.map((each: any, order: any) =>
                                            <AnimateHeight key={order} duration={300} height={active === unit && which === index ? 'auto' : 0}>
                                                <div className="space-y-2 p-4 text-white-dark text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
                                                    <p>
                                                        {each}
                                                    </p>
                                                </div>
                                            </AnimateHeight>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PremiumList;