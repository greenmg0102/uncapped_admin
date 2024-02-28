import { useNavigate } from 'react-router-dom';

export default function UserInfo({ pokerTypeCount, pokerMarkList }: any) {

    const navigate = useNavigate();

    return (
        <div className=''>
            <p className='text-center font-bold text-[16px] text-gray-300 rounded-[4px] mb-2'>
                User Info
            </p>
            <div className='pl-1 mb-1 flex justify-start 2xl:flex-col flex-wrap'>
                {/* <div className="w-full flex justify-startitems-center mb-1 mr-2">
                    <p className="w-[85px] text-left mr-3">Sub Tier </p>
                    <p>: <span className="badge badge-outline-primary rounded-full">Premium</span></p>
                </div> */}
                <div className='w-full flex justify-between items-center'>
                    <div className="w-full flex justify-start items-center">
                        <p className="w-[85px] text-left mr-3">Hand History </p>
                        <p>: {pokerTypeCount.reduce((previous: any, after: any) => previous + after.count, 0)}
                        </p>
                    </div>
                    <span className="badge badge-outline-primary rounded-full">Premium</span>
                </div>
            </div>
            <div className='flex justify-start items-center flex-wrap px-2'>
                {pokerTypeCount.map((item: any, index: any) =>
                    <div key={index} className="w-1/2 3xl:w-1/3 flex justify-start items-center pl-0 mb-1">
                        <p className="text-left mr-1">
                            <img
                                src={pokerMarkList.filter((each: any) => each.value === item._id)[0].image}
                                alt={pokerMarkList.filter((each: any) => each.value === item._id)[0].image}
                                className="max-w-[16px] w-full m-auto"
                            />
                        </p>
                        <p>: {item.count}</p>
                    </div>
                )}
            </div>
            <div
                className='flex justify-center pt-1'
                onClick={() => navigate('/user/poker/upload')}
            >
                <button type="button" className="btn btn-outline-primary btn-sm w-full">Import more hands</button>
            </div>
        </div>
    )
}