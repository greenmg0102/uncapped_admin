
const UploadUI = ({ availableCount, onslider, onChange }: any) => {

    return (
        <div>
            <form>
                <input
                    type="file"
                    name="file"
                    multiple={true}
                    id="file"
                    className="hidden"
                    accept=".txt"
                    onChange={e => onChange(e)}
                />
                <label htmlFor="file">
                    <div className="upload__image-wrapper ">
                        <div className="px-2 py-5 border border-dashed border-blue-900 rounded-[12px] cursor-pointer dark:hover:bg-gray-800 hover:bg-gray-300 transition-all" >
                            <div className='flex justify-center items-start'>
                                <svg
                                    focusable="false"
                                    data-icon="cloud-upload"
                                    width="2em"
                                    height="2em"
                                    fill="currentColor" aria-hidden="true" viewBox="64 64 896 896">
                                    <path d="M518.3 459a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 459z" />
                                    <path d="M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 01-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z" />
                                </svg>
                                <div className='ml-4'>
                                    <h3 className='font-bold transition-all mb-3'>
                                        Drop hands here or click to upload
                                    </h3>
                                    <h3 className='font-bold transition-all'>
                                        Upload up to <span className="text-[24px] mx-2">{availableCount}</span> files
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </label>
            </form>
            <input
                type="range"
                className="w-full py-2.5"
                value={availableCount}
                min="1"
                max="1000"
                onChange={(e: any) => onslider(e.target.value)}
            />
        </div>
    );
};

export default UploadUI;

