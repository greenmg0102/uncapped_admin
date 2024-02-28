export default function FoldItem({ data, handResult }: any) {

    return (
        <div className="flex justify-center items-center rounded-[4px] bg-gray-900 dark:hover:bg-gray-800 hover:bg-gray-900 cursor-pointer transition-all">
            <p className="absolute text-[1.3em] p-1 text-white z-[1]">
                {data}
            </p>
            <div className="relative w-full h-[2.75em] ">
                <div
                    className="absolute w-full h-[2.75em] bg-[#3d7cb8]"
                    style={{
                        opacity: handResult.played[0]
                    }}
                />
            </div>
        </div>
    )
}