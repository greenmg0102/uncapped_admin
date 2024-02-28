import { heroPosition, villainPosition, stackDepth, action } from '../../../../../../../../utils/reference/reportingSettingList'
import clsx from 'clsx'

export default function ReportingSetting({ reportingOption, setReportingOption }: any) {

    const middleSetting = (type: any, value: any) => {
        let real = []
        if (reportingOption[type].includes(value)) real = reportingOption[type].filter((item: any) => item !== value)
        else {
            real = reportingOption[type]
            real.push(value)
        }
        setReportingOption({ ...reportingOption, [type]: real })
    }

    return (
        <div className='h-[350px] flex justify-between flex-wrap my-[24px]'>

            <div className='w-full sm:w-1/2 md:w-1/4 p-1'>
                <p className='text-center text-[18px] mb-[24px]'>Hero Position</p>
                <div className='flex justify-between items-center flex-wrap'>
                    {heroPosition.map((item: any, index: any) =>
                        <div
                            key={index}
                            className='p-1 w-full sm:w-1/2'
                        >
                            <div
                                className={clsx(
                                    'flex justify-center items-center text-gray-100 font-bold h-[35px] text-[18px] hover:text-[24px] hover:text-gray-700 cursor-pointer rounded-[12px] hover:bg-green-300 transition-all',
                                    reportingOption.heroPosiotionList.includes(index) ? "bg-gray-500" : "bg-green-500"
                                )}
                                onClick={() => middleSetting("heroPosiotionList", index)}
                            >
                                {item}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className='w-full sm:w-1/2 md:w-1/4 p-1'>
                <p className='text-center text-[18px] mb-[24px]'>Villain Positin</p>
                <div className='flex justify-between items-center flex-wrap'>
                    {villainPosition.map((item: any, index: any) =>
                        <div
                            key={index}
                            className='p-1 w-full sm:w-1/2'
                        >
                            <div
                                className={clsx(
                                    'flex justify-center items-center text-gray-100 font-bold h-[35px] text-[18px] hover:text-[24px] hover:text-gray-700 cursor-pointer rounded-[12px] hover:bg-green-300 transition-all',
                                    reportingOption.villianPosiotionList.includes(index) ? "bg-gray-500" : "bg-green-500"
                                )}
                                onClick={() => middleSetting("villianPosiotionList", index)}
                            >
                                {item}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className='w-full sm:w-1/2 md:w-1/4 p-1'>
                <p className='text-center text-[18px] mb-[24px]'>Stack Depth</p>
                <div className='flex justify-between items-center flex-wrap'>
                    {stackDepth.map((item: any, index: any) =>
                        <div
                            key={index}
                            className='p-1 w-full sm:w-1/2'
                        >
                            <div
                                className={clsx(
                                    'flex justify-center items-center text-gray-100 font-bold h-[35px] text-[18px] hover:text-[24px] hover:text-gray-700 cursor-pointer rounded-[12px] hover:bg-green-300 transition-all',
                                    reportingOption.stackDepthList.includes(parseInt(item.replace(/bb$/, ''), 10)) ? "bg-gray-500" : "bg-green-500"
                                )}
                                onClick={() => middleSetting("stackDepthList", parseInt(item.replace(/bb$/, ''), 10))}
                            >
                                {item}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className='w-full sm:w-1/2 md:w-1/4 p-1'>
                <p className='text-center text-[18px] mb-[24px]'>Action</p>
                <div className='flex justify-between items-center flex-wrap'>
                    {action.map((item: any, index: any) =>
                        <div
                            key={index}
                            className='p-1 w-full sm:w-1/2'
                        >
                            <div
                                className={clsx(
                                    'flex justify-center items-center text-gray-100 font-bold h-[35px] text-[18px] hover:text-[24px] hover:text-gray-700 cursor-pointer rounded-[12px] hover:bg-green-300 transition-all',
                                    reportingOption.actionList.includes(item) ? "bg-gray-500" : "bg-green-500"
                                )}
                                onClick={() => middleSetting("actionList", item)}
                            >
                                {item}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}