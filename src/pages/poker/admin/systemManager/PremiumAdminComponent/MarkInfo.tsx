const MarkInfo = ({ markInfo, onchange }: any) => {


    return (
        <div className='w-1/4 pr-2 py-2 border border-dashed border-primary border-t-0 border-l-0 border-b-0'>

            <p className='text-center text-[18px] mb-4'>Mark Infomation</p>
            <div className='mb-4'>
                <p className='mb-2'>Itme</p>
                <input
                    type="text"
                    placeholder="Plz fill out the Title"
                    className="form-input w-full"
                    value={markInfo.title}
                    onChange={(e: any) => onchange("title", e.target.value)}
                    required
                />
            </div>
            <div className='mb-4'>
                <p className='mb-2'>Monthly Price</p>
                <input
                    type="number"
                    value={markInfo.monthly}
                    className="form-input"
                    min="0"
                    max="100"
                    onChange={(e: any) => onchange("monthly", e.target.value)}
                />
            </div>
            <div className='mb-4'>
                <p className='mb-2'>Yearly Price</p>
                <input
                    type="number"
                    value={markInfo.yearly}
                    className="form-input"
                    min="0"
                    max="100"
                    onChange={(e: any) => onchange("yearly", e.target.value)}
                />
            </div>
            <div>
                <p className='mb-2'>Percent</p>
                <input
                    type="number"
                    value={markInfo.precent}
                    className="form-input"
                    min="0"
                    max="100"
                    onChange={(e: any) => onchange("precent", e.target.value)}
                />
            </div>

        </div>
    );
};

export default MarkInfo;