import AnimateHeight from 'react-animate-height';
import { useState } from 'react';


const SubMajorOption = ({ majorInfo }: any) => {

    const [active, setActive] = useState<number>(1);
    const togglePara = (value: number) => {
        setActive((oldValue) => {
            return oldValue === value ? 0 : value;
        });
    };

    return (
        <div className='w-1/2 p-2 py-2'>
            <p className='text-center text-[18px] mb-4'>Sub-major Option</p>
            <div className='mb-4'>
                <div className="border border-[#d3d3d3] rounded dark:border-[#1b2e4b]">
                    {majorInfo.map((item: any, index: any) =>
                        <div key={index}>
                            <button
                                type="button"
                                className={`p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] `}
                                onClick={() => togglePara(index)}
                            >
                                {item.item}
                                <div className={`ltr:ml-auto rtl:mr-auto `}>
                                </div>
                            </button>
                            <div>
                                {item.subList.map((each: any, order: any) =>
                                    <AnimateHeight key={order} duration={300} height={active === index ? 'auto' : 0}>
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
    );
};

export default SubMajorOption;