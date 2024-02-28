import { useState } from 'react';
import ShortCutModal from './ShortCutModal';
import AllBookMark from './AllBookMark'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { registFlag } from '../../../../../../utils/functions/user/analysis/getPreflopModel'

const StageMenu = ({ stageStatus, bettingList, setStageStatus, reset }: any) => {

    const MySwal = withReactContent(Swal);

    const [shortCutStatus, setShortCutStatus] = useState(false);
    const [isAllMark, setIsAllMark] = useState(false);

    const bufferDecision = async () => {

        if (bettingList.length === 0) noActionNodification("There is nothing to register", "danger")
        else if (bettingList.length > 0) {

            const data = {
                profilesId: "65849f7fdafd57880710c9ab",
                flags: bettingList
            }

            let result = await registFlag(data)

            if (result.isOk) noActionNodification(result.message, "primary")
            else noActionNodification(result.message, "info")
        }
    }

    const noActionNodification = (message: any, color: any) => {
        MySwal.fire({
            title: message,
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
            customClass: {
                popup: `color-${color}`
            }
        })
    }

    return (
        <div>
            {stageStatus ?
                <div className="h-[2.5em] p-1 flex flex-col items-center justify-between dark:bg-gray-900 bg-gray-700 mr-1 rounded-[4px] transition-all">
                    <div
                        className="hover:bg-gray-700 p-2 rounded-full cursor-pointer"
                        onClick={() => setStageStatus(!stageStatus)}
                    >
                        <svg focusable="false" data-icon="column-height" width="0.8em" height="0.8em" fill="white" aria-hidden="true" viewBox="64 64 896 896"><path d="M840 836H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm0-724H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM610.8 378c6 0 9.4-7 5.7-11.7L515.7 238.7a7.14 7.14 0 00-11.3 0L403.6 366.3a7.23 7.23 0 005.7 11.7H476v268h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V378h62.8z"></path></svg>
                    </div>
                </div>
                :
                <div className="h-[10em] p-1 flex flex-col items-center justify-between dark:bg-gray-900 bg-gray-700 mr-1 rounded-[4px] transition-all">
                    <div
                        className="hover:bg-gray-700 p-2 rounded-full cursor-pointer"
                    // onClick={() => setShortCutStatus(!shortCutStatus)}
                    >
                        <svg focusable="false" data-icon="book" width="0.8em" height="0.8em" fill="white" aria-hidden="true" viewBox="64 64 896 896"><path d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-260 72h96v209.9L621.5 312 572 347.4V136zm220 752H232V136h280v296.9c0 3.3 1 6.6 3 9.3a15.9 15.9 0 0022.3 3.7l83.8-59.9 81.4 59.4c2.7 2 6 3.1 9.4 3.1 8.8 0 16-7.2 16-16V136h64v752z"></path></svg>
                    </div>
                    <div
                        className="hover:bg-gray-700 p-2 rounded-full cursor-pointer"
                        onClick={reset}
                    >
                        <svg focusable="false" data-icon="reload" width="0.8em" height="0.8em" fill="white" aria-hidden="true" viewBox="64 64 896 896"><path d="M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"></path></svg>
                    </div>
                    <div
                        className="hover:bg-gray-700 p-2 rounded-full cursor-pointer"
                        onClick={() => bufferDecision()}
                    >
                        <svg focusable="false" data-icon="save" width="0.8em" height="0.8em" fill="white" aria-hidden="true" viewBox="64 64 896 896"><path d="M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"></path></svg>
                    </div>
                    <div
                        className="hover:bg-gray-700 p-2 rounded-full cursor-pointer"
                        onClick={() => setIsAllMark(!isAllMark)}
                    >
                        <svg focusable="false" data-icon="play-circle" width="0.8em" height="0.8em" fill="white" aria-hidden="true" viewBox="64 64 896 896"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M719.4 499.1l-296.1-215A15.9 15.9 0 00398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg>
                    </div>
                    <div
                        className="hover:bg-gray-700 p-2 rounded-full cursor-pointer"
                        onClick={() => setStageStatus(!stageStatus)}
                    >
                        <svg focusable="false" data-icon="column-height" width="0.8em" height="0.8em" fill="white" aria-hidden="true" viewBox="64 64 896 896"><path d="M840 836H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm0-724H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM610.8 378c6 0 9.4-7 5.7-11.7L515.7 238.7a7.14 7.14 0 00-11.3 0L403.6 366.3a7.23 7.23 0 005.7 11.7H476v268h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V378h62.8z"></path></svg>
                    </div>
                </div>
            }
            <ShortCutModal
                shortCutStatus={shortCutStatus}
                setShortCutStatus={(bool: any) => setShortCutStatus(bool)}
            />

            <AllBookMark
                isAllMark={isAllMark}
                setIsAllMark={(bool: any) => setIsAllMark(bool)}
            />
        </div>
    );
};

export default StageMenu;
