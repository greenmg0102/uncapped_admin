
import { useState } from "react";
import clsx from 'clsx'

const MajorOption = ({ buffer, addMajor, addSubMajor, itemSave }: any) => {

    const [itemValue, setItemValue] = useState("")
    const [subItemValue, setSubItemValue] = useState("")

    const itemAdd = () => {
        addMajor(itemValue)
    }
    const subItemAdd = () => {
        addSubMajor(subItemValue)
        setSubItemValue("")
    }


    return (
        <div className='w-1/2 pr-2 py-2'>
            <p className='text-center text-[18px] mb-4'>Major Option</p>
            <div className='mb-4'>
                <p className='mb-2'>Item</p>
                <div className="flex justify-between items-center mb-4">
                    <input
                        type="text"
                        placeholder="Plz fill out the Item"
                        className="form-input w-full"
                        value={itemValue}
                        onChange={(e: any) => setItemValue(e.target.value)}
                        required
                    />
                    <button
                        type="button"
                        className={clsx("btn ltr:ml-2 rtl:mr-2", buffer.item === itemValue ? "btn-success" : "btn-primary")}
                        onClick={itemAdd}
                    >
                        Save
                    </button>
                </div>
                <p className='mb-2'>Sub-item</p>
                <div className="flex justify-between items-center">
                    <input
                        type="text"
                        placeholder="Plz fill out the Sub-item"
                        className="form-input w-full"
                        value={subItemValue}
                        onChange={(e: any) => setSubItemValue(e.target.value)}
                        required
                    />
                    <button
                        type="button"
                        className={clsx("btn ltr:ml-2 rtl:mr-2", subItemValue !== "" ? "btn-success" : "btn-primary")}
                        onClick={subItemAdd}
                    >
                        Save
                    </button>
                </div>
                {buffer.subList.map((item: any, index: any) =>
                    <p key={index}>{item}</p>
                )}

                <button
                    type="button"
                    className={clsx("btn w-full mt-2", subItemValue !== "" ? "btn-success" : "btn-primary")}
                    onClick={itemSave}
                >
                    Item Save
                </button>
            </div>
        </div>
    );
};

export default MajorOption;