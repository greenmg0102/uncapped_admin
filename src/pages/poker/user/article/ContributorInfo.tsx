
export default function ContributorInfo() {



    return (
        <div className="mb-2">
            <div className="flex justify-center">
                <div className="w-[200px] h-[200px] rounded-full border border-gray-900" />
            </div>

            <div className="flex justify-between flex-wrap sm:justify-center items-center my-4">
                <p className="w-1/2 sm:w-1/4 text-center">Name: 14</p>
                <p className="w-1/2 sm:w-1/4 text-center">Sub Tre: 14</p>
                <p className="w-1/2 sm:w-1/4 text-center">Signed Date: 14</p>
                <p className="w-1/2 sm:w-1/4 text-center">Posted Count: 14</p>
            </div>
            <div
                className="relative px-2 py-2 overflow-hidden"
                style={{
                    width: "calc(100% - 300px)"
                }}
            >
            </div>
        </div>
    )
}