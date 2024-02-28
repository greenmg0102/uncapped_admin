import { Dialog, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';
import MarkInfo from './MarkInfo'
import MajorOption from './MajorOption'
import SubMajorOption from './SubMajorOption'

interface BufferState {
    item: string;
    subList: any[]; // Specify the type of subList as an array of any
}

const CreatingModal = ({ CreatingModal, setIsOpen, regist }: any) => {

    const [markInfo, setMarkInfo] = useState({
        title: "",
        monthly: 9,
        yearly: 99,
        precent: 100
    })

    const [buffer, setBuffer] = useState<BufferState>({
        item: "",
        subList: []
    })
    const [majorInfo, setMajorInfo] = useState<BufferState[]>([])

    const onchange = (subTitle: any, value: any) => setMarkInfo({ ...markInfo, [subTitle]: value })

    const addMajor = (value: any) => {
        setBuffer({ ...buffer, item: value })
    }

    const addSubMajor = (value: any) => {
        let real: any[] = buffer.subList;
        real.push(value)
        setBuffer({ ...buffer, subList: real })
    }

    const itemSave = () => {
        let real: BufferState[] = [...majorInfo]; // Create a new array to avoid mutating state directly
        real.push(buffer);
        setMajorInfo(real);

        setBuffer({
            ...buffer,
            item: "",
            subList: []
        })
    }

    const premiumSave = (isSave: any) => {
        setIsOpen(false)
        if (isSave) {
            let premiumOption = { ...markInfo, majorInfo: majorInfo }
            regist(premiumOption)
        }
    }

    return (
        <Transition appear show={CreatingModal} as={Fragment}>
            <Dialog as="div" open={CreatingModal} className="relative z-50" onClose={() => setIsOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0" />
                </Transition.Child>
                <div className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel as="div" className="panel border-0 p-0 sm:max-w-[1500px] sm:h-[560px] rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark">
                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                    <h5 className="font-bold text-lg">Creat the Premium Option</h5>
                                    <button type="button" className="text-white-dark hover:text-dark" onClick={() => setIsOpen(false)}>
                                    </button>
                                </div>
                                <div className="p-5">
                                    <div className='flex justify-between items-start'>
                                        <MarkInfo
                                            markInfo={markInfo}
                                            onchange={(sub: any, value: any) => onchange(sub, value)}
                                        />
                                        <div className='w-3/4 pl-2 py-2 pt-0 flex justify-between items-start'>
                                            <MajorOption
                                                buffer={buffer}
                                                addMajor={(value: any) => addMajor(value)}
                                                addSubMajor={(value: any) => addSubMajor(value)}
                                                itemSave={itemSave}
                                            />
                                            <SubMajorOption
                                                majorInfo={majorInfo}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-end items-center mt-8">
                                        <button type="button" className="btn btn-outline-danger" onClick={() => premiumSave(false)}>
                                            Discard
                                        </button>
                                        <button type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4" onClick={() => premiumSave(true)}>
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default CreatingModal;





