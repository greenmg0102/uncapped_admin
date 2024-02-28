import clsx from 'clsx'

export default function Payoneer({ price, way, setPayway }: any) {

    return (
        <div className="w-1/3 p-4">

            <div className="w-full h-[350px] flex justify-center items-center mx-4">
                <div
                    className={
                        clsx
                            (
                                "relative w-[320px] h-[300px] flex justify-center items-center border border-gray-600 border-dashed rounded-[8px] p-4 transition-all hover:w-[350px] hover:h-[315px] hover:border-red-500 cursor-pointer",
                                way === 'payoneer' ? "w-full h-[165px] border-red-500" : ""
                            )
                    }
                    onClick={() => setPayway("payoneer")}
                    onMouseEnter={() => setPayway("payoneer")}
                    onMouseLeave={() => setPayway("")}
                >
                    <div className="absolute left-[24px] top-[24px]">
                        <img src="/assets/images/pokerImage/payoneerMark.png" alt="img" className="w-[100px]" />
                    </div>
                    <p className={clsx(way === 'payoneer' ? "absolute bottom-[24px] right-[12px] text-[32px] font-bold" : "hidden")}>{price} $</p>
                </div>
            </div>
        </div>
    )
}