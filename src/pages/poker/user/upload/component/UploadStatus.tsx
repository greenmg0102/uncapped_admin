import { identityPokerNet } from '../../../../../utils/actionValidation/identityPokerNet'
import { pokerMarkList } from '../../../../../utils/reference'

const UploadStatus = ({ fileStatus }: any) => {

    return (
        <div>
            <h1 className='mb-8 text-center font-bold text-[18px] text-red-300 dark:text-white transition-all'>
                Upload Status
            </h1>
            <div className='flex justify-between flex-wrap items-start'>
                <p className='w-1/6 font-bold mb-4'> File Name </p>
                <p className='w-5/6 text-right font-bold mb-4 pl-[24px]'> {fileStatus.filename.length > 20 ? fileStatus.filename.slice(0, 30) : fileStatus.filename} </p>
                <p className='w-1/6 text-[16px] font-bold mb-4'> File Size </p>
                {Number((fileStatus.fileSize / 1024).toFixed(2)) > 1024 ?
                    <p className='w-5/6 text-right font-bold mb-4 pl-[24px]'>
                        {(fileStatus.fileSize / 1024 / 1024).toFixed(2)} MBytes
                    </p>
                    :
                    <p className='w-5/6 text-right font-bold mb-4 pl-[24px]'>
                        {(fileStatus.fileSize / 1024).toFixed(2)} KBytes
                    </p>
                }
                <p className='w-2/6 text-[16px] font-bold'> Poker Type </p>
                <div className='w-4/6 flex justify-end items-center'>
                    {pokerMarkList.filter((each: any) => each.value === identityPokerNet(fileStatus.fileContentAsString)).map((item: any, index: number) => (
                        <img
                            key={index}
                            src={item.image}
                            alt={item.image}
                            className="max-w-[20px] w-full"
                        />
                    ))}
                    <p className='mb-0 ml-2 font-bold text-[16px]'>{identityPokerNet(fileStatus.fileContentAsString)}</p>
                </div>
            </div>
        </div >
    );
};

export default UploadStatus;
