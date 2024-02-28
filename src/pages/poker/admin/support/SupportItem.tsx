import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import clsx from 'clsx'

export default function SupportItem({ togglePara, active, updateQuestion, item, order, alert }: any) {

    const [answer, setAnswer] = useState("")

    const sendBuffer = () => {
        if (answer.length > 10) {
            updateQuestion(item._id, answer)
            setAnswer("")
        } else alert("Fill the answer!", "danger")
    }

    return (
        <div className="border border-[#d3d3d3] dark:border-[#1b2e4b] rounded">
            <button
                type="button"
                className={`p-4 w-full flex justify-between items-center text-white-dark dark:bg-[#1b2e4b] !text-primary`}
                onClick={() => togglePara(order)}
            >
                <p className='mb-0 text-[16px]'>
                    {item.subject}
                </p>
                <div className='flex justify-start items-center'>
                    {item.type}
                    <div className={clsx("w-[18px] h-[18px] rounded-full ml-4", item.checked ? "bg-green-500" : "bg-red-500")} />
                </div>

            </button>
            <div>
                <AnimateHeight duration={300} height={active === order ? 'auto' : 0}>
                    <div className="p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]">
                        <div className='flex justify-between items-center w-full pb-4'>
                            <p>FullName: <span className='!text-gray-200'>{item.fullName}</span></p>
                            <p>Email: <span className='!text-gray-200'>{item.mail}</span></p>
                            <p>Phone Number: <span className='!text-gray-200'>{item.phone}</span></p>
                            <p>createdAt: <span className='!text-gray-200'>{item.createdAt.slice(0, 10)}</span></p>
                            <p>updatedAt: <span className='!text-gray-200'>{item.updatedAt.slice(0, 10)}</span></p>
                        </div>
                        <div className='p-2 bg-gray-900'>
                            <p className='text-center text-[16px]'>{item.subject}</p>
                            {item.question.map((element: any, one: any) =>
                                <div key={one} className='p-2 bg-gray-800 rounded-[4px] my-2'>
                                    <div className='flex justify-between items-center mb-1'>
                                        <div className='inline border border-dashed rounded-[4px] p-[2px]'>
                                            {element.who === false ? "User" : "Manager"}
                                        </div>
                                        <p>{element.supportedDate}</p>
                                    </div>
                                    <p className='p-2 bg-gray-900'>{element.query}</p>
                                </div>
                            )}

                            <textarea id="Textarea" rows={4} value={answer} className="form-textarea resize-none ps-4 placeholder:text-white-dark" onChange={(e: any) => setAnswer(e.target.value)} placeholder="Message"></textarea>

                            <div className='flex justify-between items-center'>
                                <button type="button" className="btn btn-primary mt-4" onClick={sendBuffer}>
                                    <p>send</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </AnimateHeight>
            </div>
        </div>
    )
}