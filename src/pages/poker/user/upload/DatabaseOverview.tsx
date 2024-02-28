import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { userHandInfo } from '../../../../utils/functions/user/report/Report'
import { pokerMarkList } from '../../../../utils/reference'
import styles from './Upload.module.css'
import clsx from 'clsx'

const DatabaseOverview = () => {

    const [pokerTypeCount, setPokerTypeCount] = useState([])

    useEffect(() => {

        async function fetchMyAPI() {
            const detailResult = await userHandInfo("userID")
            setPokerTypeCount(detailResult)
        }
        fetchMyAPI()

    }, [])

    return (
        <Link
            to="/user/poker/report"
            className='relative w-full px-8 h-[350px] border rounded-[6px] border-gray-700 border-dashed transition-all hover:border-solid cursor-pointer hover:border-gray-500'
        >
            <div className="flex justify-start items-center mb-4 my-8">
                <p className="text-[18px] text-left mr-3">Sub Tier </p>
                <p>: <span className="badge badge-outline-primary rounded-full">Premium</span></p>
            </div>
            <div className="flex justify-start items-center mb-4">
                <p className="text-[18px] text-left mr-3">Hand Histories </p>
                <p className='mb-0 text-[20px]'>: {pokerTypeCount.reduce((previous: any, after: any) => previous + after.count, 0)}</p>
            </div>
            <div className='flex justify-center items-center'>
                <div className='w-5/6 flex justify-start items-center flex-wrap'>
                    {pokerTypeCount.map((item: any, index: any) =>
                        <div key={index} className="w-1/3  flex justify-start items-center pl-0 mb-1">
                            <p className="text-left mr-1">
                                <img
                                    src={pokerMarkList.filter((each: any) => each.value === item._id)[0].image}
                                    alt={pokerMarkList.filter((each: any) => each.value === item._id)[0].image}
                                    className="max-w-[18px] w-full m-auto"
                                />
                            </p>
                            <p>: {item.count}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex justify-start items-center mt-4">
                <p className="text-[18px] text-left mr-3">bb/100 </p>
                <p className='mb-0 text-[20px]'>: 10.5</p>
            </div>

            <img src={`/assets/images/pokerImage/looking.png`} alt="flag" className={clsx(styles.looking_zoom, "w-32 h-32 object-cover absolute right-[10px] bottom-[10px]")} />
        </Link>
    );
};

export default DatabaseOverview;