import Tippy from '@tippyjs/react';
import clsx from 'clsx'
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import 'tippy.js/dist/tippy.css';

const DefaultButtonGroup = ({ valueStatus, disableStatus, setDisableStatus, defaultReportSetting, setValueStatus, setAdvancedOptionModal }: any) => {

    const MySwal = withReactContent(Swal);

    const bufferSetValueStatus = (total: any, isEnable: any, type: any, message: any) => {

        if (isEnable) {
            setValueStatus(total)
            setDisableStatus({ ...disableStatus, [type]: true })
        }
        else {
            if (message !== "default") {
                MySwal.fire({
                    title: message,
                    toast: true,
                    position: 'top',
                    showConfirmButton: false,
                    timer: 2000,
                    showCloseButton: true,
                    customClass: { popup: "color-info" }
                });
            } ``
        }
    }
    return (
        <div className="relative flex justify-between flex-wrap items-start p-1 2xl:h-[203px] rounded-[8px] 2xl:rounded-tr-[0px]">
            <div className='absolute top-[10px] left-[2px] flex justify-center items-center flex-col'>
                <div
                    className='flex justify-start items-center bg-blue-600 text-gray-100 p-1 pr-2 rounded-[4px] cursor-pointer'
                    onClick={() => setAdvancedOptionModal(true)}
                >
                    <img srcSet="https://img.icons8.com/?size=48&amp;id=nfBuOILFwpdb&amp;format=png 1x, https://img.icons8.com/?size=96&amp;id=nfBuOILFwpdb&amp;format=png 2x" width="24" height="24" alt="Premium icon" />
                    Premium
                </div>
            </div>

            <div className="w-full 2xl:w-[40%]">
                <div className='flex justify-center items-center mb-2'>
                    <p className='text-center font-bold text-[16px] text-gray-300 rounded-[4px] p-1 py-4 mb-0 mr-0'>
                        Action
                    </p>
                    <Tippy trigger="click" content="Define the Action">
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" className='cursor-pointer'>
                            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
                        </svg>
                    </Tippy>
                </div>
                <div className='flex justify-between items-center flex-wrap'>
                    {defaultReportSetting.action.map((item: any, index: any) =>
                        <div
                            key={index}
                            className={
                                clsx(
                                    "mb-1 w-[33%] rounded-[4px] py-[4px] transition-all hover:bg-gray-700 cursor-pointer",
                                    item.valueList === valueStatus.action ? "bg-gray-700 text-gray-300 font-bold text-[18px] cursor-pointer" : "bg-gray-900",
                                )
                            }
                            onClick={
                                () => bufferSetValueStatus(
                                    { ...valueStatus, action: item.valueList },
                                    true,
                                    "generalAction",
                                    "default"
                                )
                            }
                        >
                            <p className='text-center'>{item.title}</p>
                            <p className='text-center'>{item.subTitle}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="w-1/3 2xl:w-[20%] pl-[4px] pr-[2px]">
                <div className='flex justify-center items-center mb-2'>
                    <p className='text-center font-bold text-[16px] text-gray-300 rounded-[4px] p-1 py-4 mb-0 mr-0'>
                        Hero Pos
                    </p>
                    <Tippy trigger="click" content="Define the Hero's Position">
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" className='cursor-pointer'>
                            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
                        </svg>
                    </Tippy>
                </div>
                {defaultReportSetting.heroPosition.map((item: any, index: any) =>
                    <Tippy key={index} content={item.title + " : " + item.stringList.join(", ")}>
                        <div
                            className={
                                clsx(
                                    "mb-1 w-full rounded-[4px] py-[4px] transition-all hover:bg-gray-700",
                                    disableStatus.generalAction ? "cursor-pointer" : "cursor-not-allowed",
                                    item.id === valueStatus.heroPositionIndex && valueStatus.heroPosition.length > 0 ? "bg-gray-700 text-gray-300 font-bold text-[18px]" : "bg-gray-900"
                                )
                            }
                            onClick={
                                () => bufferSetValueStatus(
                                    {
                                        ...valueStatus,
                                        heroPosition: item.id === valueStatus.heroPositionIndex ? [] : item.stringList,
                                        heroPositionIndex: item.id === valueStatus.heroPositionIndex ? -1 : item.id
                                    },
                                    disableStatus.generalAction,
                                    "generalHero",
                                    "Please select the Action !"
                                )
                            }
                        >
                            <p className='text-center'>{item.title}</p>
                        </div>
                    </Tippy>
                )}
            </div>
            <div className="w-1/3 2xl:w-[20%] pr-[4px] pl-[2px]">
                <div className='flex justify-center items-center mb-2'>
                    <p className='text-center font-bold text-[16px] text-gray-300 rounded-[4px] p-1 py-4 mb-0 mr-0'>
                        Villian Pos
                    </p>
                    <Tippy trigger="click" content="Define the Villian's Position">
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" className='cursor-pointer'>
                            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
                        </svg>
                    </Tippy>
                </div>
                {defaultReportSetting.VillianPosition.map((item: any, index: any) =>
                    <Tippy key={index} content={item.title + " : " + item.stringList.join(", ")}>
                        <div
                            className={
                                clsx(
                                    "mb-1 w-full rounded-[4px] py-[4px] transition-all hover:bg-gray-700",
                                    disableStatus.generalHero && valueStatus.heroPositionIndex >= index ? " cursor-pointer" : " cursor-not-allowed",
                                    item.id === valueStatus.villianPositionIndex && valueStatus.VillianPosition.length > 0 ? "bg-gray-700 text-gray-300 font-bold text-[18px]" : "bg-gray-900",
                                )
                            }
                            onClick={
                                () => bufferSetValueStatus(
                                    {
                                        ...valueStatus,
                                        VillianPosition: item.id === valueStatus.villianPositionIndex ? [] : item.stringList,
                                        villianPositionIndex: item.id === valueStatus.villianPositionIndex ? -1 : item.id
                                    },
                                    disableStatus.generalHero && valueStatus.action !== "RFI" && valueStatus.heroPositionIndex >= index,
                                    "generalVillin",
                                    disableStatus.generalHero && valueStatus.heroPositionIndex >= index ? "Please select the Hero Position !" : "Villian cann't be large than Hero !"
                                )
                            }
                        >
                            <p className='text-center'>{item.title}</p>
                        </div>
                    </Tippy>
                )}
            </div>

            <div className="w-1/3 2xl:w-[20%]">
                <div className='flex justify-center items-center mb-2'>
                    <p className='text-center font-bold text-[16px] text-gray-300 rounded-[4px] p-1 py-4 mb-0 mr-0'>
                        Stack Dep
                    </p>
                    <Tippy trigger="click" content="Define the Stack Depth">
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true" className='cursor-pointer'>
                            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
                        </svg>
                    </Tippy>
                </div>

                {defaultReportSetting.stackDepth.map((item: any, index: any) =>
                    <Tippy key={index} content={item.title + " : " + item.valueList.join(", ")}>
                        <div
                            key={index}
                            className={
                                clsx(
                                    "mb-1 w-full rounded-[4px] py-[9.5px] transition-all hover:bg-gray-700",
                                    disableStatus.generalStack ? "cursor-pointer" : "cursor-not-allowed",
                                    item.valueList.some((a: any) => valueStatus.stackDepth.includes(a)) ? "bg-gray-700 text-gray-300 font-bold text-[18px]" : "bg-gray-900"
                                )
                            }
                            onClick={
                                () => bufferSetValueStatus(
                                    {
                                        ...valueStatus,
                                        stackDepth: item.valueList.some((a: any) => valueStatus.stackDepth.includes(a)) ? [] : item.valueList
                                    },
                                    disableStatus.generalVillin || valueStatus.action === "RFI",
                                    "generalStack",
                                    "Please select the Villian Position !"
                                )
                            }
                        >
                            <p className='text-center'>{item.title}</p>
                        </div>
                    </Tippy>
                )}
            </div>
        </div>
    );
};

export default DefaultButtonGroup;
