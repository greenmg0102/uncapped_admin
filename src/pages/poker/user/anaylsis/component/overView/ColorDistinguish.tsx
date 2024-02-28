import clsx from 'clsx'

export default function ColorDistinguish({ handResult, once, rangeOption, hight }: any) {

    return (
        <div className={clsx(once || rangeOption ? "absolute w-full bottom-[0px] left-0 p-0" : "hidden")}>
            <div
                className="relative w-full"
                style={{
                    height: `calc(${hight}em)`
                }}
            >

                {handResult.played.map((item: any, index: any) =>
                    <div
                        key={index}
                        className='absolute h-full'
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