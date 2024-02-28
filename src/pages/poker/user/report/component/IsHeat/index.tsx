

export default function IsHeat({ displayTabSelect, isHeat, isGrid, setIsGrid, setIsHeat }: any) {

    return (
        <div className='absolute right-0 top-[-20px] lg:bottom-0 flex justify-between items-end'>
            {
                displayTabSelect === 1 && isHeat === true ?
                    <div className="flex justify-center items-start font-semibold text-[14px] mr-4">
                        <span className={`mt-1 ${isGrid ? 'text-primary' : 'text-white-dark'}`}>Grid</span>
                        <label className="w-12 h-[24px] relative mx-2">
                            <input
                                id="custom_switch_checkbox1"
                                type="checkbox"
                                className="custom_switch absolute ltr:left-0 rtl:right-0 top-0 w-full h-full opacity-0 z-10 cursor-pointer peer"
                                onChange={() => setIsGrid(!isGrid)}
                            />
                            <span className="outline_checkbox bg-icon border-2 border-[#ebedf2] dark:border-white-dark block h-full rounded-full before:absolute ltr:before:left-1 rtl:before:right-1 before:bg-[#ebedf2] dark:before:bg-white-dark before:bottom-1 before:w-4 before:h-4 before:rounded-full before:bg-[url(/assets/images/close.svg)] before:bg-no-repeat before:bg-center ltr:peer-checked:before:left-7 rtl:peer-checked:before:right-7 peer-checked:before:bg-[url(/assets/images/checked.svg)] peer-checked:border-primary peer-checked:before:bg-primary before:transition-all before:duration-300"></span>
                        </label>
                        <span className={`mt-1 ${!isGrid ? 'text-primary' : 'text-white-dark'}`}>Hidden</span>
                    </div>
                    :
                    null
            }
            {
                displayTabSelect === 1 ?
                    <div className="flex justify-center items-start font-semibold text-[14px] mr-4">
                        <span className={`mt-1 ${isHeat ? 'text-primary' : 'text-white-dark'}`}>Heat</span>
                        <label className="w-12 h-[24px] relative mx-2">
                            <input
                                id="custom_switch_checkbox1"
                                type="checkbox"
                                className="custom_switch absolute ltr:left-0 rtl:right-0 top-0 w-full h-full opacity-0 z-10 cursor-pointer peer"
                                onChange={() => setIsHeat(!isHeat)}
                            />
                            <span className="outline_checkbox bg-icon border-2 border-[#ebedf2] dark:border-white-dark block h-full rounded-full before:absolute ltr:before:left-1 rtl:before:right-1 before:bg-[#ebedf2] dark:before:bg-white-dark before:bottom-1 before:w-4 before:h-4 before:rounded-full before:bg-[url(/assets/images/close.svg)] before:bg-no-repeat before:bg-center ltr:peer-checked:before:left-7 rtl:peer-checked:before:right-7 peer-checked:before:bg-[url(/assets/images/checked.svg)] peer-checked:border-primary peer-checked:before:bg-primary before:transition-all before:duration-300"></span>
                        </label>
                        <span className={`mt-1 ${!isHeat ? 'text-primary' : 'text-white-dark'}`}>Detail</span>
                    </div>
                    :
                    null
            }
        </div>
    )
}