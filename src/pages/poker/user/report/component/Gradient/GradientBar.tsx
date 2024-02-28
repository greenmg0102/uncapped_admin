import { gradientColor } from '../../../../../../utils/reference/reporting'

const GradientBar = () => {

    return (
        <div>
            <div className='flex flex-col-reverse'>

                {Object.keys(gradientColor).map(Number).sort((a, b) => a - b).map((key: any, index: any) =>
                    <div
                        key={index}
                        className='w-[20px] h-[19.7px] text-gray-900 font-bold text-center opacity-[1]'
                        style={{
                            backgroundColor: gradientColor[key]
                        }}
                    >
                    </div>
                )}
            </div>
        </div>
    );
};

export default GradientBar;
