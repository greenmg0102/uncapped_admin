
const SupprtSite = ({ pokerMarkList }: any) => {

    return (
        <div>
            <h1 className='text-center font-bold text-[18px] text-red-300 dark:text-white transition-all my-4 mb-8'>
                Supported Sites
            </h1>
            <div className='flex justify-between sm:justify-start flex-col sm:flex-row flex-wrap items-center pt-4'>
                {pokerMarkList.map((item: any, index: any) =>
                    <div className='w-1/2 flex justify-start items-center mb-4' key={index}>
                        <img src={item.image} className="max-w-[20px] w-full m-auto mx-4" alt={item.image} />
                        <h4 className='font-bold'>
                            {item.title}
                        </h4>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SupprtSite;
