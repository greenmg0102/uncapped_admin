export default function ReportingCompareItem({ handResult }: any) {

    return (

        <div className="absolute w-full bottom-[0px] left-0 p-0 hover:opacity-50">
            <div
                className="relative w-full h-[2.3em] lg:h-[36px]"
            >
                {handResult.played.map((item: any, index: any) =>
                    <div
                        key={index}
                        className='absolute h-full bg-[#7d1f1f]'
                        style={{
                            backgroundColor:
                                index === 0 ?
                                    "#3d7cb8"
                                    :
                                    index === 1 ?
                                        "#00cf00"
                                        :
                                        index === 2 ?
                                            "#ff0000"
                                            :
                                            "#7d1f1f"
                            ,
                            left: (handResult.played.slice(0, index).reduce((total: any, amount: any) => total + amount, 0)) * 100 + "%",
                            width: (item) * 100 + "%",
                        }}
                    />
                )}
            </div>
        </div>
    )
}