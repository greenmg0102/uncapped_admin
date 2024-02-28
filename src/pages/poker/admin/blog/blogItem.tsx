

export default function BlogItem({ item }: any) {

    return (
        <div className="mb-4 border border-gray-800 rounded-[8px] p-2 flex justify-between items-start hover:border-gray-500 transition-all cursor-pointer">
            <div className="w-[300px] h-[200px] rounded-[8px] border border-gray-900">
                <img src={item.image} className="w-full h-full object-cover rounded-[8px]" alt={item.image} />
            </div>
            <div
                className="relative px-2 h-[190px] overflow-y-auto"
                style={{
                    width: "calc(100% - 300px)"
                }}
            >
                <p className="text-gray-[100] mb-2 text-[18px] text-gray-300">
                    {item.title}
                </p>
                <p className="text-gray-[100] text-[16px] mb-2">
                    {item.content}
                </p>
                <div className="absolute top-[0px] right-[5px] border py-1 px-2 border-gray-800 rounded-[4px]">
                    {item.type === 1 ? "News" : "Blog"}
                </div>
            </div>
        </div>
    )
}