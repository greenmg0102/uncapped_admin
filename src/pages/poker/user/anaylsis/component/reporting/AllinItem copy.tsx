export default function AllinItem({ data, handResult }: any) {

    return (
        <div className="flex justify-center items-center rounded-[4px] bg-gray-900 dark:hover:bg-gray-800 hover:bg-gray-900 cursor-pointer transition-all">
            <p className="absolute text-[1.3em] p-1 text-white z-[1]">
                {data}
            </p>
            <div className="relative w-full h-[2.75em] ">
                <div className="absolute w-full h-[2.75em] bg-[#7d1f1f]" style={{ opacity: handResult.played[1] === undefined ? 0 : handResult.played[2] }} />
            </div>

            {/* {handResult.played.length === 4 || handResult.played.length === 2 ?
                <div className="relative w-full h-[2.75em]">
                    <div className="absolute w-full h-[2.75em] bg-[#7d1f1f]" style={{ opacity: handResult.played[3] === undefined ? 0 : handResult.played[3] }} />
                </div>
                :
                <div>
                    <div className="relative w-full h-[2.75em]">
                        <div className="absolute w-full h-[2.75em] bg-[#7d1f1f]" style={{ opacity: handResult.played[2] === undefined ? 0 : handResult.played[2] }} />
                    </div>
                </div>
            } */}
        </div>
    )
}