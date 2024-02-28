import GradientReportItem from './GradientReportItem'
import { playCardArray } from '../../../../../../utils/reference'

const GradientReport = ({ userInfoResult, reportingResult }: any) => {

    return (
        <div className='flex justify-center items-center flex-wrap h-[32.4em] pr-[10px]'>
            {
                reportingResult !== undefined &&
                    Object.keys(reportingResult).length > 0 ?
                    playCardArray.map((item, index) =>
                        <div
                            key={index}
                            className='cursor-pointer'
                            style={{ width: "7.692%", padding: "1px" }}
                        >
                            <GradientReportItem
                                data={item}
                                handResult={reportingResult[item]}
                            />
                        </div>
                    )
                    :
                    null
            }
        </div>
    );
};

export default GradientReport;
