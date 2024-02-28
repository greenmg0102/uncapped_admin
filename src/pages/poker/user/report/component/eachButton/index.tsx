import clsx from 'clsx'

export default function EachButton({ item, type, standard, interruptValueStatus }: any) {

    return (
        <span
            className={
                clsx(
                    "mr-[2px] rounded-[4px] px-1 font-bold cursor-pointer hover:bg-gray-600 transition-all",
                    standard.includes(item) ? "bg-gray-800" : ""
                )
            }
            onClick={() => interruptValueStatus(type, item)}
        >
            {item}
        </span>
    )
}