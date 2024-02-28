import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import UploadItem from './UploadItem'
import NewsItem from './NewsItem'
import DatabaseOverview from './DatabaseOverview'
import StasticData from './StasticData'

const PokerFileUpload = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        if (accessToken === null && refreshToken === null) navigate('/auth/boxed-signin');
    }, [])

    return (
        <div className='pt-0 relative'>
            <div className="relative mx-auto mb-5 sm:mb-0 ltr:sm:mr-8 rtl:sm:ml-8 before:absolute before:top-12 before:left-1/2 before:-bottom-[15px] before:-translate-x-1/2 before:border-l-2 before:border-[#ebedf2] before:w-0 before:h-auto before:-z-[1] dark:before:border-[#191e3a] before:hidden sm:before:block">
                <div className="absolute flex justify-center top-[200px] w-full">
                    <img src="/assets/images/pokerImage/log_transparent.png" alt="radar" className="w-1/3 opacity-[30%] z-[2]" />
                </div>
            </div>
            <div className='relative flex justify-center items-center z-[3] xl:top-[30px]'>
                <div className='w-full'>
                    <div className='flex justify-center mb-4'>
                        <div className='w-[90%] xl:w-5/6 block xl:flex xl:justify-between items-center'>
                            <div className='w-full xl:w-2/3 h-[350px] xl:pr-4 flex justify-center items-center'>
                                <NewsItem />
                            </div>
                            <div className='w-full mt-4 xl:mt-0 xl:w-1/3 h-[350px] border rounded-[6px] border-gray-700 border-dashed transition-all hover:border-solid cursor-pointer hover:border-gray-500'>
                                <UploadItem />
                            </div>
                        </div>
                    </div>
                    <div className=' flex justify-center'>
                        <div className='w-[90%] xl:w-5/6 block xl:flex xl:justify-between items-center'>
                            <div className='w-full xl:w-1/3 h-[350px] xl:pr-4 flex justify-center items-center'>
                                <DatabaseOverview />
                            </div>
                            <div className='w-full mt-4 xl:mt-0 xl:w-2/3 h-[350px] border rounded-[6px] border-gray-700 border-dashed transition-all hover:border-solid cursor-pointer hover:border-gray-500'>
                                <StasticData />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PokerFileUpload;