import clsx from 'clsx'

export default function MasterCard({ price, way, setPayway }: any) {

    return (
        <div className="w-[220px] h-[165px] flex justify-center items-center mx-4">
            <div
                className={
                    clsx
                        (
                            "relative w-[200px] h-[150px] border border-gray-600 border-dashed rounded-[8px] p-4 transition-all hover:w-[220px] hover:h-[165px] hover:border-red-500 cursor-pointer",
                            way === 'masterCard' ? "w-[220px] h-[165px] border-red-500" : ""
                        )
                }
                onClick={() => setPayway("masterCard")}
                onMouseEnter={() => setPayway("masterCard")}
                onMouseLeave={() => setPayway("")}
            >
                <img src="/assets/images/pokerImage/mastercardMark.png" alt="img" className="w-[100px]" />
                <p className={clsx(way === 'masterCard' ? "absolute bottom-[24px] right-[12px] text-[32px] font-bold" : "hidden")}>{price} $</p>
            </div>
        </div>
    )
}