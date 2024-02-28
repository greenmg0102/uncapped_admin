import { pokerMarkList } from '../../../utils/reference'
export default function Summary({ pokerTypeCount }: any) {

    return (
        <div className="panel w-full">
            <div className="mb-10">
                <h5 className="font-semibold text-lg dark:text-white-light">Summary</h5>
            </div>
            <div className="space-y-4 h-[24em] overflow-y-auto pr-4">
                {pokerTypeCount.map((item: any, index: any) =>
                    <div key={index} className="border border-[#ebedf2] rounded dark:bg-[#1b2e4b] dark:border-0">
                        <div className="flex items-center justify-between p-4 py-2">
                            <div className="flex justify-center items-center grid place-content-center w-9 h-9 rounded-md bg-secondary-light dark:bg-gray-600 text-secondary dark:text-secondary-light">
                                <img
                                    src={pokerMarkList.filter((each: any) => each.value === item._id)[0].image}
                                    alt={pokerMarkList.filter((each: any) => each.value === item._id)[0].image}
                                    className="max-w-[20px] w-full"
                                />
                            </div>
                            <div className="ltr:ml-4 rtl:mr-4 flex items-start justify-between flex-auto font-semibold">
                                <h6 className="text-white-dark text-[13px] dark:text-white-dark">
                                    <span className="block text-base text-[#515365] dark:text-white-light">{item._id}</span>
                                </h6>
                                <p className="ltr:ml-auto rtl:mr-auto text-secondary">{item.count}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}